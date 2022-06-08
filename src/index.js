import './less/index.less'

// Your code goes here!
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".nav-link");
const images = document.querySelectorAll("img");
const pTags = document.querySelectorAll("p")

function hoverBlue(evt){
    evt.target.style.color = 'blue';
}
function hoverOff(evt){
    evt.target.style.color = "";
    evt.target.style.transform = 'scale(1)';
}
function escKey(evt) {
    if(evt.key === "Escape" && body.style.color === ""){
        body.style.color = 'red';
        body.style.fontStyle = 'italic';
    } else if (evt.key === "Escape" && body.style.color === 'red'){
        body.style.color = "";
        body.style.fontStyle = '';
    }
}
function imgZoom(evt){
    evt.preventDefault();
    scale =+ evt.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 1.2);
    evt.target.style.transform = `scale(${scale})`
}
let scale = 1;



    
        // if(evt.target === navLinks) {
        //     evt.target.style.color = "blue";
        // }
    

navLinks.forEach(element => {element.addEventListener("mouseover", hoverBlue)})
navLinks.forEach(element => {element.addEventListener("mouseout", hoverOff)})

document.addEventListener("keydown", escKey);

images.forEach(element => {element.addEventListener("wheel", imgZoom)});
images.forEach(element => {element.addEventListener("mouseout", hoverOff)});

// window.addEventListener('load', evt => {
//     alert('Event Listeners!')
// })

// function getFocus(evt){
//     evt.target.style.border = '1px';
//     evt.target.style.borderColor = 'red';
//     evt.target.style.color = 'red';
// }
// pTags.forEach(element => {element.addEventListener("focus", getFocus)})
// pTags.forEach(element => {element.addEventListener("focus", function() {
//     pTags.style.fontStyle = 'italic';
//     pTags.style.color = 'red';
// }, true)})
//                  ?? MAYBE DOESNT WORK WITH <p> ??

window.addEventListener('resize', function() {
    console.log(`Window heigth: ${this.window.innerHeight}`);
    console.log(`Window width: ${this.window.innerWidth}`);
})

document.addEventListener("scroll", function(){
    console.log('You scrolled!!')
})

// pTags.forEach(element => {
//     element.addEventListener("select", myFunction)
// })

// function myFunction(evt) {
//     evt.target.style.color = 'white';
//     console.log('you selected something')
// }
//        ?? SAME QUESTION AS ABOVE ??

document.addEventListener("dblclick", function(evt){
    if (evt.target.style.backgroundColor === ''){
        evt.target.style.backgroundColor = 'black';
    } else if (evt.target.style.backgroundColor === 'black') {
        evt.target.style.backgroundColor = '';
    }
})
