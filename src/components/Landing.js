import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadData, addCountry } from '../actions/actions';
import axios from "axios";
import SelectedCountries from './SelectedCountries';
// import 'bootstrap/dist/css/bootstrap.min.css';


// import Table from 'react-bootstrap/Table';



class Landing extends Component {

    constructor(props) {
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





        //console.log(this.state.allRegions.Countries[100]);

        // console.log(this.props.allRegions.Countries[10].TotalConfirmed);

        if (this.state.loading) {
            return (<div>Page Loading</div>)
        }
        else

            console.log("==============app props==============");
        //console.log(this.props.allRegions.Countries);
        console.log("vero: testing data", this.props.allRegions.Countries);
        
        let gData= this.state.allRegions.Global;
        console.log(gData.TotalConfirmed);



        return (
            <>
                <div>

                    <SelectedCountries />



                    <div>


                    </div>
                    <table id="scrollTable" class="table table-striped table-bordered table-sm table-dark" cellspacing="0" width="100%" striped bordered hover size="sm" variant="dark" >
                        <thead>
                            <th class="th-sm" width="23%">Region/Country</th>
                            <th class="th-sm">Total Cases</th>
                            <th class="th-sm">New Cases (Past 24H)</th>
                            <th class="th-sm">Total Death</th>
                            <th class="th-sm">Total Recovery</th>
                            <th className="center">Add to Compare (4 Max.)</th>
                        </thead>


                        <tbody>

                        <td><b>Global </b></td>
                        <td><b>{gData.TotalConfirmed} </b></td>
                        <td><b>{gData.TotalDeaths} </b></td>
                        <td><b>{gData.TotalRecovered} </b></td>

                            {
                                this.state.allRegions.Countries.map((region, index) => {

                                    

                                    return <tr key={region.Country}>
                                        <td><img src={"https://www.countryflags.io/"+region.CountryCode+"/flat/24.png"}></img> {region.Country}</td>
                                        <td>{region.TotalConfirmed}</td>
                                        <td>{region.NewConfirmed}</td>
                                        <td>{region.TotalDeaths}</td>
                                        <td>{region.TotalRecovered}</td>
                                        
                                        <td className="center">
                                            <button
                                                onClick={({ data = region }) => this.props.addCountry(data)}
                                            >Add</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
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
