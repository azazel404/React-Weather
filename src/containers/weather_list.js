import React, {Component} from 'react';
import { connect } from "react-redux";
import {Sparklines , SparklinesLine } from "react-sparklines";
import Chart from "../components/chart";
import GoogleMap from "../components/google_maps";

class WeatherList extends Component{

    renderWeather(datacity){
        const temps = datacity.list.map(dataweather => dataweather.main.temp);
        const pressure = datacity.list.map(dataweather => dataweather.main.pressure);
        const humidity = datacity.list.map(dataweather => dataweather.main.humidity);
        const lon = datacity.city.coord.lon;
        const lat = datacity.city.coord.lat;
        return(
            <tr key={datacity.city.id}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="orange" unit="K" /></td>
                <td><Chart data={pressure} color="black" unit="hPa" /></td>
                <td><Chart data={humidity} color="green" unit="%" /></td>
            </tr>
        );
    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature(K)</th>
                    <th>Pressure(hPa)</th>
                    <th>Humidity(%)</th>
                </tr>                   
                </thead>
                <tbody>
                    {
                        this.props.weather.map(this.renderWeather)
                    }
                </tbody>
            </table>
        )
    }
}

function MapStateProps(state){
    return{
        weather: state.weather
    }
}

export default connect(MapStateProps)(WeatherList);