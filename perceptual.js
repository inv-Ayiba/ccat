
answer = ["D","B","A","E","C","C","C","A","E","A","B","A","D","D","C","A","D","D","A","B","D","A","A","C","E","B","B","B","C","D","E","B" ]

nums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]

pics = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]

options = ['ABCD', 'ABCDE', 'ABCD', 'ABCDE', 'ABCD', 'ABCDE', 'ABCD', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCD', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCD', 'ABCDE', 'ABCD', 'ABCDE', 'ABCD', 'ABCD', 'ABCD', 'ABCD', 'ABCD', 'ABCD', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCD', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCD']

placesAns=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
totalCount = nums.length - 1

filename = "perceptual/"
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
    document.getElementById("nums").innerText = filename +"\n \n" + "score = " + score(answer,placesAns) +"\n \n" + now +"\n \n" +"[" + placesAns + "]"
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
    
// var seq = json.parse(sequences)
// alert(seq[0].name)
// // readTextFile("sequences.json", function(text){
// //     var data = JSON.parse(text);
// //     alert(data.name);
// // });