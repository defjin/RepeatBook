num = 11

while True:
    num_10 = str(num)
    #1
    #num_2 = bin(num)[2:] 
    #num_8 = oct(num)[2:] 
    #2
    #num_2 = bin(num).replace("0b","")
    #num_8 = oct(num).replace("0o","")
    #3
    num_2 = "{0:b}".format(num)
    num_8 = "{0:o}".format(num)
    # 16진수는 0x

    if num_2 == num_2[::-1] and num_8 == num_8[::-1] and \
        num_10 == num_10[::-1]:
        print(num)
        break
    num += 2
    
