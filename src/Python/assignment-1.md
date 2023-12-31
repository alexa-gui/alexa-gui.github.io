---
title: Assignment 1
date: 2023-12-30 13:40:10
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

## Submission instructions

1. You should submit your homework on [GitHub](https://github.com/CodeClass1v1).
2. For this assignment you should turn in 4 separate `.py` files named according to the following pattern:
    `hw1_q1.py`, `hw1_q2.py`, etc.
3. Each Python file you submit should contain a header comment block as follows:

```text
"""
Author: [Your name here]
Assignment / Part: HW1 - Q1 (etc.)
Date due: 2023-02-09, 11:59pm
I pledge that I have completed this assignment without
collaborating with anyone else, in conformance with the
Bornforthis 1v1 School of Computer Science and Procedures on
Academic Misconduct.
"""
```

**No late submissions will be accepted.**

**REMINDER**: Do not use any Python structures that we have not learned in class.

## Question 01: Hello,You!

Write a program that asks for the user's name, their age and prints a personalized welcome message for them.

For example, an execution could look like this:

```python
Please enter your name: Aika
Please enter your age: 29
Aika, 29, is taking CS-UY 1114.
```

The format of your output need not look exactly the same as ours, but it must still ask the user for their name and age, and print them out as part of some sort of sentence.

:::code-tabs

@tab my solution

```python
"""
Author: [Alexa]
Assignment / Part: HW1 - Q1
Due Date: 30 Dec 2023, 8:00 am
I pledge that I have completed this assignment without collaborating with anyone else,
in conformance with the Bornforthis 1v1 School of Computer Science and Procedures on Academic Misconduct.
"""

name = input("Please enter your name:")
age = input("Please enter your age:")
string = f"Hi {name}, congratulations on turning {age}!"
print(string)
```

:::

## Question 02: Some Have Gone and Some Remain

The U.S. Census provides information on its [web page Census.gov](https://www.census.gov/) about the current U.S. population as well as approximate rates of change. Four rates of change are provided:

- There is a birth every 7 seconds.
- There is a death every 15 seconds.
- There is a new immigrant every 42 seconds.
- There is a new emigration (i.e. somebody moves out of the country) every 1.25 minutes.

These are, naturally, approximations of birth, death, and immigration rates, but they can assist in providing population estimates in the near term.

Write a program that takes a year as input (an integer—you may assume that this will value will always be greater than or equal to 2023) and prints out an estimated population (as an integer). Assume that the current population is 330,109,174, and assume that there are always exactly 365 days in a year.

Sample execution:

```text
Please enter a year greater than 2023:
2042
The population in year 2042 will be 382038453
```

The format of your output need not look exactly the same as ours, but it must still ask the user to enter an integer representing a year, and it must always output the estimated population of that year.

:::code-tabs

@tab my solution

```python
"""
Author: [Alexa]
Assignment / Part: HW1 - Q1
Due Date: 30 Dec 2023, 8:00 am
I pledge that I have completed this assignment without collaborating with anyone else,
in conformance with the Bornforthis 1v1 School of Computer Science and Procedures on Academic Misconduct.
"""
birth_per_year = (365 * 24 * 60 * 60 / 7)
death_per_year = (365 * 24 * 60 * 60 / 15)
immigrant_per_year = (365 * 24 * 60 * 60 / 42)
emigrant_per_year = (365 * 24 * 60 / 1.25)
net_change_per_year = birth_per_year - death_per_year + immigrant_per_year - emigrant_per_year
year_in_question = int(input("Please enter a year greater than 2023:>>>"))
n = year_in_question - 2023
estimated_population = 330109174 + int(((n ** 2) * net_change_per_year) // n)
print(f"The population in year {year_in_question} will be {estimated_population}.")
```

@tab answer

```python
# 获取用户输入的年份
year = int(input("Please enter a year greater than 2023:\n"))

# 常量定义
current_population = 330109174  # 当前人口
seconds_in_year = 365 * 24 * 60 * 60  # 一年中的秒数，假设每年有365天
current_year = 2023  # 当前年份

# 变化率
number_of_seconds = (year - current_year) * seconds_in_year  # 得到一共多少秒
birth_rate = number_of_seconds // 7  # 每7秒出生一个人，计算总的出生人数
death_rate = -number_of_seconds // 15  # 每15秒死亡一个人，计算总的死亡人数
immigration_rate = number_of_seconds // 42  # 每42秒有一个新移民，计算总的移民人数
emigration_rate = -number_of_seconds // (1.25 * 60)  # 每1.25分钟有一个人移出国外，计算总的移民人数（1.25分钟等于75秒）
new_population = int(330109174 + birth_rate + death_rate + immigration_rate + emigration_rate)
print(f"The population in year {year} will be {new_population}")
```

:::

## Question 03: Penny Pinching

Write a program that asks the user to enter a number of quarters, dimes, nickels and pennies and then outputs the monetary value of the coins in the format of dollars and remaining cents.

Your program should interact with the user, and output its results, **exactly** as it is shown in the following example:

```text
Please enter number of coins:
Number of quarters: 13
Number of dimes: 4
Number of nickels: 11
Number of pennies: 17
The total is 4 dollar(s) and 37 cent(s)
```

:::code-tabs

@tab my solution

```python
"""
Author: [Alexa]
Assignment / Part: HW1 - Q3
Due Date: 30 Dec 2023, 8:00 am
I pledge that I have completed this assignment without collaborating with anyone else,
in conformance with the Bornforthis 1v1 School of Computer Science and Procedures on Academic Misconduct.
"""
quarters = 25 * int(input("Please enter the number of coins: \nNumber of quarters:"))
dimes = 10 * int(input("Number of dimes:"))
nickels = 5 * int(input("Number of nickels:"))
pennies = int(input("Number of pennies:"))
total_in_cents = quarters + dimes + nickels + pennies
dollar = int(total_in_cents // 100)
cents = total_in_cents - dollar * 100
print(f"The total is {dollar} dollar(s) and {cents} cent(s)")
```

@tab answer

```python
# 定义一个交互式函数来计算硬币的总价值
def calculate_total_interactive():
    # 向用户打印提示信息，要求输入硬币数量
    print("Please enter number of coins:")

    # 请求用户输入25美分硬币的数量，并将输入转换为整数
    quarters = int(input("Number of quarters: "))
    # 请求用户输入10美分硬币的数量，并将输入转换为整数
    dimes = int(input("Number of dimes: "))
    # 请求用户输入5美分硬币的数量，并将输入转换为整数
    nickels = int(input("Number of nickels: "))
    # 请求用户输入1美分硬币的数量，并将输入转换为整数
    pennies = int(input("Number of pennies: "))

    # 定义每种硬币的价值（单位：美分）
    QUARTER_VALUE = 25  # 25美分硬币的价值
    DIME_VALUE = 10  # 10美分硬币的价值
    NICKEL_VALUE = 5  # 5美分硬币的价值
    PENNY_VALUE = 1  # 1美分硬币的价值

    # 根据硬币数量和各自的价值计算总价值（单位：美分）
    total_cents = (quarters * QUARTER_VALUE) + (dimes * DIME_VALUE) + \
                  (nickels * NICKEL_VALUE) + (pennies * PENNY_VALUE)

    # 将总美分数转换为美元和剩余的美分数
    dollars = total_cents // 100  # 计算总美元数
    remaining_cents = total_cents % 100  # 计算剩余的美分数

    # 打印计算出的总金额（美元和美分）
    print(f"The total is {dollars} dollar(s) and {remaining_cents} cent(s)")


calculate_total_interactive()
```

:::

## Question 04: Mad as a Hatter, Thin as a Dime

Write a program that asks the user to enter an amount of money in the format of dollars and remaining cents. The program should calculate and print the minimum number of coins (quarters, dimes, nickels and pennies) that are equivalent to the amount input by the user.

Your program should interact with the user, and display its results, **exactly** as it shows in the following example:

```text
Please enter your amount of dollars and cents, in two separate lines.
4
37
4 dollars and 37 cents are: 17 quarters, 1 dimes, 0 nickels and 2 pennies
```

**Hint**: In order to find the minimum number of coins, first find the maximum number of quarters that fit within the amount of money input by the user, then find the maximum number of dimes that fit in the remaining amount, and so on.

:::code-tabs

@tab my solution

```python
"""
Author: [Alexa]
Assignment / Part: HW1 - Q4
Due Date: 30 Dec 2023, 8:00 am
I pledge that I have completed this assignment without collaborating with anyone else,
in conformance with the Bornforthis 1v1 School of Computer Science and Procedures on Academic Misconduct.
"""
amount = [int(input("Please enter your amount of dollar(s) and cent(s) in two separate lines:\n")), int(input())]
total_in_cents = amount[0] * 100 + amount[1]
n_quarters = int(amount[0] * 100 / 25 + amount[1] // 25)
n_dimes = int((total_in_cents - n_quarters * 25) // 10)
n_nickels = int((total_in_cents - n_quarters * 25 - n_dimes * 10) // 5)
n_pennies = int(total_in_cents - n_quarters * 25 - n_dimes * 10 - n_nickels * 5)
print(f"{amount[0]} dollar(s) and {amount[1]} cent(s) are: \n{n_quarters} quarters, {n_dimes} dimes, {n_nickels} nickels, and {n_pennies} pennies.")
```

@tab answer

```python
# 提示用户输入美元和美分
print("Please enter your amount of dollars and cents, in two separate lines.")
dollars = int(input())
cents = int(input())

# 首先将美元转换为美分
total_cents = dollars * 100 + cents

# 计算四种硬币的数量
quarters = total_cents // 25
remaining = total_cents % 25

dimes = remaining // 10
remaining = remaining % 10

nickels = remaining // 5
pennies = remaining % 5

# 输出结果
# print(f"{dollars} 美元和 {cents} 美分可以兑换为：{quarters} 个25美分，{dimes} 个10美分，{nickels} 个5美分和 {pennies} 个1美分")
print(f"{dollars} dollars and {cents} cents are: {quarters} quarters, {dimes} dimes, {nickels} nickels and {pennies} pennies")
```

:::

## Question 05: BMI Calculator

Body mass index (BMI) is a number calculated from a person’s weight and height. The BMI is a convenient rule of thumb used to broadly categorize the weight of a person based on tissue mass (muscle, body fat, and bone) and height (although it's really rather unreliable otherwise). The formula for BMI is the following:

::: tip BMI calculation formula 

BMI = weight / height - squared

:::

### PART A:

Write a program that prompts for metric weight and height and outputs the BMI. For example, an execution could look like this:

```text
Please enter weight in kilograms: 50
Please enter height in meters: 1.58
BMI is: 20.0288415
```

:::code-tabs

@tab my solution

```python
"""
Author: [Alexa]
Assignment / Part: HW1 - Q5
Due Date: 30 Dec 2023, 8:00 am
I pledge that I have completed this assignment without collaborating with anyone else,
in conformance with the Bornforthis 1v1 School of Computer Science and Procedures on Academic Misconduct.
"""
# part a
weight = int(input("Please enter weight in kilograms: "))
height = float(input("Please enter height in meters: "))
BMI = weight / (height ** 2)
print(f"BMI is: {BMI}")
```

:::

### PART B:

Write a program that prompts for weight in pounds and height in inches, converts the values to metric, and then calculates the BMI.

**Note**: 1 pound is equal to 0.453592 kilograms and 1 inch is equal to 0.0254 meters.

For example, an execution could look like this:

```text
Please enter weight in pounds: 135
Please enter height in inches: 71
BMI is: 18.82849431
```

Both part A and part B must be written in two separate py files.

:::code-tabs

@tab my solution

```python
"""
Author: [Alexa]
Assignment / Part: HW1 - Q5
Due Date: 30 Dec 2023, 8:00 am
I pledge that I have completed this assignment without collaborating with anyone else,
in conformance with the Bornforthis 1v1 School of Computer Science and Procedures on Academic Misconduct.
"""
# part b
weight = int(input("Please enter weight in pounds: "))
height = float(input("Please enter height in inches: "))
BMI = (weight * 0.453592) / ((height * 0.0254) ** 2)
print(f"BMI is: {BMI}")
```

:::

## Question 06: Don't Believe The Gacha

In certain video games, you can spend either in-game currency or real money to get a series of often-random items to "improve" your gameplay experience. These mechanics are commonly referred to as **[gacha](https://en.wikipedia.org/wiki/Gacha_game)**, or **[loot boxes](https://en.wikipedia.org/wiki/Loot_box)**, and are some of the most **[controversial](https://www.theverge.com/2019/2/19/18226852/loot-boxes-gaming-regulation-gambling-free-to-play)** topics in video game development.

Let's pretend that the chances of getting a rare item in a video game are from **0% to 100%**, and our video game has a player start at level 1 and end at level 5 . At level 1 , the player has an **100%** chance of getting a rare item. At level 2 the player has an **80%** chance of getting a rare item. At level 3 , **60%**. At level 4 , **40%**, and at level 5 , only **20%**.

Write a program that asks the user for their current level in the video game, determines whether they have received a rare item in a loot box, and lets them know in a message.

```text
What is your level? 1
Your loot box contains a rare item: True

What is your level? 2
Your loot box contains a rare item: False

What is your level? 3
Your loot box contains a rare item: True

What is your level? 4
Your loot box contains a rare item: False

What is your level? 5
Your loot box contains a rare item: False
```

:::code-tabs

@tab my solution

```python
import random
"""
Author: [Alexa]
Assignment / Part: HW1 - Q5
Due Date: 30 Dec 2023, 8:00 am
I pledge that I have completed this assignment without collaborating with anyone else,
in conformance with the Bornforthis 1v1 School of Computer Science and Procedures on Academic Misconduct.
"""
level = int(input("What is your current level? >>> "))
# 1 - 100% (5/5), 2 - 80% (4/5), 3 - 60% (3/5), 4 - 40% (2/5), 5 -20% (1/5)
target = random.randint(1, 6)
result = target % 5 > (level - 1)
print(f"Your hoot box contains a rare item: {result}")
```

@tab answer 1

```python
def gacha_result(level):
    # 根据等级计算获得稀有物品的概率（每升一级，减少20%概率）
    chance = 120 - 20 * level

    # 随机生成一个1到100的数字，如果这个数字小于或等于计算出的概率，则返回True（表示获得稀有物品）
    return random.randint(1, 100) <= chance

# 获取用户输入的等级
user_level = int(input("What is your level? "))

# 调用函数判断是否获得稀有物品
got_rare_item = gacha_result(user_level)

# 输出结果
print(f"Your loot box contains a rare item: {got_rare_item}")
```

@tab answer 2

```python
random_num = random.randint(1, 100)
user_message =int(input("What is your level? "))
possibility = (5 - user_message + 1) * 20
comparison = random_num <= possibility
user_message_1 = print(f"Your loot box contains a rare item: {comparison}")
```

:::

## Question 07: Collective Timetables

Suppose Semi and Ollie worked for some time, and we want to calculate the total time both of them worked.

Write a program that reads a number of days, hours, and minutes minutes each of them worked,and prints the total time both of them worked together as days, hours, and minutes.

For example, an execution could look like this:

```text
Please enter the number of days Semi has worked: 2
Please enter the number of hours Semi has worked: 12
Please enter the number of minutes Semi has worked: 15
Please enter the number of days Ollie has worked: 3
Please enter the number of hours Ollie has worked: 15
Please enter the number of minutes Ollie has worked: 20
The total time both of them worked together is: 6 days, 3 hours and 35 minutes.
```

**Note**: There are 24 hours in a day and 60 minutes in an hour.

:::code-tabs

@tab my solution

```python
"""
Author: [Alexa]
Assignment / Part: HW1 - Q5
Due Date: 30 Dec 2023, 8:00 am
I pledge that I have completed this assignment without collaborating with anyone else,
in conformance with the Bornforthis 1v1 School of Computer Science and Procedures on Academic Misconduct.
"""
Semi_days = int(input("Please enter the number of days Semi worked: "))
Semi_hours = int(input("Please enter the number of hours Semi worked: "))
Semi_minutes = int(input("Please enter the number of minutes Semi worked: "))
Semi_total = Semi_days * 24 * 60 + Semi_hours * 60 + Semi_minutes
Ollie_days = int(input("Please enter the number of days Ollie worked: "))
Ollie_hours = int(input("Please enter the number of hours Ollie worked: "))
Ollie_minutes = int(input("Please enter the number of minutes Ollie worked: "))
Ollie_total = Ollie_days * 24 * 60 + Ollie_hours * 60 + Ollie_minutes
Total = Semi_total + Ollie_total
days = int(Total // (24 * 60))
hours = int((Total - days * 24 * 60) // 60)
minutes = int(Total - days * 24 * 60 - hours * 60)
print(f"The total time both of them worked together is: {days} day(s), {hours} hour(s), amd {minutes} minute(s).")
```

@tab answer

```python
# 获取用户输入的年份
year = int(input("Please enter a year greater than 2023:\n"))
# 常量定义
current_population = 330109174  # 当前人口
seconds_in_year = 365 * 24 * 60 * 60  # 一年中的秒数，假设每年有365天
current_year = 2023  # 当前年份

# 变化率
birth_rate = seconds_in_year / 7  # 每7秒出生一个人，计算每年的出生人数
death_rate = seconds_in_year / 15  # 每15秒死亡一个人，计算每年的死亡人数
immigration_rate = seconds_in_year / 42  # 每42秒有一个新移民，计算每年的移民人数
emigration_rate = seconds_in_year / 75  # 每1.25分钟有一个人移出国外，计算每年的移民人数（1.25分钟等于75秒）

# 计算每年的人口变化量
annual_change = birth_rate - death_rate + immigration_rate - emigration_rate

# 根据年份计算预估人口
estimated_population = current_population + (year - current_year) * annual_change
estimated_population = int(estimated_population)  # 将结果转换为整数并返回

# 调用函数并打印结果
print(f"The population in year {year} will be {estimated_population}")


# 获取Semi工作的天数，并将输入转换为整数
days_semi = int(input("Please enter the number of days Semi has worked: "))
# 获取Semi工作的小时数，并将输入转换为整数
hours_semi = int(input("Please enter the number of hours Semi has worked: "))
# 获取Semi工作的分钟数，并将输入转换为整数
minutes_semi = int(input("Please enter the number of minutes Semi has worked: "))

# 获取Ollie工作的天数，并将输入转换为整数
days_ollie = int(input("Please enter the number of days Ollie has worked: "))
# 获取Ollie工作的小时数，并将输入转换为整数
hours_ollie = int(input("Please enter the number of hours Ollie has worked: "))
# 获取Ollie工作的分钟数，并将输入转换为整数
minutes_ollie = int(input("Please enter the number of minutes Ollie has worked: "))

# 将Semi的工作时间全部转换为分钟
total_minutes_semi = days_semi * 24 * 60 + hours_semi * 60 + minutes_semi
# 将Ollie的工作时间全部转换为分钟
total_minutes_ollie = days_ollie * 24 * 60 + hours_ollie * 60 + minutes_ollie

# 计算Semi和Ollie的总工作时间（以分钟为单位）
total_minutes = total_minutes_semi + total_minutes_ollie

# 将总分钟数转换为天数
total_days = total_minutes // (24 * 60)
# 计算剩余的分钟数，并将其转换为小时数
total_hours = (total_minutes % (24 * 60)) // 60
# 计算剩余的分钟数
total_minutes = (total_minutes % (24 * 60)) % 60

# 打印Semi和Ollie总共工作的时间，格式为天数、小时数和分钟数
print(f"The total time both of them worked together is: {total_days} days, {total_hours} hours and {total_minutes} minutes.")
```



:::
