// import {SELECT} from './types'

import { LOAD_DATA , ADD_COUNTRY, DELETE_COUNTRY} from "./types";




//"https://api.covid19api.com/summary"

// export const loadData = () => dispatch => {
//     fetch('https://api.covid19api.com/summary')
//       .then(res => res.json())
//       .then(allRegions =>
//         dispatch({
//           type: LOAD_DATA,
//           payload: allRegions
//         })
//       );
//   };



// import axios from "axios";
//   export const loadData = () => (dispatch) => {
//     // console.log('getscribbles function')
//     dispatch({ type: LOAD_DATA })
//     axios.get("https://api.covid19api.com/summary")
//         .then(res => {
//             dispatch({
//                 type: LOAD_DATA,
//                 payload: res.data
//             })
//         })
// }


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