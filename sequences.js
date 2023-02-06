
answer = ["E","D","C","D","A","C","C","F","B","E","E","F","C","E","D","A","B","G","F","G","B","D","A","I","H","I","I","E","D","E","G","H","B","J","G","A","F","B","G","G","H","C","A","C","K","A","G","O","F","M","I","B","E","H","F","J","C","J","B","M","E","F","I","I"]
nums=[1.1, 1.2, 2.1, 2.2, 3.1, 3.2, 4.1, 4.2, 5.1, 5.2, 6.1, 6.2, 7.1, 7.2, 8.1, 8.2, 9.1, 9.2, 10.1, 10.2, 11.1, 11.2, 12.1, 12.2, 13.1, 13.2, 14.1, 14.2, 15.1, 15.2, 16.1, 16.2, 17.1, 17.2, 18.1, 18.2, 19.1, 19.2, 20.1, 20.2, 21.1, 21.2, 22.1, 22.2, 23.1, 23.2, 24.1, 24.2, 25.1, 25.2, 26.1, 26.2, 27.1, 27.2, 28.1, 28.2, 29.1, 29.2, 30.1, 30.2, 31.1, 31.2, 32.1, 32.2]
pics = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9', '10', '10', '11', '11', '12', '12', '13', '13', '14', '14', '15', '15', '16', '16', '17', '17', '18', '18', '19', '19', '20', '20', '21', '21', '22', '22', '23', '23', '24', '24', '25', '25', '26', '26', '27', '27', '28', '28', '29', '29', '30', '30', '31', '31', '32', '32']

