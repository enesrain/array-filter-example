//elemanları çağırma
let show = document.querySelector("main")

//input
let inputmax = document.querySelector(".inputmax")
let inputmin = document.querySelector(".inputmin")





//artan fiyata göre listeleme fonksiyonu
function list(array_name){
  
    array_name.sort((a,b)=>{
        return a.price - b.price
    })
}
    



//max değere göre arama yapma
inputmax.addEventListener("input",function(e){
    let searchMax = inputmax.value
    Number(searchMax)

    let resMax = [] // filter cevap olarak dizi gönderdiğinden dizi oluşturuyoruz

    resMax = data.filter(item=>item.price<searchMax)
    list(resMax)
          if(resMax.length>0){
            show.innerHTML=" "
            resMax.forEach(element => {
            
                
                show.innerHTML+=`  
                <div>
                <img src="${element.image}">
                <h4 class="title"> ${element.title}</h4>
                <p class="price"> ${element.price}$</p>
                <p class="id"># ${element.id}</p>
                </div>`
                
            })  
        }
})



//min değere göre listeleme
inputmin.addEventListener("input",function(e){

    let searchMin = inputmin.value
    Number(searchMin)

    let resMin = [] // filter cevap olarak dizi gönderdiğinden dizi oluşturuyoruz

    resMin = data.filter(item=>item.price>searchMin)
    list(resMin)

      if(resMin.length>0){

        show.innerHTML=" "
        resMin.forEach(element => {
        
            
            show.innerHTML+=`  
            <div>
            <img src="${element.image}">
            <h4 class="title"> ${element.title}</h4>
            <p class="price"> ${element.price}$</p>
            <p class="id"># ${element.id}</p>
            </div>`
            
        })  

      }
        
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





 
