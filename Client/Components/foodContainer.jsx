import React from 'react';
import Food from './Food.jsx';

const FoodContainer = props => {
  // constructor(props) {
  //   super(props);
  //   // this.handleSearch = this.handleSearch.bind(this);
  // }
  // search now handled in App
  // let val = '';

  const Foods = [];

  // for (const food of props.foods) {
  //   Foods.push(
  //     Food({
  //       ...food
  //     })
  //   )
  // }
  console.log(Foods);

  return (
    <div className="displayBox">
      <h4>Foods</h4>
      {Foods}
      {/* <h3 id="header">Foods!</h3> */}
      {/* <form>
        <input
          type="text"
          // value={value}
          onChange={(e) => { val = e.target.value; console.log(val); }} />
        <button type="submit" onClick={(e) => { val && props.addFood(val); e.preventDefault(); } }>Search</button>
      </form> */}
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

export default FoodContainer;