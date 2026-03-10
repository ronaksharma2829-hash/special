let currentPage = 1;
const totalPages = 6;

/* PAGE SWITCH */

function nextPage(){

let current = document.getElementById("page"+currentPage);
current.classList.remove("active");

currentPage++;

if(currentPage<=totalPages){

let next=document.getElementById("page"+currentPage);
next.classList.add("active");

if(currentPage===2){
typeMessage();
}

if(currentPage===6){
startFireworks();
}

}

}


/* TYPING EFFECT */

function typeMessage(){

let text="Ayat... out of billions of people on the internet, somehow the universe connected us.";

let i=0;

let speed=50;

function typing(){

if(i<text.length){

document.getElementById("typingText").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,speed);

}

}

typing();

}


/* FIREWORKS */

function startFireworks(){

let canvas=document.getElementById("fireworks");

let ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<100;i++){

particles.push({
x:canvas.width/2,
y:canvas.height/2,
vx:(Math.random()-0.5)*6,
vy:(Math.random()-0.5)*6,
life:100
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;
p.life--;

ctx.fillStyle="gold";
ctx.fillRect(p.x,p.y,3,3);

});

requestAnimationFrame(animate);

}

animate();

}