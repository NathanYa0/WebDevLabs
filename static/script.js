function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    
    console.log(x3);
  }

function findTheBanana(ele, idx, arr) {
    if (ele === "Banana") {
        alert("BANANA found at index " + idx + " in " + "[" + arr + "]");
    }
}
function greetingFunc() {

    let d = new Date();
    
    let h = d.getHours();
    
    let E = document.getElementById("greeting");

    let originalText = E.innerHTML;

    if (h < 12) {
      E.innerHTML = "Good morning, "+ originalText;
    } else if (h > 12 && h < 18) {
      E.innerHTML = "Good afternoon, " + originalText;
    } else if (h > 18 && h < 20) {
        E.innerHTML = "Good evening, " + originalText;
    } else if ((h > 20 && h < 24) || (h > 0 && h < 5)) {
        E.innerHTML = "Good night, Hi, " + originalText;
    }
}


function addYear() {
    let currentYear = new Date().getFullYear();
    let yearParagraph = document.getElementById("copyYear");
    if (yearParagraph) {
      yearParagraph.innerHTML =  currentYear + yearParagraph.innerHTML;
    }
}

/*function showList() {
    const btn = document.getElementById("funButton");
    const list = document.getElementById("funList");

    if (list) {
        list.style.display = "block";
    }

    if (btn) {
        btn.style.display = "none";
    }
}
    */

addYear()
let x = 5;
let y = 7;
let z = x+y;
console.log(z);
let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

SumNPrint(x,y);
SumNPrint(A,B);

if (C.length>z){
    console.log(C);
}
else if(C.length<z){
    console.log(z);
}
else{
    console.log("Good Job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

//L1.forEach(findTheBanana)
//L2.forEach(findTheBanana)

greetingFunc()


//READ STUFF
$(document).ready(function(){
    $("#readMore").click(function(){
        $("#shortBio").hide();       
        $("#extendedBio").slideDown("slow"); 
        $("#readMore").hide();       
        $("#readLess").show();         
    });
    
    $("#readLess").click(function(){
        $("#extendedBio").slideUp("slow"); 
        $("#shortBio").show();      
        $("#readLess").hide();   
        $("#readMore").show();    
    });
});

function validate(){
    console.log("HIASD");
    var message = document.getElementById("message");
    var name = document.getElementById("name");
    var comment = document.getElementById("comment");
    var email = document.getElementById("email");
    if (!name.checkValidity()){
        message.innerHTML = ("WRONG NAME");
    }
    if (!comment.checkValidity()){
        message.innerHTML = ("WRONG COMMENT");
    }
    if (!email.checkValidity()){
        message.innerHTML = ("WRONG EMAIL");
    }
}


function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        const advice = data.slip.advice;
        document.getElementById("adviceText").innerText = advice;
      })
      .catch(error => {
        console.error('Error fetching advice:', error);
        document.getElementById("adviceText").innerText = "Sorry, an error occurred while fetching advice.";
      });
  }
  
  