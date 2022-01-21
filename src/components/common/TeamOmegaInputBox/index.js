import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';


class TeamOmegaInputBox extends PureComponent {

  handleChange = e => this.props.handlerChange(e.target.value)

  render() {
    const { type, name, values, placeholder, className, id, focus, read } = this.props;

    return <input type={type} name={name} placeholder={placeholder} className={className} id={id} value={values} onChange={this.handleChange} autoFocus={focus} readOnly={read} data-test="TeamOmegaInputBox_Component" />

  }
}
TeamOmegaInputBox.propTypes = {
  type: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
  values: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  focus: PropTypes.bool,
  read: PropTypes.bool
}

export default TeamOmegaInputBox;
