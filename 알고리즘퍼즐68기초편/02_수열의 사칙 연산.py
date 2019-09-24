def calc2(a,b,oper):
    result = 0
    if oper == '+':
        result = a+b
    elif oper == '-':
        result = a-b
    elif oper == '*':
        result = a*b
    else:
        if b != 0:
            result = a/b
    return result


def calc3(a,b,c, oper1, oper2):
    result = 0
    if oper1 == '+' and oper2 == '+':
        result = a+b+c
    elif oper1 == '+' and oper2 == '-':
        result = a+b-c
    elif oper1 == '+' and oper2 == '*':
        result = a+b*c
    elif oper1 == '+' and oper2 == '/':
        if c !=0:
            result = a+b/c
    elif oper1 == '-' and oper2 == '+':
        result = a-b+c
    elif oper1 == '-' and oper2 == '+':
        result = a-b+c
    elif oper1 == '-' and oper2 == '-':
        result = a-b-c
    elif oper1 == '-' and oper2 == '*':
        result = a-b*c
    elif oper1 == '-' and oper2 == '/':
        if c != 0:
            result = a-b/c
    elif oper1 == '*' and oper2 == '+':
        result = a*b+c
    elif oper1 == '*' and oper2 == '-':
        result = a*b-c
    elif oper1 == '*' and oper2 == '*':
        result = a*b*c
    elif oper1 == '*' and oper2 == '/':
        if c != 0:
            result = a*b/c
    elif oper1 == '/' and oper2 == '+':
        if b != 0:
            result = a/b+c
    elif oper1 == '/' and oper2 == '-':
        if b != 0:
            result = a/b-c
    elif oper1 == '/' and oper2 == '*':
        if b != 0:
            result = a/b*c
    elif oper1 == '/' and oper2 == '/':
        if b != 0 and c != 0:
            result = a/b/c
    return result



opers = ['+','-','/','*', '']
opers_list = []
for oper in opers:
    for oper2 in opers:
        for oper3 in opers:
            opers_list.append((oper,oper2,oper3))
answers = []
for i in range(1000,10000):
    str_i = str(i)
    for opers in opers_list:
        result = 0
        if opers.count('') == 3:
            continue
        if opers[0] == '' and opers[1]== '':
            a,b = int(str_i[:3]), int(str_i[3])
            result = calc2(a,b,opers[2])
        elif opers[1] == '' and opers[2]=='':
            a,b = int(str_i[:1]), int(str_i[1:])
            result = calc2(a,b,opers[0])
        elif opers[0] == '' and opers[2] == '':
            a,b = int(str_i[:2]), int(str_i[2:])
            result = calc2(a,b,opers[1])
        elif opers[0] == '':
            a,b,c = int(str_i[:1]), int(str_i[2]), int(str_i[3])
            result = calc3(a,b,c,opers[1],opers[2])
        elif opers[1] == '':
            a,b,c = int(str_i[0]), int(str_i[1:3]), int(str_i[3])
            result = calc3(a,b,c,opers[0],opers[2])
        elif opers[2] == '':
            a,b,c = int(str_i[0]), int(str_i[1]), int(str_i[2:])
            result = calc3(a,b,c,opers[0],opers[1])
        
        if str(result) == str_i[::-1]:
            answers.append(i)

print(answers)
        




