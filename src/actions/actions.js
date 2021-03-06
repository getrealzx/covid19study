// import {SELECT} from './types'

import { LOAD_DATA , ADD_COUNTRY, DELETE_COUNTRY, SET_ACTIVE_OPTION} from "./types";
import store from '../stores';




// loadData to Landing.js dispatch
export const loadData = (allState) => {

console.log("++++++++++++actions+++++++++++++++");
console.log(allState);
console.log(allState.allRegions.Countries);
console.log(allState.allRegions.Countries[142].TotalConfirmed);

return {
    type: LOAD_DATA,
    payload: allState  //passed to reducer
}
};


export const addCountry = (obj)=>{
console.log("add Country",obj);
    return{
        type: ADD_COUNTRY,
        payload:obj


    }
}


export const deleteCountry = (region) => {
    console.log("action delete: ", region);
    return{
        type: DELETE_COUNTRY,
        region: region
    }
}

// export function setActiveOption(option) {
//     store.dispatch({
//       type: SET_ACTIVE_OPTION,
//       option
//     });
//   }
  