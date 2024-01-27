// Timer part 

let days=document.getElementById("days");
let hrs=document.getElementById("hrs");
let mins=document.getElementById("min");
let secs=document.getElementById("sec");


setInterval(()=>{
    let time=new Date();

    days.innerHTML=time.getDate();
    hrs.innerHTML=time.getHours();
    mins.innerHTML=time.getMinutes();
    secs.innerHTML=time.getSeconds();
    
},1000);




document.querySelector("#btn").addEventListener("click" , ()=>{

    var email=document.getElementById("email").value;


    if(email==""){
        alert("Please Enter your email!");
        return false;
    }else{
        return true;
    }

    
})


document.querySelector("#codekori").innerHTML="Codekori";
document.querySelector("#codekori").style.color="yellow";

// document.querySelector(".more").innerHTML="MORE";

// document.querySelector(".slide h1").innerHTML="MOST SEARCHED PRODUCTS";

document.querySelector(".slide h1").style.marginTop="32px";

document.querySelector(".features").style.marginTop="40px"
document.querySelector(".features h1").style.marginTop="40px";

// document.querySelector(".slidecard .shopbtn3").style.color="White";
// document.querySelector(".slidecard .shopbtn3").style.backgroundColor="blue";



document.querySelector("#logo").addEventListener("click" , ()=>{

    alert("KORI Industries and Shoping Market");

    
} )


document.querySelector(".bottom-details").addEventListener("click" , ()=>{

alert("Copyright Strictly Probhibited! Caution")
}) 



