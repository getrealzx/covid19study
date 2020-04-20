import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import axios from "axios";




class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allHistoryData: [
                // { label: "" , labels: [] , data: [] },
                // { label: "" , labels: [] , data: [] },
                // { label: "" , labels: [] , data: [] },
                // { label: "" , labels: [] , data: [] }
            ],


            loading: true,


        }
    }

    componentDidMount() {


        let countryAPI = "";
        let n = 0;

        let countryAPIs = this.props.selected.map(countryObj => {
            n++;
            console.log(n)
            countryAPI = "https://api.covid19api.com/total/country/" + countryObj.Slug;
            console.log(countryAPI);

            axios.get(countryAPI)
                .then(res => {
                    const historyData = res.data;

                    let labels = [];
                    let data = [];
                    let label = historyData[n].Country;

                    historyData.forEach(e => {
                        labels.push(e.Date.slice(0, 10))
                        data.push(e.Confirmed)
                    });

                    let singleHistoryData = { label: label, labels: labels, data: data };



                    console.log(data)

                    this.setState({
                        ...this.state,
                        allHistoryData: this.state.allHistoryData.concat(singleHistoryData),
                        loading: false
                    });
                })


            return countryAPI
        });

        console.log(countryAPIs);

    }




    render() {



        if (this.state.loading) {
            return (<div>Data Loading</div>)
        }
        else

            console.log("display Label", this.state.allHistoryData[0].labels);
        console.log(this.state.allHistoryData);





        const state = {


            labels: this.state.allHistoryData[0].labels,

            datasets: this.state.allHistoryData.map((countryDataObj) => {
                return {
                    label: countryDataObj.label,
                    fill: false,
                    lineTension: 0.9,
                    backgroundColor: 'auto',
                    borderColor: "#E0E0E0",
                    borderWidth: 2,
                    data: countryDataObj.data
                }

            }
            )

        }

        return (
            <div className="m-5">
                <Line
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Total Cases',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'top'
                        }
                    }}
                />
            </div>
        )
    }






}








let mapStateToProps = (state) => {
    return {
        selected: state.selected
    }
};

let mapDispatchToProps = (dispatch) => {

    return {
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(LineChart)





