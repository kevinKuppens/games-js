const mover = document.getElementById("mover");
const homeBtn = document.getElementsByTagName("li")[0];
const memoryBtn = document.getElementsByTagName("li")[1];
const penduBtn = document.getElementsByTagName("li")[2];
const snakeBtn = document.getElementsByTagName("li")[3];
const container = document.getElementsByClassName("main-view")[0];
const viewHeight = container.getBoundingClientRect().bottom - container.getBoundingClientRect().top;



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