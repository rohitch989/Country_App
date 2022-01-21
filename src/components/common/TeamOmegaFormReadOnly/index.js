import React, { Component } from 'react'
import PropTypes from 'prop-types';
import TeamOmegaInputBox from '../TeamOmegaInputBox'

class TeamOmegaFormReadOnly extends Component {

  changeHandler = text => {
    return;
  }


  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.props.values);
  }

  render() {
    const { capital, subregion, region, population, area, languages } = this.props.values;
    return (
      <form onSubmit={this.handleSubmit} className={this.props.className} data-test="TeamOmegaFormReadOnly">
        <div className="main_Area_Col1">
          {capital &&
            <div className="formcontrol">
              <label htmlFor="capital" aria-labelledby='capital'>Capital: </label>
              <TeamOmegaInputBox type="text" values={capital} id="capital" read={true} handlerChange={this.changeHandler} ariaLabel="capital" />

            </div>
          }
          {area &&
            <div className="formcontrol">
              <label htmlFor="area" aria-labelledby='area'>Area: </label>
              <TeamOmegaInputBox type="text" read={true} values={area.toString()} id="area" handlerChange={this.changeHandler} />
            </div>
          }
          {population &&
            <div className="formcontrol">
              <label htmlFor="population" aria-labelledby='population'>Population: </label>

              < TeamOmegaInputBox type="text" read={true} values={population.toString()} id="population" handlerChange={this.changeHandler} />
            </div>}
        </div>
        <div className="main_Area_Col1">
          {subregion &&
            <div className="formcontrol">
              <label htmlFor="subregion" aria-labelledby='subregion'>Sub Region: </label>
              <TeamOmegaInputBox type="text" read={true} values={subregion} id="subregion" handlerChange={this.changeHandler} />


            </div>}
          {region &&
            <div className="formcontrol">
              <label htmlFor="region" aria-labelledby='region'>Region: </label>
              <TeamOmegaInputBox type="text" read={true} values={region} id="region" handlerChange={this.changeHandler} />


            </div>}
          {languages &&
            <div className="formcontrol">
              <label htmlFor="languages" aria-labelledby='languages'>Language: </label>
              <TeamOmegaInputBox type="text" read={true} values={languages.map(lang => lang.name).toString()} id="languages" handlerChange={this.changeHandler} />

            </div>}
        </div>
      </form>
    )
  }
}
TeamOmegaFormReadOnly.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.object
}

export default TeamOmegaFormReadOnly;
