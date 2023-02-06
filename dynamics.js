
answer = ['C', 'C', 'C', 'C', 'B', 'A', 'A', 'A', 'B', 'C', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'D', 'A', 'D', 'C', 'B']

nums= ["a) All weigh the same b) L is heaviest c) cannot say d) J is heaviest","a) anti-clockwise b) all the same way c) clockwise d) none will turn","a) At point A b) At point B c) At point C d) All equally","a) At point A b) At point B c) At point C d) All equally","a) point A b) point B c) point C d) needs support at both ends","a) A b) B c) C d) D","a) clockwise b) cannot move c) anti-clockwise d) either way","a) A b) B c) C d) all the same","a) A b) B c) C d) all the same","a) 1 b) 2 c) 3 d) all the same","a) 1 b) 2 c) 3 d) all the same","a) upwards b) will not need adjustment c) downwards","a) 1 b) 2 c) 3 d) makes no difference","a) down the slope b) up the slope c) stay still","a) anti-clockwise? b) clockwise? c) system jams?","a) 1 b) 2 c) 3 d) 4 e) 5 f) 6","a) A b) B c) cannot tell","a) 1 b) 2 c) both the same","a) 1 b) 2 c) 3 d) 4 e) 5 f) does not matter","a) fall to side 1 b) stay where he is at side 2 c) be thrust towards the nose at 3","a) be thrust towards the nose at 3 b) fall down towards side 1 c) float upwards, due to weightlessness, towards 2 d) fall on his head on the floor at side 4","a) clockwise b) anti-clockwise c) system jams","a) 1 b) 2 c) 3 d) 4","a) A b) B c) C d) D e) 3 stays where it is","a) A b) B c) either way"]

pics = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25']

options = ['ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF']
placesAns=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
totalCount = nums.length - 1

filename = "dynamics/"
minutes= 10.05
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
    document.getElementById("ques").src = filename + pics[count] +".png"
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
    document.getElementById("ques").src = filename + pics[count] +".png"
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