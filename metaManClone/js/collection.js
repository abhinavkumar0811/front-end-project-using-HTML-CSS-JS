// fetch the navbar from navbar.html
fetch('navbar.html')
.then(Response => Response.text())
.then(data =>{
    document.querySelector('.nav').innerHTML = data;
    
    let script = document.createElement('script');  // create the element
    script.src = '/js/navbar.js'   // set the attribute
    document.body.appendChild(script);  // then add the element to the parent node
})
.catch((error) => {
    console.log("navbar loading error", error);
})