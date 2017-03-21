import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const temperatureData = cityData.list.map(reading => { return reading.main.temp });
        const pressureData = cityData.list.map(reading => { return reading.main.pressure });
        const humidityData = cityData.list.map(reading => { return reading.main.humidity });
        const { lon, lat } = cityData.city.coord;

        console.log('lat:',lat);
        console.log('lon:',lon);
        return (
            <tr>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={temperatureData} color="brown" units="K"/></td>
                <td><Chart data={pressureData} color="green" units="hPa" /></td>
                <td><Chart data={humidityData} color="grey" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>{ this.props.weather.map(this.renderWeather) }</tbody>
            </table>
        );
    }
}

const mapStateToProps = ({ weather }) => {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);