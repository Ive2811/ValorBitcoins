const axios = require('axios');
const fs = require('fs').promises;


axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {

        console.log("\n")
        console.log("Se muestra de manera exitosa el precio del Bitcoin actualmente.")
        var precio = response.data.bpi
        var valores = [
                    `${precio.USD.code} `+` $ ${precio.USD.rate}`,
                    `GBP `+`£ ${precio.GBP.rate}`,
                    `${precio.EUR.code} `+` € ${precio.EUR.rate}`,
                    
                ]

       console.log("\n")
       valores.forEach(datos =>console.log(datos))
       console.log("\n")
        

})
