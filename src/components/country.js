import React from 'react';
import PropTypes from "prop-types";
import Region from './region'

class Country extends React.Component {
  static propTypes = {
    country: PropTypes.string,
    regions: PropTypes.array,
    toggleCity: PropTypes.func,
    toggleRegion: PropTypes.func,
    toggleCountry: PropTypes.func
  }
  render () {
    const country = this.props.country;
    const regions = this.props.regions;
    const uniqueRegions = [...new Set(regions.map(value => value.Region))]
    const selected = !regions
      .map(value => value.checked)
      .includes(false);
    return (
      <li>
        <input
          type="checkbox"
          onChange={(event) => this.props.toggleCountry(country, event.target.checked)}
          checked={selected}
        />
        {country}
        <ul>
          {uniqueRegions.map((region, i) =>
            <Region
              key={i}
              region={region}
              cities={regions.filter(value => value.Region === region)}
              selected={region.checked}
              toggleCity={this.props.toggleCity}
              toggleRegion={this.props.toggleRegion}
            />
          )}
        </ul>
      </li>
    )
  }
}

export default Country;
