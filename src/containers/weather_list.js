import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
    renderWeather (citydata) {
        return (
            <tr key={citydata.city.name}>
                <td>{citydata.city.name}</td>
            </tr> 
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temp</th>
                        <th>Pressure</th>
                        <th>Humdity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    //{weather} === {weather: weather}
    return { weather }; 
}

export default connect(mapStateToProps)(WeatherList);