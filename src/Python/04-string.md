---
title: Strings
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

## 1. Definition of Strings

A string is a sequence composed of letters, numbers, and special characters.

![image-20231222232933858](./04-string.assets/image-20231222232933858.png)

## 2. Creating Strings

— Using **<span style="color:orange">single quotes, double quotes</span>, or <span style="color:orange">triple quotes</span>**.

```python
name = "alexa"
number = '18'
paragraph = '''Hello, I'm Alexa
'''
para = """Hello Alexa
"""
```

1. Mixing single and double quotes, so you may need to accept different types of quotes, otherwise, you cannot fully encapsulate the string content.

```python
string = 'I'm Alexa # wrong
string = "I'm Alexa" # correct
```

What about triple quotes?

Let's say we need to store the following text in Python code:

```python
We sometimes need to not only look at the answers within the options but also think about the answers outside the options. — AI Yuechuang

Shallow ones see shallow, deep ones see deep. — Huang Jiabao

The earliest risers are idealists, the fastest runners are scammers, and the bravest are adventurers who are afraid of missing everything and rushing in are leeks. And the real success, may not have entered yet.

Implement the function first, then optimize, otherwise, everything will be chaotic. — AI Yuechuang

Anything you can't write clearly is something you haven't really understood.
```

How do we implement this in Python code as a string?

::: code-tabs

@tab Double quotes

```python
string = "We sometimes need to not only look at the answers within the options but also think about the answers outside the options. — AI Yuechuang

Shallow ones see shallow, deep ones see deep. — Huang Jiabao

The earliest risers are idealists, the fastest runners are scammers, and the bravest are adventurers who are afraid of missing everything and rushing in are leeks. And the real success, may not have entered yet.

Implement the function first, then optimize, otherwise, everything will be chaotic. — AI Yuechuang

Anything you can't write clearly is something you haven't really understood"
# This way, only the first line content will be encapsulated
```

@tab Double quotes + Backslash

```python
string = "We sometimes need to not only look at the answers within the options but also think about the answers outside the options. — AI Yuechuang\

Shallow ones see shallow, deep ones see deep. — Huang Jiabao\

The earliest risers are idealists, the fastest runners are scammers, and the bravest are adventurers who are afraid of missing everything and rushing in are leeks. And the real success, may not have entered yet.\

Implement the function first, then optimize, otherwise, everything will be chaotic. — AI Yuechuang\

Anything you can't write clearly is something you haven't really understood"
# Output
We sometimes need to not only look at the answers within the options but also think about the answers outside the options. — AI YuechuangShallow ones see shallow, deep ones see deep. — Huang JiabaoThe earliest risers are idealists, the fastest runners are scammers, and the bravest are adventurers who are afraid of missing everything and rushing in are leeks. And the real success, may not have entered yet.Implement the function first, then optimize, otherwise, everything will be chaotic. — AI YuechuangAnything you can't write clearly is something you haven't really understood
# Adding a backslash can encapsulate it, but it cannot break the line, so triple quotes are needed.
```

@tab Triple quotes

```python
string = """We sometimes need to not only look at the answers within the options but also think about the answers outside the options. — AI Yuechuang

Shallow ones see shallow, deep ones see deep. — Huang Jiabao

The earliest risers are idealists, the fastest runners are scammers, and the bravest are adventurers who are afraid of missing everything and rushing in are leeks. And the real success, may not have entered yet.

Implement the function first, then optimize, otherwise, everything will be chaotic. — AI Yuechuang

Anything you can't write clearly is something you haven't really understood"""
# Implement the original output
```

:::

Triple quotes can also be used for comments

![image-20231222233001673](./04-string.assets/image-20231222233001673.png)

## 3. String Length

Use `len()`: Returns the length or number of characters in the string, starting from one, including spaces.

```python
para = "Hello, alexa"
print(len(para))

# Output
12
```

## 4. Getting Characters from a String

### 4.1 Getting a Single Character

```python
para = "Hello, alexa"
print(para[2])   # Selecting the 3rd character
print(para[0])   # Selecting the 1st character
print(para[-1])  # Selecting the last character
print(para[len(para)-1])  # Selecting the last character
```

### 4.2 Getting a Range of Characters

Use slicing interval (left-closed right-open) `string[start: end]`

