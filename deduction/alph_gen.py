alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q"]

places = ['D', 'E', 'E', 'E', 'H', 'H', 'H', 'F', 'F','F', 'F', 'N', 'D', 'D', 'D',
 'D', 'F', 'E', 'F', 'F', 'E', 'E', 'E', 'E', 'G']

take=[]
# print(alphabets.index("D"))
for i in range(len(places)) :
    take.append("")
    for j in range(alphabets.index(places[i])+1):
        take[i]+=alphabets[j]
print(take)

result = ['ABCD', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCDEFGH', 'ABCDEFGH', 'ABCDEFGH', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEFGHIJKLMN', 'ABCD', 'ABCD', 'ABCD', 'ABCD', 'ABCDEF', 'ABCDE', 'ABCDEF', 'ABCDEF', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCDEFG']