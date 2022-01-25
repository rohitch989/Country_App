import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TeamOmegaDropDown extends Component {


  changeHandler = e => {
    let text = e.target.value
    if (this.props.changeSelect !== undefined)
      this.props.changeSelect(text);
  }

  render() {
    const { values, typeHeader } = this.props;

    return values && values.length > 0 ? <><label aria-labelledby={typeHeader} htmlFor={typeHeader} className='dropdown_label'>{typeHeader} :</label>
      <select onChange={this.changeHandler} id={typeHeader} className='dropdown' title={typeHeader} data-test="TeamOmegaDropDown">
        {values.map((item, index) => <option title={item} key={index} value={item}>{item.toUpperCase()}</option>)}
      </select> </> : null
  }
}

TeamOmegaDropDown.propTypes = {
  values: PropTypes.array,
  typeHeader: PropTypes.string,
  changeSelect: PropTypes.func
}
export default TeamOmegaDropDown;