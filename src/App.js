import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
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

const initialStore ={
  total:0,
  amount:0,
  cart:cartItems,
}



 const store = createStore(reducer,initialStore)   //used to pass reducer function
//  store.dispatch({type:DECREASE});
//  store.dispatch({type:INCREASE});
 
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
