
// fetch the navbar page

fetch('navbar.html')  // fetch the navbar file from the same folder
.then(Response => Response.text())  // all the data wrapped in response in html formate then we use .text method
.then(data =>{
    document.querySelector('#navbar-placeholder').innerHTML = data;

    // manually load the JS after navbar is inserted
    const script = document.createElement('script');
    script.src = '/js/navbar.js';
    document.body.appendChild(script);
})  // send all the data in the #navbar-placeholder element


.catch((error) =>{
    console.log("navbar loaded", error)
})
 // fetch footer page
 fetch('footer.html')
 .then(Response => Response.text())
 .then(data => {
    document.querySelector('#footer-here').innerHTML = data;
 })
 .catch((error) =>{
    console.error("footer loaded error", error)
 })

// whatsapp chat bedge
let whatsapp = document.getElementById('whatsapp-chat-wid')
let chatEnd = document.querySelector('#chat-end')
console.log(chatEnd)  // get value

//  show whatsapp chat widge 1 second delay 
setTimeout(()=>{
    whatsapp.style.display = 'block'
}, 1000)

// close the chat if click on the cut button 
chatEnd.addEventListener('click',() => {
    whatsapp.style.display = 'none'
})


// lopping over text 
let loopText = "Discover your ascent of victory!";
let container = document.querySelector(".message-loop");

for(let i = 0; i < 20; i++){
    let msg = document.createElement('p');
    msg.className = 'loop-msg';
    msg.textContent = loopText;
    container.appendChild(msg);
}
