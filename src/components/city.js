import React from 'react';
import PropTypes from "prop-types";

class Region extends React.Component {
  static propTypes = {
    city: PropTypes.object,
    toggleCity: PropTypes.func,
    selected: PropTypes.bool
  }
  
  render () {
    const city = this.props.city;
    const selected = this.props.selected ? true : city.checked;
    return (
      <li>
        <input
          type="checkbox"
          onChange={() => this.props.toggleCity(city.Municipality)}
          checked={selected}
        />
        {city.Municipality}
      </li>
    )
  }
}

export default Region;
