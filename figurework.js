answer = ["5","4","2","1.3","3","2","2","4","130","3","4","5.27","13","1/9","22.50","6","2.89","64%","7.5","45","1","0.0014","493","4.90","0.75","0.3","25","14.50","440","210"]

nums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

nums2 = ["10 – 5 = ? _______","What is 10% (10 per cent) of £40? _______","What is 4 × ½ (half of 4)? _______","1.6 – (minus) 0.3 = ? _______","21 / 7 = ? _______","What is 5% of £40? _______","What is 8 × ¼? _______","2.1 + 1.9 = ? _______","10 × 13 = ? _______","What is 3% of £100? _______","What is 16 × ¼? _______","3.08 + 2.19 = ? _______","156 / 12 = ? _______","What is 1/3 × 1/3? _______","What is 7½% of £300? _______","What is 15 / 2½? _______","106.7 – 103.81 = ? _______","What is 32/50 as a percentage? _______","A rectangular floor measures 2.5 metres by 3 metres. What is the size of the floor in square metres? _______","What is 22½% of £200? _______","What is 4¼ × ¼? _______","0.07 × 0.02 _______","17 × 29 = ? _______","What is 6% of £40 added to 12½% of £20? _______","What is 6 divided by 8? _______","What is 0.09 divided by 0.3? _______","From £50 how much change will you have if you purchase as many items as possible each costing £1.99? _______","How many dollars will I get for £10 if the exchange rate is 1.45 dollars to the pound? _______","The interest on a £1,000 loan is 20% annually. What is the total amount of interest paid at the end of year two? _______","If an item cost £126 when discounted to 60% of its original price what was the original price? _______"]

pics = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

options = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

placesAns=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

totalCount = nums.length - 1

filename = "figurework/"
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

    console.log(placesAns)


    noi()
    // document.getElementById("ques").src = filename + pics[count] +".png"
    document.getElementById("nums").innerText = nums[count] + ") " +  nums2[count]
    
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
    
            placesAns[count]=document.getElementById("input").value
        

    
    console.log(count)


    noi()
    count+=1
    // document.getElementById("ques").src = filename + pics[count] +".png"
    document.getElementById("nums").innerText = nums[count] + ") " +  nums2[count]
    
    loop()
    console.log(placesAns)
    
}

function loop(){
    ids=[]
    console.log("loop")
 
    
 



 
    
    colocou=0
        for (var j=0;j<options[count].length;j++){
       targ= "ata"
       
    dinpans2= document.createElement("input")
    dinpans2.id="input"
    
    dinpans2.type = "text"
    dinpans2.name = "options"; dinpans2.addEventListener("keydown",function (event){
        if (event.keyCode == 13){
            genq()
        }
    }
    )
    dinpanslab= document.createElement("label")
    dinpanslab.for = "input"+options[count][j]
    
    
   
    document.getElementById(targ).appendChild(dinpans2)
    document.getElementById(targ).appendChild(dinpanslab)
    }

}


function noi(){duse=document.getElementById("ata")

for(var i=duse.childNodes.length-1;i>0-1;i--){duse.removeChild(duse.childNodes[i]);}
}
document.getElementById("ata").removeChild(duse.childNodes[0])

function timer(){const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;
    
    
    const d = new Date();
    
    var countDownDate =  d.getTime() + minutes * minute;
    
    var x = setInterval(function() {
    
      var now = new Date().getTime();
    
      var distance = countDownDate - now;
    
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      document.getElementById("time").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
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

 
    