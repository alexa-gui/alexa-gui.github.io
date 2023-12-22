---

title: 字符串
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

## 1. 字符串的定义

字符串是由字母，数字，特殊字符来组成的一个序列

![image-20231218093224921](./04-string.assets/image-20231218093224921.png)

## 2. 创建字符串

——使用 **<span style="color:orange">单引号、双引号</span>或者<span style="color:orange">三引号</span>**。

```python
name = "alexa"
number = '18'
paragraph = '''Hello, I'm Alexa
'''
para = """Hello Alexa
"""
```

1. 单双引号混用 所以会需要接受不同类型的引号, 否则不能完全包裹字符串内容

```python
string = 'I'm Alexa # wrong
string = "I'm Alexa" # correct
```

那么三引号呢？

假设我们现在需要存储如下文本：

```python
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
```

放入字符串，我们如何在 Python 代码实现呢？

::: code-tabs

@tab 双引号

```python
string = "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"

# 这样会只能包裹到第一行内容
```

@tab 双引号+斜杠

```python
string = "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创\

浅者见浅，深者见深——黄家宝\

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。\

先实现功能，再去优化，否则一切会很乱。——AI悦创\

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"

# output
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创浅者见浅，深者见深——黄家宝起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。先实现功能，再去优化，否则一切会很乱。——AI悦创凡是你不能清晰写下来的东西，都是你还没有真正理解的东西

#加斜杠可以包裹 但是不能换行
#所以需要使用三引号
```

@tab 三引号

```python
string = """我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"""

# 实现原样输出
```

:::

三引号还可以用来注释

![image-20231218095008709](./04-string.assets/image-20231218095008709.png)



## 3. 字符串长度

使用`len()`: 返回字符串中字符长度或字符数，从一开始数, 包括空格

```python
para = "Hello, alexa"
print(len(para))

# output
12
```



## 4. 字符串中的字符获取

### 4.1 获取单个字符

```python
para = "Hello, alexa"
print(para[2])   # selecting the 3rd character
print(para[0])  # selecting the 1st character
print(para[-1])  # selecting the last character
print(para[len(para)-1])  # selecting the last character
```

### 4.2 获取一串连续字符

使用slicing区间 （左闭右开）string[start: end]

```python
"""语法: string = "bornforthis"
select = string[start: end]
PS: end 记得 +1"""

para = "Hello, alexa"
print(para[2:6])  # selecting the 3rd to the 6th character (not including the 7th)
# output
llo,
```

### 4.3 获取多个不连续字符

使用slicing区间 string[start: end: sep]

```python
"""
语法: string = "0123456789"
select = string[start: end: sep] *sep= how many steps to the next number*
PS: end 记得 +1
"""
string = "0123456789"
# 获取字符 02468
select = string[0: len(string): 2]
print(select)
# 获取字符 13579
select = string[1: len(string): 2]
print(select)

string = "bornforthis"
# 获取字符 ofts
select = string[1: len(string): 3]
print(select)
```

### 4.4 优化

如果我们要提取的字符是从开头到结尾，则可以省略开头和/或结尾，留空即可

```python
string = "0123456789"
# 获取字符 02468
select = string[:: 2]
print(select)
# 获取字符 13579
select = string[1:: 2]
print(select)
```

### 4.5 字符串倒序

字符串的第三个位置，控制的是字符提取的方向。默认正数为1，如果我们改成-1，则会变成反方向

::: warning

正负控制方向，数字大小控制步长

:::

```python
string = "bornforthis"
select = string[:: -1]
print(select)

# output
sihtrofnrob
```

省略号省略的是什么？

```python
select = string[0:11: -1]
print(select)

# output
No result
```

如果使用正方向序号， 0开始往-1走没有任何值， 不成立

![image-20231221214402328](./04-string.assets/image-20231221214402328.png)

如果直接使用正数序号调换位置，最后一位就是0，会被省略掉：

```python
select = string[len(string):0: -1]
print(select)

# output
sihtrofnro #missing "b"
```



所以应该是从-1最后一位开始往回倒:

![image-20231221214427299](./04-string.assets/image-20231221214427299.png)

```python
select = string[-1:-1*len(string)-1: -1]
print(select)
```

```python
# 获取rofn
select = string[-5:-9: -1]
print(select)
```



## 5. 字符串的内置方法

### 5.1 .upper()

将字符串全部转换为大写

```python
string = "bornforthis"
print(string.upper())

# output
BORNFORTHIS
```

### 5.2 .lower()

将字符串全部转换为小写

```python
string = "BORNFORTHIS"
print(string.lower())

# output
bornforthis
```

### 5.3 .capitalize()

字符串开头第一个字母大写

```python
string = "BORNFORTHIS"
print(string.capitalize())

# output
Bornforthis
```

### 5.4 .title()

每个单词的首字母大写，只要有间隔都会大写 「形成标题的一种格式」

```python
string = "BORNFORTHIS to-aiyc"
print(string.title())

# output
Bornforthis To-Aiyc
```

### 5.5 .startswith()

检测字符串是否以某个特定的内容开头，返回True或False

```python
string = "BORNFORTHIS to-aiyc"
print(string.startswith("b"))

# output
False

string = "BORNFORTHIS to-aiyc"
print(string.startswith("BO"))

# output
True
```

### 5.6 .endswith()

检测字符串是不是以特定字符或单词结尾，返回布尔值。

```python
string = "BORNFORTHIS to-aiyc"
print(string.endswith("BO"))
# output
False

string = "BORNFORTHIS to-aiyc"
print(string.endswith("yc"))
# output
True
```

### 5.7 .count()

计算特定字符或单词在目标字符串中存在的次数。

