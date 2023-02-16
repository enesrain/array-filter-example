//elemanları çağırma
let show = document.querySelector("main")
let input = document.querySelector("input")




//arama yapma
input.addEventListener("input",function(e){
    let search = input.value
    Number(search)

    let res = []
    res = data.filter(item=>item.price>search)
   
          if(res.length>0){
            show.innerHTML=" "
            res.forEach(element => {
            
                
                show.innerHTML+=`  
                <div>
                <img src="${element.image}">
                <h4 class="title"> ${element.title}</h4>
                <p class="price"> ${element.price}$</p>
                <p class="id"># ${element.id}</p>
                </div>`
                
            })  
        }
  
     

    // data.filter(item=>{

    //      // filter ile fiyata göre arama-------
    //     // if(Math.round(item.price)==search){
    //     //     show.innerHTML=`  
    //     //     <div>
    //     //     <img src="${item.image}">
    //     //     <h4 class="title"> ${item.title}</h4>
    //     //     <p class="price"> ${item.price}$</p>
    //     //     <p class="id"># ${item.id}</p>
    //     //     </div>`
            
    //     // }


    //      // filter ile id göre arama-------
    //     // if(item.id==search){
    //     //     show.innerHTML=`  
    //     //     <div>
    //     //     <img src="${item.image}">
    //     //     <h4 class="title"> ${item.title}</h4>
    //     //     <p class="price"> ${item.price}$</p>
    //     //     <p class="id"># ${item.id}</p>
    //     //     </div>`
            
    //     // }


    //       if(item.title==search){
    //         show.innerHTML=`  
    //         <div>
    //         <img src="${item.image}">
    //         <h4 class="title"> ${item.title}</h4>
    //         <p class="price"> ${item.price}$</p>
    //         <p class="id"># ${item.id}</p>
    //         </div>`
            
    //     }
    // })


 
})













//Veriyi alıp diziye aktarma
   const data = []
async function get(){
        const response = await fetch("https://fakestoreapi.com/products")
        const response_json = await response.json()
        //   console.log(response_json)
          response_json.forEach(element => {
              data.push(element)
              
              show.innerHTML+=`  
              <div>
              <img src="${element.image}">
              <h4 class="title"> ${element.title}</h4>
              <p class="price"> ${element.price}$</p>
              <p class="id"># ${element.id}</p>
              </div>`
              
          })  
    }
get()





 
