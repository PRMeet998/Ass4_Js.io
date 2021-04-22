
window.addEventListener("load", function(){

    function getJsonData(){
       const JsonFileURL = "https://meeet177.github.io/Js_JSON.io/wierddeals.json";
       
       fetch(JsonFileURL)
        .then(resonse => resonse.json())
        .then(data => { addData(data); });
    }

    function addData(data){
    
        let productsContainer = document.getElementById("products");
        
        console.log(data);
        
        for(let i=0; i< data.length; i++){
            let cardDiv = document.createElement("div");
                cardDiv.classList.add("card");
                cardDiv.setAttribute("style", "width: 18rem;");
            
                console.log(cardDiv);

            let productImg = document.createElement("img");
                productImg.classList.add("card-img-top");
                productImg.setAttribute("src", data[i].productImage);

            let productCardBody = document.createElement("div");
                productCardBody.classList.add("card-body");

            let productCardTitle = document.createElement("h5");
                productCardTitle.classList.add("card-title");    
                productCardTitle.appendChild(document.createTextNode(data[i].productTitle));
   
            let productDesc = document.createElement("p");
                productDesc.classList.add("card-text");
                productDesc.appendChild(document.createTextNode(data[i].productDescription));

            let productPurchase = document.createElement("a");
                productPurchase.classList.add("btn");
                productPurchase.classList.add("btn-primary");
                productPurchase.appendChild(document.createTextNode("$"+data[i].productPrice));

            productCardBody.appendChild(productCardTitle);
            productCardBody.appendChild(productImg);
            productCardBody.appendChild(productDesc);
            productCardBody.appendChild(productPurchase);

            cardDiv.appendChild(productCardBody);
            
            productsContainer.appendChild(cardDiv);
            console.log(cardDiv);
        }

    }

    getJsonData();
})
function initMap() {
  const myLatLng = {lat: 21.170240, lng: 72.831062};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,

    //Popping up the map with this First Location
    center: { lat: 21.170240, lng: 72.831062 }
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    //Naming the place
    title: "Surat GUJ",
  });

  function addMarker(cordinates){
    var mark = new google.maps.Marker(
    {
      position: cordinates,
      map: map,
    });
  }

  //Upto 5 markers have been added to map
  addMarker({ lat: 19.076090, lng: 72.877426 });
  addMarker({ lat: 41.904755, lng: 12.454628 });
  addMarker({ lat: 13.736717, lng: 100.523186 });
  addMarker({ lat: -33.865143, lng: 151.209900 });
  addMarker({ lat: 40.440624, lng: -79.995888 });
}