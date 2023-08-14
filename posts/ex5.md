---
title: Elixir 5. Maps, Objects, Strings, Lambdas, Closures
description: My Elixir language notes, written on internet rather on note book
published: "2023-08-14"
---

## Maps

A map is a key / value store. A map in elixir can be created using a `%{}`
symbol.

Maps can be used as 1. `Dynamic Sized key / value store` and 2. `Objects (like JS)`.

1. **Dynamic Sized Key / Value Store**

```elixir showLineNumber title="map.ex"
defmodule Main do
  def main do
    empty_map = %{}
    squares = %{1 => 1, 2 => 4, 3 => 9, 4 => 16}
    cubes = Map.new([{1, 1}, {2, 8}, {3, 27}])

    squares[2] + cubes[3]
  end
end

IO.puts(Main.main())
```

output will be

```bash
warning: variable "empty_map" is unused (if the variable is not meant to be used, prefix it with an underscore)
  map.ex:3: Main.main/0

31
```

Above i have used `map[key]` expression, we can also get value using
a. **Map.get(map, key, default_val)**

```elixir showLineNumbers title="map.ex" {8}
defmodule Main do
  def main do
    # empty_map = %{2 => 4}
    squares = %{1 => 1, 2 => 4, 3 => 9, 4 => 16}
    cubes = Map.new([{1, 1}, {2, 8}, {3, 27}])

    # squares[4] + cubes[3]
    Map.get(squares, 4) + Map.get(cubes, 3)
  end
end

IO.puts(Main.main())
```

b. **Map.fetch(map, key)**
This will give tuple `{:ok, val}` if item with key is present, and will give `:error` is it is absent.

```bash {4,6}
iex(1)> m = %{1 => 1, 2 => 2, 3 => 3}
%{1 => 1, 2 => 2, 3 => 3}
iex(2)> Map.fetch(m, 1)
{:ok, 1}
iex(3)> Map.fetch(m, 19)
:error
iex(4)>
```

b 2. **Map.fetch!(map, key)**
This will `raise` and `Excecption` (the ! is only for convention, indicating this)

```bash {5}
iex(4)> m = %{1 => 1, 2 => 2, 3 => 3}
%{1 => 1, 2 => 2, 3 => 3}
iex(5)> Map.fetch(m, 10)
:error
iex(6)> Map.fetch!(m, 10)
** (KeyError) key 10 not found in: %{1 => 1, 2 => 2, 3 => 3}
    (stdlib 5.0.1) :maps.get(10, %{1 => 1, 2 => 2, 3 => 3})
    iex:6: (file)
iex(6)>
```

2. **Structures Object**
   we can also use maps like **JavaScript** Objects.

```elixir showLineNumbers title="objects.ex"
defmodule Main do
  def main do
    user = %{
      :name => "Kunal Singh",
      :username => "KunalSin9h",
      :age => 21
    }

    user[:name]
  end
end

IO.puts(Main.main())
```

Since, this pattern is so frequent, user can do something like this.

```elixir showLineNumbers title="objects.ex" {4-6,9}
defmodule Main do
  def main do
    user = %{
      name: "Kunal Singh",
      username: "KunalSin9h",
      age: 21
    }

    user.name
  end
end

IO.puts(Main.main())
```

See, instead of `=>` we user `:`

Of course, such data is still a map, so you can also use the
functions from the Map module, such as `Map.put/3`, or
`Map.fetch/2`. But these functions are usually suitable for the
cases where maps are used to manage a **dynamically sized**
key/value structure.

## Binary & Bitstrings

Frankly, this is too confusing, i am moving forward, i will update this once i figured out what is going here...

## String

Strings in elixir are represented as either binary (the "") or list of characters. (the '')
we can user `#{}` in between strings as a placeholder for expression
and we can also do multiline strings.