```python
"""Syntax: string = "bornforthis"
select = string[start: end]
PS: Remember to +1 for end"""

para = "Hello, alexa"
print(para[2:6])  # Selecting the 3rd to the 6th character (not including the 7th)
# Output
llo,
```

### 4.3 Getting Multiple Discontinuous Characters

Use slicing interval `string[start: end: sep]`

```python
"""
Syntax: string = "0123456789"
select = string[start: end: sep] *sep= how many steps to the next number*
PS: Remember to +1 for end
"""
string = "0123456789"
# Get characters 02468
select = string[0: len(string): 2]
print(select)
# Get characters 13579
select = string[1: len(string): 2]
print(select)

string = "bornforthis"
# Get characters ofts
select = string[1: len(string): 3]
print(select)
```

### 4.4 Optimization

If we want to extract characters from the beginning to the end, we can omit the start and/or end, leaving them blank.

```python
string = "0123456789"
# Get characters 02468
select = string[::

 2]
print(select)
# Get characters 13579
select = string[1:: 2]
print(select)
```

### 4.5 String Reversal

The third position of the string controls the direction of character extraction. The default is 1 for positive, and if we change it to -1, it will be reversed.

::: warning

Positive and negative control direction, number size controls step size.

:::

```python
string = "bornforthis"
select = string[:: -1]
print(select)

# Output
sihtrofnrob
```

What does the ellipsis omit?

```python
select = string[0:11: -1]
print(select)

# Output
No result
```

If you use a positive index, starting from 0, going to -1 has no value, not satisfied.

![image-20231222233023698](./04-string.assets/image-20231222233023698.png)

If you directly use a positive index to swap positions, the last one is 0, and it will be omitted:

```python
select = string[len(string):0: -1]
print(select)

# Output
sihtrofnro # Missing "b"
```

So it should be reversed from -1 to the last one:

![image-20231222233037523](./04-string.assets/image-20231222233037523.png)

```python
select = string[-1:-1*len(string)-1: -1]
print(select)
```

```python
# Get rofn
select = string[-5:-9: -1]
print(select)
```

## 5. String Built-in Methods

### 5.1 .upper()

Converts the entire string to uppercase.

```python
string = "bornforthis"
print(string.upper())

# Output
BORNFORTHIS
```

### 5.2 .lower()

Converts the entire string to lowercase.

```python
string = "BORNFORTHIS"
print(string.lower())

# Output
bornforthis
```

### 5.3 .capitalize()

Capitalizes the first letter of the string.

```python
string = "BORNFORTHIS"
print(string.capitalize())

# Output
Bornforthis
```

### 5.4 .title()

Capitalizes the first letter of each word, creating a title format.

```python
string = "BORNFORTHIS to-aiyc"
print(string.title())

# Output
Bornforthis To-Aiyc
```

### 5.5 .startswith()

Checks if the string starts with a specific content, returns True or False.

```python
string = "BORNFORTHIS to-aiyc"
print(string.startswith("b"))

# Output
False

string = "BORNFORTHIS to-aiyc"
print(string.startswith("BO"))

# Output
True
```

### 5.6 .endswith()

Checks if the string ends with a specific character or word, returns a boolean value.

```python
string = "BORNFORTHIS to-aiyc"
print(string.endswith("BO"))
# Output
False

string = "BORNFORTHIS to-aiyc"
print(string.endswith("yc"))
# Output
True
```

### 5.7 .count()

Counts the number of times a specific character or word appears in the target string.

```python
string = "BORNFORTHIS to-aiyc bornforthis"
print(string.count("i"))
# Output
2 # Case-sensitive

string = "BORNFORTHIS for-aiyc bornforthis"
print(string.count("for"))
# Output
2
```

### 5.8 .find()

Finds the index of the first occurrence of a specific character or word in the string. If searching for a word, `find()` returns the index of the first character of the target word. If the character or word is not found, it returns -1.

```python
string = "BORNFORTHIS for-aiyc bornforthis"
print(string.find("for"))

# Output
12 # Returns the index of the first occurrence

string = "BORNFORTHIS for-aiyc bornforthis"
print(string.find("R"))

# Output
2

string = "BORNFORTHIS for-aiyc bornforthis"
print(string.find("k"))

# Output
-1
```

### 5.9 .index()

Finds the index of the first occurrence of a specific character or word in the string. If searching for a word, `index()` returns the index of the first character of the target word. If the character or word is not found, it raises an error.

