import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadData, addCountry } from '../actions/actions';
import axios from "axios";
import SelectedCountries from './SelectedCountries';
import MaterialTable from 'material-table';


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


    componentWillMount() {


        // axios.get("https://api.covid19api.com/summary")

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



        if (this.state.loading) {
            return (<div>Data Loading</div>)
        }
        else

            console.log("==============app props==============");

        let gData = this.state.allRegions.Global;
        console.log(gData.TotalConfirmed);
        console.log("gggggggggggggggggg", this.state.allRegions.Countries[100].TotalConfirmed);

        
            const state={
                columns: [
                    { title: 'Region', field: 'region' },
                    { title: 'Total Cases', field: 'totalcases', type: 'numeric' },
                    { title: "Today's Cases", field: 'todayscases', type: 'numeric' },
                    { title: "Total Deaths", field: 'totaldeaths', type: 'numeric' },
                    { title: "Total Recovery", field: 'totalrevovery', type: 'numeric' },

                ],

                data:

                    this.state.allRegions.Countries.map((region,index)=>{
                        return{
                            region:region.Country,
                            totalcases:region.TotalConfirmed,
                            todayscases:region.NewConfirmed,
                            totaldeaths:region.TotalDeaths,
                            totalrevovery:region.TotalRecovered
                        }
                    })

                    // [
                    //     {
                    //         region: "Any Country",
                    //         totalcases: 2421,
                    //         todayscases: 5,
                    //         totaldeaths: 24,
                    //         totalrevovery: 21232

                    //     },
                    //     {
                    //         region: "xxx",
                    //         totalcases: 15,
                    //         todayscases: 52,
                    //         totaldeaths: 241,
                    //         totalrevovery: 212232

                    //     },
                    // ],
            }

            // console.log("state for fucTable",state.data);

            // return (
            // <MaterialTable
            //     title="Editable Example"
            //     columns={state.columns}
            //     data={state.data}
            //     editable={{
            //     }}
            // />
        // );
    



        return (
            <>
                <div>

                    <SelectedCountries />
                    <MaterialTable
                        title="Global Status"
                        columns={state.columns}
                        data={state.data}
                    />


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
                                        <td><img src={"https://www.countryflags.io/" + region.CountryCode + "/flat/24.png"} className="pl-3 pr-2"></img> {region.Country}</td>
                                        <td>{region.TotalConfirmed}</td>
                                        <td>{region.NewConfirmed}</td>
                                        <td>{region.TotalDeaths}</td>
                                        <td>{region.TotalRecovered}</td>

                                        <td className="center">
                                            <button className="btn btn-light rounded-pill "
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



export default connect(mapStateToProps, mapDispatchToProps)(Landing);
