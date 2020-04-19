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

                <div className="main">
                    <table>
                        <thead>
                            <tr>
                                <th><b> Added Country Name</b> </th>
                                <th><b> Remove</b> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                this.props.selected.map((region, index) => {

                                    return <tr key={region.Country}>
                                        <td><img src={"https://www.countryflags.io/"+region.CountryCode+"/shiny/32.png"}></img> {region.Country}</td>
                                        <td><button 
                                        onClick={({data = region}) => {
                                            this.props.deleteCountry(data)}}
                                        
                                    >X</button></td>
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





