import React, { Component } from 'react'
import LineChart from './LineChart'
import DoughnutChart from './DoughnutChart'
import SampleLineChart from './SampleLineChart'

class Chart extends Component {
    render() {
        return (
            <>
                <div >
                <DoughnutChart />
                </div>
                <LineChart />
                {/* <SampleLineChart /> */}

            </>
        )
    }
}

export default Chart
