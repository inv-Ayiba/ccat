
answer = ["ADD","GO","BOW","CRY","DIP","FIB","GAP","MIX","PAY","ZIP","WILD","UGLY","TALK","RAVE","PROD","QUIP","IDOL","GAWK","DENT","GREY","EXILE","PRIZE","FLUSH","MORTAL","HUMBLY","DISCARD","DENIZEN","INSURE","FUSCOUS","SALMAGUNDI"]


nums=  ["1)	6 + 9 = ?","2)  11 + ? = 23","3)  ? – 4 = 3","4)  12/2 = ?","5)  ?/8 = 2","6)  5 * ? = 35","7)  15 + ? + 15 = 40","8)  16 * ? = 48","9)  35 – ? = 19","10)  	?/7 = 13","11)  	38* 7 = ?","12)  	? – 94 = 167","13)  	£6.50 + ? = £10","14)  	£9.75 – ? = £5.95","15)  	? * 9 = 216","16)  	217 + 318 + ? = 1006","17)  	39 * ? = 351","18)  	1091 – ? = 892","19)  	7.5/3 = ?","20)  	4.9 * ? = 29.4","21)  	51.2 + 38.9 + ? = 101.5","22)  	£13.91 – ? = £9.64","23)  	? * 10.5 = 210","24)  	?/4 = £11.05","25)  	£20 * 10% = ?","26)  	£24.5 + ? + £107.77 = £299.81","27)  	? * 25% = £37.50","28)  	? * 7.3 = 424.13","29)  	£76 * 15 = ?","30)  	?/11 = £114.60","31)  	£151.91 + £263.87 + £23.99 = ?	"]	


options =   [["14","15","3","17","18"],["12","14","6","10","11"],["8","1","7","9","6"],["1","8","4","24","6"],["16","4","12","2","8"],["3","9","6","7","5"],["24","5","20","10","15"],["2","32","8","4","3"],["16","21","26","54","70"],["81","19","13","91","61"],["196","166","266","264","164"],["198","261","241","291","271"],["£2.50","£4.50","£1.50","£2.00","£3.50"],["£1.80","£3.80","£1.90","£3.20","£4.20"],["24","23","14","34","22"],["371","605","535","471","392"],["12","8","9","10","11"],["199","99","209","189","210"],["22.5","21.5","2.5","3.5","2"],["6.1","5.5","2.5","7","6"],["22.8","11.4","10.6","11.2","12.4"],["£4.23","£4.33","£5.27","£3.27","£4.27"],["20.5","40","30","20","15"],["£44.20","£28.20","£40.20","£45","£46"],["£1","£10","£0.20","£2","£2.20"],["£167.54","£268.67","£168.64","£167.20","£158.94"],["£115","£150","£75","£18.75","£75.25"],["57.1","57.9","58.1","59.1","56.1"],["£980","£1040","£1220","£1340","£1140"],["£1060.40","£1160.40","£1260.60","£1140.60","£1160.60"],["£429.77","£439.77","£469.67","£429.77","£439.87 "]]

options2= ['abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde']

placesAns= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

totalCount = nums.length - 1

filename = "coding/"
minutes= 12.05
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
    document.getElementById("nums").innerText = nums[count]
    
    loop()
   
    
}
function genq(){document.getElementById("numtit").innerText = count+1 + "/" + nums.length
    if (count == answer.length){
        document.getElementById("ques").src = ""
    var now = new Date();
    document.getElementById("nums").innerText = filename +" " + "score = " + score(answer,placesAns) +" " + now +" " +"[" + placesAns + "]"
    document.getElementById("ata").innerHTML=""
    return
    }
    for(var i=0;i<options[count].length;i++){
        if (document.getElementById("input" + options[count][i]).checked){
            placesAns[count]=options2[count][i]
        }

    }
    console.log(count)


    noi()
    count+=1
    document.getElementById("nums").innerText = nums[count]
    
    loop()
   
    
}

function loop(){
    ids=[]
    console.log("loop")
 
    
 



 
    
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
    dinpanslab.innerText=options[count][j] + ""
    
   
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
    