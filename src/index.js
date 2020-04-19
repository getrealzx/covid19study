import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { applyMiddleware, compose } from 'redux';

// import thunk from 'redux-thunk';
import dataReducer from './reducers/dataReducer';
import BaseLayout from './components/layout/BaseLayout';

import Landing from './components/Landing';
import Chart from "./components/Chart";




// import App from './App';
//Create  component

//////////////// Redux/////////////////////////
//dispatch
//mapsStateToProps
//Action Creator
//Reducer(state,action)
//create store (reducer)

let store = createStore(dataReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   dataReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );


//connect component to connect mapStateToProps
//wrap out application inside Provider
//pass to the proviver to store

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/chart" component={Chart} />
          {/* <Route exact path="/compare" component={Compare} /> */}
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>


  ,
  document.getElementById('root')
);


