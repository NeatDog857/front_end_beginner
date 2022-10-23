class Card{
    constructor(){
        this.value="";
        this.id="";
    }
    clear(){
        this.value="";
        this.id="";
    }
}

// class method
const firstcard= new Card;
const secondcard= new Card;
//console.log(firstcard,secondcard);

// no class method
/*
const card1=document.querySelector("#card1");
const card2=document.querySelector("#card2");
let card1id,card2id;
*/

function make_random_card_array(max){
    const array= [];
    // Auto build a array instead of DIY
    for(let i=1;i<=max;i++){
        array.push(i);
        array.push(i);
    }
    // The Fisher Yates Method for shuffle the array
    for(let i=array.length-1;i>0;i--){
        let j = Math.floor(Math.random()*(i+1));
        let k = array[i];
        array[i]= array[j];
        array[j]= k;
    }
    // Put the shuffled array into HTML separately
    for(let i=0;i<16;i++){
        let x="#p"+i;
        x=x.toString();
        document.querySelector(x).innerText= array[i];
    }
    return array
}

function start(){
    make_random_card_array(8);
    setInterval(_Timer,1000);
    document.querySelector("#timer").removeEventListener("click",start);
    document.querySelector("#timer").style.cursor = "auto";
    document.querySelector("#timer").style.borderStyle= "inset";
}

let pair=0;



function syncDelay(milliseconds){
    let start = new Date().getTime();
    let end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
}
let hrs=0,min=0,sec=0,totalSec=0;
// function Timer(){
//     sec++;
//     if(sec<10){
//         sec="0"+sec;
//         document.querySelector("#timer").innerText=sec+" second(s)";
//     }else if(sec>59){
//         min++;
//         sec="00";
//         if(min<10){
//             min="0"+min;
//         }else if(min>59){
//             min="00";
//         }
//     }
//     document.querySelector("#timer").innerText=min+" m " +sec+" s";
//     console.log(min,sec);
// }
function _Timer(){
    totalSec++;
    sec= totalSec%60;
    min= Math.floor((totalSec/60))%60;
    //hrs= Math.floor(totalSec/(60*60));
    document.querySelector("#timer").innerText=min+" m " +sec+" s";
    console.log(min,sec);
}

function mouseDown(elem){
    elem.style.borderStyle = "inset";
    
    //elem.style.animation="";
}
function mouseUp(elem){
    
    console.log("hi");
    
    elem.style=document.querySelectorAll(".card").style;
    //elem.style.backgroundColor="white";
    elem.classList.add("unfold");
    //elem.style.animation="flopover 1s linear";
    
    /*   先檢查
    
        再 A=開關+數值
    */
    // class method

    if(firstcard.value!=""){
        
        console.log("there's a value");
        
        secondcard.value= elem.innerText;
        secondcard.id="#"+ elem.id;
        
    
        if(firstcard.id==secondcard.id){
            console.log("come on man");
            document.querySelector(firstcard.id).classList.remove("unfold");
            firstcard.clear();
            secondcard.clear();
        }else if(firstcard.value!=secondcard.value){
            console.log("they're not equal",firstcard,secondcard);
            setTimeout(function(){
                document.querySelector(firstcard.id).classList.remove("unfold");
                document.querySelector(secondcard.id).classList.remove("unfold");
                firstcard.clear();
                secondcard.clear();
            },300);
            
        }else{
            console.log("they're equal");
            
            firstcard.clear();
            secondcard.clear();
            pair++;
        }
        
        
        

    }else{
        console.log("there's no value");
        firstcard.value= elem.innerText;
        firstcard.id="#"+ elem.id;
    }
    console.log(pair);
    if(pair==8){
        setTimeout(function(){
            alert("game over!!");
            history.go(0);
        },500);
        
    }else{
        return;
    }

    // no class method
    /*
    if(card1.innerText!=""){
        console.log("there's a value");
        card2.innerText = elem.innerText;
        card2id= elem.id;

        if(card1id==card2id){
            console.log("come on man");
            card1.innerText="";
            card2.innerText="";
            card1id="";
            card2id="";
        }else if(card1.innerText!=card2.innerText){
            console.log("they're not equal");
            card1.innerText="";
            card2.innerText="";
            card1id="";
            card2id="";
        }else{
            console.log("they're equal");
            card1.innerText="";
            card2.innerText="";
            card1id="";
            card2id="";
        }

    }else{
        console.log("there's no value");
        card1.innerText = elem.innerText;
        card1id= elem.id;
    }
    */
   
}
document.querySelector("#timer").addEventListener("click",start);