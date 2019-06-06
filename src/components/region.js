import React from 'react';
import PropTypes from "prop-types";
import City from './city'

class Region extends React.Component {
  static propTypes = {
    region: PropTypes.string,
    cities: PropTypes.array,
    toggleRegion: PropTypes.func,
    selected: PropTypes.bool
  }
  state =  {
    cities: this.props.cities
  }

  render () {
    const region = this.props.region;
    const cities = this.state.cities;
    let selected = false; 

    if (this.props.selected) {
      selected = true;
    } else {
      selected = !cities
        .map(value => value.checked)
        .includes(false);
    }

    return (
      <li>
      <input
        type="checkbox"
        onChange={(event) => this.props.toggleRegion(region, event.target.checked)}
        checked={selected}
      />
      {region}
        <ul>
          {cities.map((city, i) =>
            <City
              key={i}
              city={city}
              selected={city.checked}
              toggleCity={this.props.toggleCity}
            />
          )}
        </ul>
      </li>
    )
  }
}

export default Region;
