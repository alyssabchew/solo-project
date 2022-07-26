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

const getFoodData = () => {

  // const client = new NutritionAnalysisClient({
  //   appId: 'af2e1fce',
  //   appKey: '81b39e6ce59676fad99a5416e80a675c'
  // });
  // usda.gov API key: fY2Hwd4z2CmBvNEgBElnaoZAsrSkA8dmsYa1rGfT
  // console.log(food);
  // for testing
  // food = "fried tofu"
  // const recipe = "fried\ tofu"
  // let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=3446847f&app_key=b7b8d2234ad32457ed5b8c40b87a3662`;
  // let url = `https://api.edamam.com/api/recipes/v2?q=${recipe}&app_id=3446847f&app_key=b7b8d2234ad32457ed5b8c40b87a3662`
  // let url = `http://api.edamam.com/api/nutrition-data?ingr=apple&app_id=af2e1fce&app_key=$81b39e6ce59676fad99a5416e80a675c`
  // const results = await client.search({ query: 'Chicken' });
  // console.log(client);
  // console.log(url);
  // const foodUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&pageSize=2&api_key=fY2Hwd4z2CmBvNEgBElnaoZAsrSkA8dmsYa1rGfT`
  const foodSearch = (food) => {
    const foodUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&pageSize=2&api_key=fY2Hwd4z2CmBvNEgBElnaoZAsrSkA8dmsYa1rGfT`
    // ONLY RETURN FETCH CALLS - OTHERWISE, HIT ERRORS BECAUSE PROMISE CHAINING TWICE
    return fetch(foodUrl)
    // .then(res => res.json())
    // .then(res => {
      // console.log(res);
      // console.log(res.foods[0].fdcId)
      // let detailsUrl = `https://api.nal.usda.gov/fdc/v1/food/` + res.foods[0].fdcId
      // detailsUrl += '?api_key=fY2Hwd4z2CmBvNEgBElnaoZAsrSkA8dmsYa1rGfT'
      // console.log(detailsUrl);
    // })
    // .catch(err => console.error('error:' + err));
  }
  
  const foodDetails = (foodId) => {
    const detailsUrl = `https://api.nal.usda.gov/fdc/v1/food/` + foodId + '?api_key=fY2Hwd4z2CmBvNEgBElnaoZAsrSkA8dmsYa1rGfT'
    return fetch(detailsUrl)
    // .then(res => res.json())
    // .then(res => console.log(res))
    // .catch(err => console.error('error:' + err));
  }

  return {
    foodSearch,
    foodDetails
  }
};

// const fetch = require('node-fetch');

// const url = 'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=1%20large%20apple';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '37165a3f70msh23a21d35199cff8p1fb70fjsn62dbfacf7b1a',
//     'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com'
//   }
// };

// const getFoodData = () => {
//   fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error('error:' + err));
// }

// getFoodData();

module.exports = getFoodData();