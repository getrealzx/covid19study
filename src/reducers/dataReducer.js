import { LOAD_DATA, ADD_COUNTRY, DELETE_COUNTRY } from '../actions/types';


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
                "Country": "United States of America",
                "CountryCode": "US",
                "Slug": "united-states",
                "NewConfirmed": 26877,
                "TotalConfirmed": 758479,
                "NewDeaths": 1997,
                "TotalDeaths": 40644,
                "NewRecovered": 5497,
                "TotalRecovered": 70337,
                "Date": "2020-04-20T09:15:00Z"
            },
            {
                "Country": "Korea (South)",
                "CountryCode": "KR",
                "Slug": "korea-south",
                "NewConfirmed": 8,
                "TotalConfirmed": 10661,
                "NewDeaths": 2,
                "TotalDeaths": 234,
                "NewRecovered": 105,
                "TotalRecovered": 8042,
                "Date": "2020-04-20T09:15:00Z"
            },
            {
                "Country": "Russian Federation",
                "CountryCode": "RU",
                "Slug": "russia",
                "NewConfirmed": 6060,
                "TotalConfirmed": 42853,
                "NewDeaths": 48,
                "TotalDeaths": 361,
                "NewRecovered": 234,
                "TotalRecovered": 3291,
                "Date": "2020-04-20T09:15:00Z"
            },
            {
                "Country": "China",
                "CountryCode": "CN",
                "Slug": "china",
                "NewConfirmed": 18,
                "TotalConfirmed": 83805,
                "NewDeaths": 0,
                "TotalDeaths": 4636,
                "NewRecovered": 76,
                "TotalRecovered": 77690,
                "Date": "2020-04-20T09:15:00Z"
            }
        ]

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
            if (state.selected.includes(action.payload)) {
                // console.log("xxxxxxxxxxxxxxxxxxxxxxExistedxxxxxxxxxxxxxxxxxxx");
                alert("Entry is already selected");
                return state;

            }

            else if (state.selected.length >= 8) {
                alert("You may select up to 8 to study,Too Many Selected!");
                return state;
            }

            return {
                ...state,
                selected: state.selected.concat(action.payload)
            }



        case DELETE_COUNTRY:

            let updatedList = state.selected.filter(countryObj => {
                console.log(countryObj.Country, action.region.Country);
                return countryObj.Country !== action.region.Country

            })
            console.log("updatedLIst", updatedList);

            return {
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