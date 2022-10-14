class Comparison {
    constructor(card1,card2){
        this.card1=card1;
        this.card2=card2;
    }
    // compare(card1,card2){
    //     if(card1==card2){
    //         console.log("same");
    //     }else{
    //         console.log("different");
    //     }
    // }
    appendnumber(number){
        this.card2=number;
    }
    updatedisplay(){
        this.card2.innerText=this.card2;
    }
}

// const allcard= document.querySelectorAll(".card");
// const card1=document.querySelector("#card1").innerText;
// const card2=document.querySelector("#card2").innerText;

// const comparison= new Comparison(card1,card2);
// console.log(comparison);


// allcard.forEach(div=>{
//     div.addEventListener("click",()=>{
//         comparison.appendnumber(div.innerText);
//         comparison.updatedisplay();
//     })
// })





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
const This_array = make_random_card_array(8);
const firstcard= document.querySelector(".firstcard");
const secondcard= document.querySelector(".secondcard");

const card1=document.querySelector("#card1").innerText;
const card2=document.querySelector("#card2").innerText;

const comparison= new Comparison(card1,card2);

console.log(comparison);


function mouseDown(elem){
    //let x="#p"+id;
    //x=x.toString();
    //document.querySelector(x).style.borderStyle="inset";
    elem.style.borderStyle = "inset";
}
function mouseUp(elem){
    // let x="#p"+id;
    // x=x.toString();
    // document.querySelector(x).style.border=document.querySelector(".card").style.border;
    // document.querySelector(x).style.animation="flopover 1s linear";
    //elem.style.animation="flopover 1s linear";
    elem.style=document.querySelector(".card").style;
    comparison.card1=elem.innerText;
    console.log(comparison.card1);
    console.log(comparison);
    test();
    
}
function test(){
    if(comparison.card1==1){
        console.log("success");
    }else{
        console.log("failed");
    }
}
