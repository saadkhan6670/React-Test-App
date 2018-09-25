var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoidHJhY2lsZW5jZSIsImEiOiJjam05ZnFlY28wcDA1M2ttbTRzcTB6OGNjIn0.YjgFdJhVOUE-_J7K6eG4Ew';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v10'
});