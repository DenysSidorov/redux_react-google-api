import React from "react";
import { Component } from "react";

//import SearchBar from "../containers/search_bar";
//import WeatherList from "../containers/weather_list";
import I18 from '../i18/App/index'

export default class App extends Component {
  render() {
    return (
      <div>
        {/*<SearchBar />*/}
        {/*<WeatherList />*/}
        <I18/>
      </div>
    );
  }
}
