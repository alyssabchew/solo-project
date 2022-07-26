import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import FoodContainer from './Components/FoodContainer.jsx';

 const mapStateToProps = state => ({
  
 })

 class MainContainer extends Component {
   constructor(props) {
     super(props);
   }

   render() {
    // console.log("rendering main component")
     return (
       <div className="container">
         <div className="outerBox">
         <h1 id="header">Lifestyle Journal!</h1>
         <FoodContainer />
         </div>
       </div>
     )
   }
 }

 export default connect(mapStateToProps, null)(MainContainer);