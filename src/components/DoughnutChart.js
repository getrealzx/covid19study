import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCountry } from "../actions/actions"
import { Doughnut } from "react-chartjs-2";



class DoughnutChart extends Component {


    render() {

        const covid = this.props.selected.map(region => {

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
                        "#309FDB",
                        "#FBCE4A",
                        "#854E9B",
                        "#E95B54"
                    ]
                }]
            }

            return (
                <div className="center p-3">
                    <h5><b>Country: {region.Country}</b></h5>

                    <div className="col">
                        <Doughnut data={donut} />
                    </div>
                    <button className="m-3"

                        onClick={({ data = region }) => {
                            this.props.deleteCountry(data)
                        }}

                    >Delete Country</button>
                </div >
            )
        })

        return (

            <div className="d-flex justify-content-between" >

                {covid}

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

