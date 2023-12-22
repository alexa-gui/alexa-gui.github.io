---
title: Numeric Type
date: 2023-12-18 13:40:10
author: Alexa
isOriginal: true
category: 
    - Python
tag:
    - web
    - typora
icon: coding
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
---

## 1. Characteristics of Numeric Types

![image-20231222232833034](./03-numeric-type.assets/image-20231222232833034.png)

```python
In [2]: 1+1
Out[2]: 2

In [3]: 1+1.0
Out[3]: 2.0

In [4]: 9-1
Out[4]: 8

In [5]: 9-1.0
Out[5]: 8.0

In [6]: 2*2
Out[6]: 4

In [7]: 2*2.0
Out[7]: 4.0

In [8]: 9/3
Out[8]: 3.0

In [9]: # If one of the numbers is float, the result will be float (highest priority)

In [10]: # Division involves precision issues, so the result is a float
```

::: tip Patterns

- If one of the numbers is a float, the result will be a float (highest priority).

- Division involves precision issues, so the result type is a float.

:::

## 2. Arithmetic Operators

**Arithmetic Operators:** Used for arithmetic calculations.

| Operator | Description                                                  | Example       |
| -------- | ------------------------------------------------------------ | ------------- |
| `+`      | Addition operator                                            | `1 + 1 = 2`   |
| `-`      | Subtraction operator                                         | `2 - 1 = 1`   |
| `*`      | Multiplication operator                                      | `2 * 3 = 6`   |
| `/`      | Division operator                                            | `9 / 3 = 3.0` |
| `**`     | Exponentiation operator                                      | `2 ** 3 = 8`  |
| `%`      | Modulus operator, calculates remainder                       | `9 % 2 = 1`   |
| `//`     | Floor division operator, calculates quotient and removes decimal part | `9 // 2 = 4`  |

> Note: 9 / 2 = 4......1

## 3. A Little Practice: Numeric Transformation

Suppose you have a two-digit integer, and you need to generate two new numbers based on the following rules:

- The first new number is the sum of the individual digits of the original number.
- The second new number is the reversal of the original number (e.g., if the original number is 21, the reversed number is 12).

Write Python code to implement the above requirements.

```python
a = 12
a0 = a // 10
a1 = a % 10
b = a0 + a1
c = 10 * a1 + a0
print(b, c)

# output
3 21
```

**Input:**

An integer `num` (10 ≤ num ≤ 99)

**Output:**

Two integers or an error message string.

**Example:**

Suppose the input number `num` is 91, then your code should output two numbers: 10 (sum of 9 and 1) and 19 (reversed form of 91).

Suppose the input number `num` is 26, then your code should output two numbers: 8 (sum of 2 and 6) and 62 (reversed form of 26).

Suppose the input number `num` is 18, then your code should output two numbers: 9 (sum of 1 and 8) and 81 (reversed form of 18).

## 4. Comparison Operators: Comparing the Values

| Operator | Description                                                  | Example         |
| -------- | ------------------------------------------------------------ | --------------- |
| `>`      | Checks if the first operand is greater than the second       | `print(1 > 2)`  |
| `<`      | Checks if the first operand is less than the second          | `print(1 < 2)`  |
| `>=`     | Checks if the first operand is greater than or equal to the second | `print(3 >= 3)` |
| `<=`     | Checks if the first operand is less than or equal to the second | `print(3 <= 4)` |
| `==`     | Checks if the two operands are equal                         | `print(2 == 2)` |
| `!=`     | Checks if the two operands are not equal                     | `print(2 != 1)` |

> Try the examples above and see the results?

```python
print(1 > 2)
print(1 < 2)
print(3 >= 3)
print(3 <= 4)
print(2 == 2)
print(2 != 1)

# output
False
True
True
True
True
True
```

## 5. Assignment Operators

| Operator | Description                                                | Example   |
| -------- | ---------------------------------------------------------- | --------- |
| `=`      | Assigns the value on the right to the variable on the left | `a = 1`   |
| `+=`     | `a += b` is equivalent to `a = a + b`                      | `a += 10` |
| `-=`     | `a -= b` is equivalent to `a                               |           |

 = a - b`          | `a -= 10`       |
| `*=`     | `a *= b` is equivalent to `a = a * b`          | `a *= 10`       |
| `/=`     | `a /= b` is equivalent to `a = a / b`          | `a /= 10`       |
| `**=`    | `a **= b` is equivalent to `a = a ** b`        | `a **= 10`      |
| `//=`    | `a //= b` is equivalent to `a = a // b`        | `a //= 10`      |

```python
a = 1
a += 10
a -= 10
a *= 10
a /= 10
a **= 10
a //= 10
print(a)

# output 
0.0 # Division results in a float
```

::: code-tabs

@tab Code Example

```python
# Assignment operator form
a = 1
a += 10
print(a) # Outputs 11

# Regular form
a = 1
a = a + 10
print(a) # Outputs 11
```

