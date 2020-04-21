import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { deleteCountry } from "../actions/actions"
import './styles.css';

//import {newActionCreatorFunction} from "someactioncreator"
// import Chart from './Chart'



class SelectedCountries extends Component {

    render() {
        console.log("CHECKING PROPS IN SELECTED COUNTRIES")
        console.log(this.props.selected)
        // console.log()


        // this.props.dataReducer.selected.(WHATEVERDATAYOUNEED)

        return (
            <>
                {/* {this.props.selected[0].Country} */}
                {/* <div><Chart /></div> */}

                <div className="container col-sm-6">
                    <table className="table m-5 p-3 table-hover myBorder table-striped  ">
                        <thead className="thead-dark">
                            <tr>
                                <th className="p-3" ><h5><b> Added Countries</b></h5> </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                this.props.selected.map(region => {

                                    return <tr key={region.Country}>
                                        <td className="p-3"><img src={"https://www.countryflags.io/"+region.CountryCode+"/flat/32.png"}></img> <strong className="pl-3"> {region.Country} </strong></td>
                                        <td><button className="btn btn-light rounded-pill center"
                                        onClick={({data = region}) => {
                                            this.props.deleteCountry(data)}}
                                        
                                    >Remove</button></td>
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

//newActionCreatorFunction()


SelectedCountries.propTypes = { // telling the component what kind of property type the data is
    selected: PropTypes.object.isRequired,
    //newActionCreatorFunction: PropTypes.func.isRequired
}


let mapStateToProps = (state) => {

    // console.log("print mapStateToProp")
    // console.log(state.dataReducer.data[1]);

    //this.state.dataReducer.data


    return {
        selected: state.selected
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        deleteCountry: (selectedCountry) => dispatch(deleteCountry(selectedCountry))

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedCountries)





