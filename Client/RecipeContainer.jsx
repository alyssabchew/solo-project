import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from './actions/actions';
// import child components...
import FoodCreator from './Components/FoodCreator.jsx';
import FoodDisplay from './Components/FoodDisplay.jsx';
import RecipeDisplay from './Components/RecipeDisplay.jsx'

const mapStateToProps = state => ({
  foods: state.foods.foods,
  totalFoods: state.foods.totalFoods,
  recipes: state.foods.recipes,
 })

 const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  // addMarket: (event) => { dispatch(grabLocationInput(event)); },
  addFood: (food) => dispatch(actions.addFoodActionCreator(food)),
  addRecipe: (recipe) => dispatch(actions.addRecipeActionCreator(recipe)),
});

class RecipeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let val = '';
    return (
      <div className="innerbox">
        { /* add components here... */}
        {/* create a new recipe */}
        <form>
        <input id='recipeCreator'
          type="text"
          // value={value}
          onChange={(e) => { val = e.target.value }} />
          {/* onChange={props.handleChange} /> */}
        <button type="submit" onClick={(e) => { 
          this.props.addRecipe(val)
           e.preventDefault(); } }>Add Recipe</button>
        </form>
        <RecipeDisplay addRecipe={this.props.addRecipe}/>
        <FoodCreator addFood={this.props.addFood} handleSearch={this.props.handleSearch} handleChange={this.props.handleChange} searchInput={this.props.searchInput}/>
        <FoodDisplay foods={this.props.foods} foodId={this.props.foodId} foodName={this.props.foodName} totalFoods={this.props.totalFoods} foodData={this.props.foodData} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
