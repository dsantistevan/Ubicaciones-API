var map;
var infowindow;
var markerActual;
let cargarMapa = () => {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: new google.maps.LatLng(-33.92, 151.25),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
  
    infowindow = new google.maps.InfoWindow();
}

let cargarUsuarios = () => {
    fetch("http://localhost:3000/ubicacion")
    .then( (resultado) =>{
        return resultado.text();
    })
    .then((str) =>{
        let combobox = document.getElementById("ubicacion");
        let json = JSON.parse(str);
        let opcion = "";
        for(let ubicacion of json){
            opcion = document.createElement("option");
            usuario=ubicacion["user"]
            opcion.setAttribute("value", ubicacion["_id"])
            opcion.innerText = usuario

            combobox.appendChild(opcion);
        }
    })
    .then(() =>{
        cargarMapa()
    })
    .then(()=>{
        cambiarUbicacion()
    })
}

let cambiarUbicacion = () =>{
    fetch("http://localhost:3000/ubicacion/"+document.getElementById("ubicacion").value)
    .then((resultado) =>{
        return resultado.text();
    })
    .then((str) =>{
        let json = JSON.parse(str);
        if(markerActual){
            markerActual.setMap(null)
        }
        markerActual = new google.maps.Marker({
            position: new google.maps.LatLng(json["longitude"], json["latitude"]),
            map: map
        })
        map.setCenter(markerActual.getPosition());
        google.maps.event.addListener(markerActual, 'click', (function(markerActual) {
            return function() {
              infowindow.setContent("Usuario: "+json["user"]);
              infowindow.open(map, markerActual);
            }
          })(markerActual));
    })
}



document.addEventListener("DOMContentLoaded", function(){
    cargarUsuarios();
    document.getElementById("ubicacion").addEventListener("change", function(){
        cambiarUbicacion();
    })
})