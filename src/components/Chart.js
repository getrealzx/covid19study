import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from "axios";




class Chart extends Component {


    async componentWillMount() {


        //https://api.covid19api.com/total/country/china
        //china.json


        let countrySlug0 = this.props.selected[0].Slug;
        let countrySlug1 = this.props.selected[1].Slug;
        let countrySlug2 = this.props.selected[2].Slug;
        let countrySlug3 = this.props.selected[3].Slug;

        // let countryName0 = this.props.selected[0].Country;
        // let countryName1 = this.props.selected[1].Country;
        // let countryName2 = this.props.selected[2].Country;
        // let countryName3 = this.props.selected[3].Country;

        console.log("list All Sectect Country Nmes",
            countrySlug0,
            countrySlug1,
            countrySlug2,
            countrySlug3
        )




        let countryAPI = "https://api.covid19api.com/total/country/" + countrySlug0;
        console.log(countryAPI);

        axios.get(countryAPI)
            .then(res => {
                const historyData = res.data;
                // console.log("test axio data-------------------");
                // console.log(allRegions.Countries[142].TotalConfirmed);

                //setting local state
                this.setState({
                    historyData: historyData,
                    loading: false

                }
                    // ,
                    // () => {
                    //     console.log("test state in axios-------------------")
                    //     console.log(this.state.historyData[20].Country)
                    // }



                );
            })
    }




    render() {

        // if (this.state.loading) {
        //     return <div>Data Loading</div>
        // };
        // else
        // console.log(this.state.historyData[20].Country);
        console.log(this.state);



        // console.log("prop selected++++++++++++++++++",this.props.selected[0].Country);
        // console.log(this.state.historyData[1]);

        const state = {
            labels: ['January', 'February', 'March',
                'April', 'May', "what"],
            datasets: [
                {
                    label: "this.state.historyData[20].Country",
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [78, 59, 80, 81, 56, 99]
                },
                {
                    label: 'SkyFall',
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(190,2,2,2)',
                    borderWidth: 2,
                    data: [8, 29, 10, 181, 36]
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
        );
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




export default connect(mapStateToProps, mapDispatchToProps)(Chart)

