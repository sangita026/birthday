// ===============================
// Elements
// ===============================

const startScreen = document.getElementById("startScreen");
const book = document.getElementById("book");
const music = document.getElementById("bgMusic");
const celebrateBtn = document.getElementById("celebrateBtn");
const hearts = document.getElementById("hearts");
const pages = document.querySelectorAll(".page");

// ===============================
// Open Book
// ===============================

function openBook(){

    startScreen.style.opacity="0";

    setTimeout(()=>{
        startScreen.style.display="none";
        book.style.display="block";
    },800);

    music.play().catch(()=>{
        console.log("Music blocked until user interaction.");
    });

}

// ===============================
// Page Flip
// Click each page to turn it
// ===============================

pages.forEach((page,index)=>{

    page.style.zIndex = pages.length-index;

    page.addEventListener("click",()=>{

        if(!page.classList.contains("flip")){
            page.classList.add("flip");
        }

    });

});

// ===============================
// Floating Hearts
// ===============================

const heartEmoji=["❤️","💖","💕","💗","💝"];

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=heartEmoji[Math.floor(Math.random()*heartEmoji.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.animationDuration=(4+Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

},500);

// ===============================
// Falling Petals
// ===============================

setInterval(()=>{

    const petal=document.createElement("div");

    petal.innerHTML="🌸";

    petal.style.position="fixed";
    petal.style.top="-50px";
    petal.style.left=Math.random()*100+"vw";
    petal.style.fontSize=(18+Math.random()*18)+"px";
    petal.style.pointerEvents="none";
    petal.style.transition="8s linear";

    document.body.appendChild(petal);

    setTimeout(()=>{
        petal.style.transform="translateY(120vh) rotate(720deg)";
    },50);

    setTimeout(()=>{
        petal.remove();
    },8000);

},700);

// ===============================
// Typewriter Effect
// ===============================

document.querySelectorAll(".type").forEach(element=>{

    const text=element.innerHTML;

    element.innerHTML="";

    let i=0;

    function typing(){

        if(i<text.length){

            element.innerHTML+=text.charAt(i);

            i++;

            setTimeout(typing,30);

        }

    }

    typing();

});

// ===============================
// Celebrate Button
// ===============================

celebrateBtn.addEventListener("click",()=>{

    alert("🎉 Happy Birthday Bittuuu ❤️🎂");

});

// ===============================
// Mouse Sparkles
// ===============================

document.addEventListener("mousemove",(e)=>{

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";
    star.style.left=e.clientX+"px";
    star.style.top=e.clientY+"px";
    star.style.pointerEvents="none";
    star.style.fontSize="18px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.style.transition="1s";
        star.style.opacity="0";
        star.style.transform="translateY(-30px)";

    },20);

    setTimeout(()=>{
        star.remove();
    },1000);

});

// ===============================
// Cake Animation
// ===============================

celebrateBtn.addEventListener("click",()=>{

    const cake=document.createElement("div");

    cake.innerHTML="🎂";

    cake.style.position="fixed";
    cake.style.left="50%";
    cake.style.top="50%";
    cake.style.transform="translate(-50%,-50%)";
    cake.style.fontSize="120px";
    cake.style.zIndex="9999";

    document.body.appendChild(cake);

    setTimeout(()=>{
        cake.remove();
    },3000);

});
// =======================================
// PART 4 - Celebration Effects
// =======================================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);

function createConfetti(){

    particles = [];

    for(let i=0;i<250;i++){

        particles.push({

            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height-canvas.height,
            size:5+Math.random()*8,
            speed:2+Math.random()*5,
            color:`hsl(${Math.random()*360},100%,60%)`,
            angle:Math.random()*360

        });

    }

    animateConfetti();

}

function animateConfetti(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        ctx.fillStyle=p.color;

        ctx.fillRect(p.x,p.y,p.size,p.size);

        p.y+=p.speed;

        p.x+=Math.sin(p.angle);

        p.angle+=0.03;

        if(p.y>canvas.height){

            p.y=-20;

        }

    });

    if(particles.length>0){

        requestAnimationFrame(animateConfetti);

    }

}

// =======================================
// Fireworks
// =======================================

function firework(){

    const boom=document.createElement("div");

    boom.innerHTML="🎆";

    boom.style.position="fixed";

    boom.style.left=Math.random()*80+10+"vw";

    boom.style.top=Math.random()*60+10+"vh";

    boom.style.fontSize="80px";

    boom.style.zIndex="9999";

    document.body.appendChild(boom);

    setTimeout(()=>{

        boom.remove();

    },1200);

}

// =======================================
// Celebration Button
// =======================================

celebrateBtn.addEventListener("click",()=>{

    createConfetti();

    for(let i=0;i<8;i++){

        setTimeout(firework,i*400);

    }

    const message=document.createElement("div");

    message.innerHTML=`
    <h1>❤️ Happy Birthday Bittuuu ❤️</h1>
    <p>
    Thank you for every memory.<br>
    Thank you for every smile.<br><br>

    No matter what happens,<br>
    you'll always be my best friend. 💖
    </p>
    `;

    message.style.position="fixed";
    message.style.top="50%";
    message.style.left="50%";
    message.style.transform="translate(-50%,-50%)";
    message.style.background="rgba(255,255,255,.95)";
    message.style.padding="40px";
    message.style.borderRadius="25px";
    message.style.textAlign="center";
    message.style.boxShadow="0 20px 40px rgba(0,0,0,.3)";
    message.style.zIndex="10000";

    document.body.appendChild(message);

    setTimeout(()=>{

        message.remove();

    },7000);

});

// =======================================
// Music Button
// =======================================

const musicBtn=document.createElement("button");

musicBtn.innerHTML="🎵 Music";

musicBtn.style.position="fixed";
musicBtn.style.right="20px";
musicBtn.style.bottom="20px";
musicBtn.style.padding="12px 20px";
musicBtn.style.border="none";
musicBtn.style.borderRadius="30px";
musicBtn.style.background="#ff4d88";
musicBtn.style.color="white";
musicBtn.style.cursor="pointer";
musicBtn.style.zIndex="9999";

document.body.appendChild(musicBtn);

let playing=false;

musicBtn.onclick=function(){

    if(!playing){

        music.play();

        playing=true;

        musicBtn.innerHTML="⏸ Pause";

    }else{

        music.pause();

        playing=false;

        musicBtn.innerHTML="🎵 Music";

    }

}