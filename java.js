$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $("#header").addClass("active01");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $("#header").removeClass("active01");
      }
  });
});

(document).ready(function() {
  $("#carouselBanner").swiperight(function() {
    $(this).carousel('prev');
  });
  $("#carouselBanner").swipeleft(function() {
    $(this).carousel('next');
  });
});
    


gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
    ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 20%",
        markers: true,
        onEnter: function () {
            gsap.fromTo(
                elem,
                { y: 100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                }
            );
        },
        onLeave: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: function () {
            gsap.fromTo(
                elem,
                { y: -100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                }
            );
        },
        onLeaveBack: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        }
    });
});

var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("activate");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
/*
let answers = document.querySelectorAll(".questions");
answers.forEach((event) => {
event.addEventListener("click", () => {
  if (event.classList.contains("active")) {
    event.classList.remove("active");
  } else {
    event.classList.add("active");
  }
});
});

let valueDisplays = document.querySelectorAll(".num");
  let interval = 4000;

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });



  


/*
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };


  
  
  
  let valueDisplays=document.querySelectorAll(".num");
  let interval=5000;

  valueDisplays.forEach((valueDisplay)=>{
    let startValue=0; 
    let endValue=parseInt(valueDisplay.getAttribute("data-val"))
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(function(){
      startValue+=1;
      valueDisplay.textContent=startValue;
      if(startValue==endValue){
        clearInterval(counter);
      }
    },duration);
    });
  */