```python
string = "BORNFORTHIS for-aiyc bornforthis"
print(string.index("k"))

# Output
ValueError: substring not found
```

### 5.10 .isdigit()

Checks if the string is a pure numeric string. Returns False if any character in the string is not a number.

```python
string = "01234567"
print(string.isdigit())

# Output
True

string = "01234567o"
print(string.isdigit())

# Output
False
```

### 5.11 .isalpha()

Checks if the string is a pure alphabetical string. Returns False if any character in the string is not a letter.

```python
string = "abcdefg"
print(string.isalpha())

# Output
True

string = "abcdefg0"
print(string.isalpha())

# Output
False
```

Sure, here is the translation of the provided Markdown content to English:

```markdown
## 5.12 .isalnum()

Checks whether the string consists of alphanumeric characters only. Returns False if the string contains any non-alphanumeric elements.

```python
string = "abcdefg0"
print(string.isalnum())

# output
True

string = "abcdefg0!"
print(string.isalnum())

# output
False
```

## 5.13 .isupper()

Checks if all the letters in the string are uppercase. Returns True if all uppercase, otherwise False.

```python
string = "abcdefg0!"
print(string.isupper())

# output
False
```

## 5.14 .islower()

Checks if all the letters in the string are lowercase. Returns True if all lowercase, otherwise False.

```python
string = "abcdefg0!"
print(string.islower())

# output
True
```

## 5.15 .isspace()

Checks if the string consists of only whitespace characters. Returns True for pure whitespace, otherwise False.

```python
string = "abcdefg0!"
print(string.isspace())

# output
False

string = "   "
print(string.isspace())

# output
True
```

## 5.16 .strip()

By default, removes leading and trailing whitespace characters from the target string. If specified, it can also remove specified characters.

```python
string = "   bornforthis   "
print(string.strip())  # Removes leading and trailing spaces
# output
bornforthis

string = "---bornforthis---"
print(string.strip("-"))  # Removes leading and trailing hyphens
# output
bornforthis

string = "--  -bornforthis-- -"
print(string.strip("-"))  # Removes consecutive hyphens only from both ends until a different character is encountered
# output
  -bornforthis-- 
    
string = "--  -bornforthis-- -"
print(string.strip("- "))  # Removes all hyphens and spaces from both ends simultaneously
# output
bornforthis
```

## 5.17 .lstrip()

By default, removes leading whitespace characters from the string. If specified, it can remove specified leading characters.

```python
string = "--  -bornforthis-- -"
print(string.lstrip("- "))
# output
bornforthis-- -
```

## 5.18 .rstrip()

By default, removes trailing whitespace characters from the string. If specified, it can remove specified trailing characters.

```python
string = "--  -bornforthis-- -"
print(string.rstrip("- "))
# output
--  -bornforthis
```

## 5.19 .replace()

`.replace(old, new, count)` replaces occurrences of the "old" character with the "new" character. The count parameter controls the number of replacements.

```python
string = "--  -bornforthis-- -"
string1 = string.replace(" ","*")  # Replaces all spaces with *
string2 = string.replace("-", "!", 3)  # Replaces the first three hyphens with !
print(string, string1, string2, sep="\n")

# output
--  -bornforthis-- -
--**-bornforthis--*-
!!  !bornforthis-- -
```

## 5.20 .split()

`.split(sep, maxsplit)` splits the string using a specific character, default is space. If the "sep" parameter is provided, it splits using that character and returns a list. The maxsplit parameter controls how many splits to perform, default is to split from the left.

```python
string = "i am bornforthis bornforthis"
lst1 = string.split()
lst2 = string.split("o")
lst3 = string.split("o", 3)
print(string, lst1, lst2, lst3, sep="\n")

# output
i am bornforthis bornforthis
['i', 'am', 'bornforthis', 'bornforthis']
['i am b', 'rnf', 'rthis b', 'rnf', 'rthis']
['i am b', 'rnf', 'rthis b', 'rnforthis']
```

## 5.21 .rsplit()

`.rsplit(sep, maxsplit)` splits the string from the right, using a specific character if provided. Returns a list. The maxsplit parameter controls how many splits to perform.

```python
string = "i am bornforthis bornforthis"
lst1 = string.rsplit()
lst2 = string.rsplit("o")
lst3 = string.rsplit("o", 3)
print(string, lst1, lst2, lst3, sep="\n")

