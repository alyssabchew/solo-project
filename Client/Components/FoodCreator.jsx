import React from 'react';
import getFoodData from '../api/getFoodData';

const FoodCreator = props => {
  // constructor(props) {
  //   super(props);
  //   // this.handleSearch = this.handleSearch.bind(this);
  // }
  // search now handled in App
  let val = '';
  let foodId = 0;
  let foodData = {};
  console.log(props);
  return (
    <div className="displayBox">
      <h3>Search for Foods</h3>
      <form>
        <input id='searchFood'
          type="text"
          // value={value}
          onChange={(e) => { val = e.target.value }} />
          {/* onChange={props.handleChange} /> */}
        <button type="submit" onClick={(e) => { 
          getFoodData.foodSearch(val)
            .then(response => {
              console.log(response);
              return response.json();
            }).then(json => {
              console.log(json)
              foodId = json.foods[0].fdcId
              return foodId;
            }).then(getFoodData.foodDetails)
            .then(response => {
              console.log("ran both getFoodData functions!")
              console.log(response)
              return response.json();
            }).then(data => {
              foodData = {...data};
              props.addFood({foodName: val, foodData, foodId});
            }).catch(err => {
              console.log('failed', err)
              return;
            });
           e.preventDefault(); } }>Search</button>
      </form>
      {/* {Foods} */}
        {/* {getFoodData("fried tofu")} */}
    </div>
  );
      

  // handleSearch(event, search) {
  //   event.preventDefault();
  //   console.log('perform search', search);
  //   getFoodData.foodSearch(search)
  //   .then(res => {
  //     return res.json();
  //   }).then(res => {
  //     return res.foods[0].fdcId;
  //   }).then(getFoodData.foodDetails(res.foods[0].fdcId))
  //   .then(res => {
  //     return res.json();
  //   }).then(data => {
  //     this.setState({
  //       foodInfo: data,
  //     })
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }
}

export default FoodCreator;