import React, { Component } from "react";
import getFoodData from "./api/getFoodData.js";
import MainContainer from "./MainContainer.jsx";
// import styles from './style.css';

 class App extends Component {
   constructor(props){
     super(props);
     this.state = {
      // foodName: '',
      searchInput: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  // }
  // componentDidMount() {
  //   this.searchForFood(this.state.foodName);
  }

   render(){
     return(
       <div>
         {/* <p>Search for food:</p>
         <form>
           <input
             type="text"
             value={this.state.searchInput}
             onChange={this.handleChange} />
           <button type="submit" onClick={this.handleSearch}>Search</button>
         </form> */}
         <MainContainer handleSearch={this.state.handleSearch} handleChange={this.state.handleChange} searchInput={this.state.searchInput} />
       </div>
     );
   }

   searchForFood(foodName) {
    console.log(foodName)
    getFoodData.foodSearch(foodName)
      .then(response => {
        console.log(response);
        return response.json();
      }).then(json => {
        console.log(json)
        return json.foods[0].fdcId;
      }).then(getFoodData.foodDetails)
      .then(response => {
        console.log("ran both getFoodData functions!")
        console.log(response)
        return response.json();
      }).then(foodData => {
        this.setState({
          foodData: foodData,
        })
        console.log(this.state.foodData);
      }).catch(ex => {
        console.log('parsing failed', ex)
      });
  }
  handleChange(event) {
    this.setState({
      searchInput: event.target.value
    })
  }
  handleSearch(event) {
    event.preventDefault();
    console.log('perform search', this.state.searchInput);
    this.searchForFood(this.state.searchInput);
  }

 }

 export default App; 
