$(document).ready(function(){
var lastChild = $(".slider div.box:last-child").clone();
function rotate() {
    $('.slider div').removeClass('firstSlide');
    $('.slider div.box:last-child').remove();
    $('.slider').prepend(lastChild);
    $(lastChild).addClass('firstSlide');
  }
  
  window.setInterval(function () {
    rotate();
  }, 4000);
})
      