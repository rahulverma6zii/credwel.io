
let mybutton = document.getElementById("myBtn");


let img = document.getElementsByTagName("img");



// insights_items.forEach((x => {
//   insight.innerHTML += `
//   <div class="col-12 col-lg-3 col-md-6">
//   <div class="card">
//   <img class="card-img img-fluid" src="${x.image}" alt="">
//   <div class="card-img-overlay">
//       <h5 class="card-title fw-bolder">${x.cateogory}</h5>
//       <p class="card-text">${x.description}</p>
//   </div>
//   </div>
// </div>
 
//       `
// }))

for (let i = 0; i < img.length; i++) {
  const element = img[i];
  element.classList.add("img-fluid")

}
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);




window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
    //   navbar.classList.remove("navbar-light");
    //   navbar.classList.add("navbar-dark");
    navbar.classList.add("modified-nav");
    navbar.classList.add("position-fixed")

  } else {
    // navbar.classList.remove("navbar-dark");
    // navbar.classList.add("navbar-light")
    mybutton.style.display = "none";
    navbar.classList.remove("modified-nav");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function updateCarousel() {

  $('.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: true,
        dots: true,
      }
    }
  })
}
updateCarousel();

console.clear();
