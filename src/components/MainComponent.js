import React, { Component } from 'react'
import { connect } from 'react-redux'
import TeamOmegaDropDown from './common/TeamOmegaDropDown';
import { fetchCountries, fetchCountryDetails } from "../Actions/CountryAction";
import { continent, mapStateToProps } from "../mockFile";
import MainArea from './MainArea';

export class MainComponent extends Component {


  DropDownHandlerContinent = item => {
    this.props.fetchCountries(item);
  }

  DropDownHandlerCountries = item => {
    this.props.fetchCountryDetails(item);
  }


  render() {
    const { countries, error, countryDetail } = this.props;
    return (
      <div className='maincomponent' data-test="maincomponent">
        {error && error !== "" && alert(error)}
        <div className="dropdowns">
          {continent && continent.length > 0 && <TeamOmegaDropDown typeHeader="Continent" values={continent} changeSelect={this.DropDownHandlerContinent} />}
          {countries && countries.length > 0 &&
            <TeamOmegaDropDown typeHeader="Countries" values={countries} changeSelect={this.DropDownHandlerCountries} />
          }

        </div>
        <MainArea countryDetail={countryDetail} />
      </div>
    )
  }
}

export default connect(mapStateToProps, { fetchCountries, fetchCountryDetails })(MainComponent);
