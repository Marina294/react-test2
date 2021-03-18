// import React, {Component} from 'react';
import React, {useState} from 'react';
import CityWeather from './CityWeather';

const WeatherApp = (props) => {
// class WeatherApp extends Component {
    // state = {
    //     city: "London",
    //     cityNameForWeather: "London",
    // }

  // changeCity = (e)=>{
  //     this.setState({city: e.target.value})
  // }
  // citysearch = (e)=>{
  //     e.preventDefault();
  //     this.setState({cityNameForWeather: this.state.city})
  // }
    
  const [city, setCty] = useState('London');
  const [cityNameForWeather, setCityNameForWeather] = useState('London');

  
  const changeCity = (event)=>{
    setCty(event.target.value)
  }
  const citysearch = (event)=>{
    event.preventDefault();
    cityNameForWeather(city)
  }


//   render(){
  return(
    <div className="container">
      {/* <CityWeather cityName={this.state.cityNameForWeather} /> */}
      <CityWeather cityName={cityNameForWeather} />
      <div className="row justify-content-center">
        {/* <form onSubmit={this.citysearch}> */}
        <form onSubmit={citysearch}>
          {/* <input type="text" value={this.state.city} onChange={this.changeCity} />
          <input type="text" value={this.state.city} onChange={this.changeCity} /> */}
          <input type="text" value={city} onChange={changeCity} />
          <input type="text" value={city} onChange={changeCity} />
          <input type="submit" className="btn btn-primary" value="Search!" />
        </form>
      </div>
    </div>
  )
    // }
}


export default WeatherApp;
