let x =0;
let intervallo;
let active = false;
document.querySelector('.left-arrow').addEventListener('click', ()=>{
    x = x-90;
    gira(x);
})
document.querySelector('.right-arrow').addEventListener('click', ()=>{
    x = x+90;
    gira(x);
})
document.querySelector('.left-arrow').addEventListener('mouseover', ()=>{
    x = x-30;
    gira(x);
})
document.querySelector('.left-arrow').addEventListener('mouseout', ()=>{
    x = x+30;
    gira(x);
})
document.querySelector('.right-arrow').addEventListener('mouseover', ()=>{
    x = x+30;
    gira(x);
})
document.querySelector('.right-arrow').addEventListener('mouseout', ()=>{
    x = x-30;
    gira(x);
})
document.querySelector('.play-pause').addEventListener('click', ()=>{
    if(active==false){
        active=true;
        document.querySelector('.fa-play').setAttribute("class", "fas fa-pause");
        intervallo = setInterval(() => {
            
            x = x+90;
            gira(x);
        }, 2000);
    }
    else{
        active=false;
        clearInterval(intervallo);
        document.querySelector('.fa-pause').setAttribute("class", "fas fa-play");
    }
})

function gira(x){
    let cube1 = document.querySelector('.cube-1');
    cube1.style.transform = `rotateY(${x}deg)`;
    let cube2 = document.querySelector('.cube-2');
    cube2.style.transform = `rotateY(${x}deg)`;
    let cube3 = document.querySelector('.cube-3');
    cube3.style.transform = `rotateY(${x}deg)`;
}

