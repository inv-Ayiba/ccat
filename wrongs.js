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

console.log(wrongs([b,b,d,b,a,b,b,c,d,d,c,a,d,c,b,c,c,a,c,b,a,b,c,d,d,a,a,c,d,a],
                   [b,b,d,b,a,b,c,d,d,b,c,c,d,b,c,c,b,a,c,a,a,a,c,d,d,a,a,b,d,a]))