const mover = document.getElementById("mover");
const homeBtn = document.getElementsByTagName("li")[0];
const memoryBtn = document.getElementsByTagName("li")[1];
const penduBtn = document.getElementsByTagName("li")[2];
const snakeBtn = document.getElementsByTagName("li")[3];
const container = document.getElementsByClassName("main-view")[0];
const viewHeight = container.getBoundingClientRect().bottom - container.getBoundingClientRect().top;

// NAVIGATION

homeBtn.addEventListener("click", function(){
    mover.style.top=0+"px";
})
memoryBtn.addEventListener("click", function(){
    const viewHeight = container.getBoundingClientRect().bottom - container.getBoundingClientRect().top;
    mover.style.top=(-(viewHeight))+"px";
})
penduBtn.addEventListener("click", function(){
    const viewHeight = container.getBoundingClientRect().bottom - container.getBoundingClientRect().top;
    mover.style.top=(-(viewHeight * 2))+"px";
})
snakeBtn.addEventListener("click", function(){
    const viewHeight = container.getBoundingClientRect().bottom - container.getBoundingClientRect().top;
    mover.style.top=(-(viewHeight * 3))+"px";
})


// MEMORY GAME

const mgContainer = document.getElementsByClassName("game-container")[0];

//LOCK AVANT DE LANCER

const mgStartLock = document.createElement("div");
    mgContainer.appendChild(mgStartLock);
    mgStartLock.classList.add("startLock")

const mgStartLockBg = document.createElement("div");
    mgStartLock.appendChild(mgStartLockBg);
    mgStartLockBg.classList.add("lockBg");

const mgLockText = document.createElement("p");
    mgStartLockBg.appendChild(mgLockText);
    mgLockText.classList.add("startText");
    mgLockText.innerText = "Appuyez sur le bouton ci-dessous pour démarer le jeu."

const mgStartBtn = document.createElement("button");
    mgStartLockBg.appendChild(mgStartBtn);
    mgStartBtn.innerText= "Start game";
    mgStartBtn.classList.add("startButton");
    
        mgStartBtn.addEventListener("click", memoryGame);
    

 function memoryGame(){
     
     //remove lock and start game
    function removeStartLock(){
        mgStartLock.style.display ="none";
    }
    mgStartLock.style.opacity = 0;
    setTimeout(removeStartLock,1000);

}