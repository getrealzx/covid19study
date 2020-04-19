import { LOAD_DATA, ADD_COUNTRY, DELETE_COUNTRY} from '../actions/types';


let dataReducer = (state, action) => {
    //initialize state
    if (state === undefined) {
        state = {
            allRegions: [
                {
                    "Global": {
                        "NewConfirmed": 82289,
                        "TotalConfirmed": 2054826,
                        "NewDeaths": 8266,
                        "TotalDeaths": 134152,
                        "NewRecovered": 36758,
                        "TotalRecovered": 510380
                    },
                    "Countries": [
                        {
                            "Country": "Argentina",
                            "CountryCode": "AR",
                            "Slug": "argentina",
                            "NewConfirmed": 166,
                            "TotalConfirmed": 2443,
                            "NewDeaths": 9,
                            "TotalDeaths": 111,
                            "NewRecovered": 37,
                            "TotalRecovered": 596,
                            "Date": "2020-04-16T14:09:46Z"
                        }
                    ]
                }

            ],
            selected: []

        }
    }

    switch (action.type) {
        case LOAD_DATA:
            console.log("reducer is called");
            console.log(action.payload.allRegions.Countries[5].TotalConfirmed)
            return {
                ...state,
                allRegions: action.payload.allRegions
            }


        case ADD_COUNTRY:
            if(state.selected.includes(action.payload)){
                // console.log("xxxxxxxxxxxxxxxxxxxxxxExistedxxxxxxxxxxxxxxxxxxx");
                alert("Entry is already selected");
                return state;

            }

            else if(state.selected.length>=4){
                alert("You may select up to 4 to study,Too Many Selected!");
                return state;
            }
            
            return{
                ...state,
                selected: state.selected.concat(action.payload)
            }
            


        case DELETE_COUNTRY:

            let updatedList = state.selected.filter(countryObj => {
                console.log(countryObj.Country, action.region.Country);
                return countryObj.Country !== action.region.Country

            })
            console.log("updatedLIst", updatedList);

            return{
                ...state,
                selected: updatedList
            }

        default:
            return state;
    }
}

export default dataReducer




// let cartReducer = (state, action) => {

//     //check if state exists

//     if (state === undefined) {
//         state = {
//             totalCost: 1,
//             productCart: [
//                 {
//                     productName: 'apples',
//                     productPrice: 1
//                 }
//             ]
//         }
//     }


//     switch (action.type) {
//         case 'addProduct':
//             return {
//                 ...state,
//                 totalCost: state.totalCost + parseInt(action.productData.productPrice),
//                 productCart: state.productCart.concat(action.productData)
//             }

//         case 'deleteProduct':
//             //[{productName- oranges, productPrice}, {productName- apples, productPrice}, {productName- banans, productPrice}]
//             let updatedArray = state.productCart.filter(productObj => {
//                 return productObj.productName !== action.productData.productName

//             })

//             return {
//                 ...state,
//                 totalCost: state.totalCost - parseInt(action.productData.productPrice),
//                 productCart: updatedArray
//             }

//         default:
//             return state;
//     }

// }

// export default cartReducer