@tab Example

```python
a = 4 // 2 # Integer result
b = 4.5 // 2 # Float result
print(a, b)

# output
2, 2.0
```

## 7. Exercises

### 7.1 Multiple Choice

1. In Python, what is the result of `3.5 + 4`?

    A. Integer

    B. Float ✅

    C. String

    D. Boolean

2. Which operator is used for taking the remainder?

    A. `+`

    B. `-`

    C. `*`

    D. `%` ✅

3. In Python, what is the result of `9 // 2`?

    A. 4.5

    B. 4 ✅

    C. 5

    D. 4.0 

4. What is the result of `1.0 == 1` in Python?

    A. True 🙆✅

    B. False ✅ ❌

    C. Error

    D. Unable to determine

5. What is the result of `2 + 3 * 4`?

    A. 20

    B. 14 ✅

    C. 24

    D. 12

6. In Python, what is the result of `10 / 3`?

    A. 3

    B. 3.3333 🙆✅ 

    C. 4

    D. 3.3 ✅❌

7. What is the result of `7 // 2`?

    A. 3 ✅

    B. 3.5

    C. 4

    D. 2

8. In Python, which of the following operations returns a float?

    A. `2 * 3`

    B. `4 + 2`

    C. `9 / 2` ✅

    D. `5 // 2`

9. What is the result of `4 ** 0.5`?

    A. 2

    B. 4

    C. 16

    D. 0.5

    E. 2.0 ✅

10. What is the result of `3 >= 3`?

    A. True ✅

    B. False

    C. Error

    D. Unable to determine

11. What is the result of `4 != 4`?

    A. True

    B. False ✅

    C. Error

    D. Unable to determine

12. In Python, what is the result of `5 + 2 * 3`?

    A. 21

    B. 11 ✅

    C. 14

    D. 7

13. What is the type of the result of `6 / 2`?

    A. Integer

    B. Float ✅

    C. String

    D. Boolean



### 7.2 Fill in the Blanks

1. In Python, the result of `2 ** 3` is `___8___`.
2. Executing the expression `9 % 4` results in `___1___`.
3. If `a = 5`, then after executing `a *= 2`, the value of `a` is `___10___`.
4. In Python, the result of `3 == 2.9999` is `___False___`.
5. The result of `5 <= 5` is `___True___`.
6. If `b = 3`, after executing `b /= 2`, the value of `b` is `___1.5___`.
7. The result of `4 % 3` is `___1___`.
8. If `c = 10`, after executing `c //= 3`, the value of `c` is `___3___`.
9. In Python, the result of `7 == 7.0` is `___False___`. ❌True
10. The result of `8 / 2` is `___4.0___`.



### 7.3 Programming Exercises

::: tip Note

Test the code, and if there is no output or errors, consider it correct. But make sure to write code that produces the expected output.

:::

#### 7.3.1 Sum and Difference of Numbers:

Write a Python code snippet that creates two numbers `a` and `b`, calculates and prints their sum and the result of subtracting `a` from `b`.

**Code Template**

```python
a = 10
b = 5
Sum = a + b
Difference = a - b
print(Sum, Difference)
# Test
assert Sum == a + b
assert Difference == a - b
```

**Output Example:**

```python
Sum: 8
Difference: 2
```

#### 7.3.2 Multiplication and Division of Numbers

Write a Python code snippet that creates two numbers `x` and `y`, calculates and prints their product and division result.

**Code Template**

```python
x = 10
y = 5
product = x * y
division = x / y
print(product, division)

# Test
assert product == x * y
assert division == x / y
```

**Output Example:**

```python
Product: 12
Division: 3.0
```

#### 7.3.3 Remainder and Power Operation

Write a Python code snippet that creates two numbers `m` and `n`, calculates and prints the remainder of `m` divided by `n` and `m` raised to the power of `n`.

**Code Template**

```python
m = 10
n = 5
floor_div = m // n
power = m ** n
print(floor_div, power)

# Test
assert remainder == m % n
assert power == m ** n
```

**Output Example:

Sure, here's the translation of the provided text into English in Markdown format:

```markdown
**Code Exercise: Comparisons**

```python
Remainder: 1
Power: 81
```

#### 7.3.4 Comparison Operations

Write a Python code snippet that takes two numbers `p` and `q` as input, compares their sizes, and prints the corresponding result (greater than, less than, equal to).

**Code Template**

```python
p = 10
q = 5
if p > q:
    print(p, " is greater than ", q)
elif p < q:
    print(p, " is less than ", q)
else:
    print(p, " is equal to ", q)
    

if ______:
    print(f"{p} is greater than {q}")
    assert p > q
elif ______:
    print(f"{p} is less than {q}")
    assert p < q
else:
    print(f"{p} is equal to {q}")
    assert p == q
```

**Output Example:**
```python
4 is less than 5
```