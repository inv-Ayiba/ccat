function arrToLowerCase(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
        
    }
    return arr
}

function score(answer,placesAns){
    score = 0
    for(var i=0;i<answer.length;i++) {
        if(answer[i].length <2){
        if (answer[i]==placesAns[i]){score+=1}
    } 
    else if (answer[i].length >1){
        for(var k=0;k<answer.length;k++) { 
        if (answer[i]==placesAns[i][k]){score+=1}
    } 
}
    }
    return (score + " / " + answer.length)
}

timi = ["c","c","c","a","c","a","c","b","c","c","f","g","c","b","c","a","e","b","a","c","c","b","d","a","b"] ;
answer = ["c","b","d","a","e","h","bg","d","c","f","ae","g","d","a","b","a","e","c","e","f","a","d","cd","e","b"]

options = ['ABC', 'ABCD', 'ABCD', 'ABCDE', 'ABCDEF', 'ABCDEF', 'ABCD', 'ABCD', 'ABCD', 'ABCD', 'ABCDEF', 'ABCD', 'ABCDE', 'ABCDEF', 'ABCDE', 'ABCDE', 'ABCD', 'ABCD', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCD', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCDEF', 'ABC', 'ABC', 'ABC', 'ABC']
// console.log(score(answer,timi))
// console.log(arrToLowerCase(options))

options2= ['abc',    'abcd',   'abcd',   'abcde', 'abcdef', 'abcdef', 'abcd',   'abcd', 'abcd',   'abcd',   'abcdef', 'abcd','abcde',  'abcdef', 'abcde',  'abcde','abcd',   'abcd',   'abcde',  'abcde','abcde',  'abcde',  'abcde',  'abcde','abcd',   'abcde',  'abcde',  'abcde','abcdef', 'abc', 'abc',    'abc','abc']

console.log(options.length == options2.length)