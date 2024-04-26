

// const url = 'https://api.vybenetwork.xyz/tokens'
// const options = {
//   method: 'GET',
//   url: 'https://api.vybenetwork.xyz/tokens',
//   headers: {
//     accept: 'application/json',
//     'X-API-KEY': '2pZP9P9fcMPSinV7KJYQJoGYnbvWUwY6RgRFApQoWUJ98q1v'
//   }
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text()
//   console.log(result)
// } catch (error) {
//   console.log(error)
  
// }


import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.vybenetwork.xyz/tokens',
  headers: {
    accept: 'application/json',
    'X-API-KEY': '2pZP9P9fcMPSinV7KJYQJoGYnbvWUwY6RgRFApQoWUJ98q1v'
  }
};

axios
  .request(options)
  .then(function (response) {
    // Accessing all token data under "data" key
    const alltokens = response.data.data;
    
    // Logging all token data to the console
    console.log(alltokens);

    // Accessing and logging specific token properties (e.g., symbol)
//     alltokens.forEach(token => {
//       console.log(token.symbol);
//     });
  })
  .catch(function (error) {
    console.error(error);
  });


// export async function fetchTokens() {

//      const headers = {
//       accept: 'application/json',
//       'X-API-KEY': '2pZP9P9fcMPSinV7KJYQJoGYnbvWUwY6RgRFApQoWUJ98q1v'
//      } 

//      const response = await fetch('https://api.vybenetwork.xyz/tokens', {
//       headers: headers
//      })

//      const result = await response.json();

//      return result.data; 
// }
export async function fetchTokens() {

     const headers = {
      accept: 'application/json',
      'X-API-KEY': '2pZP9P9fcMPSinV7KJYQJoGYnbvWUwY6RgRFApQoWUJ98q1v'
     } 

     const response = await fetch('https://api.vybenetwork.xyz/tokens', {
      headers: headers
     })

     const result = await response.json();

     return result.data; 
}