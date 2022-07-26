import React, { Component } from 'react';
import { connect } from 'react-redux';

// import getFoodData from "./api/getFoodData";

// import from child components... not currently using food container
import FoodContainer from './Components/FoodContainer.jsx';

 const mapStateToProps = state => ({
  foodId: state.foods.foodId,
  foodName: state.foods.foodName,
  calories: state.foods.foodId
 })

 const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  // addMarket: (event) => { dispatch(grabLocationInput(event)); },
  addFood: (food) => dispatch(actions.addFoodActionCreator(food)),
});

 class MainContainer extends Component {
   constructor(props) {
     super(props);
   }

   render() {
    // console.log("rendering main component")
    let value = '';
    console.log(this.props)
     return (
       <div className="container">
         <div className="outerBox">
          <h2 id="header">Foods</h2>
          <FoodContainer addFood={this.props.addFood}/>
         </div>
       </div>
     )
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);