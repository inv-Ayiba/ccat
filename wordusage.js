
answer = ["b","a","d","c","d","e","a","b","e","a","c","e","b","b","d","a","c","b","c","b","e","e","a","c","d","e","c","a","d","b","c","d","c","b","e","d"]

nums=  ["1	Cycling is a ________. Which word goes in the missing space?					","	2	Which word has the incorrect spelling?					","	3	Which word is the odd one out?					","	4	If the first word is ‘Biology’ what is the second word?life the science of is biology.					","	5	First aid is help given to an ___ person.					","	6	Which word has the incorrect spelling?					","	7	Which word is the odd one out?					","	8	What is the first word in this jumbled sentence when it is in the proper order?Cuba for is famous tobacco.					","	9	Pipelines can ___ water or oil over great distances.					","	10	Which word has the incorrect spelling?					","	11	Which word is the odd one out?					","	12	What is the first word in this jumbled sentence when it is in the proper order?of Italy consists a and islands peninsula.					","	13	A formula is a set form of words or symbols in which something is ___.					","	14	Which word has the incorrect spelling?					","	15	Which word is the odd one out?					","	16	If the last word is ‘sun,’ what is the third word when these words make a proper sentence?a sun revolves planet the round.					","	17	Breathing ___ allows people to work in a poisoned atmosphere.					","	18	Which word has the incorrect spelling?					","	19	Which word is the odd one out?					","	20	What is the second word in this jumbled sentence when it is in the proper order?business an sound efficient is financially.					","	21	Bacteria can ____ food and spread disease.					","	22	Which word has the incorrect spelling?					","	23	Which word is the odd one out?					","	24	If the first word is ‘Plastics,’ what is the sixth word when the following words make a sentence?Plastics heat and pressure are materials moulded by that are.					","	25	In engineering, a ___ is a movable piece which stops or allows the passage of fluid.					","	26	Which word has the incorrect spelling?					","	27	Which word is the odd one out?					","	28	If the first word is ‘The,’ what is the eighth word when these words make a proper sentence?The word is a describe to state perfection of Utopia.					","	29	The number of times an event happens at regular intervals is called its ___.					","	30	Which word has the incorrect spelling?					","	31	Which word is the odd one out?					","	32	What is the last word in this jumbled sentence when it is in the proper order?shells fossils and bones include animals of.					","	33	The ubiquitous spirit worshipped by the Incas thus ___ everything.					","	34	Which word has the incorrect spelling?					","	35	Which word is the odd one out?					","	36	What is the last word in this jumbled sentence when it is in the proper order?depends the upon factors from distance sea climate such as.					"]


options =  [["wheel","sport","window","machine","fish"],["traveling","offering","fastened","forbidden","apply"],["correct","genuine","real","untrue","honest"],["the","science","is","of","life"],["unhelpful","intoxicated","unqualified","injured","impoverished"],["lonely","rebellious","February","misprint","adress"],["drop","hasten","surge","spring","rush"],["famous","Cuba","is","tobacco","for"],["roll","pull","lift","push","carry"],["drinkible","legible","permissible","contemptible","sociable"],["indifferent","casual","mindful","careless","neglectful"],["consists","islands","peninsula","of","Italy"],["used","defined","recommended","corrected","concealed"],["paralysis","negociate","embarrass","questionable","immediately"],["incompatible","contrasted","unequal","similar","diverse"],["revolves","a","round","planet","the"],["involuntarily","mechanically","apparatus","harness","intermittently"],["breathe","secretery","delinquent","tolerant","receipt"],["burnish","lustre","tarnish","polish","shine"],["financially","efficient","is","an","sound"],["analyse","cover","sanitise","eliminate","contaminate"],["observant","implement","repellent","environment","committment"],["rebellious","amenable","tame","cultivated","ordered"],["heat","are","moulded","pressure","materials"],["clock","meter","switch","valve","gauge"],["accomplish","assignment","consultant","tasteful","goverment"],["mock","artificial","genuine","assumed","fictitious"],["perfection","state","Utopia","things","word"],["fibrillation","waves","average","frequency","timing"],["corrupt","managable","depressing","unnerving","consensus"],["patronise","endorse","impugn","espouse","defend"],["fossils","of","include","animals","shells"],["destroyed","invaded","pervaded","owned","idolised"],["opening","unnecesarily","grievously","openness","benefited"],["virtuoso","wizard","maestro","prodigy","disciple"],["climate","factor","depends","sea","distance"]] 


options2= ['abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde', 'abcde']

placesAns= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,32, 33, 34, 35, 36]

totalCount = nums.length - 1

filename = "wordusage/"
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
function genq(){document.getElementById("numtit").innerText = count+1 + "/" + nums.length
    if (count == answer.length){
        document.getElementById("ques").src = ""
    var now = new Date();
    document.getElementById("nums").innerText = "test:'" + filename + "'," +"\n \n" + "score : " + score(answer,placesAns) +",\n \n" + "time: '" +now +"',\n \n" + "answers:" +"[" + placesAns + "]," +"\n \n" + "correct:" +"[" + answer + "]," +"\n \n" + "wronganswers:" +"[" + wrongs(placesAns,answer) + "]"
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
    
    