pics1=['1-4', '1-4', '1-4', '1-4', '1-4', '1-4', '1-4', '1-4', '5-8', '5-8', '5-8', '5-8', '5-8', '5-8', '5-8', '5-8', '9-12', '9-12', '9-12', '9-12', '9-12', '9-12', '9-12', '9-12', '13-16', '13-16', '13-16', '13-16', '13-16', '13-16', '13-16', '13-16', '17-20', '17-20', '17-20', '17-20', '17-20', '17-20', '17-20', '17-20', '21-24', '21-24', '21-24', '21-24', '21-24', '21-24', '21-24', '21-24', '25-28', '25-28', '25-28', '25-28', '25-28', '25-28', '25-28', '25-28', '29-32', '29-32', '29-32', '29-32', '29-32', '29-32', '29-32', '29-32']
options = ['ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEFGHI', 'ABCDEFGHI', 'ABCDEFGHI', 'ABCDEFGHI', 'ABCDEFGHI', 'ABCDEFGHI', 'ABCDEFGHI', 'ABCDEFGHI', 'ABCDEFGHIJKL', 'ABCDEFGHIJKL', 'ABCDEFGHIJKL', 'ABCDEFGHIJKL', 'ABCDEFGHIJKL', 'ABCDEFGHIJKL', 'ABCDEFGHIJKL', 'ABCDEFGHIJKL', 'ABCDEFGHIJKL', 'ABCDEFGHIJKL', 'ABCDEFGHIJKL', 'ABCDEFGHIJKL', 'ABCDEFGHIJKL', 'ABCDEFGHIJKL', 'ABCDEFGHIJKL', 'ABCDEFGHIJKL', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR', 'ABCDEFGHIJKLMNOPQR']
placesAns=[1.1, 1.2, 2.1, 2.2, 3.1, 3.2, 4.1, 4.2, 5.1, 5.2, 6.1, 6.2, 7.1, 7.2, 8.1, 8.2, 9.1, 9.2, 10.1, 10.2, 11.1, 11.2, 12.1, 12.2, 13.1, 13.2, 14.1, 14.2, 15.1, 15.2, 16.1, 16.2, 17.1, 17.2, 18.1, 18.2, 19.1, 19.2, 20.1, 20.2, 21.1, 21.2, 22.1, 22.2, 23.1, 23.2, 24.1, 24.2, 25.1, 25.2, 26.1, 26.2, 27.1, 27.2, 28.1, 28.2, 29.1, 29.2, 30.1, 30.2, 31.1, 31.2, 32.1, 32.2]
minutes= 15
totalCount = nums.length - 1
filename = "sequences"
function score(answer,placesAns){
    score = 0
    for(var i=0;i<answer.length;i++) {
        if (answer[i]==placesAns[i]){score+=1}
    }
    return (score + " / " + answer.length)
}
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
count=0
function genq1(){document.getElementById("numtit").innerText = count+1 + "/" + nums.length
    // for(var i=0;i<options[count].length;i++){
    //     console.log(document.getElementById("input" + options[count][i]).checked +options[count][i])
    //     if (document.getElementById("input" + options[count][i]).checked){
    //         placesAns[count]=options[count][i]
    //     }

    // }
    console.log(placesAns)


    noi()
    document.getElementById("ques").src = "/sequences/"+ pics[count] +".png"
    document.getElementById("nums").innerText = nums[count]
    // document.getElementById("opts").innerText = options[count]
    
    loop()
   
    
}
function genq(){document.getElementById("numtit").innerText = count+1 + "/" + nums.length
    if (count == answer.length){
        document.getElementById("ques").src = ""
    var now = new Date();
    document.getElementById("nums").innerText = "test:'" + filename + "'," +"\n \n" + "score : " + score(answer,placesAns) +",\n \n" + "time: '" +now +"',\n \n" + "answers:" +"[" + placesAns + "]," +"\n \n" + "correct:" +"[" + answer + "]," +"\n \n" + "wronganswers:" +"[" + wrongs(placesAns,answer) + "]"
    document.getElementById("ata").innerHTML=""
    return
    }
    for(var i=0;i<options[count].length;i++){
        // console.log(document.getElementById("input" + options[count][i]).checked +options[count][i])
        if (document.getElementById("input" + options[count][i]).checked){
            placesAns[count]=options[count][i]
        }

    }
    console.log(count)


    noi()
    count+=1
    document.getElementById("ques").src = "/sequences/"+ pics[count] +".png"
    document.getElementById("nums").innerText = nums[count]
    // document.getElementById("opts").innerText = options[count]
    
    loop()
   
    
}

function loop(){
    ids=[]
    console.log("loop")
 
    
 



// for(var i=0;i<options[count].length;i++){
//     ids.push("div"+i)
 
// }
    
    //console.log(arp)
    colocou=0
        for (var j=0;j<options[count].length;j++){
       targ= "ata"
       
    dinpans2= document.createElement("input")
    dinpans2.id="input"+options[count][j]
    dinpans2.value=options[count][j]
    
    dinpans2.type = "radio"
    dinpans2.name = "options"; dinpans2.addEventListener("keydown",function (event){
        if (event.keyCode == 13){
            genq()
        }
    }
    )
    dinpanslab= document.createElement("label")
    dinpanslab.for = "input"+options[count][j]
    dinpanslab.innerText=options[count][j]
    
    // dinpans2.style.backgroundColor = mycolour1
    //colors
// //    if(j!=theans.length-3 & j<theans.length ){dinpans2.style.backgroundColor=googygoo[colocou];colocou+=1}
    // // dinpans2.style.width="15";
    // // dinpans2.style.height="20"; 
    // // dinpans2.setAttribute("oninput","ValidatePassKey2(id,1)") 
    //messing with . decimal
    // if(j==theans.length-3 & j<theans.length ){dinpans2.setAttribute("oninput","")}
   
    document.getElementById(targ).appendChild(dinpans2)
    document.getElementById(targ).appendChild(dinpanslab)
    }

}


function noi(){duse=document.getElementById("ata")

for(var i=duse.childNodes.length-1;i>0-1;i--){duse.removeChild(duse.childNodes[i]);}
//console.log(duse.childNodes.length)
}
document.getElementById("ata").removeChild(duse.childNodes[0])

function timer(){const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;
    
    
    const d = new Date();
    
    var countDownDate =  d.getTime() + minutes * minute;
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="time"
      document.getElementById("time").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      // If the count down is finished, write some text
      if (distance < -1000 & count<totalCount) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
        document.getElementById("ques").src = "DUNCE.png";
        document.getElementById("nums").innerHTML = "EXPIRED";
      
        document.getElementById("ata").innerHTML = "EXPIRED";
        rduse=document.getElementById("nextdiv")
    
        rduse.remove();
    
         
      }
    }, 1000);}
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
    
// var seq = json.parse(sequences)
// alert(seq[0].name)
// // readTextFile("sequences.json", function(text){
// //     var data = JSON.parse(text);
// //     alert(data.name);
// // });