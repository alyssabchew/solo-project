import React from 'react';

const FoodContainer = props => {
  // constructor(props) {
  //   super(props);
  //   // this.handleSearch = this.handleSearch.bind(this);
  // }
  let val = '';
  return (
    <div className="innerBox">
      <h3 id="header">Foods!</h3>
      <form>
        <input
          type="text"
          // value={value}
          onChange={(e) => { val = e.target.value; console.log(val); }} />
        <button type="submit" onClick={(e) => { console.log(val); props.addFood("apple"); e.preventDefault(); } }>Search</button>
      </form>
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