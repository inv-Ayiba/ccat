
answer=["N","Y","N","Y","Y","N","N","N","Y","N","Y","N","N","Y","N","N","Y","Y","Y","N","Y","N","Y","N","Y","N","Y","N","N","Y","N","N","Y","N","N","Y","N","Y","N","Y","N","N","Y","N","N","N","N","N","N","N","N","N","N","Y","N","N","Y","Y","N","N"]
nums= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"]
pics = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"]
options = ['1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234', '1234']
anstype="YN"
placesAns=[ 3.1, 3.2, 4.1, 4.2, 5.1, 5.2, 6.1, 6.2, 7.1, 7.2, 8.1, 8.2, 9.1, 9.2, 10.1, 10.2, 11.1, 11.2, 12.1, 12.2, 13.1, 13.2, 14.1, 14.2, 15.1, 15.2, 16.1, 16.2, 17.1, 17.2, 18.1, 18.2, 19.1, 19.2, 20.1, 20.2, 21.1, 21.2, 22.1, 22.2, 23.1, 23.2, 24.1, 24.2, 25.1, 25.2, 26.1, 26.2, 27.1, 27.2, 28.1, 28.2, 29.1, 29.2, 30.1, 30.2, 31.1, 31.2, 32.1, 32.2]
foldername ="constructs/"
filename=foldername
minutes = 8.05
count=0
countyn=0
totalCount = nums.length - 1
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

function genq1(){document.getElementById("numtit").innerText = count+1 + "/" + nums.length
    // for(var i=0;i<options[count].length;i++){
    //     console.log(document.getElementById("input" + options[count][i]).checked +options[count][i])
    //     if (document.getElementById("input" + options[count][i]).checked){
    //         placesAns[count]=options[count][i]
    //     }

    // }
    // console.log(placesAns)


    noi()
    document.getElementById("ques").src = foldername + pics[count] +".png"
    document.getElementById("nums").innerText = nums[count]
    // document.getElementById("opts").innerText = options[count]
    
    loop()
   
    
}
function genq(){document.getElementById("numtit").innerText = count+1 + "/" + nums.length
    
    if (count == nums.length-1){
        document.getElementById("ques").src = ""
    var now = new Date();
    document.getElementById("nums").innerText = "test:'" + filename + "'," +"\n \n" + "score : " + score(answer,placesAns) +",\n \n" + "time: '" +now +"',\n \n" + "answers:" +"[" + placesAns + "]," +"\n \n" + "correct:" +"[" + answer + "]," +"\n \n" + "wronganswers:" +"[" + wrongs(placesAns,answer) + "]"
    document.getElementById("ata").innerHTML=""
    return
    }
    if(anstype=="YN"){
        
        for(var i=0;i<options[count].length;i++){
            // console.log(document.getElementById("input" + options[count][i]).checked +options[count][i])
            if (document.getElementById("input" + options[count][i]).checked){
                placesAns[countyn]="Y"
                countyn+=1

            }else{placesAns[countyn]="N"
            countyn+=1
        }

        }
    }
    else{
        for(var i=0;i<options[count].length;i++){
            // console.log(document.getElementById("input" + options[count][i]).checked +options[count][i])
            if (document.getElementById("input" + options[count][i]).checked){
                placesAns[count]=options[count][i]
            }

        }
    }
        
    console.log(count)


    noi()
    count+=1
    document.getElementById("ques").src = foldername+ pics[count] +".png"
    document.getElementById("nums").innerText = nums[count]
    // document.getElementById("opts").innerText = options[count]
    
    loop()
   
    console.log(placesAns)    
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
    
    
    if(anstype=="YN") {dinpans2.type = "checkbox"}else{dinpans2.type = "radio"}
   if(anstype=="YN") {dinpans2.name = "options"; dinpans2.addEventListener("keydown",function (event){
        if (event.keyCode == 13){
            genq()
        }
    }
    )+j}else{dinpans2.name = "options"; dinpans2.addEventListener("keydown",function (event){
        if (event.keyCode == 13){
            genq()
        }
    }
    )}
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
// var seq = json.parse(sequences)
// alert(seq[0].name)
// // readTextFile("sequences.json", function(text){
// //     var data = JSON.parse(text);
// //     alert(data.name);
// // });
// Set the date we're counting down to
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
  if (distance < 0 & count<totalCount) {
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
