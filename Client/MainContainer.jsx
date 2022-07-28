import React, { Component } from 'react';
import { connect } from 'react-redux';

// import getFoodData from "./api/getFoodData";
import * as actions from './actions/actions.js'
// import from child components... not currently using food container
// import FoodCreator from './Components/FoodCreator.jsx';
// import FoodDisplay from './Components/FoodDisplay.jsx';
import RecipeContainer from './RecipeContainer.jsx';

 const mapStateToProps = state => ({
  foods: state.foods.foods,
  totalFoods: state.foods.totalFoods,
  foodData: state.foods.foodData,
  foodId: state.foods.foodId,
  foodName: state.foods.foodName,
 })

 const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  addFood: (food) => dispatch(actions.addFoodActionCreator(food)),
  addRecipe: (recipe) => dispatch(actions.addRecipeActionCreator(recipe)),
});

 class MainContainer extends Component {
   constructor(props) {
     super(props);
   }

   render() {
    // console.log("rendering main component")
    // let value = '';
    console.log(this.props)
     return (
       <div className="container">
         <div className="outerBox">
            <h2 id="header">Lifestyle Tracker </h2>
            <RecipeContainer />
            {/* <FoodCreator addFood={this.props.addFood} handleSearch={this.props.handleSearch} handleChange={this.props.handleChange} searchInput={this.props.searchInput}/>
            <FoodDisplay foods={this.props.foods} foodId={this.props.foodId} foodName={this.props.foodName} totalFoods={this.props.totalFoods} foodData={this.props.foodData} /> */}
         </div>
       </div>
     )
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);