// let request = new XMLHttpRequest();

// const { request } = require("http");

// request.open('GET', '', true)

// request.onload = function () {

// }

// // send request
// request.send();


// function getFoodData() {
//   const response = await fetch('');
//   const data = await response.json();
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(food => {
//       console.log(food);
//     })
//   } else {
//     console.log('error')
//   }

//   const food = (search) => {
//     return fetch()
//   }

//   return {
//     food,
//     nutritionInfo
//   }
// };

// module.exports = getFoodData();

const { NutritionAnalysisClient } = require('edamam-api');

const getFoodData = async () => {

  const client = new NutritionAnalysisClient({
    appId: 'af2e1fce',
    appKey: '81b39e6ce59676fad99a5416e80a675c'
  });

  const ingr = "8\ oz\ tofu"

  let url = `http://api.edamam.com/api/nutrition-data?ingr=${ingr}&app_id=${client.appId}&app_key=${client.appKey}`
  // const results = await client.search({ query: 'Chicken' });
  console.log(client);
  console.log(url);

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

getFoodData();

module.exports = getFoodData();