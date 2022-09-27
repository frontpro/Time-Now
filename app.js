const ham = document.querySelector(".ham");
const navlinks= document.querySelector(".nav-links");
const switches = document.querySelector(".slider");
const mo = document.querySelectorAll(".months");
const ye = document.querySelectorAll(".years");



ham.addEventListener("click",()=>{
    navlinks.classList.toggle("open");
});
window.addEventListener('DOMContentLoaded',function(){
    mo.forEach(element => {
        element.classList.add("show");
        })
    });
    
switches.addEventListener('click',function(){
    if(!mo.classList.contains("show")){
        mo.classList.add("show");
        ye.classList.remove("show")
    }
    else{
        mo.classList.remove("show");
        ye.classList.add("show")
    }
})
