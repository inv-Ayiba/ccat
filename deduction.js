
answer = ["c","b","d","a","e","h","bg","d","c","f","ae","g","d","a","b","a","e","c","e","f","a","d","cd","e","b"]

nums= [  "a)  Mary Potter b)  Fred Ruby c)  Betty Simpson d)  cannot say",    "a)  Frank b)  John c)  Jack d)  Gary e)  cannot say",    "a)  Frank b)  John c)  Jack d)  Gary e)  cannot say",    "a)  Frank b)  John c)  Jack d)  Gary e)  cannot say",    "a)  Architect b)  Estate Agent c)  Travel Agent d)  Accountant e)  Publisher f)  Car Rental g)  Detective Agency h)  cannot say",    "a)  Architect b)  Estate Agent c)  Travel Agent d)  Accountant e)  Publisher f)  Car Rental g)  Detective Agency h)  cannot say",    "a)  Architect b)  Estate Agent c)  Travel Agent d)  Accountant e)  Publisher f)  Car Rental g)  Detective Agency h)  cannot say",    "a)  Sally b)  Cheryl c)  Laura d)  Tom e)  Sandy f)  cannot say",    "a)  Sally b)  Cheryl c)  Laura d)  Tom e)  Sandy f)  cannot say",    "a)  Sally b)  Cheryl c)  Laura d)  Tom e)  Sandy f)  cannot say",    "a)  Sally b)  Cheryl c)  Laura d)  Tom e)  Sandy f)  cannot say",    "a)  4 b)  5 c)  6 d)  7 e)  8 f)  9 g)  10 h)  11 i)  12 j)  13 k)  14 l)  15 m)  16 n)  17",    "a)  Pakistan b)  Russia c)  China d)  cannot say",    "a)  Anne b)  Josie c)  Tanya d)  cannot say",    "a)  Anne b)  Josie c)  Tanya d)  cannot say",    "a)  Anne b)  Josie c)  Tanya d)  cannot say",    "a)  Mexico b)  Chile c)  Argentina d)  Brazil e)  India f)  cannot say",    "a)  Chile b)  Germany c)  Thailand d)  Australia e)  cannot say",    "a)  Thailand b)  India c)  Japan d)  Australia e)  Argentina f)  cannot say",    "a)  France b)  India c)  Japan d)  Cambodia e)  Peru f)  cannot say",    "a)  Geoff b)  Rona c)  Sam d)  Bella e)  cannot say",    "a)  Geoff b)  Rona c)  Sam d)  Bella e)  cannot say",    "a)  Geoff b)  Rona c)  Sam d)  Bella e)  cannot say",    "a)  Geoff b)  Rona c)  Sam d)  Bella e)  cannot say",    "a)  30 b)  15 c)  20 d)  10 e)  5 f)  45 g)  cannot say"]

