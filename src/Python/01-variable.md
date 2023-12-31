---
title: Variables
date: 2023-12-17 13:40:10
author: Alexa
isOriginal: true
category: 
    - Python
tag:
    - web
    - typora
icon: code
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

## 1. Understanding Variables — Examples from Life

### 1.1 Literal Understanding

- 变 (Biàn): Change
- 量 (Liàng): Size

### 1.2 An Example 🌰

Imagine you are the class monitor and you need to track the monthly exam scores of each student in the class. Each month, there's a sheet of paper with scores listed for each student, such as:

1. Li Lei    98 points
2. Ma Dongmei    89 points
3. Liu Yitong    96 points
4. ......

One day, the teacher asks to see Liu Yitong's scores for January, February, and March. As the class monitor, what do you do? — You can't just give the teacher all the monthly exam sheets; that would be inappropriate.

You should copy Liu Yitong's scores for January, February, and March onto a separate sheet of paper and then give it to the teacher.

So, why not initially assign an envelope (or a file) for each student? The envelope starts flat, and when we put things (data) into it, does it not expand? — Does it not change? Does it not have size? Clearly, it does.

So, an envelope is like **<span style="color: orange">a variable that allocates space in the computer's memory to store data.</span>**

**Characteristics:** The value of a variable can be overwritten, remembering only the last value.

## 2. How to Create Variables — Assignment Statements

1. **Variable:** Represents or references a value using a variable name.

- Nuwa molded a clay figurine, which had no life. Then Nuwa waved a willow branch, giving life to the clay figurine. Now, the clay figurine represents Nuwa's descendant. "Variable: clay figurine, Value: Nuwa."
- Members of the National People's Congress are elected by the masses through voting. They represent the will of the vast majority of the people. So, they can say, "I represent the will of the masses." "Variable: NPC representative, Value: the people."

2. Initializing Assignment Statement: **Variable Name = Expression**

- Variable Name: This is the space; we call it by a name.
- Expression: Similar to a mathematical expression.

Program logic: **From top to bottom, from right to left, and finally, assignment.**

::: code-tabs

@tab demo1

```python
x = 1  # 1 is assigned to x, x represents 1
x = x + 10  # x + 10 is equivalent to 1 + 10, and the result is 11, which is assigned to x
print(x)  # print prints/output
# The pound sign is used for comments, explaining the functionality or purpose of a code line

# ---output---
11
```

@tab demo2

```python
name1 = "lilei"
name2 = name1
print(name2)

# Overwriting
name1 = "lilei"
name1 = "hanmeimei"
print(name1)

# ---output---
lilei
hanmeimei
```

:::

## 3. Exploring print

### 3.1 Printing Multiple Data at Once

```python
a = 1
b = 2
c = 3
print(a, b, c)

# ---output---
1 2 3
```

From the output, it can be seen that `print` outputs multiple variables simultaneously, with each value separated by a default space.

Now, can we modify this default space? — The answer is obviously yes.

Use `sep`.

### 3.2 Modifying the Separation of Multiple Variables Printed Simultaneously

```python
a = 1
b = 2
c = 3
print(a, b, c, sep=' interval ')

# ---output---
1 interval 2 interval 3
```

### 3.3 Modifying end Changes the Output Ending Style

::: code-tabs

@tab Before Modification

```python
a = 1
b = 1
c = 1
print(a)
print(b)
print(c)

# ---output---
1
1
1
```

@tab Modified end 1

```python
a = 1
b = 1
c = 1
print(a, end='\n\n\n')  # Add multiple line breaks, \n means a line break
print(b)
print(c)

# ---output---
1


1
1
```

@tab Modified end 2

```python
a = 1
b = 1
c = 1
print(a, end=" Hugo is hugo ")  # We can modify it to a non-line-break string
print(b)  # This output will be immediately after the end of the previous output
print(c)

# ---output---
1 Hugo is hugo 1
1
```

:::

### 3.4 `end` and `sep` Can Be Used Simultaneously

```python
a = 1
b = 1
c = 1
print(a, b, c, sep="~", end=" love Python")

# ---output---
1~1~1 love Python
```

## 4. Advanced Assignment Methods

### 4.1 Assigning the Same Value to Multiple Variables Simultaneously

```python
a = b = c = 1
print(a, b, c)

# ---output---
1 1 1
```

### 4.2 Assigning Different Values to Multiple Variables Simultaneously

```python
a, b, c = 1, 2, 3
print(a, b, c)

# ---output---
1 2 3
```

::: center



:::

## 5. Naming Rules for Variables

- A combination of uppercase and lowercase English letters, numbers, and `_`, and cannot start with a number.
- System keywords cannot be used as variable names. "Get keyword list: `help('keywords')`
- Variable names are case-sensitive in Python.
- Variable names cannot contain spaces, but underscores can be used to separate words.
- Avoid using Python's built-in function names as variables.

```python
Here is a list of the Python keywords.  Enter any keyword to get more help.

False               class               from                or
None                continue            global              pass
True                def                 if                  raise
and                 del                 import              return
as                  elif                in                  try
assert              else                is                  while
async               except              lambda              with
await               finally             nonlocal            yield
break               for                 not      
```

::: code-tabs

@tab Code1

