const axios = require('axios');

class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

    constructor() {
        //TODO: Leer DB si existe
    }

    async ciudad(lugar = '') {
        // Peticion http
        try {
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Madrid.json?access_token=pk.eyJ1IjoiZGdtcnRhYnUiLCJhIjoiY2tvMjc2c2dnMHJ1NDJ2bXN3cmw1ZWY1OCJ9.pnVT_ipY2sBF5-tI_o0z-A&limit=5&language=es');
            console.log(resp.data);
            return [];
        } catch (error) {
            return [];
        }
    }

}

module.exports = Busquedas;