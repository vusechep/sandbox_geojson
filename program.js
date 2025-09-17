// crear un objeto mapa desde la clse L que es leaflet

//L representa a la biblioteca Leaflet
//El punto (.) se denomina operador de acceso
//Por ejemplo L.map() permite llamar a la función map() para crea mapas

var map = L.map('map');

//Objeto: Un ejemplar de una clase que tiene atributos y comportamiento definido
//Definir loa valores iniciales para el objeto map
//.setView(Arreglo con la lat, longitus del centri del mapa )

map. setView([4.628132185875404, -74.06629398071726], 20);

//crear un objeto capa de tesewlas (mapa base)

//L.tileLayer (url de donde voy a "extraer" el mapa, un JSON con los valores de config )

var urlMap = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

var config = {
    maxZoom : 19
};

var layer=L.tileLayer (urlMap, config);

//agregar la capa al mapa
layer.addTo(map);

// cargar un archivo Geojson
//1. abrir el archivo. En js hay que tener cuidado con procesos que sean demorados
// porque js no es sincrono. Es decir, si una sentancia se demora, js
//continúa con las otras.
//2. Convertir el contenudo de ese archivo a formato json

async function leerGeoJSON(url) {
    //fetch (): Almacenar un recurso (obtener un recurso)
    var response = await fetch(url);
    return await response.json();
}

// CORRECCIÓN: Añadir await y hacer la función async
async function cargarGeoJSON() {
    var myFile = await leerGeoJSON('map.geojson'); // ← Aquí faltaba el await

    //3. Agregar el geojson al mapa
    const geoLayer = L.GeoJSON(myFile);
    geoLayer.addTo(map);
}

// Llamar a la función para cargar el GeoJSON
cargarGeoJSON();
