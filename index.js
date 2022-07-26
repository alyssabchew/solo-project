import React from "react";
import { render } from 'react-dom';
import { Provider } from "react-redux";

render( 
  <Provider> <App /> </Provider>,
  document.getElementById('contents')
)