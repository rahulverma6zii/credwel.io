


let footer = document.getElementsByTagName("footer")[0];

footer.innerHTML = `
<div class="container">
<div class="row ">
    <div class="col-12">
    <ul class="d-flex mx-auto list-unstyled justify-content-center border-bottom pb-3 mb-3 gap-2 gap-lg-3">
        <li class=""><a href="index.html" class="link-light">Home</a></li>
        <li class=""><a href="index.html#services" class="link-light">Services</a></li>
        <li class=""><a href="aboutus.html" class="link-light">About Us</a></li>
        <li class=""><a href="contact.html" class="link-light">Contact Us</a></li>
    </ul>
   
</div>
</div>
<div class="row  ">



    <div class="col-12   mx-auto text-center justify-content-center position-relative">
    <i class="fa fa-linkedin-square start-0 position-absolute top-0 start-0" style="font-size:30px;color:white;"></i>
        <ul class="list-unstyled d-flex p-0 text-center justify-content-center gap-3 ">
            
            <li class=""><a class="link text-white" href="privacypolicy.html" target="_parent">Privacy Policy</a></li>
            <li class=""><a class="link text-white" href="cookies.html" target="_parent">Cookies</a></li>
        </ul>
       
    </div>

</div>
</div>

<p class="text-center text-white currentYear"></p>

   
`
let currentYear = document.getElementsByClassName("currentYear");
currentYear[0].innerHTML = `©${new Date().getFullYear()} <a href="index.html" class="link-light">CREDWEL</a> `;