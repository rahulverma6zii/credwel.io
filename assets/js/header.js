
let header = document.getElementsByTagName("header")[0];

let headerContent = `
 
<nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white position-relative">
<div class="progress-container position-absolute top-0 ">
<div class="progress-bar" id="myBar"></div>
</div> 
<div class="container">

  <a class="navbar-brand" href="index.html">
       <img src="images/logo.jpg" class="logo" alt="">
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
    aria-controls="offcanvasNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
    aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">CREDWEL</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
     <ul class=" navbar-nav justify-content-center flex-md-column flex-grow-1 ms-0 ms-lg-5 list-unstyled flex-column flex-lg-row ">

       <li class="p-0 mx-0 mx-lg-5 nav-item hover-outline">
           <a class="nav-link " aria-current="page" href="index.html">Home</a>
       </li>
      
       <li class="p-0 mx-0 mx-lg-5 nav-item dropdown  hover-outline">
       <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Services
       </a>
       <ul class="dropdown-menu">
         <li><a class="dropdown-item" href="wealthadvisory.html">Wealth Advisory</a></li>
         <li><a class="dropdown-item" href="equityinvestment.html">Equity Investment</a></li>
         <li><a class="dropdown-item" href="commoditytrading.html">Commodity Trading</a></li>
         <li><a class="dropdown-item" href="customizedstrategies.html">Customized Strategies</a></li>
       </ul>
     </li>
       <li class="p-0 mx-0 mx-lg-5 nav-item hover-outline">
           <a class="nav-link" href="aboutus.html">About Us</a>
       </li>

       
      
       <li class="nav-item dropdown p-0 mx-0 mx-lg-5 hover-outline">
       <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       Contact Us
       </a>
       <ul class="dropdown-menu">
         <li><a class="dropdown-item" href="joinus.html">Join Us</a></li>
         <li><a class="dropdown-item" href="contact.html">Get In Touch</a></li>
         
       </ul>
     </li>


   </ul>

     
    </div>
  </div>
</div>
</nav>

`;
header.innerHTML = headerContent;
let navbar = document.getElementsByClassName("navbar")[0];
window.onscroll = function () { scrollFunction(); myFunction(); };
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    navbar.classList.add("modified-nav");
    navbar.classList.add("position-fixed")

  } else {

    navbar.classList.remove("modified-nav");
  }
}


function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}