```python
string = "BORNFORTHIS to-aiyc bornforthis"
print(string.count("i"))
# output
2 #区分大小写

string = "BORNFORTHIS for-aiyc bornforthis"
print(string.count("for"))
# output
2
```

### 5.8 .find()

寻找目标字符或单词在特定字符串中，第一次出现的下标。如果是查找单词，那么 `find()` 返回目标单词的第一个字符的下标。

如果，查询的字符或单词不存在，则返回 `-1`。

```python
string = "BORNFORTHIS for-aiyc bornforthis"
print(string.find("for"))

# output
12 #返回第一次出现时的下标

string = "BORNFORTHIS for-aiyc bornforthis"
print(string.find("R"))

# output
2

string = "BORNFORTHIS for-aiyc bornforthis"
print(string.find("k"))

# output
-1
```

### 5.9 .index()

寻找目标字符或单词在特定字符串中，第一次出现的下标。如果是查找单词，那么 `index()` 返回目标单词的第一个字符的下标。

如果，查询的字符或单词不存在，则**报错**。

```python
string = "BORNFORTHIS for-aiyc bornforthis"
print(string.index("k"))

# output
ValueError: substring not found
```

### 5.10 .isdigit()

判断字符串是不是纯数字字符串，字符串中但凡有一个字符不是数字，则返回false

```python
string = "01234567"
print(string.isdigit())

# output
True

string = "01234567o"
print(string.isdigit())

# output
False
```

### 5.11 .isalpha()

判断字符串是不是纯字母字符串，字符串中但凡有一个字符不是字母，则返回false

```python
string = "abcdefg"
print(string.isalpha())

# output
True

string = "abcdefg0"
print(string.isalpha())

# output
False
```

### 5.12 .isalnum()

判断字符串是不是纯数字或纯字母、纯数字字母字符串，字符串中但凡出现非数字、字母元素，则返回 False。

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

### 5.13 .isupper()

判断字符串中的字母是否全大写，全大写则返回 True，否则返回 False。

```python
string = "abcdefg0!"
print(string.isupper())

# output
False
```

### 5.14 .islower()

判断字符串是不是字母全小写，全小写则返回 True，否则返回 False。

```python
string = "abcdefg0!"
print(string.islower())

# output
True
```

### 5.15 .isspace()

判断字符串是否为纯空格，多少个空格都可以。纯空格则返回 True，否则返回 False。

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

### 5.16 .strip()

默认去掉目标字符串的前后空白字符，如果指定参数，可以去掉指定字符

```python
string = "   bornforthis   "
print(string.strip()) #去除前后空格
# output
bornforthis

string = "---bornforthis---"
print(string.strip("-")) #去除前后减号
# output
bornforthis

string = "--  -bornforthis-- -"
print(string.strip("-")) #如果只去除前后减号 只会去除连续的减号知道遇见其他字符
# output
  -bornforthis-- 
    
string = "--  -bornforthis-- -"
print(string.strip("- ")) #同时去除两端的所有减号和空格
# output
bornforthis
```

### 5.17 .lstrip()

left 默认去掉字符串左边的空白字符，如果指定参数，则去掉左边的指定字符。

```python
string = "--  -bornforthis-- -"
print(string.lstrip("- "))
# output
bornforthis-- -
```

### 5.18 .rstrip()

Right 默认去掉字符串右边的空白字符，如果指定参数，则去掉右边的指定字符。

```python
string = "--  -bornforthis-- -"
print(string.rstrip("- "))
# output
--  -bornforthis
```

### 5.19 .replace()

`.replace(old, new, count)`第一个位置传入待替换的「old」字符，第二个位置传入要替换的新字符「new」，count控制替换次数

```python
string = "--  -bornforthis-- -"
string1 = string.replace(" ","*") #默认把所有空格都换成*
string2 = string.replace("-", "!", 3) #置换前三个减号为！
print(string, string1, string2, sep="\n")

# output
--  -bornforthis-- -
--**-bornforthis--*-
!!  !bornforthis-- -
```

### 5.20 .split()

`.split(sep, maxsplit)` 以特定字符进行分割，默认空格分割。如传入参数「sep」则以参数进行分割，返回分割后的列表，maxsplit用于控制分割几次, 默认从左边开始分割

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

### 5.21 .rsplit()

`.rsplit(sep, maxsplit)` 从字符串右边进行分割，也可以传入参数「sep」，进行指定分割。返回分割后的列表。maxsplit 指定分割次数。

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

### 5.22 .join()

以特定字符为字符串每个字符中间的间隔 `“sep”.join(string)`

```python
string = "i am bornforthis "
string_joined = "-".join(string)
print(string_joined)

# output
i- -a-m- -b-o-r-n-f-o-r-t-h-i-s- 
```



## 6. 字符串格式化

问题

```python
string = "Hi Bornforthis,Welcome to XiaMen."
print(string)

# ---output---
Hi Bornforthis,Welcome to XiaMen.
```

- 所存在的问题：需要换一个人名或者地区，就需要重新创建一个全新的字符串。
- 我们更希望有类似模版，让我们不同的人名、地面填写进去。而不是每个人都从头创建一个新字符串。

当然，这个时候有可能会想到使用字符串的加法，但字符串加法存在问题。

```python
name = "Bornforthis"
region = "XiaMen"
string1 = "Hi "
string2 = ",Welcome to "
string3 = "."
result = string1 + name + string2 + region + string3
print(result)

# ---output---
Hi Bornforthis,Welcome to XiaMen.
```

由上面的代码可知，虽然实现了。但是很繁琐，如果更复杂的字符串就不合适了。

而且另一个问题就是，在 Python 中不同的数据类型不能直接相加，除非强制转换类型为字符串：

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

—— **format** 就应运而生了。
