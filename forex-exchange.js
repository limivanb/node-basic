var request = require('request');
// https://maps.googleapis.com/maps/api/geocode/json?address=iloilo%20city

request('https://maps.googleapis.com/maps/api/geocode/json?address=iloilo%20city',
     (error, response, body) => {

       const maps = JSON.parse(body);
       // console.log(JSON.stringify(maps,undefined, 2));
       console.log(`Address: ${maps.results[0].formatted_address}`);
       console.log(`Latitude: ${maps.results[0].geometry.location.lat}`);
       console.log(`Longitude: ${maps.results[0].geometry.location.lng}`);
});

//
// const getPesoValue = (amount,currency_code) => {
//   request('https://api.fixer.io/latest?base=' + currency_code,
//        (error, response, body) => {
//
//       const exchange_rates = JSON.parse(body);
//       const peso_value = exchange_rates.rates.PHP * amount;
//       console.log(`${amount} ${currency_code} is ${peso_value} PHP`);
//
//   });
// };
//
// getPesoValue(300,'JPY');
//
// console.log('Finished');
//
//
