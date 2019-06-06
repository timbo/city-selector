import React from 'react';
import PropTypes from "prop-types";

class Tally extends React.Component {
  static propTypes = {
    cityData: PropTypes.array,
  }
  render () {
    const cityData = this.props.cityData;

    // Tally the total number of checked cities
    let total = cityData.reduce((acc, current) => {
      if (current.checked){
        acc++;
      }
      return acc;
    },0)

    return (
      <div className="tally" >
        Total: {total}
      </div>
    )
  }
}

export default Tally;
