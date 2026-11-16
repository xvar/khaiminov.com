---
title: "kts-compiler: checking .main.kts without running it"
date: 2026-09-17
description: A utility that checks whether a Kotlin Script file compiles —
  without actually running it. Handy in CI/CD where pipelines are written in Kotlin.
section: pro
---
If your CI/CD pipelines are written in Kotlin Script (`.main.kts`), a question comes up: how do you check that a script compiles at all without running the whole thing?

That is exactly the problem **kts-compiler** solves — a utility that checks whether a `.main.kts` file compiles without actually running it. It started out as an internal tool at Plata bank. Now I plan to develop it further in my personal repository: [github.com/xvar/kts-compiler](https://github.com/xvar/kts-compiler).

## How it works under the hood

```
.main.kts file
      │
      ▼
[1] Header parsing
    look for @file:DependsOn(...) and @file:Repository(...)
    (plain text parsing, the compiler hasn't started yet)
      │
      ▼
[2] Dependency resolution → classpath
      │
      ├── cache hit (by hash of the coordinates) ──▶ take the classpath from the cache
      │
      └── cache miss ──▶ download via the Maven resolver, put it in the cache
      │
      ▼
[3] Kotlin embeddable compiler, compile-only
    (we build the .class files but do NOT call main() —
     that is what separates a check from a run)
      │
      ▼
[4] Compiler diagnostics → exit code
    0 — it compiles, the rest of the CI can carry on
    1 — print the errors line by line, CI fails at this step
```

**Header parsing.** At this stage the script is not run and is not even compiled as a whole — only the top lines of the file are read, looking for the `@file:DependsOn(...)` and `@file:Repository(...)` annotations. This is faster than handing the file straight to the compiler, and it lets us first work out which classpath is needed at all.

**Dependency resolution.** The classpath is assembled from the coordinates that were found. The resolution result is cached by the hash of the set of coordinates — if the dependencies haven't changed between runs (the typical situation in CI, where the script gets edited but the imports don't), the classpath is taken from the cache and the network isn't touched at all.

**Compiling without running.** This is the main trick. The Kotlin Scripting API lets you get the compiled classes separately from executing them — `compiler.compile(...)` returns a `ResultWithDiagnostics` without calling `evaluator.eval(...)`. Plain `kotlinc` in script mode compiles and immediately executes `main()`; kts-compiler stops at the compilation step and simply doesn't take the next one.

**Diagnostics.** If compilation succeeded — exit code 0, and CI carries on. If not — the compiler diagnostics (file, line, column, message) are printed to stdout line by line, exit code 1 — a clear point of failure in the pipeline logs, with no side effects from actually running an unverified script.
