let insight = document.querySelector(".insights");
let insight_buttons = document.getElementsByClassName("insight-buttons");
let insights_items = [
    {
      image: "images/5. Wealth advisory .jpg",
      description: "Our team of experienced advisors will work closely with you to understand your financial goals and create a personalized wealth management plan. We'll guide you through the complexities of the financial markets and help you make informed decisions.",
      cateogory: "Wealth Advisory",
      services:[
       
      ]
      
    },
    {
      image: "images/8. Equity.jpg",
      description: "Cultural economy",
      cateogory: "Equity Investment",
      services:[
        {

        }
      ]
    },
    {
      image: "images/12. Commodities .jpg",
      description: "Responsible savings and investments",
      cateogory: "Commodity Trading",
      services:[
        {

        }
      ]
    },
    {
      image: "images/13. Customised Strategies 3.jpg",
      description: "Our experts in sustainable finance",
      cateogory: "Customized Strategies",
      services:[
        {

        }
      ]
    },
    
  
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
               
                <a href="services.html" class="btn btn-dark text-white  text-uppercase" role="button">
                know more
                </a>
              
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