```python
n = "A"
N =

 "a"
print(n)  # If variables are not case-sensitive, what would be the output? — a
# However, they are case-sensitive, so the output is A

# out
A
```

@tab Code2

```python
# Numbers cannot be at the beginning
a121iy212c21 = "a"  # Numbers cannot be at the beginning, except for the beginning. You can place them wherever you want.
```

@tab Code3

```python
user_name = "aiyc"
```

@tab Code4

```python
print = "aiyc"  # Cannot use Python built-in function name as a variable
print(print) # Python cannot distinguish
```

@tab Code5

```python
# Keywords cannot be used as variable names
await = "aiyc"
print(await) # 'await' has a special function in Python, such as in 'while'
```

:::

## 6. Exercises

1. In Python, variable names can start with a number.
    - [ ] True
    - [x] False

2. In Python, which of the following variable names is valid?
    - [ ] 2myVar
    - [x] myVar2
    - [ ] my-var
    - [ ] my var

3. In Python, variable names are case-sensitive.
    - [x] True
    - [ ] False

4. In Python, `my_var` and `myVar` represent the same variable.
    - [ ] True
    - [x] False

5. Variable names can be Python keywords.
    - [ ] True
    - [x] False

6. `None` is a special type in Python, representing no value or an empty value.
    - [x] True
    - [ ] False

7. Which of the following is a valid variable assignment in Python?
    - [ ] 123abc = "hello"
    - [ ] for = "world"
    - [x] _hidden = "secret"
    - [ ] import = 123

8. In Python, a variable can be assigned multiple values simultaneously.
    - [ ] True
    - [x] False

9. Which of the following is a multi-variable assignment in Python?
    - [x] a, b, c = 1, 2, 3
    - [ ] a = 1, b = 2, c = 3
    - [ ] a; b; c = 1; 2; 3
    - [ ] a = 1; b = 2; c = 3;

10. A variable must be assigned before using it.
    - [x] True
    - [ ] False

11. In Python, the type of a variable is static and cannot be changed once assigned.
    - [ ] True
    - [x] False

12. Which represents a global variable in Python?
    - [ ] var = "hello"
    - [ ] global var ✅
    - [x] var(global) ❌ 
    - [ ] def var():

13. Which represents deleting a variable in Python?
    - [ ] delete x
    - [ ] del x ✅
    - [x] remove x ❌
    - [ ] destroy x

14. After `x = 5`, changing the value of `y` will also change the value of `x`.
    - [ ] True
    - [x] False

15. After `x = [1, 2, 3]`, changing the content of `y` will also change the content of `x`.
    - [ ] True ✅
    - [x] False ❌

16. In Python, variables can only store values of basic data types, such as integers or strings.
    - [ ] True
    - [x] False

17. Juice Exchange

Suppose you have two children, the elder brother is named Austin, and the younger brother is named Jaden. Austin wants to drink **juice**, and Jaden wants to drink **cola**. Both brothers have their own exclusive cups and don't like to use each other's cups.

There is only one cup of juice and one cup of cola left at home, and you accidentally filled the elder brother's cup with cola and the younger brother's cup with juice.

**Question: How do you swap the juice in the brothers' cups?**

::: info en

Suppose you have two children, the elder brother is named Austin, and the younger brother is named Jaden. Austin wants to drink juice, and Jaden wants to drink cola. Both brothers have their own exclusive cups and don't like to use each other's cups. There is only one cup of juice and one cup of cola left at home, and you accidentally filled the elder brother's cup with cola and the younger brother's cup with juice. How can you swap the juice in the brothers' cups?

:::

::: code-tabs

@tab Sample Code

```python
Austin = "Coke"  # This assignment can be understood as pouring juice
Jaden = "juice"  # This assignment can be understood as pouring juice
print("Austin", Austin)
print("Jaden", Jaden)
# Supplementary code
print("Austin", Austin)
print("Jaden", Jaden)
```

Output:

```python
Austin Coke
Jaden juice
-------------
Austin juice
Jaden Coke
```

@tab Tips

```tips
Two methods:

Method 1: Think about how you would solve it in real life?

> In real life, I think you would introduce an empty cup to operate. How would you operate? Think about it and then think about how to implement it in the code

Method 2: assigning different values to different variables (python specific)
a, b, c = 1, 2, 3

```

@tab answer１

```python
Austin = "Coke"
Jaden = "juice"
print("Austin", Austin)
print("Jaden", Jaden)
Empty_cup = Austin
Austin = Jaden
Jaden = Empty_cup
print("-" * 12)
print("Austin", Austin)
print("Jaden", Jaden)
```

@tab answer2

```python
Austin = "Coke"
Jaden = "juice"
print("Austin", Austin)
print("Jaden", Jaden)
Austin, Jaden = Jaden, Austin
print("-" * 12)
print("Austin", Austin)
print("Jaden", Jaden)
```

:::

:::: caution ！！！

::: details Don’t use the following methods！！！

```python
Austin = "Coke"
Jaden = "juice"
print("Austin", Austin)
print("Jaden", Jaden)
# 待补充代码
print("Austin", Jaden)
print("Jaden", Austin)
```

:::

::::

18. Create variables

19. Output：

```python
Austin Jaden Alex Cava
```

20. Output：

```python
Austin$Jaden$Alex$Cava%
```

