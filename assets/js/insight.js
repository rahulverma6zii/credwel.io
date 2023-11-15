let insight = document.querySelector(".insights");
let insight_buttons = document.getElementsByClassName("insight-buttons");
let insights_items = [
    {
      image: "https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?w=360&t=st=1698077702~exp=1698078302~hmac=75006da43490a9194a278e68fc4d960975c45dc707ec5920e6d91ad0e247e3b2",
      description: "Natural Capacity and biodiversity",
      cateogory: "Transitions",
    },
    {
      image: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?t=st=1698077692~exp=1698078292~hmac=6c83d90b762a73d2458d42ee4631aa6560569b469ad444abc31fe04ad776cd00",
      description: "Cultural economy",
      cateogory: "Transitions",
    },
    {
      image: "https://img.freepik.com/free-photo/smart-confidence-asian-female-startup-entrepreneur-small-business-owner-businesswoman-wear-smart-casual-cloth-smile-hand-use-tablet-woking-inventory-checking-showroom-office-daytime-background_609648-342.jpg?t=st=1698393297~exp=1698393897~hmac=d2f98ac3ab9297d07577d02af8844fd56850e6b091b8c544556fba5e1cf3e819",
      description: "Responsible savings and investments",
      cateogory: "Transitions",
    },
    {
      image: "https://img.freepik.com/free-photo/teammates-preparing-objectives_23-2147577239.jpg?1&w=740&t=st=1698398956~exp=1698399556~hmac=e1e9785c485af7f2a905a41077908ea6ceb6dec0e23615430e2cee1d1d29bf28",
      description: "Our experts in sustainable finance",
      cateogory: "Transitions",
    },
    {
      image: "https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?w=360&t=st=1698398985~exp=1698399585~hmac=7f589ca18638fd808e7947f4fe1cba63a355a7791c743aacf8e8560038b5f8bf",
      description: "finance and social inclusion",
      cateogory: "Inclusion",
    }, {
      image: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=740&t=st=1698399008~exp=1698399608~hmac=e650416aff382515b6d2657884ca79ee0192f27058a11c5847dc39bce125af95",
      description: "Diversity ,Equality and Inclusion",
      cateogory: "Inclusion",
    }
    , {
      image: "https://img.freepik.com/free-photo/portrait-smiley-businessman-close-up_23-2148746290.jpg?w=740&t=st=1698399283~exp=1698399883~hmac=9af5365356f4e7283ce67ee645c2f55e12703d065e1fe65113d162a866487331",
      description: "Social Enterprenaurship",
      cateogory: "Inclusion",
    },
    {
      image: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?t=st=1698077692~exp=1698078292~hmac=6c83d90b762a73d2458d42ee4631aa6560569b469ad444abc31fe04ad776cd00",
      description: "Social Enterprenaurship",
      cateogory: "Innovation",
    }
  
  
  ]
  for (let i = 0; i < insight_buttons.length; i++) {

    insight_buttons[i].addEventListener("click", (e) => {
      updateInsight(insight_buttons[i].innerHTML);
  
    })
  
  
  }
  function updateInsight(param) {
  
    if (param == "See All" || param=="") {
      insight.innerHTML = "";
      insights_items.forEach((x,index) => {
        if(index<=3){
        insight.innerHTML += ` 
        <div class="col-12 col-lg-3 col-md-6">
        <div class="card">
        <img class="card-img img-fluid" src="${x.image}" alt="">
        <div class="card-img-overlay">
            <h5 class="card-title fw-bolder">${x.cateogory}</h5>
            <p class="card-text">${x.description}</p>
        </div>
        </div>
    </div>`
      }})
    }
    else {
  
      insight.innerHTML = "";
  
      insights_items.forEach((x) => {
        if (x.cateogory == param) {
          insight.innerHTML += ` 
          <div class="col-12 col-lg-3 col-md-6">
                    <div class="card">
                    <img class="card-img img-fluid" src="${x.image}" alt="">
                    <div class="card-img-overlay">
                        <h5 class="card-title fw-bolder">${x.cateogory}</h5>
                        <p class="card-text">${x.description}</p>
                    </div>
                    </div>
                </div>`
        }
      })
    }
  
  
  }
  updateInsight("");