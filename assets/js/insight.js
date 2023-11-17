let insight = document.querySelector(".insights");
// let insight_buttons = document.getElementsByClassName("insight-buttons");
let services_items = [
    {
      image: "images/4. Services - Wealth Advisory.png",
      description: "Our team of experienced advisors will work closely with you to understand your financial goals and create a personalized wealth management plan. We'll guide you through the complexities of the financial markets and help you make informed decisions.",
      cateogory: "Wealth Advisory",
      services:[
       
      ]
      
    },
    {
      image: "images/7. Services - Equity Trading.png",
      description: "Cultural economy",
      cateogory: "Equity Investment",
      services:[
        {

        }
      ]
    },
    {
      image: "images/10. Commodities.jpg",
      description: "Responsible savings and investments",
      cateogory: "Commodity Trading",
      services:[
        {

        }
      ]
    },
    {
      image: "images/16. Customised Strategies.jpg",
      description: "Our experts in sustainable finance",
      cateogory: "Customized Strategies",
      services:[
        {

        }
      ]
    },
    
  
  ]
  // for (let i = 0; i < insight_buttons.length; i++) {

  //   insight_buttons[i].addEventListener("click", (e) => {
  //     updateInsight(insight_buttons[i].innerHTML);
  
  //   })
  
  
  // }
  function updateInsight(param) {
  
    if (param == "See All" || param=="") {
      insight.innerHTML = "";
      services_items.forEach((x,index) => {
        if(index<=3){
        insight.innerHTML += ` 
        <div class="item">
          <div class="card">
            <img class="card-img img-fluid" src="${x.image}" alt="">
              <div class="card-img-overlay">
                 <h5 class="card-title fw-bolder">${x.cateogory}</h5>
               
                <a href="services.html" class="btn btn-sm btn-dark text-white" role="button">
                Know more
                </a>
              
               </div>
               
           </div>
        </div>`
      }})
    }
    else {
  
      insight.innerHTML = "";
  
      services_items.forEach((x) => {
        if (x.cateogory == param) {
          insight.innerHTML += ` 
          <div class="item">
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