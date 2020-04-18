import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadData } from '../actions/actions';
import axios from "axios";

// import Table from 'react-bootstrap/Table';



class Landing extends Component {

    // componentWillMount() {
    //     this.props.loadData();
    // };


    ///https://api.covid19api.com/summary

    // componentWillMount() {
    //     fetch("summary.json")
    //         .then(result => result.json())
    //         .then(data => {
    //             this.setState({
    //                 allRegions: data,
    //                 // loading: false,
    //                 selected: []

    //             }                   ,
    //                 () => {
       
    //                     return this.props.loadData(this.state)
    //                 }



    //             );
    //         })
    // }

    componentDidMount() {
        axios.get("summary.json")
            .then(res => {
                const allRegions = res.data;
                // console.log("test axio data-------------------");
                // console.log(allRegions.Countries[142].TotalConfirmed);

                //setting local state
                this.setState({
                    allRegions: allRegions,
                    // loading: false,
                    selected: []

                }
                    ,
                    () => {
                        console.log("test state in axios-------------------")
                        console.log(this.state);
                        return this.props.loadData(this.state)
                    }



                );
            })
    }


    render() {

        console.log("test in Landing:");
        // console.log("test state data in landing render-------------------");
        // console.log(this.state.allRegions.Countries);
        console.log("==============app props==============");
        // console.log(this.props.allRegions.Countries[0].TotalConfirmed);
        console.log(this.props.allRegions.Countries);

        return (
            <>
                <div>Selected Countries</div>
                <div>All Country Table</div>
                Landing
                {/* {this.props.allRegions.Countries} */}

                {/* {this.props.allRegions.Countries[142].TotalConfirmed} */}
                {/* {this.state.allRegions.Countries[142].TotalConfirmed} */}

                {/* <table id="scrollTable" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%" striped bordered hover size="sm" variant="dark" >
                    <thead>
                        <th class="th-sm">Region/Country</th>
                        <th class="th-sm">Total Cases</th>
                        <th class="th-sm">Total Death</th>
                        <th class="th-sm">Total Recovery</th>
                    </thead>

                    <tbody>

                        {
                            this.props.allRegions.Countries.map((region, index) => {
                                return <tr key={region.Country}>
                                    <td>{region.Country}</td>
                                    <td>{region.TotalConfirmed}</td>
                                    <td>{region.TotalDeaths}</td>
                                    <td>{region.TotalRecovered}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                this.props.addCountry(
    
                                                    region

                                                )
                                            }}
                                        >Add to Compare</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table> */}
            </>
        )
    }
}

Landing.propTypes = {
    loadData: PropTypes.func.isRequired,
    allRegions: PropTypes.array.isRequired
};


//get data from redux store
let mapStateToProps = (state) => {
    return {
        allRegions: state.allRegions
        , selected: state.selected
    }
};



//manipulate data to redux store
let mapDispatchToProps = (dispatch) => {

    return {
        loadData: (allState) => dispatch(loadData(allState))


    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Landing);
// export default connect(mapStateToProps, { loadData })(Landing);
// export default Landing
