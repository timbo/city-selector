import React from 'react';
import PropTypes from "prop-types";

class Region extends React.Component {
  static propTypes = {
    region: PropTypes.string,
    cityData: PropTypes.object
  }
  render () {
    const region = this.props.region;
    const cityData = this.props.cityData;
    const cities = cityData.filter(value => value.Region === region).map(value => value.Municipality)
    console.log(cities)
    return (
      <li>{region}
        <ul>
          {cities.map(city =>
            <li>{city}</li>
          )}
        </ul>
      </li>
    )
  }
}

export default Region;
