import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import BaseLayout from './components/layout/BaseLayout';

import Landing from './components/Landing';
import Chart from "./components/Chart";
import SelectedCountries from './components/SelectedCountries'
import MaterialTableDemo from "./components/test"
import Map from './components/Map';
// import store from './stores'
import { createStore } from 'redux';
import dataReducer from './reducers/dataReducer'

const store = createStore(dataReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



// import App from './App';
//Create  component

//////////////// Redux/////////////////////////
//dispatch
//mapsStateToProps
//Action Creator
//Reducer(state,action)
//create store (reducer)


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          {/* <Route exact path="/" component={Map} /> */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/chart" component={Chart} />
          <Route exact path="/selected" component={SelectedCountries} />
          {/* <Route exact path="/" component={MaterialTableDemo} /> */}
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>


  ,
  document.getElementById('root')
);


