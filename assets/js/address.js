let address=document.getElementsByClassName("address")[0];
let addressContent=[
    {
        title:"Credwel Investments Private Limited",
        branchaddress:"",
        phone:" (+91) 022 4445 1031",
        email:"support@credwel.com",
        location:"Futura, Sr No 133(P), CTS No 4944, Magarpatta, Pune 411028",
        link:"https://maps.app.goo.gl/gkQ5XhPC7XW62sAGA"
    }
]

addressContent.forEach((x)=>{
    address.innerHTML+=`<div data-aos="fade-up" class="p-5 mb-5 row  align-items-center shadow-lg border-5 rounded-3">
    <div class="col-3 col-lg-2">
      <img
        src="https://img.freepik.com/free-vector/destination-concept-international-travel-journey-red-pointer-with-grey-world-map-inside_333792-53.jpg?w=740&t=st=1700026084~exp=1700026684~hmac=e5b2dae08ab254dd5ec592ecac39c560acf2e7395c486277ef0f6e9a924ad619"
        alt="" class="img-fluid">
    </div>
    <div class="col-9 col-lg-7 ">
      <h6 class="fs-5 fw-bolder ">
       ${x.title}
      </h6>
      <address class="fs-6">
       ${x.location}
      </address>
      <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href=" ${x.link}">
        Map and route 
        <i class="bi bi-arrow-right"></i>
    </a>

    </div>
    <div class="col-9 col-lg-3 ms-auto text-start">
      <div>
        <h6> <i class="fa fa-phone" ><a class="link-dark" href="tel:${x.phone}">${x.phone}</a></i></h6>
        <p>${x.email}</p>
      </div>

    </div>
  </div>`
})