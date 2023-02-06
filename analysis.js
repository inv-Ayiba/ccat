
answer = ["c","a","d","d","b","f","d","b","b","d","d","a","a","e","c","b","b","c","a","d","e","b","a","b","c","d","c","e","d","a","c","a","b"]

nums= [ "a)  Emma b)  Jane c)  Pauline", "a)  Sue b)  Josie c)  Sally d)  Anne", "a)  Sue b)  Josie c)  Sally d)  Anne", "a)  Mr Everton b)  Mr Soames c)  Mr Francke d)  Mr Porter e)  Mr Peters", "a)  Toby b)  Rob c)  Frank d)  Sam e)  Jo f)  Tony", "a)  Toby b)  Rob c)  Frank d)  Sam e)  Jo f)  Tony", "a)  Toronto b)  Florida c)  Rome d)  Paris", "a)  Toronto b)  Rome c)  Florida d)  Paris", "a)  Fred b)  Joe c)  John d)  Garth", "a)  Fred b)  Joe c)  John d)  Garth", "a)  Modern Sculpture b)  Watercolours c)  Greek Pottery d)  Oil Paintings e)  Italian Collection f)  South American Art", "a)  Modern Sculpture and Greek Pottery b)  Watercolours and Oil Paintings c)  Oil Paintings and South American Art d)  none of these", "a)  Casey b)  Stuart c)  Ritchie d)  Billie e)  Colin", "a)  5 b)  4 c)  3 d)  2 e)  1 f)  none", "a)  Casey b)  Stuart c)  Ritchie d)  Billie e)  Colin", "a)  bread b)  chicken c)  lamb d)  rice e)  cheese", "a)  Sharon b)  Kelly c)  Robina d)  Sam", "a)  Sharon b)  Kelly c)  Robina d)  Sam", "a)  bread b)  rice c)  lamb d)  cheese e)  chicken", "a)  Mr Bagshaw b)  Miss Jenkins c)  Mrs Chance d)  Mr Fleming e)  Mr Marx", "a)  Mr Bagshaw b)  Miss Jenkins c)  Mrs Chance d)  Mr Fleming e)  Mr Marx", "a)  Mr Bagshaw b)  Miss Jenkins c)  Mrs Chance d)  Mr Fleming e)  Mr Marx", "a)  1 b)  2 c)  3 d)  4 e)  0", "a)  1 b)  2 c)  3 d)  4 e)  0", "a)  Raiders b)  Saracens c)  Aztecs d)  Centurions", "a)  Sally b)  Cheryl c)  Laura d)  Tom e)  Sandy", "a)  Sally b)  Cheryl c)  Laura d)  Tom e)  Sandy", "a)  Sally and Laura b)  Sandy and Laura c)  Laura and Tom d)  Tom and Sandy e)  Sandy and Sally", "a)  7 b)  8 c)  9 d)  10 e)  11 f)  12", "a)  blue b)  green c)  red", "a)  blue b)  green c)  red", "a)  Jane b)  Rachel c)  Tessa", "a)  Jane b)  Rachel c)  Tessa"]
 
