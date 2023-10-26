let insight = document.querySelector(".insights");
let mybutton = document.getElementById("myBtn");
let insight_buttons=document.getElementsByClassName("insight-buttons");
let navbar=document.getElementsByClassName("navbar")[0];

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  },false);


let insights_items = [
    {
        image: "https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?w=360&t=st=1698077702~exp=1698078302~hmac=75006da43490a9194a278e68fc4d960975c45dc707ec5920e6d91ad0e247e3b2",
        description: "Customer Experience",
        cateogory: "Innovation",

    },
    {
        image: "https://img.freepik.com/free-photo/lady-with-brown-eyes-is-smiling-red-wall_197531-16958.jpg?t=st=1698077692~exp=1698078292~hmac=ede14142ee6abff1de8350825a9b532d4d92eb2117ac2553e745609421e2a178",
        description: "Means of Payment",
        cateogory: "Innovation",

    },
    {
        image: "https://img.freepik.com/free-photo/young-modern-man-glasses-casual-outfit-standing-against-blue-background-smiling-happy-camera_1258-65394.jpg?w=740&t=st=1698077792~exp=1698078392~hmac=3b74f2f6742da3752d7190a6de8d5078cf0e6de3533c9ec073df0256c25ba27e",
        description: "Sustainable Mobility",
        cateogory: "Innovation",

    },
    {
        image: "https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg?w=360&t=st=1698078027~exp=1698078627~hmac=67b0bb790174fb94ac3eba7b75da3923fe5998ed4d6aec7ce783478d505eeef2",
        description: "Open innovation",
        cateogory: "Innovation",

    },
    {
        image: "https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?w=360&t=st=1698077702~exp=1698078302~hmac=75006da43490a9194a278e68fc4d960975c45dc707ec5920e6d91ad0e247e3b2",
        description: "Beyond Banking",
        cateogory: "Innovation",

    },
    {
        image: "https://img.freepik.com/free-photo/young-beautiful-smiling-female-trendy-summer-white-dress-sexy-carefree-woman-posing-near-blue-wall-studio-positive-model-having-fun-cheerful-happy-isolated_158538-25710.jpg?w=740&t=st=1698077818~exp=1698078418~hmac=263cd1e782c587855893855293de15a9460874d16ead3c0833b455a17e748cbc",
        description: "Energy transition and climate action",
        cateogory: "Transitions",

    },


    {
        image: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?t=st=1698077692~exp=1698078292~hmac=6c83d90b762a73d2458d42ee4631aa6560569b469ad444abc31fe04ad776cd00",
        description: "Natural Capacity and biodiversity",
        cateogory: "Transitions",

    },
    {
        image: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?t=st=1698077692~exp=1698078292~hmac=6c83d90b762a73d2458d42ee4631aa6560569b469ad444abc31fe04ad776cd00",
        description: "Cultural economy",
        cateogory: "Transitions",

    },
    {
        image: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?t=st=1698077692~exp=1698078292~hmac=6c83d90b762a73d2458d42ee4631aa6560569b469ad444abc31fe04ad776cd00",
        description: "Responsible savings and investments",
        cateogory: "Transitions",

    },
    {
        image: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?t=st=1698077692~exp=1698078292~hmac=6c83d90b762a73d2458d42ee4631aa6560569b469ad444abc31fe04ad776cd00",
        description: "Our experts in sustainable finance",
        cateogory: "Transitions",

    },
    {
        image: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?t=st=1698077692~exp=1698078292~hmac=6c83d90b762a73d2458d42ee4631aa6560569b469ad444abc31fe04ad776cd00",
        description: "finance and social inclusion",
        cateogory: "Inclusions",

    }, {
        image: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?t=st=1698077692~exp=1698078292~hmac=6c83d90b762a73d2458d42ee4631aa6560569b469ad444abc31fe04ad776cd00",
        description: "Diversity ,Equality and Inclusion",
        cateogory: "Inclusions",

    }
    , {
        image: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?t=st=1698077692~exp=1698078292~hmac=6c83d90b762a73d2458d42ee4631aa6560569b469ad444abc31fe04ad776cd00",
        description: "Social Enterprenaurship",
        cateogory: "Inclusions",

    }



]

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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

for (let i = 0; i < insight_buttons.length; i++) {
    let element = insight_buttons[i];
    element.addEventListener("click",(e)=>{
        updateInsight(e);
  
    })
    
    
}
function updateInsight(param) {
            if(param.innerHTML=="See All"){
                insights_items.forEach((x)=>{
                    insight.innerHTML+=` <div class="item">
                    <div class="card">
                    <img class="card-img img-fluid" src="${x.image}" alt="">
                    <div class="card-img-overlay">
                        <h5 class="card-title">${x.cateogory}</h5>
                        <p class="card-text">${x.description}</p>
                    </div>
                    </div>
                </div>`
                })
            }
}