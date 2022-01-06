alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q"]

places = ["c","d","d","e","f","f","d","d","d","d","f","d","e","f","e","e","d","d","e","e","e","e","e","e","d","e","e","e","f","c","c","c","c"]

take=[]
# print(alphabets.index("D"))
for i in range(len(places)) :
    take.append(i + 1)
    

print(take)

result = ['ABC', 'ABCD', 'ABCD', 'ABCDE', 'ABCDEF', 'ABCDEF', 'ABCD', 'ABCD', 'ABCD', 'ABCD', 'ABCDEF', 'ABCD', 'ABCDE', 'ABCDEF', 'ABCDE', 'ABCDE', 'ABCD', 'ABCD', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCD', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCDEF', 'ABC', 'ABC', 'ABC', 'ABC']