questions = [['A    Of three part-time employees, Mary Potter works longer hours than Fred Ruby, although Betty Simpson works longer hours than Mary Potter.', ' \n \n 1    Who works the longest hours?'], ['B    Frank and John use computers in their work. Gary, John and Frank are self-employed. Frank and Jack work part-time, whilst the others are all full-time. Jack and John are the only ones who work in insurance.', ' \n \n 2    Who uses a computer to work full-time in insurance?'], ['B    Frank and John use computers in their work. Gary, John and Frank are self-employed. Frank and Jack work part-time, whilst the others are all full-time. Jack and John are the only ones who work in insurance.', ' \n \n 3    Who does not work in insurance and does not have a computer?'], ['B    Frank and John use computers in their work. Gary, John and Frank are self-employed. Frank and Jack work part-time, whilst the others are all full-time. Jack and John are the only ones who work in insurance.', ' \n \n 4    Who is the only one who is self-employed and works part-time?'], ['C    Different businesses occupy a three-storey building. The Architect is on the top floor, whilst the Estate Agent is on the floor below the Travel Agent. The Accountant is on the floor above the Publisher, as is the Estate Agent. The Travel Agent is on the same floor as the Car Rental Company. On the floor between the Publisher and the Car Rental Company is a Detective Agency.', ' \n \n 5    Which business is on a floor by itself?'], ['C    Different businesses occupy a three-storey building. The Architect is on the top floor, whilst the Estate Agent is on the floor below the Travel Agent. The Accountant is on the floor above the Publisher, as is the Estate Agent. The Travel Agent is on the same floor as the Car Rental Company. On the floor between the Publisher and the Car Rental Company is a Detective Agency.', ' \n \n 6    Which business occupies the largest floor space?'], ['C    Different businesses occupy a three-storey building. The Architect is on the top floor, whilst the Estate Agent is on the floor below the Travel Agent. The Accountant is on the floor above the Publisher, as is the Estate Agent. The Travel Agent is on the same floor as the Car Rental Company. On the floor between the Publisher and the Car Rental Company is a Detective Agency.', ' \n \n 7    Of the options given, which businesses are on the same floor as the Accountant?'], ['D    Sally, Cheryl, Laura, Tom and Sandy travel extensively on business. Four of them have visas for China. All, apart from Cheryl and Tom, have visas for Russia. Cheryl�s only visa is for Pakistan, although only Sally and Sandy do not have a visa for Pakistan.', ' \n \n 8    Who only has visas for China and Pakistan?'], ['D    Sally, Cheryl, Laura, Tom and Sandy travel extensively on business. Four of them have visas for China. All, apart from Cheryl and Tom, have visas for Russia. Cheryl�s only visa is for Pakistan, although only Sally and Sandy do not have a visa for Pakistan.', ' \n \n 9    Who has the most visas?'], ['D    Sally, Cheryl, Laura, Tom and Sandy travel extensively on business. Four of them have visas for China. All, apart from Cheryl and Tom, have visas for Russia. Cheryl�s only visa is for Pakistan, although only Sally and Sandy do not have a visa for Pakistan.', ' \n \n 10    Who travels most often?'], ['D    Sally, Cheryl, Laura, Tom and Sandy travel extensively on business. Four of them have visas for China. All, apart from Cheryl and Tom, have visas for Russia. Cheryl�s only visa is for Pakistan, although only Sally and Sandy do not have a visa for Pakistan.', ' \n \n 11    Who are the two people who have identical visas?'], ['D    Sally, Cheryl, Laura, Tom and Sandy travel extensively on business. Four of them have visas for China. All, apart from Cheryl and Tom, have visas for Russia. Cheryl�s only visa is for Pakistan, although only Sally and Sandy do not have a visa for Pakistan.', ' \n \n 12    How many visas do the group have between them?'], ['D    Sally, Cheryl, Laura, Tom and Sandy travel extensively on business. Four of them have visas for China. All, apart from Cheryl and Tom, have visas for Russia. Cheryl�s only visa is for Pakistan, although only Sally and Sandy do not have a visa for Pakistan.', ' \n \n 13    Which is the most frequented country?'], ['E    Three athletes each receive a first, second and third prize for a different sporting event. Either Anne or Josie got the second prize for tennis. Anne got the same prize for throwing the javelin as Josie got for swimming. Tanya got the first prize for swimming, and her prize for the javelin was the same as Josie�s for tennis and Anne�s for swimming.', ' \n \n 14    Who got the first prize for tennis?'], ['E    Three athletes each receive a first, second and third prize for a different sporting event. Either Anne or Josie got the second prize for tennis. Anne got the same prize for throwing the javelin as Josie got for swimming. Tanya got the first prize for swimming, and her prize for the javelin was the same as Josie�s for tennis and Anne�s for swimming.', ' \n \n 15    Who was best with the javelin?'], ['E    Three athletes each receive a first, second and third prize for a different sporting event. Either Anne or Josie got the second prize for tennis. Anne got the same prize for throwing the javelin as Josie got for swimming. Tanya got the first prize for swimming, and her prize for the javelin was the same as Josie�s for tennis and Anne�s for swimming.', ' \n \n 16    Who got the second prize for swimming?'], ['F    Doppler�s butterfly is only found in Asian countries, including India, Thailand, Japan, Malaysia and Cambodia, and in areas of non-forested South American countries, including Brazil, Argentina, Chile and Peru. It is very rare in Brazil, where it has black, elongated wings, whilst in Asia the wings are much shorter and coloured orange. In Chile they have only red wings, though these retain the characteristic South American shape.', ' \n \n 17    In which country is the butterfly unlikely to have elongated wings?'], ['F    Doppler�s butterfly is only found in Asian countries, including India, Thailand, Japan, Malaysia and Cambodia, and in areas of non-forested South American countries, including Brazil, Argentina, Chile and Peru. It is very rare in Brazil, where it has black, elongated wings, whilst in Asia the wings are much shorter and coloured orange. In Chile they have only red wings, though these retain the characteristic South American shape.', ' \n \n 18    Where is a forest-dwelling Doppler butterfly with orange wings most likely to be found?'], ['F    Doppler�s butterfly is only found in Asian countries, including India, Thailand, Japan, Malaysia and Cambodia, and in areas of non-forested South American countries, including Brazil, Argentina, Chile and Peru. It is very rare in Brazil, where it has black, elongated wings, whilst in Asia the wings are much shorter and coloured orange. In Chile they have only red wings, though these retain the characteristic South American shape.', ' \n \n 19    Where is a desert-dwelling, elongated winged Doppler butterfly most likely to be found?'], ['F    Doppler�s butterfly is only found in Asian countries, including India, Thailand, Japan, Malaysia and Cambodia, and in areas of non-forested South American countries, including Brazil, Argentina, Chile and Peru. It is very rare in Brazil, where it has black, elongated wings, whilst in Asia the wings are much shorter and coloured orange. In Chile they have only red wings, though these retain the characteristic South American shape.', ' \n \n 20    Where is a purple Doppler butterfly most likely to be found?'], ['G    To get to his home at Tranton Park, Geoff takes the 17.45 train from Central Station. Rona avoids public transport whenever possible, but walks with him to the station, where she has left her car. Her drive to her home in Hampton takes 15 minutes, although it would have taken exactly the same time by train. Like Geoff, Sam takes the train, but avoids the rush by taking the 17.15 from Central Station. Bella, who works in the same office as the rest and who prefers the train, always makes the journey with Sam as far as Hampton, where she lives. Sam continues to Nately, which is his hometown, a journey that is three times as long as hers. Geoff arrives at Tranton Park an hour and a quarter after Bella gets to Hampton.', ' \n \n 21    Who probably has the longest journey?'], ['G    To get to his home at Tranton Park, Geoff takes the 17.45 train from Central Station. Rona avoids public transport whenever possible, but walks with him to the station, where she has left her car. Her drive to her home in Hampton takes 15 minutes, although it would have taken exactly the same time by train. Like Geoff, Sam takes the train, but avoids the rush by taking the 17.15 from Central Station. Bella, who works in the same office as the rest and who prefers the train, always makes the journey with Sam as far as Hampton, where she lives. Sam continues to Nately, which is his hometown, a journey that is three times as long as hers. Geoff arrives at Tranton Park an hour and a quarter after Bella gets to Hampton.', ' \n \n 22    Who is most likely to arrive home first?'], ['G    To get to his home at Tranton Park, Geoff takes the 17.45 train from Central Station. Rona avoids public transport whenever possible, but walks with him to the station, where she has left her car. Her drive to her home in Hampton takes 15 minutes, although it would have taken exactly the same time by train. Like Geoff, Sam takes the train, but avoids the rush by taking the 17.15 from Central Station. Bella, who works in the same office as the rest and who prefers the train, always makes the journey with Sam as far as Hampton, where she lives. Sam continues to Nately, which is his hometown, a journey that is three times as long as hers. Geoff arrives at Tranton Park an hour and a quarter after Bella gets to Hampton.', ' \n \n 23    Who, apart from Geoff, is most likely to travel by train?'], ['G    To get to his home at Tranton Park, Geoff takes the 17.45 train from Central Station. Rona avoids public transport whenever possible, but walks with him to the station, where she has left her car. Her drive to her home in Hampton takes 15 minutes, although it would have taken exactly the same time by train. Like Geoff, Sam takes the train, but avoids the rush by taking the 17.15 from Central Station. Bella, who works in the same office as the rest and who prefers the train, always makes the journey with Sam as far as Hampton, where she lives. Sam continues to Nately, which is his hometown, a journey that is three times as long as hers. Geoff arrives at Tranton Park an hour and a quarter after Bella gets to Hampton.', ' \n \n 24    Who never travels by train?'], ['G    To get to his home at Tranton Park, Geoff takes the 17.45 train from Central Station. Rona avoids public transport whenever possible, but walks with him to the station, where she has left her car. Her drive to her home in Hampton takes 15 minutes, although it would have taken exactly the same time by train. Like Geoff, Sam takes the train, but avoids the rush by taking the 17.15 from Central Station. Bella, who works in the same office as the rest and who prefers the train, always makes the journey with Sam as far as Hampton, where she lives. Sam continues to Nately, which is his hometown, a journey that is three times as long as hers. Geoff arrives at Tranton Park an hour and a quarter after Bella gets to Hampton.', ' \n \n 25    How many minutes is the journey time between Nately and Tranton Park?']]

