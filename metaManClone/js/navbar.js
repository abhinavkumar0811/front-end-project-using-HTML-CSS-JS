// upper text start 

// get value
let upperText = document.querySelector('#upper-text')
let upperFirstText = document.querySelector('#upper-first-text')
let upperSecondText = document.querySelector('#upper-second-text')
let humbergerIcon = document.querySelector('#mobile-view');
let ulItem = document.querySelector('#ul-item');
let closingNavSlide = document.querySelector('#nav-slide-close');
console.log(closingNavSlide)
let subMenu = document.querySelector('#sub-menu')

let showFirst = true; //for track which message is showing

setInterval(() => {
    if (showFirst) {
        upperFirstText.style.display = "none";
        upperSecondText.style.display = "block";
    }
    else{
        upperFirstText.style.display ="block";
        upperSecondText.style.display ="none";
    }

     showFirst = !showFirst    // use for toggle - common way to flip the value every time
    // If showFirst is true, it becomes false.
    // If it's false, it becomes true.
}, 2000);




humbergerIcon.addEventListener('click', () => {

    // ulItem.style.display = 'none'
    
    // if(ulItem.style.display === 'flex'){
    //     ulItem.style.display = 'none'
    // }else{
    //     ulItem.style.display = 'flex';
    // }

    ulItem.classList.toggle('open-menu')
})


//closing slide nav
closingNavSlide.addEventListener('click', () => {
    if(ulItem.classList.toggle('open-menu')){
        ulItem.style.display = 'none'
     }
})



