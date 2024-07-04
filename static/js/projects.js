document.addEventListener("DOMContentLoaded", function() {
  var element = document.querySelector('.reveal');
  setTimeout(function() {
      element.classList.add('active');
  }, 100); // Delay to ensure the transition works
});

document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector('.reveal1');
    setTimeout(function() {
        element.classList.add('active');
    }, 100); // Delay to ensure the transition works
});


document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector('.reveal2');
    setTimeout(function() {
        element.classList.add('active');
    }, 100); // Delay to ensure the transition works
});

document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector('.reveal3');
    setTimeout(function() {
        element.classList.add('active');
    }, 100); // Delay to ensure the transition works
});

function revealSide() {
    var reveals = document.querySelectorAll('.reveal-side');
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 50;
  
      if (revealtop < windowHeight - revealpoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
}

function revealSide2() {
    var reveals = document.querySelectorAll('.reveal-side2');
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 50;
  
      if (revealtop < windowHeight - revealpoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
}

function revealSide3() {
    var reveals = document.querySelectorAll('.reveal-side3');
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 50;
  
      if (revealtop < windowHeight - revealpoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
}
  
window.addEventListener('scroll', revealSide);
window.addEventListener('scroll', revealSide2);
window.addEventListener('scroll', revealSide3);
window.addEventListener('scroll', reveal);
window.addEventListener('scroll', reveal1);
window.addEventListener('scroll', reveal2);
window.addEventListener('scroll', reveal3);