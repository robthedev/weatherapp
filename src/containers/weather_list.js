import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather (cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        console.log(temps);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="red" />
                </td>
                <td>
                    <Chart data={temps} color="green" />
                </td>
                <td>
                    <Chart data={temps} color="blue" />
                </td>
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