
// // let countryAPI = "";
// // let n=0;

// // let AllLabel=[];
// // let allLables=[];
// // let allData=[];

// // let countryAPIs = this.props.selected.map(countryObj => {


// //     console.log(n)
// //     countryAPI = "https://api.covid19api.com/total/country/" + countryObj.Slug;
// //     console.log(countryAPI);

// //     axios.get(countryAPIs)
// //     .then(res => {
// //         const historyData = res.data;

// //         let labels = [];
// //         let data = [];
// //         let label = historyData[0].Country;

// //         historyData.forEach(e => {
// //             labels.push(e.Date.slice(0, 10))
// //             data.push(e.Confirmed)
// //         })

// //         console.log(data)

// //         this.setState({
// //             AllLabel[n]: label,
// //             labels[n]: labels,
// //             data[n]: data,
// //             loading: false
// //         });
// //     });

// //     n++;



// //     return countryAPI
// // });

// // console.log(countryAPIs);


// // ////
// // historyData: [
// //     [{ label: "" }, { labels: [] }, { data: [] }],
// //     [{ label: "" }, { labels: [] }, { data: [] }],
// //     [{ label: "" }, { labels: [] }, { data: [] }],
// //     [{ label: "" }, { labels: [] }, { data: [] }]

// // ],
// // loading: true,


// import axios from "axios";

// let one =
//     "https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt";
// let two =
//     "https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt";
// let three =
//     "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt";

// const requestOne = axios.get(one);
// const requestTwo = axios.get(two);
// const requestThree = axios.get(three);

// axios
//     .all([requestOne, requestTwo, requestThree])
//     .then(
//         axios.spread((...responses) => {
//             const responseOne = responses[0];
//             const responseTwo = responses[1];
//             const responesThree = responses[2];

//             // use/access the results
//             console.log(responseOne, responseTwo, responesThree);
//         })
//     )
//     .catch(errors => {
//         // react on errors.
//         console.error(errors);
//     });
// var people = ["Teddy","Cathy","Bobby"];

// var newPeople = people;

// newPeople[0] = "Georgie";

// console.log(people);


let singleHistoryData = {lable:"label",lables:["he","hell"],data:[11,2]};

console.log( singleHistoryData );