questions =  ["A    Emma lives further up the hill than Jane. Pauline lives further up the hill than Emma. \n \n 1    Who lives furthest up the hill?","B    All the girls like sport. Sue and Josie like tennis, while Sally and Anne like running. Both Sue and Anne like swimming. \n \n 2    Who likes tennis and swimming?","B    All the girls like sport. Sue and Josie like tennis, while Sally and Anne like running. Both Sue and Anne like swimming. \n \n 3    Who likes swimming and running?","C    Mr Everton and Mr Soames have longer holidays than Mr Francke. Mr Porter has a shorter holiday than Mr Francke, whilst Mr Peters has a longer holiday than Mr Francke. \n \n 4    Who has the shortest holiday?","D    Toby, Rob and Frank all take a holiday by the sea, whilst Sam, Jo and Tony go hiking in the mountains. Frank, Sam and Jo travel by air. Jo, Rob and Tony do not enjoy their holiday. \n \n 5    Who goes to the sea and does not enjoy the holiday?","D    Toby, Rob and Frank all take a holiday by the sea, whilst Sam, Jo and Tony go hiking in the mountains. Frank, Sam and Jo travel by air. Jo, Rob and Tony do not enjoy their holiday. \n \n 6    Who does not travel by air and goes hiking?","E    In reverse order, the most popular holiday tours offered by a travel company are Toronto, Florida, Rome and Paris, although Rome is extremely popular whatever the time of year. After a marketing promotion, Toronto becomes more popular than Rome, but less popular than Florida. \n \n 7    Which tour is most popular after the marketing promotion?","E    In reverse order, the most popular holiday tours offered by a travel company are Toronto, Florida, Rome and Paris, although Rome is extremely popular whatever the time of year. After a marketing promotion, Toronto becomes more popular than Rome, but less popular than Florida. \n \n 8    Which tour is least popular after the marketing promotion?","F    Fred, John, Garth and Joe all have children. Fred and John are the only two to have boys. John and Joe take their children to school by bus, whilst it is near enough to school for the others to walk. Fred and Joe are car owners, and sometimes do use their cars to get the children to school. \n \n 9    Who owns a car, but usually goes to the school by bus?","F    Fred, John, Garth and Joe all have children. Fred and John are the only two to have boys. John and Joe take their children to school by bus, whilst it is near enough to school for the others to walk. Fred and Joe are car owners, and sometimes do use their cars to get the children to school. \n \n 10    Who does not own a car and has a daughter?","G    In a museum, Modern Sculpture is to be found on the floor below Watercolours. Greek Pottery is on the floor above the Oil Paintings. The top floor contains the Italian Collection. Watercolours are on the same floor as South American Art, whereas the Oil Paintings are on the floor below Modern Sculpture. \n \n 11    What is to be found on the lowest floor?","G    In a museum, Modern Sculpture is to be found on the floor below Watercolours. Greek Pottery is on the floor above the Oil Paintings. The top floor contains the Italian Collection. Watercolours are on the same floor as South American Art, whereas the Oil Paintings are on the floor below Modern Sculpture. \n \n 12    Which two are on the same floor?","H    Casey, Stuart, Ritchie, Billie and Colin all buy their own vehicles. Casey and Colin have room for three passengers as well as themselves. The others only have room for one passenger besides themselves. Ritchie and Casey have good front tyres, though the other tyres on all of the other vehicles are dangerous. Casey and Billie have vehicles that use diesel fuel. The others have vehicles that use petrol. \n \n 13    Who can take three passengers in their diesel vehicle?","H    Casey, Stuart, Ritchie, Billie and Colin all buy their own vehicles. Casey and Colin have room for three passengers as well as themselves. The others only have room for one passenger besides themselves. Ritchie and Casey have good front tyres, though the other tyres on all of the other vehicles are dangerous. Casey and Billie have vehicles that use diesel fuel. The others have vehicles that use petrol. \n \n 14    How many people have dangerous tyres on diesel vehicles that only have room for one passenger?","H    Casey, Stuart, Ritchie, Billie and Colin all buy their own vehicles. Casey and Colin have room for three passengers as well as themselves. The others only have room for one passenger besides themselves. Ritchie and Casey have good front tyres, though the other tyres on all of the other vehicles are dangerous. Casey and Billie have vehicles that use diesel fuel. The others have vehicles that use petrol. \n \n 15    Who can only take one passenger, but has good tyres?","I      Mrs Booth has difficulty feeding her four children as each one will only eat certain foods. Sharon and Robina will eat rice and lamb. Kelly and Sharon are the only ones who like bread and cheese. Kelly and Sam both eat chicken and bread. \n \n 16    Which is the only food that Sharon does not eat?","I      Mrs Booth has difficulty feeding her four children as each one will only eat certain foods. Sharon and Robina will eat rice and lamb. Kelly and Sharon are the only ones who like bread and cheese. Kelly and Sam both eat chicken and bread. \n \n 17    Who eats cheese, chicken and bread?","I      Mrs Booth has difficulty feeding her four children as each one will only eat certain foods. Sharon and Robina will eat rice and lamb. Kelly and Sharon are the only ones who like bread and cheese. Kelly and Sam both eat chicken and bread. \n \n 18    Who does not eat cheese, but does eat lamb and rice?","I      Mrs Booth has difficulty feeding her four children as each one will only eat certain foods. Sharon and Robina will eat rice and lamb. Kelly and Sharon are the only ones who like bread and cheese. Kelly and Sam both eat chicken and bread. \n \n 19    Which food will be acceptable to most of the children?","J      Mr Marx’s and Mr Bagshaw’s cars are black. The others have red ones. Mr Bagshaw and Mrs Chance have a white stripe on the sides of their cars. Miss Jenkins has a blue stripe on the side of her car. Mr Fleming and Mr Marx have silver stripes on the sides of their cars. Miss Jenkins’s and Mr Fleming’s have blue upholstery, the others have white. \n \n 20    Who has a car with blue upholstery and a silver stripe? ","J      Mr Marx’s and Mr Bagshaw’s cars are black. The others have red ones. Mr Bagshaw and Mrs Chance have a white stripe on the sides of their cars. Miss Jenkins has a blue stripe on the side of her car. Mr Fleming and Mr Marx have silver stripes on the sides of their cars. Miss Jenkins’s and Mr Fleming’s have blue upholstery, the others have white. \n \n 21    Who has a car with a silver stripe and white upholstery?", "J      Mr Marx’s and Mr Bagshaw’s cars are black. The others have red ones. Mr Bagshaw and Mrs Chance have a white stripe on the sides of their cars. Miss Jenkins has a blue stripe on the side of her car. Mr Fleming and Mr Marx have silver stripes on the sides of their cars. Miss Jenkins’s and Mr Fleming’s have blue upholstery, the others have white. \n \n 22    Who has the red car with a blue stripe and matching upholstery?","K    In a ‘knockout’ basketball competition, Centurions are beaten by Raiders. Saracens beat Centurions. Saracens are beaten by Raiders and Aztecs. Centurions and Raiders are beaten by Aztecs. \n \n 23    How many games do Saracens win? ","K    In a ‘knockout’ basketball competition, Centurions are beaten by Raiders. Saracens beat Centurions. Saracens are beaten by Raiders and Aztecs. Centurions and Raiders are beaten by Aztecs. \n \n 24    How many games do Raiders win?","K    In a ‘knockout’ basketball competition, Centurions are beaten by Raiders. Saracens beat Centurions. Saracens are beaten by Raiders and Aztecs. Centurions and Raiders are beaten by Aztecs. \n \n 25    Who emerge as the champions? ","L     Stopping at the shop on the way to school, Cheryl and Tom are the only ones not to buy chocolate. Of the five children, four of them, including Laura, buy fudge. Unlike the others, Sally, Cheryl and Sandy do not buy any toffee. In fact, Cheryl only buys fruit gums as she does not like other kinds of sweets. \n \n 26    Who only had a piece of toffee and a piece of fudge? ","L     Stopping at the shop on the way to school, Cheryl and Tom are the only ones not to buy chocolate. Of the five children, four of them, including Laura, buy fudge. Unlike the others, Sally, Cheryl and Sandy do not buy any toffee. In fact, Cheryl only buys fruit gums as she does not like other kinds of sweets. \n \n 27    Who had three sweets? ","L     Stopping at the shop on the way to school, Cheryl and Tom are the only ones not to buy chocolate. Of the five children, four of them, including Laura, buy fudge. Unlike the others, Sally, Cheryl and Sandy do not buy any toffee. In fact, Cheryl only buys fruit gums as she does not like other kinds of sweets. \n \n 28    Who are the two people who took the same number and type of sweets?","L     Stopping at the shop on the way to school, Cheryl and Tom are the only ones not to buy chocolate. Of the five children, four of them, including Laura, buy fudge. Unlike the others, Sally, Cheryl and Sandy do not buy any toffee. In fact, Cheryl only buys fruit gums as she does not like other kinds of sweets. \n \n 29    In total, how many sweets were taken by the group?","M    Jane, Rachel and Tessa are girls who are wearing a jacket, coat or skirt in blue, green or red. None of these articles of clothing is the same colour and each girl is wearing a different colour. The coat belonging to Tessa is not green. Rachel’s jacket and Jane’s skirt are the same colour. Tessa’s skirt is red. Her jacket, Rachel’s skirt and Jane’s coat are all the same colour. \n \n 30    What colour is Tessa’s coat? ","M    Jane, Rachel and Tessa are girls who are wearing a jacket, coat or skirt in blue, green or red. None of these articles of clothing is the same colour and each girl is wearing a different colour. The coat belonging to Tessa is not green. Rachel’s jacket and Jane’s skirt are the same colour. Tessa’s skirt is red. Her jacket, Rachel’s skirt and Jane’s coat are all the same colour. \n \n 31    What colour is Jane’s jacket? ","M    Jane, Rachel and Tessa are girls who are wearing a jacket, coat or skirt in blue, green or red. None of these articles of clothing is the same colour and each girl is wearing a different colour. The coat belonging to Tessa is not green. Rachel’s jacket and Jane’s skirt are the same colour. Tessa’s skirt is red. Her jacket, Rachel’s skirt and Jane’s coat are all the same colour. \n \n 32    Which girl has the green coat? ","M    Jane, Rachel and Tessa are girls who are wearing a jacket, coat or skirt in blue, green or red. None of these articles of clothing is the same colour and each girl is wearing a different colour. The coat belonging to Tessa is not green. Rachel’s jacket and Jane’s skirt are the same colour. Tessa’s skirt is red. Her jacket, Rachel’s skirt and Jane’s coat are all the same colour. \n \n 33    Which girl has the blue jacket? "]

options =  ['abc',    'abcd',   'abcd',   'abcde', 'abcdef', 'abcdef', 'abcd',   'abcd', 'abcd',   'abcd',   'abcdef', 'abcd','abcde',  'abcdef', 'abcde',  'abcde','abcd',   'abcd',   'abcde',  'abcde','abcde',  'abcde',  'abcde',  'abcde','abcd',   'abcde',  'abcde',  'abcde','abcdef', 'abc', 'abc',    'abc','abc']

placesAns=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]

totalCount = nums.length - 1

filename = "analysis/"
minutes= 15.05
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
    document.getElementById("nums").innerText = "test:'" + filename + "'," +"\n \n" + "score : " + score(answer,placesAns) +",\n \n" + "time: '" +now +"',\n \n" + "answers:" +"[" + placesAns + "]," +"\n \n" + "correct:" +"[" + answer + "]," +"\n \n" + "wronganswers:" +"[" + wrongs(placesAns,answer) + "]"
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
    