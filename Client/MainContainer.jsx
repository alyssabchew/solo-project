import React, { Component } from 'react';
 import { connect } from 'react-redux'
 import FoodContainer from './Components/foodContainer';

 const mapStateToProps = state => ({

 })

 class MainContainer extends Component {
   constructor(props) {
     super(props);
   }

   render() {
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