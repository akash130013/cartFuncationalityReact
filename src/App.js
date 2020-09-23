import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import reducer from "./reducers"
import {Provider} from "react-redux"
// redux stuff
//reducer-function that used to update store 
//two arguments-state,action
//state-old state/state
//action- what happened/what updated
//return updated or old state
//dispatch method-send action to the store


import {createStore} from "redux"

 const store = createStore(reducer)   //used to pass reducer function

 
function App() {
  // cart setup

  return (
    <main>
      <Provider store={store}>
      <Navbar />
      <CartContainer />
      </Provider>
    </main>
  );
}

export default App;
