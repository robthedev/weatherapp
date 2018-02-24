import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
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

                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return {weather}; //{weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);