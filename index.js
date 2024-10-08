let home=document.getElementById("home-link");
let about=document.getElementById("about-link");
let skills=document.getElementById("skills-link");
let services=document.getElementById("services-link");
let contact=document.getElementById("contact-link");

let sections=document.querySelectorAll("section");

function hidesection(){
    sections.forEach(section=>{
        section.style.display="none"
    });
}
function showsection(sectionId){
    hidesection();
    switch(sectionId){
        case  "home":
            hidesection();
            document.querySelector(".home").style.display="block";
            document.querySelector(".home").style.display="flex";
            break;
        case "about":
            document.querySelector(".about").style.display="block";
            // document.querySelector(".middle").style.display="none";
            break;
        case "skills":
            document.querySelector(".skills").style.display="block";
            // document.querySelector(".middle").style.display="none";
            break;
        case "services":
            document.querySelector(".Services").style.display="block";
            // document.querySelector(".middle").style.display="none";
            break;
        case "contact":
            document.querySelector(".Contact").style.display="block";
            // document.querySelector(".middle").style.display="none";
            break;
        case "default":
            document.querySelector(".home").style.display="block";
            document.querySelector(".home").style.display="flex";
    }
}
home.addEventListener("click", (e)=>{
    e.preventDefault();
    showsection("home")
});
about.addEventListener("click", (e)=>{
    e.preventDefault();
    showsection("about")
});
skills.addEventListener("click", (e)=>{
    e.preventDefault();
    showsection("skills")
});
services.addEventListener("click", (e)=>{
    e.preventDefault();
    showsection("services")
});
contact.addEventListener("click", (e)=>{
    e.preventDefault();
    showsection("contact")
});