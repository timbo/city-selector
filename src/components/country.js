import React from 'react';
import PropTypes from "prop-types";
import Region from './region'

class Country extends React.Component {
  static propTypes = {
    country: PropTypes.string,
    cityData: PropTypes.object
  }
  render () {
    const country = this.props.country;
    const cityData = this.props.cityData;
    const uniqueRegions = [...new Set(cityData.filter(value => value.Country === country).map(value => value.Region))]
    return (
      <li>{country}
        <ul>
          {uniqueRegions.map(region =>
            // <li>{region}</li>
            <Region region={region} cityData={cityData}/>
          )}
        </ul>
      </li>
    )
  }
}

export default Country;
