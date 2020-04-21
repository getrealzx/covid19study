import React, { Component } from 'react'
import LineChart from './LineChart'
import DoughnutChart from './DoughnutChart'

class Chart extends Component {
    render() {
        return (
            <>
                <div >
                <DoughnutChart />
                </div>
                <LineChart />

            </>
        )
    }
}

export default Chart
