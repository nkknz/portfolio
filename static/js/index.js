window.addEventListener('scroll', reveal);
window.addEventListener('scroll', revealSide);
window.addEventListener('scroll', revealSide2);
window.addEventListener('scroll', revealSide3);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

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
  

