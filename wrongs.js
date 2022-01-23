a="a"
b="b"
c="c"
d="d"
e="e"
//if capital add the rest :) , I'm not your daddy
function wrongs(given,correct){
    let holdwrongs =[]
    if (given.length==correct.length){
for (let index = 0; index < given.length; index++) {
    const element = given[index];
    if(element!=correct[index]){
        holdwrongs.push([given[index],index+1, ":",correct[index]])
    }
    
}
return(holdwrongs)
    }
    else{return("arrays not the same")}

}

console.log(wrongs(['N', 'Y', 'N', 'Y', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'N', 'N', 'N', 'N', 'Y', 'Y', 'Y', 'N', 'Y', 'Y', 'Y', 'N', 'Y', 'N', 'Y', 'Y', 'N', 'Y', 'N', 'N', 'Y', 'Y', 'N', 'Y', 'Y', 'Y', 'Y', 'Y', 'N', 'N', 'Y', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 31.1, 31.2, 32.1, 32.2],
['N', 'Y', 'N', 'Y', 'Y', 'N', 'N', 'N', 'Y', 'N', 'Y', 'N', 'N', 'Y', 'N', 'N', 'Y', 'Y', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'N', 'Y', 'N', 'N', 'Y', 'N', 'N', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'N', 'Y', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'Y', 'N', 'N', 'Y', 'Y', 'N', 'N']                   
).length)

console.log(['N', 'Y', 'N', 'Y', 'Y', 'N', 'N', 'N', 'Y', 'N', 'Y', 'N', 'N', 'Y', 'N', 'N', 'Y', 'Y', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'N', 'Y', 'N', 'N', 'Y', 'N', 'N', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'N', 'Y', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'Y', 'N', 'N', 'Y', 'Y', 'N', 'N'].length)