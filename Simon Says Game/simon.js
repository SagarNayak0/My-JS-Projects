let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");
let allBtns = document.querySelectorAll(".btn");

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}


function userFlash(btn) {
    btn.classList.add("user-flash");
    setTimeout(function() {
        btn.classList.remove("user-flash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if(gameSeq[idx] === userSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
