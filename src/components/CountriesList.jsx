import React from 'react';
import { Link } from 'react-router-dom'; 
import countries from './../countries.json';

class CountriesList extends React.Component{
    state = {
        countries: []
    }

    componentDidMount(){
        this.setState({
            countries: countries
        })
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.countries.map(country => (
                        <li key={country.latlng}>
                            {country.flag}
                            <Link to={`/country/${country.cca3}`}>
                              {country.name.official} 
                            </Link>{' '}
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}
export default CountriesList;