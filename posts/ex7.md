---
title: Elixir 7. Operators, Macros & Miscellaneous
description: My Elixir language notes, written on internet rather on note book
published: "2023-08-16"
---

## Operator

Most of the operators are defined in the `Kernel` module.

Arithmetic Operator: `+`, `-` , `*` and `/`.

Comparison Operator:
`===`, `!==`    strict equality/inequality
`==`, `!=`        weak equality/inequality
`<`, `>`, `<=`, `>=` ...

Strict equality / inequality operator is just like JavaScript's strict equality / inequality operator.

```bash
iex(2)> 1 == 1.0
true
iex(3)> 1 === 1.0
false
iex(4)>
```


Boolean Operator: `or`, `and` and `not`

These operators are actually functions in the `Kernel` module, so we can call `Kernel.+(a, b)`, one use case will to use then with _Capture Operator `&`_, like

```elixir showLineNumbers 
defmodule Main do

  def main do

    add = &Kernel.+/2

    mul = &*/2 

    add.(3, 3) + mul(3, 3)
  end

end

IO.puts(Main.main)
```

# Macros

Macros are arguably one of the most important features Elixir
brings to the table, compared to plain Erlang. They make it
possible to perform powerful code transformations in compile
time, thus reducing boilerplate and providing elegant, mini-
DSL constructs.

> They are similar idea to `Rust` macros

- They are code generator, they take code as input and produce code as output
- They do this at compile time.

I will place the macro related code in sometime...

# Misc

1. `--no-halt` for allowing `BEAM` to not terminate after finishing the code.
	This is most often useful if your main code (outside a module)
starts concurrent tasks that perform all the work. In this
situation, your main call finishes as soon as the concurrent
tasks are started, and BEAM is immediately terminated (and
no work is done). Providing the `--no-halt` option keeps the
entire system alive and running.

2. `mix` **Elixir Build Tool**
`mix` is used to manage project, formatter, manage dependencies, it is build tool.

To create a new project.
```bash 
mix new project_name
```


To compile the project.
```bash
mix compile 
```

To format the code 
```bash
mix format
```

There are more commands, just do `mix help`

```bash
$ mix help
mix                   # Runs the default task (current: "mix run")
mix app.config        # Configures all registered apps
mix app.start         # Starts all registered apps
mix app.tree          # Prints the application tree
mix archive           # Lists installed archives
mix archive.build     # Archives this project into a .ez file
mix archive.install   # Installs an archive locally
mix archive.uninstall # Uninstalls archives
mix clean             # Deletes generated application files
mix cmd               # Executes the given command
mix compile           # Compiles source files
mix deps              # Lists dependencies and their status
mix deps.clean        # Deletes the given dependencies' files
mix deps.compile      # Compiles dependencies
mix deps.get          # Gets all out of date dependencies
mix deps.tree         # Prints the dependency tree
mix deps.unlock       # Unlocks the given dependencies
mix deps.update       # Updates the given dependencies
mix do                # Executes the tasks separated by plus
mix escript           # Lists installed escripts
mix escript.build     # Builds an escript for the project
mix escript.install   # Installs an escript locally
mix escript.uninstall # Uninstalls escripts
mix eval              # Evaluates the given code
mix format            # Formats the given files/patterns
mix help              # Prints help information for tasks
mix hex               # Prints Hex help information
mix hex.audit         # Shows retired Hex deps for the current project
mix hex.build         # Builds a new package version locally
mix hex.config        # Reads, updates or deletes local Hex config
mix hex.docs          # Fetches or opens documentation of a package
mix hex.info          # Prints Hex information
mix hex.organization  # Manages Hex.pm organizations
mix hex.outdated      # Shows outdated Hex deps for the current project
mix hex.owner         # Manages Hex package ownership
mix hex.package       # Fetches or diffs packages
mix hex.publish       # Publishes a new package version
mix hex.registry      # Manages local Hex registries
mix hex.repo          # Manages Hex repositories
mix hex.retire        # Retires a package version
mix hex.search        # Searches for package names
mix hex.sponsor       # Show Hex packages accepting sponsorships
mix hex.user          # Manages your Hex user account
mix loadconfig        # Loads and persists the given configuration
mix local             # Lists tasks installed locally via archives
mix local.hex         # Installs Hex locally
mix local.public_keys # Manages public keys
mix local.rebar       # Installs Rebar locally
mix new               # Creates a new Elixir project
mix profile.cprof     # Profiles the given file or expression with cprof
mix profile.eprof     # Profiles the given file or expression with eprof
mix profile.fprof     # Profiles the given file or expression with fprof
mix release           # Assembles a self-contained release
mix release.init      # Generates sample files for releases
mix run               # Runs the current application
mix test              # Runs a project's tests
mix test.coverage     # Build report from exported test coverage
mix xref              # Prints cross reference information
iex -S mix            # Starts IEx and runs the default task

```