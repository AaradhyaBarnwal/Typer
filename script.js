 
 const textCon = document.querySelector(".textContainer");
 const text = document.querySelector(".textBox");
 const card = document.querySelector(".good");
 const min = document.querySelector(".timing_1");
 let sec = document.querySelector(".timing_2");
 const box = document.querySelector(".srt");
 const start = document.querySelector(".st");
 const stop = document.querySelector(".sto");
 const resume = document.querySelector(".resume");
 const Btn = document.querySelector(".btn");
 const input = document.querySelector(".inputt");
const name = prompt("Your name ??");
function names() {
    text.innerHTML=`
           <h4> Hi!! ${name}    This is Aaradhya Barnwal. And this webapp here is to help you test your typing speed.
            so, I hope you will score well and I think you will. It's has been quite along time I have tested mine .
            I was going to use another website to test it but then I thought I can make my own customizable test with my
            fav colours and theme , I was also getting quite bored and I wasn't feeling like completing my other 
            projects I think this text is getting a bit longer </h4>
      `
      card.style.display = "none" ;
};

let secs = 0;
let mins = 0;

function timer() {
    t = setInterval(() => {
        secs++;
        updateDisplay();
        if (secs===60) {
            secs = 0;
            mins++
        } else {
        }
    }, 1000);
    updateDisplay();
}

function timerStop() {
    clearInterval(t);
    updateDisplay();
}

function timerClear() {
     mins = 0;
        secs = 0;
        updateDisplay();
    t = setInterval(() => {
       
        secs++;
        updateDisplay();
        if (secs===60) {
            secs = 0;
            mins++
        } else {
        }
    }, 1000);
    updateDisplay();

}

function updateDisplay() {
    min.textContent = String(mins).padStart(2, '0');
    sec.textContent = String(secs).padStart(2, '0');
}


function Checker() {
    console.log(input.value.length);

   
    let totalseconds =  mins * 60 + secs;
    let minutes = totalseconds/60;
    let typed = input.value;
    let wpm = Math.round(typed.length/5/minutes) ;
    console.log("wpm:",wpm);

    let og = text.innerText;

    let errors = 0;
    let maxleg = Math.max(og.length,typed.length);
    for (let i = 0; i < maxleg; i++) {
        if (og[i] !== typed[i]) {
        errors++
        }
    }

    console.log("Errors:",errors);
    if (secs === 0 && mins === 0) {
        wpm = "timer not started"
    } else {
        wpm = Math.round(typed.length/5/minutes) ;
    }
    card.innerHTML= `
   <h4 class="sym">🕸️๋࣭ ⭑˚₊𓆩༺🕷༻𓆪₊˚🕸️๋࣭ ⭑</h4>
   <h4>Wpm : ${wpm}</h4><h4>Errors : ${errors}</h4> 
   <h4 class="sym">≽^• ˕ • ྀི≼</h4>`
   textCon.style.display="none";
   card.style.display = "flex";
 let extra = typed.length - og.length;
    console.log(extra); 


}

names();
start.addEventListener('click',timer);
stop.addEventListener('click',timerStop);
resume.addEventListener('click',timerClear);
Btn.addEventListener('click',Checker);
