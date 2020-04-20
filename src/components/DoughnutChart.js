import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCountry } from "../actions/actions"
import { Doughnut } from "react-chartjs-2";



class DoughnutChart extends Component {


    render() {

        const doughnut = this.props.selected.map(region => {

            const donut = {
                labels: [
                    'Total Confirmed: ' + region.TotalConfirmed,
                    'New Cases: ' + region.NewConfirmed,
                    'Total Deaths: ' + region.TotalDeaths,
                    'Number of Deaths Today: ' + region.NewDeaths
                ],
                datasets: [{
                    data: [region.TotalConfirmed, region.NewConfirmed, region.TotalDeaths, region.NewDeaths],
                    backgroundColor: [
                        "#D9584A",
                        "#FFCE05",
                        "#393422",
                        "#323475"
                    ]
                }]
            }

            const options = {
                maintainAspectRatio: false,
                responsive: false,
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10
                    }
                }
            }

            return (
                <div className="chart center p-3">
                    <h6>Region:<strong> {region.Country}</strong></h6>

                    <div className="col">
                        <Doughnut data={donut} height={300} options={options} />
                    </div>
                
                    <button className="btn m-3 rounded-pill" 
                    onClick={({ data = region }) =>{this.props.deleteCountry(data)}}>
                        Remove Country
                    </button>
                </div >
            )
        })

        return (

            <div className="d-flex justify-content-center m-4 flex-wrap" >

                {doughnut}

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
        deleteCountry: (selectedCountry) => dispatch(deleteCountry(selectedCountry))

    }
}




export default connect(mapStateToProps, mapDispatchToProps)(DoughnutChart)

