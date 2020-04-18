import { LOAD_DATA } from '../actions/types';

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
            selected: [
                {
                    "Country": "Bangladesh",
                    "CountryCode": "BD",
                    "Slug": "bangladesh",
                    "NewConfirmed": 219,
                    "TotalConfirmed": 1231,
                    "NewDeaths": 4,
                    "TotalDeaths": 50,
                    "NewRecovered": 7,
                    "TotalRecovered": 49,
                    "Date": "2020-04-16T14:09:46Z"
                }
            ]

        }
    }

    switch (action.type) {
        case LOAD_DATA:
            console.log("reducer is called");
            return {
                ...state,
                allRegions: action.payload.allRegions
            }


        // case "ADD":
        //     return{
        //         ...state,
        //         selected: state.selected.conact(action.selected)
        //     }


        // case "DELETE":
        //     let updatedList = state.selected.filter(countryObj => {
        //         return countryObj.Country !== action.selected.Country

        //     })

        //     return{
        //         ...state,
        //         selected: updatedList
        //     }

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