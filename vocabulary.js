
answer = ["a","c","c","d","b","c","d","a","a","b","a","b","c","c","d","a","a","d","b","c","a","d","b","a","a","d","c","b","c","a","d","c","c","b","d","a","c","b","b"]

nums=  ["1	BAD","2	WET","3	CHIEF","4	CHOP","5	SOFT","6	GOWN","7	IMAGINARY","8	ACTIVE","9	PIERCE","10	INVALUABLE","11	ADAPT","12	IMPARTIAL","13	REPUTABLE","14	LIGHTEN","15	GROUNDLESS","16	FASTEN","17	BARGAINING","18	WORRISOME","19	UNDERCURRENT","20	SATANIC","21	PRICELESS","22	MUTINOUS","23	HOMELY","24	FUNCTIONAL","25	EXEMPT","26	GALLANT","27	EXPRESSLY","28	DAPPER","29	COGNIZANT","30	PORTEND","31	BENEDICTION","32	CONCOMITANT","33	GUILELESS","34	CULMINATE","35	EXONERATE","36	ICONOCLASTIC","37	IMPLICIT","38	PENURIOUS","39	SPURIOUS","40	TRANSMOGRIFY"]


options =  [["a)	evil ","b)	angel ","c)	good ","d)	ban"],["a)	appetite ","b)	strong ","c)	watery ","d)	dry"],["a)	mainly ","b)	minor ","c)	head ","d)	unimportant"],["a)	rough ","b)	duty ","c)	stormy ","d)	divide"],["a)	harsh ","b)	undemanding ","c)	contact ","d)	comfort"],["a)	sack ","b)	shout ","c)	robe ","d)	about"],["a)	realistic ","b)	bleak ","c)	trance ","d)	dreamy"],["a)	mobile ","b)	baffle ","c)	rigid ","d)	motion"],["a)	puncture ","b)	stung ","c)	loud ","d)	stabbing"],["a)	worthless ","b)	valuable ","c)	variable ","d)	cheap"],["a)	convert ","b)	flexible ","c)	inflexible ","d)	transformation"],["a)	connected ","b)	detached ","c)	involved ","d)	unconcern"],["a)	infamous ","b)	supposed ","c)	good ","d)	stature"],["a)	discover ","b)	darken ","c)	illumine ","d)	weak"],["a)	justified ","b)	background ","c)	basis ","d)	absurd"],["a)	affix ","b)	untie ","c)	holder ","d)	thin"],["a)	trafficking ","b)	anticipate ","c)	promise ","d)	agree"],["a)	reassuring ","b)	unworried ","c)	annoy ","d)	perturbing"],["a)	undercharge ","b)	atmosphere ","c)	undermine ","d)	belittle"],["a)	divine ","b)	devil ","c)	inhuman ","d)	biting"],["a)	prized ","b)	cheap ","c)	menu ","d)	expense"],["a)	defiance ","b)	uprising ","c)	obedient ","d)	turbulent"],["a)	mother ","b)	domestic ","c)	formal ","d)	revered"],["a)	plain ","b)	official ","c)	decorative ","d)	gathering"],["a)	spared ","b)	liable ","c)	except ","d)	illustrate"],["a)	cowardly ","b)	escort ","c)	courageousness ","d)	polite"],["a)	assert ","b)	energetic ","c)	particularly ","d)	vaguely"],["a)	sloppy ","b)	spry ","c)	bespeckled ","d)	dappled"],["a)	unaware ","b)	apprehension ","c)	acquainted ","d)	perception"],["a)	presage ","b)	insignificant ","c)	presentiment ","d)	emblazon"],["a)	anathema ","b)	benevolence ","c)	munificence ","d)	blessing"],["a)	coincidental ","b)	accidental ","c)	incidental ","d)	compressed"],["a)	artful ","b)	shame ","c)	innocent ","d)	transparent"],["a)	crown ","b)	peak ","c)	begin ","d)	pursue"],["a)	absolution ","b)	inflate ","c)	incriminate ","d)	vindicate"],["a)	denunciatory ","b)	credulity ","c)	uncritical ","d)	optimistic"],["a)	innuendo ","b)	explicit ","c)	latent ","d)	stated"],["a)	paucity ","b)	indigent ","c)	dearth ","d)	meditative"],["a)	authentic ","b)	specious ","c)	sordid ","d)	dishevelled"],["a)	attitudinize ","b)	traverse ","c)	mutation ","d)	metamorphose"]]


options2= ['abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd', 'abcd']

placesAns= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
totalCount = nums.length - 1

filename = "/vocabulary/"
minutes= 5.05
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
    