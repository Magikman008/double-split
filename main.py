from random import randint, random
from numpy import linspace
import matplotlib.pyplot as plt
import math
import numpy as np

y = 5##
x = 100##
d_del_lambda = 5##
L = 5##
distance = 8##

# dels=3

A = L/(math.pi**2 * d_del_lambda)
# MAX = A
# count = int(input("Введите количество точек:\n"))
# counter = int(input("Если счётчик установлен введите 0, если нет - 1\n"))
count = 1000
counter = 1

## рандом интерференционная картина
def my_rand(x1, x2):
    # eps = 0.5
    # xx = random() * (x2 - x1) + 1
    xx = randint(1, int(x2 - x1 + 1)) #+ random() * 0.1
    x_c = (x2 - x1 + 1) / 2
    # для х равного 10
    # k = x_c/A * (x2 - x1 + 1) ** 2
    k = x_c/A * (x2 - x1 + 1) ** 3 * 100
    # print(k, x_c, A)
    # x_c = 0
    y_X = (A/ xx**2) * (math.sin(L/(math.pi() * d_del_lambda * xx)))**2
    
    # print(y_X)

    #x = 100

    # if L == 1:  y_X *= 1e+33 * 0.485
    # if L == 5:  y_X *= 1e+8 * 1.5
    # y_X *= 1e+3 * 1.7
    
    #x = 10
    # if L == 5:  y_X *= 1e+4 * 0.8

    y_X *= k
    # print(y_X)
    # if (y_X > x_c):
    #     y_X = my_rand(x1, x2)
        # print(y_X)

    znak = randint(1,2)
    if znak == 1:
        ans = -y_X + x_c
    else:
        ans = y_X + x_c


    ans += x1 - 1 #+ 1 - 0.5
    if ans < 0 + eps:
        print(ans)
        ans = my_rand(x1, x2)
        # ans *= -1
        # ans += 1
    if ans > x - eps:
        print(ans)
        ans = my_rand(x1, x2)
        # ans = ans - x + 1

    # print(ans)
    return ans #+ random()*0.6




a = [0] * x
# a_dels = [0] * (x // dels + 1)

i = 0

plt.figure(figsize=(10,14))

eps = 0.05
## рандом интерференционная картина
while (counter == 1 and i < count):
    y_now = random() * y
    if y_now < eps:
        y_now += eps
    if y_now > y - eps:
        y_now -= eps

    slot = randint(1,2)
    if slot == 1:
        x_now = my_rand(1,x - distance)
    else:
        x_now = my_rand(distance + 1,x)
    # x_now = my_rand(1,x)



    # x_now = my_rand()
    # print("щель: {:1}, конечная координата: ({:2};{:3})".format(slot, x_now, y_now))
    a[int(x_now)] += 1
    # a_dels[int(x_now / dels)] += 1
    plt.scatter(x_now, y_now, s=10)
    i+=1
    
x_range = [0, x, x, 0, 0]
y_range = [0, 0, y, y, 0]
plt.plot(x_range, y_range,
        color = 'r',
        linewidth = 1)
# plt.grid(axis='x', which='major',
#         color = 'k', 
#         linewidth = 1)
plt.show()
## рандом гаусса пока не сделан генератор
# while (counter == 0 and i < count):
#     slot = randint(1,3)
#     x_now = randint(1,x)
#     y_now = randint(1, y - 1)
#     a[y_now] += 1
#     print("щель: {:1}, конечная координата: ({:2};{:3})".format(slot, x_now, y_now))
#     i+=1

print(*a)

X = [ i for i in range(x)]
plt.plot(X, a)  
plt.xlabel('x') 
plt.ylabel('y') 
plt.show()

# X = [ i*dels for i in range(x//dels)]
# plt.plot(X, a_dels)  
# plt.xlabel('x') 
# plt.ylabel('y') 
# plt.show()


## рандом интерференционная картина
# def my_rand(x1, x2):
#     # eps = 0.5
#     # xx = random() * (x2 - x1) + 1
#     xx = randint(1, x2 - x1 + 1) + random()
#     x_c = (x2 - x1 + 1) / 2
#     k = x_c/A * (x2 - x1 + 1) ** 3 * 1
#     # print(k, x_c, A)
#     # x_c = 0
#     y_X = (A/ xx**2) * (math.sin(L/(math.pi * d_del_lambda * xx)))**2
    
#     # print(y_X)

#     #x = 100

#     # if L == 1:  y_X *= 1e+33 * 0.485
#     # if L == 5:  y_X *= 1e+8 * 1.5
#     # y_X *= 1e+3 * 1.7
    
#     #x = 10
#     # if L == 5:  y_X *= 1e+4 * 0.8

#     y_X *= k
#     # print(y_X)
#     # if (y_X > x_c):
#     #     y_X = my_rand(x1, x2)
#         # print(y_X)

#     znak = randint(1,2)
#     if znak == 1:
#         ans = -y_X + x_c
#     else:
#         ans = y_X + x_c


#     ans += x1 - 1 #+ 1 - 0.5
#     if ans < 0 + eps:
#         print(ans)
#         ans = my_rand(x1, x2)
#         # ans *= -1
#         # ans += 1
#     if ans > x - eps:
#         print(ans)
#         ans = my_rand(x1, x2)
#         # ans = ans - x + 1

#     # print(ans)
#     return ans