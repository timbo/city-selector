import React from 'react';
import './App.css';
import * as cityData from './Cities.json';
import Country from './components/country'

class App extends React.Component {
  state = {
    cityData,
    selectedCount: 0
  }
  render() {
    const cityData = this.state.cityData.default
    const uniqueCountries = [...new Set(cityData.map(value => value.Country))];

    return (
      <div className="App">
        <header className="App-header">
          <h1>Cities</h1>
          <ul>
            {uniqueCountries.map((country) =>
              <Country country={country} cityData={cityData}/>
            )}
          </ul>
        </header>
      </div>
    )
  }
}

export default App;
