import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadData,addCountry } from '../actions/actions';
import axios from "axios";
import SelectedCountries from './SelectedCountries';
import { createLogger } from 'redux-logger';

// import Table from 'react-bootstrap/Table';



class Landing extends Component {

    constructor(props){
        super(props)

        this.state = {
            allRegions: {},
            selected: [],
            loading: true
        }

    }

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

    async componentWillMount() {


    ///https://api.covid19api.com/summary

        axios.get("summary.json")
            .then(res => {
                const allRegions = res.data;
                // console.log("test axio data-------------------");
                // console.log(allRegions.Countries[142].TotalConfirmed);

                //setting local state
                this.setState({
                    allRegions: allRegions,
                    // loading: false,
                    selected: [],
                    loading: false

                }
                    ,
                    () => {
                        console.log("test state in axios-------------------")
                        console.log(this.state);
                        this.props.loadData(this.state)
                    }



                );
            })
    }




    render() {


        // if (this.props.loading) {
        //     return <p>Loading Data</p>
        //   };

        console.log("==============app props==============");
        //console.log(this.props.allRegions.Countries);
        console.log("vero: testing data",this.state.allRegions.Countries
        );

        
        //console.log(this.state.allRegions.Countries[100]);

        // console.log(this.props.allRegions.Countries[10].TotalConfirmed);

        if(this.state.loading){
            return(<div>Page Loading</div>)
        }
        else
        return (
            <>


                <div>Selected Countries</div>
                <SelectedCountries />
                <div>All Country Table</div>
                Landing

                {/* {this.state.allRegions.Countries.map(country =>{
                    return country.Country
                })} */}
                {/* {this.props.allRegions.Countries} */}

                {/* {this.props.allRegions.Countries[142].TotalConfirmed} */}
                {/* {this.state.allRegions.Countries[142].TotalConfirmed} */}

                 <table id="scrollTable" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%" striped bordered hover size="sm" variant="dark" >
                    <thead>
                        <th class="th-sm">Region/Country</th>
                        <th class="th-sm">Total Cases</th>
                        <th class="th-sm">Total Death</th>
                        <th class="th-sm">Total Recovery</th>
                    </thead>

                    <tbody>

                        {
                            this.state.allRegions.Countries.map((region, index) => {
                            
                                return <tr key={region.Country}>
                                    <td>{region.Country}</td>
                                    <td>{region.TotalConfirmed}</td>
                                    <td>{region.TotalDeaths}</td>
                                    <td>{region.TotalRecovered}</td>
                                    <td>
                                        <button
                                            onClick={({data = region}) => this.props.addCountry(data)}
                                        >Add to Compare</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table> 
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
        allRegions: state.allRegions,
        selected: state.selected
    }
};



//manipulate data to redux store
let mapDispatchToProps = (dispatch) => {

    return {
        loadData: (allState) => dispatch(loadData(allState)),
        addCountry: (country) => dispatch(addCountry(country))


    }
}

// array.map(region =>{

//     function outside({name = region}){

//         return function inside(name){
    
//         }
//     }

// })



export default connect(mapStateToProps, mapDispatchToProps)(Landing);
// export default connect(mapStateToProps, { loadData })(Landing);
// export default Landing