# output
i am bornforthis bornforthis
['i', 'am', 'bornforthis', 'bornforthis']
['i am b', 'rnf', 'rthis b', 'rnf', 'rthis']
['i am bornf', 'rthis b', 'rnf', 'rthis']
```

## 5.22 .join()

Joins the characters of a string with a specific separator. `“sep”.join(string)`

```python
string = "i am bornforthis "
string_joined = "-".join(string)
print(string_joined)

# output
i- -a-m- -b-o-r-n-f-o-r-t-h-i-s- 
```

## 6. String Formatting

Issue:

```python
string = "Hi Bornforthis,Welcome to XiaMen."
print(string)

# ---output---
Hi Bornforthis,Welcome to XiaMen.
```

- The problem is that each time we want to change a name or location, we need to create a new string.
- Using string concatenation may be cumbersome, especially for more complex strings.
- Another issue is that different data types cannot be directly concatenated in Python, unless explicitly converted to strings:

```python
string = "Money is " + 190
print(string)

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/40-YEWENTE/demo1.py", line 1, in <module>
    string = "Money is " + 190
TypeError: can only concatenate str (not "int") to str


string = "Money is " + str(190)
print(string)
# ---output---
Money is 190
```

### 6.1 .format()

1. Single curly braces `{}`: Three methods

```python
string = "Hi {}, welcome to XiaMen.".format("Alexa")
print(string)

template_string = "Hi {}, welcome to XiaMen."
print(template_string.format("Alexa"))

new_string = template_string.format("Alexa")
print(new_string)

# output
Hi Alexa, welcome to XiaMen.
Hi Alexa, welcome to XiaMen.
Hi Alexa, welcome to XiaMen.
```

2. Multiple curly braces above "filled in order"

```python
string = "Hi {}, welcome to {}.".format("Alexa", "XiaMen")
print(string)

template_string = "Hi {}, welcome to {}."
print(template_string.format("Alexa", "XiaMen"))

new_string = template_string.format("Alexa", "XiaMen")
print(new_string)

# output
Hi Alexa, welcome to XiaMen.
Hi Alexa, welcome to XiaMen.
Hi Alexa, welcome to XiaMen.
```

3. Multiple curly braces specifying positions "index specified"

```python
string = "Hi {1}, welcome to {0}.".format("0", "1")
print(string)

string = "Hi {1}, welcome to {0}.".format("XiaMen", "Alexa")
# 0th position input:XiaMen, 1st position input:Alexa
print(string)

template_string = "Hi {1}, welcome to {0}."
print(template_string.format("Shanghai", "Alexa"))

new_string = template_string.format("Shenzhen", "Alexa")
print(new_string)

# output
Hi 1, welcome to 0.
Hi Alexa, welcome to XiaMen.
Hi Alexa, welcome to Shanghai.
Hi Alexa, welcome to Shenzhen.
```

4. Parameter specification

```python
string = "Hi {name}, welcome to {city}.".format(name="name", city="city")
print(string)

string = "Hi {name}, welcome to {city}.".format(name="Alexa", city="XiaMen")
print(string)

template_string = "Hi {name}, welcome to {city}."
print(template_string.format(name="Alexa", city="Shanghai"))

new_string = template_string.format(name="Alexa", city="Shenzhen")
print(new_string)

# output
Hi name, welcome to city.
Hi Alexa, welcome to XiaMen.
Hi Alexa, welcome to Shanghai.
Hi Alexa, welcome to Shenzhen.
```

5. Preserve specified decimal places: `{:.xf}` preserves x decimal places

```python
string = "Money is {:.3f}".format(190)  # .3f preserves three decimal places
print(string)

# output
Money is 190.000
```

### 6.2 f

1. Directly read variables (variables must be created in advance)

```python
name = "Alexa"
city = "XiaMen"
string = f"Hi {name}, welcome to {city}."
print(string)
# Variables must be created before using f

# output
Hi Alexa, welcome to XiaMen.
```

2. Preserve decimal places `{variable: .xf}` keeps variable to x decimal places

```python
money = 190
string = f"Money is {money:.3f}."
print(string)

