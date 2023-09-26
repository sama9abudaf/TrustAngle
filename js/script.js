document.addEventListener("DOMContentLoaded", function () {
const navbar = document.getElementById("navbar");
const navcollapse=document.querySelector(".navbar-expand-lg .navbar-nav");

  window.onscroll = function () {
    if (this.scrollY >= 100 ) {
        navbar.classList.add("navbar-color");
        navcollapse.classList.add("navbar-color");
    } else {
        navbar.classList.remove("navbar-color");
        navcollapse.classList.remove("navbar-color");
    }
    
    
};

const mobile = window.matchMedia('(max-width: 767px)');
const ipad = window.matchMedia('(min-width: 768px) and (max-width: 1199px)');
const web = window.matchMedia('(min-width: 1200px)');


const section2=document.getElementById("secondSec");
const section3=document.getElementById("thirdSec");
const referralSec =document.getElementById("referral");

const buttons = document.querySelectorAll('.nav-link'); //all nav-link

const sections =[section2,section3,referralSec]; 
 const navList =[buttons[0],buttons[1],buttons[2]]




 navList.forEach((navItem, index) => {
    navItem.addEventListener('click', function (event) {
      event.preventDefault();
      const targetSection = sections[index];
      const targetOffset = targetSection.offsetTop;
      
      window.scrollTo({
        top: targetOffset-120,
        behavior: "smooth",
      });


    if(mobile.matches && sections[index]==referralSec){

        window.scrollTo({
            top: targetOffset-80,
            behavior: "smooth",
          });
    };
    });
  });




var Section = document.getElementById("fisrtSec");

document.getElementById("down-btn").onclick = function() {
    if (mobile.matches) {
        window.scrollTo({
            top: Section.offsetTop-250,
            behavior: "smooth"
        });
    } else if (ipad.matches) {
        window.scrollTo({
            top: Section.offsetTop-200,
            behavior: "smooth"
        });
    } else if (web.matches) {
        window.scrollTo({
            top: Section.offsetTop-100,
            behavior: "smooth"
        });
    }
    
};


   

});


