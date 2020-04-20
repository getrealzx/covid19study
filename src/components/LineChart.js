import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import axios from "axios";




class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyData0: [],
            historyData1: [],
            historyData2: [],
            historyData3: [],
            chartData: [],
            loading: true,


        }
    }

    componentDidMount() {


        let countryAPI ="";

        let countryAPIs = this.props.selected.map(countryObj => {
            countryAPI = "https://api.covid19api.com/total/country/" + countryObj.Slug;
            console.log(countryAPI);
            return countryAPI
        });

        console.log(countryAPIs);





        // axios.get("china.json")
        axios.get(countryAPIs[3])
            .then(res => {
                const historyData = res.data;

                let labels = [];
                let data = [];
                let label=historyData[0].Country;

                historyData.forEach(e => {
                    labels.push(e.Date.slice(0, 10))
                    data.push(e.Confirmed)
                })

                console.log(data)

                this.setState({
                    label:label,
                    labels: labels,
                    data: data,
                    loading: false
                }
                    // ,
                    // () => {
                    //     console.log("test state in axios-------------------")
                    //     console.log(this.state.historyData0[20].Country)
                    // }
                );
            })




    }




    render() {



        if (this.state.loading) {
            return (<div>Data Loading</div>)
        }
        else

            console.log("display chartData", this.state.labels);
        console.log(this.state.data);

        const state = {

            labels: this.state.labels,
            datasets:
                [
                    {
                        label: this.state.label,
                        fill: false,
                        lineTension: 0.9,
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: this.state.data
                    }
                ]
        }

        return (
            <div>
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





