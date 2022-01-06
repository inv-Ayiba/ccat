
answer = ["b","b","d","b","a","b","c","d","d","b","c","c","d","b","c","c","b","a","c","a","a","a","c","d","d","a","a","b","d","a"]

nums=  ["1    Which word has the closest meaning to Seek? ","2    Which word is most nearly the opposite to Constant? ","  3    Which word is closest in meaning to Majority? ","  4    Which word is closest in meaning to Ripe? ","  5    Which word is closest in meaning to Recover? ","  6    Which word is closest in meaning to Envelop? ","  7    Which word is most nearly the opposite in meaning to Hinder? ","  8    Which word is most nearly the opposite of Gangling? ","  9    Which word is closest in meaning to Captivate? ","  10    Which word is closest in meaning to Obscure? ","11    Which word is most nearly the opposite of Casual? ","12    Which word is closest in meaning to Catcall? ","13    Which word is most nearly the opposite of Prohibit? ","14    Which word is closest in meaning to Cast? ","15    Which word is closest in meaning to Debut? ","16    Which word is most nearly the opposite of Buoyant? ","17    Which word is closest in meaning to Flotilla? ","18    Which word is closest in meaning to Crown? ","19    Which word is most nearly the opposite of Gusto? ","20    Which word is closest in meaning to Saucy? ","21    Which word is closest in meaning to Phoenix? ","22    Which word is closest in meaning to Ambrosia? ","23    Which word is closest in meaning to Developed? ","24    Which word is closest in meaning to Ridiculous? ","25    Which word is most nearly the opposite of Bent? ","26    Which word is closest in meaning to Manual? ","27    Which word is closest in meaning to Catch? ","28    Which word is most nearly the opposite of Imprudent? ","29    Which word is closest in meaning to Retain? ","30    Which word is most nearly opposite to Loathing? "]


options =  [["a) Lose ","b) Pursue ","c) Hide ","d) Cover"],["a) Soon ","b) Unpredictable ","c) Approved ","d) Continual"],["a) Legal ","b) Minority ","c) Old ","d) Most"],["a) Fruit ","b) Ready ","c) Aged ","d) Spoiled"],["a) Restore ","b) Lose ","c) Conscious ","d) Make"],["a) Post ","b) Wrap ","c) Letter ","d) Show"],["a) Former ","b) Intercept ","c) Encourage ","d) Anticipate"],["a) Soft ","b) Quiet ","c) Skinny ","d) Dumpy"],["a) Partner ","b) Battle ","c) Remove ","d) Charm"],["a) Parasol ","b) Cloud ","c) Clear ","d) Blind"],["a) Feeble ","b) Charming ","c) Deliberate ","d) Weak"],["a) Praise ","b) Scream ","c) Whistle ","d) Ovation"],["a) Refuse ","b) Smoke ","c) Untrue ","d) Allow"],["a) Class ","b) Tinge ","c) Species ","d) Barrel"],["a) Termination ","b) Young ","c) Premiere ","d) Speech"],["a) Rising ","b) Floating ","c) Sinking ","d) Marking"],["a) Swans ","b) Ships ","c) Heart problem ","d) Balloons"],["a) Adorn ","b) Cross ","c) Hill ","d) Jewel"],["a) Fame ","b) Desire ","c) Apathy ","d) Appetite"],["a) Lippy ","b) Politeness ","c) Container ","d) Interference"],["a) Bird ","b) Statue ","c) Phony ","d) Fire"],["a) Food ","b) Dainty ","c) Jam ","d) Crab"],["a) Ungrudging ","b) Generous ","c) Cultivated ","d) Boundless"],["a) Levity ","b) Jocular ","c) Wit ","d) Foolish"],["a) Bias ","b) Curved ","c) Leaning ","d) Impartial"],["a) Primer ","b) Note ","c) Voucher ","d) Disk"],["a) Entangle ","b) Extricate ","c) Unravel ","d) Sprawl"],["a) Arbitrary ","b) Judicious ","c) Undiscerning ","d) Subjective"],["a) Dole ","b) Mete ","c) Portion ","d) Keep"],["a) Doting ","b) Bungling ","c) Hiding ","d) Kindness"]]


options2= ['abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd']
placesAns= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
totalCount = nums.length - 1

filename = "/verbalprecision/"
minutes= 8.05
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
function genq(){
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
    document.getElementById("numtit").innerText = count+1 + "/" + nums.length
    
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
    