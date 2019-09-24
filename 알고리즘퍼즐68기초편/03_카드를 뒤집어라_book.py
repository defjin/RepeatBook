N = 100
cards = [False] * N 

for i in range(2, N+1):
    j= i-1
    while j < len(cards):
        cards[j] = not cards[j]
        j += i

for i in range(0,N):
    if not cards[i]:
        print(i+1, end=' ')

print()
print("################################")

for i in range(1, 101):
    flag = False
    for j in range(1,101):
        if i%j == 0:
            flag = not flag
    if flag:
        print(i, end=' ')