# output
Money is 190.000.
```

### 6.3 % formatting

- `%d`: Integer
- `%s`: String
- `%f`: Float

1. Single position input (three methods: use % + number to input; d/s/f controls input type)

```python
string = "Money is %d"
new_s = string % 13
print(new_s)

print(string % 19)

string = "Money is %d" % 190
print(string)

# output
Money is 13 
Money is 18 
Money is 190 
```

2. Multiple position input: % must be followed by parentheses

```python
string = "Money is %d %s"
new_s = string % (13, "发大财")
print(new_s)

print(string % (18, "暴富"))

string = "Money is %d %s" % (190, "666")
print(string)

# output
Money is 13 发大财
Money is 18 暴富
Money is 190 666
```

3. Preserve decimal places: %.xf

```python
string = "Money is %.3f"
new_s = string % 13
print(new_s)

print(string % 18)

string = "Money is %.3f" % 190
print(string)

# output
Money is 13.000
Money is 18.000
Money is 190.000
```

### 6.4 f and format, % advantages and disadvantages

format and % are like templates, and once the template is created, it can be used directly when needed; while f is like a bank teller, registering while asking, and cannot create a template in advance.

## 7. Immutability of Strings

Strings are immutable, and no element can be changed in the string. If you want to change an element in the string, a new string needs to be created.

```python
s = "hello bornforthis"
s[0] = "a"

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/39-YDN/lesson3.py", line 2, in <module>
    s[0] = "a"
TypeError: 'str' object does not support item assignment
```

In addition to using replace, you can also use string concatenation

```python
string = "Hello, Alexa!"
new_string = "a" + string[1:] # using slicing
print(new_string)

# output
aello, Alexa!
```

## 8. String Escaping

| Escape Character | Meaning                              | Example                  |
| ---------------- | ------------------------------------ | ------------------------ |
| `\\`             | Backslash symbol, to get `\`         | `s = "bor\\nforthis"`    |
| `\b`             | Backspace, similar to the delete key | `s = "bornff\borthis"`   |
| `\n`             | Newline                              | `s = "bornfor\nthis"`    |
| `\t`             | Tab                                  | `s = "born\tfor\tthis"`  |
| `r`              | Cancel escaping "R and r" both work  | `s = r"born\tfor\tthis"` |

Example code:

```python
s = "bor\\nforthis"
# Originally using \n would cause the string to break, but if you want to output \n, you need to add another \ in front of \
print(s)

# output
bor\nforthis

s = "bornff\borthis"
# \b deletes the previous character f
print(s)

# output
bornforthis

s = "bornfor\nthis"
# \n newline
print(s)

# output
bornfor
this

s = "born\t

for\tthis"
# \t tab
print(s)

# output
born    for    this

s = r"born\tfor\tthis"
# You can also use r to cancel escaping
print(s)

# output
born\tfor\tthis
```

## 9 String Concatenation

```python
s1 = 'born'
s2 = 'forthis'
print(s1 + s2)  # Forms a single string
print(s1, s2)  # Still two independent strings

# ---output---
bornforthis
born forthis


s1 = '*-love-'
print(s1 * 10)

# ---output---
*-love-*-love-*-love-*-love-*-love-*-love-*-love-*-love-*-love-*-love-
```

I want to add an * at the end of the output above. What should I do?

```python
print(s1*10 + "*")
print(s1*10 + s1[0])
print(s1*10, end="*")
```

## 10. Reading User Input

### 10.1 input() Basic Usage

Use `input()` to get user input

```python
user_input = input()
print(user_input)

# output
alexa # self input
alexa # print
```

### 10.2 input() Input Prompt

But the above code has a small problem: it is not very intuitive to know during runtime that the program needs our input, especially for non-programmer users.

![image-20231231074522629](./04-string.assets/image-20231231074522629.png)

How to solve it? - Use input prompt.

`input()` function supports writing a string for prompting.

```python
user_input = input("Enter your name:>>>")
print("user input name:", user_input)

# output
Enter your name:>>> alexa
user input name:  alexa
```

![image-20231231074540136](./04-string.assets/image-20231231074540136.png)

### 10.3 input() Characteristics

#### 10.3.1 input() Type is String "str"

```python
In [2]: type(input("i:>>>"))
i:>>>1
Out[2]: str

In [3]: type(input("i:>>>"))
i:>>>[1,2,3,4]
Out[3]: str

