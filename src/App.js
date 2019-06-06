import React from 'react';
import './App.css';
import * as cityData from './Cities.json';
import Country from './components/country';
import Tally from './components/tally';

class App extends React.Component {
  state = {
    cityData: cityData.default.map(value => ({...value, checked: false}))
  }

  toggleCity = city => {
    const cityData =  [ ...this.state.cityData ];
    cityData.map(val => val.Municipality === city ? val.checked = !val.checked : val)
    this.setState({ cityData })
  }

  toggleRegion = (region, value) => {
    const cityData =  [ ...this.state.cityData ];
    cityData.map(val => val.Region === region ? val.checked = value : val)
    this.setState({ cityData })
  }

  toggleCountry = (country, value) => {
    const cityData =  [ ...this.state.cityData ];
    cityData.map(val => val.Country === country ? val.checked = value : val)
    this.setState({ cityData })
  }

  render() {
    const cityData = this.state.cityData
    const uniqueCountries = [...new Set(cityData.map(value => value.Country))]; // An array of unique country names

    return (
      <div className="App">
        <Tally cityData={cityData}/>
        <header className="App-header">
          <h1>Cities</h1>
        </header>
        <ul>
          {uniqueCountries.map((country, i) =>
            <Country
              key={i}
              country={country}
              toggleCity={this.toggleCity}
              toggleRegion={this.toggleRegion}
              toggleCountry={this.toggleCountry}
              regions={cityData.filter(value => value.Country === country)}
            />
          )}
        </ul>
      </div>
    )
  }
}

export default App;
