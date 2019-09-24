num = 11

while True:
    tempnum = num
    num10 = str(num)
    num2 = ''
    num8 = ''
    while tempnum>0:
        num2 += str(tempnum % 2)
        tempnum = tempnum // 2
    num2 = num2[::-1]

    tempnum = num
    while tempnum>0:
        num8 += str(tempnum % 8)
        tempnum = tempnum // 8
    num8 = num8[::-1]
    if num2 == num2[::-1] and num8 == num8[::-1] and num10 == num10[::-1]:
        break
    num += 1
    
print(num)