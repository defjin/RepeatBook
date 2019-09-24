cards = [1]*100
for i in range(2,100):
    temp = i
    while temp < 101:
        cards[temp-1] = 1 - cards[temp-1]
        temp += i

print(cards)