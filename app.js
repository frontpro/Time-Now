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
    mo.forEach(function(i){
        ye.forEach(function(j){
            if(!i.classList.contains("show")){
                i.classList.add("show");
                j.classList.remove("show")
            }
            else{
                i.classList.remove("show");
                j.classList.add("show")
            }
        })
    })
    
})