In [4]: type(input("i:>>>"))
i:>>>(1,2,3,4)
Out[4]: str
```

From the above code examples, we can see that the data type obtained by `input()` is always **string**.

Knowing the characteristics of `input()`, how to solve this problem? - How can users directly enter the original type and get the original type.

#### 10.3.2 Method One: Forced Type Conversion

```python
In [10]: n = int(input(':>>>'))
:>>>12

In [11]: type(n)
Out[11]: int

In [12]: # There are some issues

In [13]: s = list(input(':>>>'))
:>>>[1, 2, 3, 4, 5]

In [14]: s  # Gets each element separately
Out[14]: ['[', '1', ',', ' ', '2', ',', ' ', '3', ',', ' ', '4', ',', ' ', '5', ']']

In [15]: type(s)
Out[15]: list

In [16]: b = bool(input(':>>>'))
:>>>True

In [17]: b
Out[17]: True

In [18]: type(b)
Out[18]: bool
```

- Suitable for: numbers, strings, booleans
- Not suitable for: lists, tuples, dictionaries, sets

#### 10.3.3 Method Two: Use eval()

1. Wonderful use of eval()

```python
In [28]: s = eval(input(':>>>'))
:>>>12

In [29]: type(s), s
Out[29]: (int, 12)

In [30]: s = eval(input(':>>>'))
:>>>[1, 2, 3]

In [31]: type(s), s
Out[31]: (list, [1, 2, 3])

In [32]: s = eval(input(':>>>'))
:>>>(1, 2, 3)

In [33]: type(s), s
Out[33]: (tuple, (1, 2, 3))

In [34]: s = eval(input(':>>>'))
:>>>{1, 2, 3}

In [35]: type(s), s
Out[35]: (set, {1, 2, 3})

In [36]: s = eval(input(':>>>'))
:>>>True

In [37]: type(s), s
Out[37]: (bool, True)

In [38]: s = eval(input(':>>>'))
:>>>{'a': 1, 'b': 2}

In [39]: type(s), s
Out[39]: (dict, {'a': 1, 'b': 2})
```

2. Problems with eval()

The code above seems to solve our problem, but it comes with issues that need attention.

```python
In [14]: s = eval(input(":>>>"))
:>>>string
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
Cell In[14], line 1
----> 1 s = eval(input(":>>>"))

File <string>:1

NameError: name 'string' is not defined
```

Let's analyze the "magic" of `eval()`:

1. Get user input: `s = eval(input(':>>>'))`
2. Input `string` will be obtained, and after conversion by `eval`, it becomes a variable similar to `string`. However, in our previous code, we did not create a variable named `string`.
3. Therefore, an error is raised. The error is quite obvious: `NameError: name 'string' is not defined`.
4. The solution is straightforward: either create a variable named `string` before getting user input, or intentionally add single quotes, double quotes, or triple quotes around the input.

```python
In [17]: string = "hello"

In [18]: s = eval(input(":>>>"))
:>>>string

In [19]: s
Out[19]: 'hello'

In [20]: num = 12

In [21]: s = eval(input(":>>>"))
:>>>num

In [22]: s
Out[22]: 12

In [23]: type(s), s
Out[23]: (int, 12)

In [24]: s = eval(input(":>>>"))
:>>>"string"

In [25]: type(s), s
Out[25]: (str, 'string')
```

3. Tricks with `eval()`

Task requirement: Get user input, calculate the sum, difference, product, and quotient of two digits.

```python
In [26]: eval(input(":>>>"))
:>>>1+1
Out[26]: 2

In [27]: eval(input(":>>>"))
:>>>2-1
Out[27]: 1

In [28]: eval(input(":>>>"))
:>>>9*8
Out[28]:72

In [29]: eval(input(":>>>"))
:>>>9/3
Out[29]: 3.0
```



## 11. Trying Out

Get user input to display the sum of two integers.

**Requirements:**

- Use only one `input` function.
- User input format: num1 num2
- Output the calculation result.

**Input:**

```python
5 6
```

**Output:**

```python
11
```

:::code-tabs

@tab Code1

```python
nums = eval(input(":>>>").replace(" ", "+")) # use eval and replace
print(nums)
```

@tab Code2

```python
nums = input(":>>>").split() # split directly at the space and return a list
sum = int(nums[0]) + int(nums[1]) # convert to numbers
print(sum)
```