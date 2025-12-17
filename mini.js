let gameSqc = [];
let userSqc = [];
let started = false;
let level = 0;
let btns=["yellow","red","purple","green"];
let h2 = document.querySelector("h2");
document.addEventListener("click", function (e) {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }

})
document.addEventListener("keypress", function (e) {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }

})
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp() {
    userSqc=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randomColor}`);

    // console.log(randIdx);
   
    // console.log(randomColor);
    //  console.log(randbtn);
    gameSqc.push(randomColor);
    console.log(gameSqc);
    
    
    btnFlash(randbtn);
}

function checkSqc(idx){
    console.log(level);
   
    if(userSqc[idx]==gameSqc[idx]){
       if(userSqc.length==gameSqc.length){
        setTimeout(levelUp, 1000);
       }
        
    }else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b><br>Press any key to start or Touch anywhere to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let clickedBtn=this;
    btnFlash(clickedBtn);

    let userColor=clickedBtn.getAttribute("id");
    // console.log(userColor);
    userSqc.push(userColor);
    checkSqc(userSqc.length-1);
    
    
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSqc=[];
    userSqc=[];
    level=0;

}