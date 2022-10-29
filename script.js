// div
var div=document.createElement("div");
div.setAttribute("class","entire");
//heading
var heading=document.createElement("p");
heading.setAttribute("id","title");
heading.innerText="MakeUpZen";
//coverimg
var coverpic=document.createElement("img");
coverpic.setAttribute("id","coverpic");
coverpic.setAttribute("src","makeup.webp");
coverpic.setAttribute("alt","coverpic");

var prod=document.createElement("div");
prod.setAttribute("class","producttype");
prod.innerHTML="Products";


 var container=document.createElement("div");
 container.setAttribute("class","container");
 var row=document.createElement("div");
 row.setAttribute("class","row");





async function products(){
  try {
     
    let res=await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
    let res1=await res.json();
    
   
  for(var i=0; i<res1.length;i++){
    var col=document.createElement("div");
    col.setAttribute("class","col");
   
   col.innerHTML+=`<div class="card" style="width: 18rem;">
   <img src="${res1[i].image_link}" class="card-img-top" alt="img" >
    
 
       <div class="card-body ">
       <div class ="card-title"> ${res1[i].name}</div>
       <div class="line-3"></div>
     
         <h6 class="card-text">Brand: ${res1[i].brand}</h6>
         <h6 class="card-text>Price: ${res1[i].price} </h6>
         <h6 class="card-text">Description: ${res1[i].description} </h6>
         <h6 class="card-text1" >Tags: ${res1[i].tag_list} </h6>
         <a class="btn btn-primary" href= ${res1[i].product_link} target="_blank" >Buy now</a> 
       </div>
     </div>`
     
     row.append(col);
     container.append(row);
      div.append(coverpic,heading,prod,container);
    document.body.append(div);
    
  }
  
}
 catch (error) {
  console.log(error);
}
console.log(res1);
}
products();

