answer = ["ADD","GO","BOW","CRY","DIP","FIB","GAP","MIX","PAY","ZIP","WILD","UGLY","TALK","RAVE","PROD","QUIP","IDOL","GAWK","DENT","GREY","EXILE","PRIZE","FLUSH","MORTAL","HUMBLY","DISCARD","DENIZEN","INSURE","FUSCOUS","SALMAGUNDI"]

nums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

nums2 = ["400","E∊","5∊ι","6ζγ","0O∴","ΘO5","E4∴","ϑΟα","∴4γ","MO∴","ιΟΓ0","φΕΓγ","14ΓΣ","ζ4−=","∴ζ∈0","ΞφΟ∴","Ο0∈Γ","Ε4ιΣ","0=Λ1","Εζ=γ","=αΟΓ","∴ζΟΜ=","ΘΓφΝΡ","ϑ∈ζ14Γ","Pφϑ5Γγ","0ΟΝ64ζ0","0=ΛΟΜ=Λ","ΟΛΝφζ=","ΘφΝ6∈φΝ","Ν4Γϑ4ΕφΛ0Ο"]

pics = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

options = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

placesAns=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

totalCount = nums.length - 1

filename = "coding/"
minutes= 6.05
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
function genq1(){document.getElementById("numtit").innerText ="No.  " +  count+1 + "/" + nums.length +"\n"

    console.log(placesAns)


    noi()
    // document.getElementById("ques").src = filename + pics[count] +".png"
    document.getElementById("nums").innerText = nums[count] + ") " +  nums2[count]
    
    loop()
   
    
}
function genq(){document.getElementById("numtit").innerText = "No.  " +  count+1 + "/" + nums.length +"\n"
    if (count == answer.length){
        document.getElementById("ques").src = ""
    var now = new Date();
    document.getElementById("nums").innerText = filename +"\n \n" + "score = " + score(answer,placesAns) +"\n \n" + now +"\n \n" +"[" + placesAns + "]"
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

 
    