options = ['ABCD', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCDEFGH', 'ABCDEFGH', 'ABCDEFGH', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEF', 'ABCDEFGHIJKLMN', 'ABCD', 'ABCD', 'ABCD', 'ABCD', 'ABCDEF', 'ABCDE', 'ABCDEF', 'ABCDEF', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCDE', 'ABCDEFG']

placesAns=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

totalCount = nums.length - 1

filename = "/deduction/"
minutes= 20.05
function score(answer,placesAns){
    score = 0
    for(var i=0;i<answer.length;i++) {
        if(answer[i].length <2){
        if (answer[i]==placesAns[i]){score+=1}
    } 
    else if (answer[i].length >1){
        for(var k=0;k<answer.length;k++) { 
        if (answer[i]==placesAns[i][k]){score+=1}
    } 
}
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
    document.getElementById("ques").innerText = questions[count]
    document.getElementById("nums").innerText = nums[count]
    
    loop()
   
    
}
function genq(){document.getElementById("numtit").innerText = count+1 + "/" + nums.length
    if (count == answer.length){
        document.getElementById("ques").innerText = ""
    var now = new Date();
    document.getElementById("nums").innerText = filename +"\n \n" + "score = " + score(answer,placesAns) +"\n \n" + now +"\n \n" +"[" + placesAns + "]"
    document.getElementById("ata").innerHTML=""
    return
    }
    for(var i=0;i<options[count].length;i++){
        if (document.getElementById("input" + options[count][i]).checked){
            placesAns[count]=options[count][i]
        }

    }
    console.log(count)


    noi()
    count+=1
    document.getElementById("ques").innerText = questions[count]
    document.getElementById("nums").innerText = nums[count]
    
    loop()
   
    
}

function loop(){
    ids=[]
    console.log("loop")
 
    
 



 
    
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
    
    //colors
    //messing with . decimal
   
    document.getElementById(targ).appendChild(dinpans2)
    document.getElementById(targ).appendChild(dinpanslab)
    }

}


function noi(){duse=document.getElementById("ata")

for(var i=duse.childNodes.length-1;i>0-1;i--){duse.removeChild(duse.childNodes[i]);}
//console.log(duse.childNodes.length)
}
// document.getElementById("ata").removeChild(duse.childNodes[0])

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
        document.getElementById("ques").innerHTML = '<img src="DUNCE.png" />';
        document.getElementById("nums").innerHTML = "EXPIRED";
      
        document.getElementById("ata").innerHTML = "EXPIRED";
        rduse=document.getElementById("nextdiv")
    
        rduse.remove();
    
         
      }
    }, 1000);}
    