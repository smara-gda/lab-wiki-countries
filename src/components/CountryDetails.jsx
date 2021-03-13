import React from 'react';
import {BrowserRouter as Route} from 'react-router-dom';
import countries from './../countries.json'

class CountryDetails extends React.Component {
    state = {
        country: null
    };

    componentDidMount(){
        this.loadCountry()
    }

    componentDidUpdate(previousProps){
        if (this.props.match.params.cca3 !== previousProps.match.params.cca3){
            this.loadCountry()
        }
    }


    loadCountry = () =>{
        const country = countries.find(item => item.cca3 === this.props.match.params.id)
        console.log(country )
        this.setState({
            country: country
        })
    }

    render(){
        return(
                <div>
                
                    {this.state.country &&  (
                    <div><h1>{this.state.country.name.official}</h1>
                    <h3>{this.state.country.capital}</h3>
                    <h4>{this.state.country.borders}</h4>
                    
                    </div>
                    )
            }
                </div>
        )
    }


}

export default CountryDetails;