$(document).ready(function () {
//slideshow
var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mostra");
  for (i = 0; i < slides.length; i++) {
    console.log(slides)
    $(slides[i]).css("display", "none");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  $(slides[slideIndex - 1]).fadeIn(1000);
  setTimeout(showSlides, 6000);
}

showSlides();


//logo

  $("#img_logo").css("transform", "translate(0%, 0)");
    
       //ham munu
    
    
  var menu = document.querySelector(".menu");
  var ham = document.querySelector(".ham");
  var xIcon = document.querySelector(".xIcon");
  var menuIcon = document.querySelector(".menuIcon");

  ham.addEventListener("click", attivaMenu);

      function attivaMenu() {
        if (menu.classList.contains("showMenu")) {
          menu.classList.remove("showMenu");
          xIcon.style.display = "none";
          menuIcon.style.display = "block";
        } else {
          menu.classList.add("showMenu");
          xIcon.style.display = "block";
          menuIcon.style.display = "none";
        }
    }

  var menuLinks = document.querySelectorAll(".menuLink");

  //iterate with forEach all the link so they can get the
  //click event listener and call "attivaMenu" function
  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", attivaMenu);
  });
    
    
    
    
    // indirizzo
    
    
    
    document.getElementById('address').addEventListener('click', function(e){
        e.preventDefault();
    })
    
    
    
    
    
    
    
    
    
    
    }); //ready