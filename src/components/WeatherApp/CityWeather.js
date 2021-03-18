import React, { useState, useEffect } from 'react';
import axios from 'axios';

// class CityWeather extends Component {
const CityWeather = (props) => {

    // state = {}
    const [icon, setIcon] = useState('')

    useEffect(() => {
        getWeather()
    }, [props.cityName])

    // async componentDidMount(){
    //     this.getWeather();
    //     getWeather();
    // }

    // componentDidUpdate(oldProps){
    //     if(oldProps.cityName !== this.props.cityName){
    //         this.getWeather();
        //     if(oldProps.cityName !== props.cityName){
    //         getWeather();
    //     }
    // }


    useEffect(() => {
        const getWeather = async () => {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
          console.log(response.data)
        }
        getWeather()
      }, [])


    // getWeather = async()=>{
    //     // const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    //     const resp = await axios.get(url);
    //     console.log(resp.data);
    // }



    // render(){
    // const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`
    const iconUrl = `http://openweathermap.org/img/w/${icon}.png`

        return(
            <div>
                <h1>{props.cityName}</h1>
            </div>
            // <h1>{this.props.cityName}</h1>
        )
    // }
}

export default CityWeather;
