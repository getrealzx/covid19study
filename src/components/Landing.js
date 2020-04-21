import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadData, addCountry } from '../actions/actions';
import axios from "axios";
import SelectedCountries from './SelectedCountries';
import MaterialTable from 'material-table';
import Button from 'material-table';
import { createLogger } from 'redux-logger';


// import Table from 'react-bootstrap/Table';



class Landing extends Component {

    constructor(props) {
        super(props)

        this.state = {
            allRegions: {},
            selected: [],
            search: null,
            searchRegions: [],
            loading: true
        }

    }


    componentWillMount() {


        axios.get("https://api.covid19api.com/summary")

        // axios.get("summary.json")
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



    searchCases = (e) => {
        let keyword = e.target.value;
        this.setState({
            search: keyword
        })
    }


    // handleCheckboxClick = (rowData) => {
    //     this.setState({
    //       selectedItems: {
    //         ...rowData,
    //         tableData: {
    //           checked: true,
    //         }
    //       }
    //     });

    //     this.props.addCountry(rowData)

    //   }






    render() {



        if (this.state.loading) {
            return (<div>Data Loading</div>)
        }
        else

            console.log("==============app props==============");

        let gData = this.state.allRegions.Global;
        console.log(gData.TotalConfirmed);



        // console.log("gggggggggggggggggg", this.state.allRegions.Countries[100].TotalConfirmed);


        // const state = {
        //     columns: [
        //         { title: 'Region', field: 'region' },
        //         { title: 'Total Cases', field: 'totalcases', type: 'numeric' },
        //         { title: "Today's Cases", field: 'todayscases', type: 'numeric' },
        //         { title: "Total Deaths", field: 'totaldeaths', type: 'numeric' },
        //         { title: "Total Recovery", field: 'totalrevovery', type: 'numeric' },
        //         { title: "Add to Compare (4 Max.)", field: 'add', },

        //     ],

        //     data:

        //         this.state.allRegions.Countries.map((region, index) => {
        //             return {
        //                 region: region.Country,
        //                 totalcases: region.TotalConfirmed,
        //                 todayscases: region.NewConfirmed,
        //                 totaldeaths: region.TotalDeaths,
        //                 totalrevovery: region.TotalRecovered,
        //                 // add: <Button> d</Button>,

        //             }
        //         })

        //     // [
        //     //     {
        //     //         region: "Any Country",
        //     //         totalcases: 2421,
        //     //         todayscases: 5,
        //     //         totaldeaths: 24,
        //     //         totalrevovery: 21232

        //     //     },
        //     // ],

        // }


        const countryTable = () => {

            let regionSet = this.state.allRegions.Countries.filter(region => {
                if (this.state.search == null) return this.state.allRegions.Countries
                else if (region.Country.toLowerCase().includes(this.state.search.toLowerCase())) return region

            });


            return (




                <table className="table table-striped table-bordered table-sm table-dark table-hover" >
                    <thead className="thead-dark pl-4" >
                        <th class="th-sm" width="23%">Region/Country</th>
                        <th class="th-sm">Total Cases</th>
                        <th class="th-sm">New Cases Today</th>
                        <th class="th-sm">Total Death</th>
                        <th class="th-sm">Total Recovery</th>
                        <th className="center">Add to Compare (4 Max.)</th>
                    </thead>


                    <tbody >

                        <td className="pl-2"><b>Global </b></td>
                        <td className="pl-2"><b>{gData.TotalConfirmed} </b></td>
                        <td className="pl-2"><b>{gData.NewConfirmed} </b></td>
                        <td className="pl-2"><b>{gData.TotalDeaths} </b></td>
                        <td className="pl-2"><b>{gData.TotalRecovered} </b></td>
                        <td>
                            <input type="text" placeholder="Enter search term" className="text-warning form-control form-control-sm p-3" onChange={e => this.searchCases(e)} />
                        </td>

                        {

                            regionSet.map((region) => {
                                return <tr key={region.Country} className="pl-2">
                                    <td className="pl-4"><img src={"https://www.countryflags.io/" + region.CountryCode + "/flat/24.png"} className="pl-3 pr-2"></img> {region.Country}</td>
                                    <td className="pl-4">{region.TotalConfirmed}</td>
                                    <td className="pl-4">{region.NewConfirmed}</td>
                                    <td className="pl-4">{region.TotalDeaths}</td>
                                    <td className="pl-4">{region.TotalRecovered}</td>
                                    <td className="center">
                                        <button className="btn btn-light rounded-pill "
                                            onClick={({ data = region }) => this.props.addCountry(data)}
                                        >Add</button></td>
                                </tr>
                            })

                        }
                    </tbody>
                </table>)

        }





        return (
            <>
                <div>

                    <SelectedCountries />
                    {/* <MaterialTable
                        title="Global Status"
                        columns={state.columns}
                        data={state.data}
                        rowsPerPage={100}
                        options={{
                            selection: true
                        }}
                        onSelectionChange={this.handleCheckboxClick}
                    /> */}




                    <div className="d-flex flex-row-reverse">
                        <div className="col-3"></div>


                    </div>
                    <div>


                        {countryTable()}
                    </div>

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
