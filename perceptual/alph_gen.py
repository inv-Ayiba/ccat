alphabets = ["A","B","C","D","E","F","G","H"]

places = [ "D","E","D","E","D","E","D","E","E","E","D","E","E","E","D","E","D","E","D","D","D","D","D","D","E","E","E","D","E","E","E","D"	]

take=[]
print(alphabets.index("D"))
for i in range(len(places)) :
    take.append("")
    for j in range(alphabets.index(places[i])+1):
        take[i]+=alphabets[j]
print(take)

result = ['ABCD', 'ABCDE', 'ABCD', 'ABCDE', 'ABCD', 'ABCDE', 'ABCD', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCD', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCD', 'ABCDE', 'ABCD', 'ABCDE', 'ABCD', 'ABCD', 'ABCD', 'ABCD', 'ABCD', 'ABCD', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCD', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCD']