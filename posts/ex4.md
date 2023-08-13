---
title: Elixir 4. Type System, Numbers, Atoms, Boolean, Nil, Tuples, List, Immutability
description: My Elixir language notes, written on internet rather on note book
published: "2023-08-13"
---

## Elixir Type System

Elixir uses Erlang Type System, so integration with Erlang libraries is super simple.

### Numbers

Number can be `Integer` or `Float`, there is no size limit for `Integer` they can be arbitrary larger, but `Float` can only be `32` or `64` bit depending on the arch of system.

- We use `10_000_000` (underscore) to separate numbers.
- `/` division operator will always give `float` value

```bash
iex(2)> 5 / 5
1.0
iex(3)> 10 / 3
3.3333333333333335
iex(4)> 24 / 2
12.0
iex(5)>
```

- `Kernel.div(a, b)` (or just `div(a, b)`) is for normal division
- `Kernel.rem(a, b)` (or just `rem(a, b)`) is or remainder , `%` operator

### Atoms

An `Atoms` is a **`symbol`** or **`enum`** which has a value of its name

```bash
iex(6)> :kunalsin9h
:kunalsin9h
iex(7)>
```

Here `:kunalsin9h` is a Symbol or an enum, (means now it have become a type)

- An `atom` can have spaces

```bash
iex(1)> :"i am an atom"
:"i am an atom"
iex(2)>
```

## Boolean

There is not `boolean` type in the Elixir, we use `:true` and `:false` atoms, so this is such a common pattern, we can omit the colon and just use `true` and `false`, but remember they are atoms.

```bash
iex(2)> true
true
iex(3)> :true
true
iex(4)> false
false
iex(5)> :false
false
iex(6)> :true == true
true
iex(7)> :false == false
true
iex(8)> :true and false
false
iex(9)> :false and true
false
iex(10)> true and true
true
iex(11)> true or false
true
iex(12)> false or true
true
iex(13)>
```

## Nil

`nil` is similar to `null` in other languages, it is also an atom, `:nil`

```bash
iex(16)> :nil == nil
true
iex(17)> nil
nil
iex(18)> :nil
nil
iex(19)>
```

> The **atom** `nil` and `false` is considered as **`falsy`** values , expect these everything is **`truthy`** value.

We can also use short circuiting using

`and` `&&`
`or` `||`
`not` `!`

## Tuples

Tuples are group of fixed number of elements. we user `{}` this to make a tuple

```bash
iex(25)> user = {"KunalSin9h", 21}
{"KunalSin9h", 21}
iex(26)> user
{"KunalSin9h", 21}
iex(27)>
```

1. Get the element of the tuple, zero based indexing

```bash
iex(26)> user
{"KunalSin9h", 21}
iex(27)> elem(user, 1)
21
iex(28)> elem(user, 0)
"KunalSin9h"
iex(29)>
```

`elem` is function inside the `Kernel` module.

2. Replace the tuple element, `put_elem` is also a function in `Kernel` module, it takes (`tuple`, `index`, `element_to_put`)

```bash
iex(29)> put_elem(user, 1, 1000)
{"KunalSin9h", 1000}
iex(30)>
```

But the `user` tuple is still

```bash
iex(29)> put_elem(user, 1, 1000)
{"KunalSin9h", 1000}
iex(30)> user
{"KunalSin9h", 21}
iex(31)>
```

This is because, in Elixir every data is `immutable`, we can't update / change a variable, so we need to store it in new variable, or `rebound` (`reassign`) to the same variable.

Tuples are most appropriate for grouping a small, fixed
number of elements together. When you need a dynamically
sized collection, you can use lists.

## List

List is **dynamic**, **variable_size**, we create list by `[]`
List operation: [List @ Hex Doc]((https://hexdocs.pm/elixir/List.html)

```bash
iex(38)> prime_number = [2, 3, 6, 7, 11]
[2, 3, 6, 7, 11]
iex(39)> prime_number
[2, 3, 6, 7, 11]
iex(40)> length(prime_number)
5
iex(41)>
```

List is implemented using `Linked List` so every operation is **`O(n)`**.

1. length(list)
2. Enum.at(list, index)
3. List.replace_at(list, idx, val)
4. List.insert_at(list, idx, val)
5. List.insert_at(list, -1, val) `Append`

```elixir
iex(42)> Enum.at(prime_number, 3)
7
iex(43)> 11 in prime_number
true
iex(44)> new_prime_number = List.replace_at(prime_number, 0, 13)
[13, 3, 6, 7, 11]
iex(45)> new_prime_number = List.insert_at(prime_number, 2, 17)
[2, 3, 17, 6, 7, 11]
iex(46)> new_prime_number = List.insert_at(prime_number, -1, 111)
[2, 3, 6, 7, 11, 111]
```

6. List Concatenation, the `++` op

```bash
iex(1)> [1, 2, 3, 4] ++ [6, 7, 8, 9]
[1, 2, 3, 4, 6, 7, 8, 9]
iex(2)>
```

7. Recursive List
   ![Example image](https://tiddi.kunalsin9h.com/rcB72tB)

List is essentially a (`head`, `tail` ) pair, where head is the first element of the list and tail “points”to the (head, tail) pair of the remaining elements. `[]` indicate that `tail` is pointing to nowhere.

```bash
iex(3)> [1 | [2 | [ 3 | [4 | [5 | [] ] ]]]]
[1, 2, 3, 4, 5]
iex(4)>
```

Internally `list` are recursive structure of (`head`, `tail` ) pair.
So, we can get `head` and `tail` from the list, using `hd` and `tl`.

```bash
iex(4)> l = [1 | [2 | [ 3 | [4 | [5 | [] ] ]]]]
[1, 2, 3, 4, 5]
iex(5)> hd l
1
iex(6)> tl l
[2, 3, 4, 5]
iex(7)> hd(l)
1
iex(8)> tl(l)
[2, 3, 4, 5]
iex(9)>
```

These op are just **`O(1)`** because they amount to reading one
or the other value from the (head, tail) pair.

Now, it is simple and efficient to push element on top of list (`push- front`)

```bash
iex(9)> a = [1, 2, 3]
[1, 2, 3]
iex(10)> hd(a)
1
iex(11)> tl(a)
[2, 3]
iex(12)> a = [4 | a]
[4, 1, 2, 3]
iex(13)>
```

## Immutability

**Elixir Data Can't Be Mutated**

Because variables reference the data, i can case that many other variables are referencing the same variable, and if we update one of the variable, which in turn update the memory location, this leads to data corruption for other variables.

So what Elixir does is, it makes a new memory block, put the data and reference the variable.

![data referencing model image](https://tiddi.kunalsin9h.com/5IwiFRL)

An data which are stale in the process will be garbage collected.

## Map
