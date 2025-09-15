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