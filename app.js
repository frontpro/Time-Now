const ham = document.querySelector(".ham");
const navlinks= document.querySelector(".nav-links");


ham.addEventListener("click",()=>{
    navlinks.classList.toggle("open");
});