```elixir showLineNumbers title="strings.ex"
defmodule Main do
  @pi 3.14159

  def main do
    "
    In Mathematics,
    The value of PI is #{@pi}
    The double of PI is #{2 * @pi}
    "
  end
end

IO.puts(Main.main())
```

This program will output

```bash
[kunal@kunalsin9h /tmp/elixir]
$ elixir strings.ex

    In Mathematics,
    The value of PI is 3.14159
    The double of PI is 6.28318

```

They contain tabs, that why using single double quote is not recommended for multiline strings

using `"""` for multiline comments

```elixir showLineNumbers title="strings.ex"
defmodule Main do
  @pi 3.14159

  def main do
    """
    In Mathematics,
    The value of PI is #{@pi}
    The double of PI is #{2 * @pi}
    """
  end
end

IO.puts(Main.main())
```

The output is perfect

```bash
[kunal@kunalsin9h /tmp/elixir]
$ elixir strings.ex
In Mathematics,
The value of PI is 3.14159
The double of PI is 6.28318
```

This is called `herodoc`.

Every syntax which is for the "String" will work for 'String' also, it is preferred to use only Binary string, and to convert binary string to list string we use `String.to_charlist(s)`

```bash
iex(1)> String.to_charlist("ABCD")
~c"ABCD"
iex(2)> 'ABCD'
~c"ABCD"
iex(3)>
```

And to convert List string to Binary string we use

```elixir showLineNumbers {4}
defmodule Main do
  def main do
    l = [65, 66, 67, 68, 69]
    List.to_string(l)
  end
end

IO.puts(Main.main())
```

## First Class Functions

They are different from our module function (`def`), they are also called `Lambda` or `anonymous function`.

```elixir showLineNumbers title="lambda.ex" {7}
defmodule Main do
  def main do
    square = fn x ->
      x * x
    end

    square.(10)
  end
end

IO.puts(Main.main())
```

See highlighted line (7), we have used `square.(10)` the `.` to call the function, this a required to distinguish between `module function` and `lambda` function.

They are proper function, they can also be passed to another function.
This allow clients to parameterize generic logic. And we can pass any number of arguments

```elixir showLineNumbers title="lambda.ex"
defmodule Main do
  def main do
    func = fn x, y, z -> x + y - z end

    func.(1, 1, 3)
  end
end

IO.puts(Main.main())
```

For example `Enum.each/2` will take a list and a lambda / anonymous function.

```elixir showLineNUmbes title="fruits.ex"
defmodule Main do
  def main do
    l = ["Apple", "Banana", "Orange", "Papaya"]

    Enum.each(l, fn v ->
      IO.puts("#{v} is a good fruit")
    end)
  end
end

IO.puts(Main.main())
```

Sometime we use lambda to just pass the flow to some other function, lets say, `MODULE.function_name/4`, in that case use can use `Caputure Operator` (the `&`) to just pass flow.

```elixir showLineNumbers title="capture_operator.ex" {5}
defmodule Main do
  def main do
    l = ["Apple", "Banana", "Orange", "Papaya"]

    Enum.each(l, &IO.puts/1)
  end
end

IO.puts(Main.main())
```

This magic is done my the **Capture Operator** (`&`), this operator will takes the full function qualifier — a module name, a function name, and an arity — and turns that function into a lambda that can be
assigned to a variable.

## Closures

An `lambda` function can access any variable outside the scope, this is called `Closures`.

```elixir showLineNumbers title="closures.ex" {4,7,10}
defmodule Main do
  def main do
    l = ["Apple", "Banana", "Orange", "Papaya"]
    n = "Kunal"

    fun = fn lst ->
      IO.puts(n)

      Enum.each(lst, fn lst_item ->
        new_lst_item = lst_item <> " " <> n
        IO.puts(new_lst_item)
      end)
    end

    fun.(l)
  end
end

IO.puts(Main.main())
```

Closures always capture the memory location. Means you can change the variable, but lambda will not change the reference value.

See you soon ;)
