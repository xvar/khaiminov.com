---
title: "kts-compiler: comprobar un .main.kts sin ejecutarlo"
date: 2026-09-17
description: Una utilidad que comprueba si un archivo de Kotlin Script compila,
  sin ejecutarlo realmente. Útil en CI/CD, donde los pipelines se escriben en Kotlin.
section: pro
---
Si los pipelines de CI/CD se escriben en Kotlin Script (`.main.kts`), surge una pregunta: ¿cómo comprobar que el script siquiera compila sin ejecutarlo entero?

Justo ese problema resuelve **kts-compiler**, una utilidad que comprueba si un archivo `.main.kts` compila sin ejecutarlo realmente. Nació como una herramienta interna en el banco Plata. Ahora pienso seguir desarrollándola en mi repositorio personal: [github.com/xvar/kts-compiler](https://github.com/xvar/kts-compiler).

## Cómo funciona por dentro

```
archivo .main.kts
      │
      ▼
[1] Análisis de la cabecera
    buscamos @file:DependsOn(...) y @file:Repository(...)
    (simple análisis de texto, el compilador aún no arranca)
      │
      ▼
[2] Resolución de dependencias → classpath
      │
      ├── acierto de caché (por el hash de las coordenadas) ──▶ tomar el classpath de la caché
      │
      └── fallo de caché ──▶ descargar con el resolvedor de Maven, guardar en la caché
      │
      ▼
[3] Kotlin embeddable compiler, compile-only
    (generamos los .class, pero NO llamamos a main():
     eso es lo que distingue una comprobación de una ejecución)
      │
      ▼
[4] Diagnósticos del compilador → exit code
    0 — compila, el resto del CI puede seguir adelante
    1 — imprimimos los errores línea a línea, el CI falla en este paso
```

**Análisis de la cabecera.** En esta etapa el script no se ejecuta y ni siquiera se compila entero: solo se leen las primeras líneas del archivo en busca de las anotaciones `@file:DependsOn(...)` y `@file:Repository(...)`. Es más rápido que pasarle el archivo directamente al compilador y permite saber primero qué classpath hace falta.

**Resolución de dependencias.** Con las coordenadas encontradas se construye el classpath. El resultado de la resolución se guarda en caché por el hash del conjunto de coordenadas: si las dependencias no han cambiado entre ejecuciones (lo habitual en CI, donde se edita el script pero no los imports), el classpath se toma de la caché y no se toca la red en absoluto.

**Compilación sin ejecución.** Este es el truco principal. La Kotlin Scripting API permite obtener las clases compiladas por separado de su ejecución: `compiler.compile(...)` devuelve un `ResultWithDiagnostics` sin llamar a `evaluator.eval(...)`. El `kotlinc` habitual en modo script compila y ejecuta `main()` acto seguido; kts-compiler se detiene en el paso de compilación y sencillamente no da el siguiente.

**Diagnósticos.** Si la compilación ha ido bien, exit code 0 y el CI sigue adelante. Si no, los diagnósticos del compilador (archivo, línea, columna, mensaje) se imprimen en stdout línea a línea y el exit code es 1: un punto de fallo claro en los logs del pipeline, sin efectos secundarios por ejecutar de verdad un script sin verificar.
