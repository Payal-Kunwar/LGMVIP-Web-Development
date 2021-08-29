var slidePosition = 1;
SlideShow(slidePosition);



//  images controls
function currentCourse(n) {
  SlideShow(slidePosition = n);
}

var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("free");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 5000); // Change image every 2 seconds
} 
/* Image Galery*/
function change(some_id){
      document.getElementById("img1").src=some_id;
  }

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});
