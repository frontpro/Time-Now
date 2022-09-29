const ham = document.querySelector(".ham");
const navlinks= document.querySelector(".nav-links");
const switches = document.querySelector(".slider");
const mo = document.querySelectorAll(".months");
const ye = document.querySelectorAll(".years");
const monthBill = document.querySelector(".month-bill");
const yearBill = document.querySelector(".year-bill");
const checkBox = document.querySelector(".checkbox");


ham.addEventListener("click",()=>{
    navlinks.classList.toggle("open");
});
window.addEventListener('DOMContentLoaded',function(){
    mo.forEach(element => {
        element.classList.add("show");
        })
        monthBill.style.fontWeight = "700";
    });
    
switches.addEventListener('click',function(){
    mo.forEach(function(i){
        if(!i.classList.contains("show")){
            i.classList.add("show");
        monthBill.style.fontWeight = "700";
        }
        else{
            i.classList.remove("show");
        monthBill.style.fontWeight = "500";

        } 
    });
    ye.forEach(function(j){
        if(!j.classList.contains("show")){
            j.classList.add("show")
            yearBill.style.fontWeight = "700";
        }
        else{
            j.classList.remove("show");
            yearBill.style.fontWeight = "500";

        } 
    })
    
})


