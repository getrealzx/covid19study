import React, { Component } from 'react';
import axios from "axios";
import {Doughnut} from "react-chartjs-2";



class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            search: null,
            cases: []
        }
    }

    componentDidMount() {
        axios.get("https://corona.lmao.ninja/v2/states")
            .then(res => {
                const cases = res.data;
                this.setState({ cases });
            })
    }

    searchCases = (e) => {
        let keyword = e.target.value;
        this.setState({
            search: keyword
        })
    }

    // handleReset = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         search: null,
    //         cases: []
    //     })
    // }

  render() {
      
    const covid = this.state.cases.filter(data => {
        if (this.state.search == null) return
        else if (data.state.toLowerCase().includes(this.state.search.toLowerCase())) return data
    })
    .map(data => {

        const donut = {
            labels: [
                'Total Cases',
                'New Cases',
                'Total Deaths',
                'Number of Deaths Today'
            ],
            datasets: [{
                data: [data.cases, data.todayCases, data.deaths, data.todayDeaths],
                backgroundColor: [
                    "#309FDB",
                    "#FBCE4A",
                    "#854E9B",
                    "#E95B54"
                ]
            }]
        }

        return (
            <div className="covid-case-data">
                <h3>State: {data.state}</h3>
                <ul>
                    <li>Total Cases: {data.cases}</li>
                    <li>Today's Cases: {data.todayCases}</li>
                    <li>Total Deaths: {data.deaths}</li>
                    <li>Death's Today: {data.todayDeaths}</li>
                </ul>
                <div className="chart-container">
                    <Doughnut data={donut} />
                </div>
            </div>
        )
    })

    return (
        <div className="covid-data">
            <input type="text" placeholder="Enter search term" onChange={e=>this.searchCases(e)} />
            <form onSubmit={this.handleReset}>
                <button type="submit">Reset</button>
            </form>
            {covid}
            
        </div>
      );
  }
}

export default Chart