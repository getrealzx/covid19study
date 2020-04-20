import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import dataReducer from './reducers/dataReducer';
import BaseLayout from './components/layout/BaseLayout';

import Landing from './components/Landing';
import Chart from "./components/Chart";
import MaterialTableDemo from "./components/test"




// import App from './App';
//Create  component

//////////////// Redux/////////////////////////
//dispatch
//mapsStateToProps
//Action Creator
//Reducer(state,action)
//create store (reducer)

let store = createStore(dataReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/chart" component={Chart} />
          {/* <Route exact path="/" component={MaterialTableDemo} /> */}
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>


  ,
  document.getElementById('root')
);


