import React from 'react';

const FoodCreator = props => {
  // constructor(props) {
  //   super(props);
  //   // this.handleSearch = this.handleSearch.bind(this);
  // }
  // search now handled in App
  let val = '';

  return (
    <div className="displayBox">
      <h3>Search for Foods</h3>
      <form>
        <input id='searchFood'
          type="text"
          // value={value}
          onChange={(e) => { val = e.target.value }} />
        <button type="submit" onClick={(e) => { props.addFood(val); e.preventDefault(); } }>Search</button>
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