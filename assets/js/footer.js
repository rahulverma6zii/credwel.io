let script = document.createElement('script');

script.src =
    "https://kit.fontawesome.com/a076d05399.js";

document.head.appendChild(script);
let footer = document.getElementsByTagName("footer")[0];

footer.innerHTML = `
<div class="container">
<div class="row position-relative">
    <div class="col-12">
    <ul class="d-flex mx-auto list-unstyled justify-content-center border-bottom pb-3 mb-3 gap-3">
        <li class=""><a href="index.html" class="link-light">Home</a></li>
        <li class=""><a href="aboutus.html" class="link-light">About Us</a></li>
        <li class=""><a href="index.html#services" class="link-light">Services</a></li>
        <li class=""><a href="contact.html" class="link-light">FAQs</a></li>
        <li class=""><a href="contact.html" class="link-light">Contact Us</a></li>


    </ul>
    <i class="fa fa-linkedin-square" style="font-size:48px;color:white;"></i>
</div>
</div>
<div class="row text-center justify-content-center">
    <div class="col-12 col-lg-6 col-md-6 mx-auto ">
        <ul class="list-unstyled d-flex p-0 text-center justify-content-center gap-3">
            
            <li class=""><a class=" text-white" href="privacypolicy.html">Privacy Policy</a></li>
            <li class=""><a class=" text-white" href="cookies.html">Cookies</a></li>
        </ul>
    </div>

</div>
</div>

<p class="text-center text-white currentYear">©2023 CREDWEL</p>
`
let currentYear = document.getElementsByClassName("currentYear");
currentYear[0].innerHTML = `©${new Date().getFullYear()} CREDWEL`;