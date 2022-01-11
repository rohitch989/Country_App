import React, { Component } from 'react'
import { connect } from "react-redux";
import TeamOmegaHeader from './common/TeamOmegaHeader';
import TeamOmegaForm from './common/TeamOmegaForm';

class MainArea extends Component {

  onSubmitHandler = text => {
    return;
  }
  showAlert = () => {
    if (this.props.countryDetail === undefined)
      setTimeout(alert(`Got Error from the server please change the country`), 500);
  }
  render() {

    if (this.props.countryDetail === undefined || this.props.countryDetail.name === undefined)
      return <article className='main_Area'>
        {this.showAlert()}
        <TeamOmegaHeader text="Welcome to the  World" type="h1" className="main_area_empty_header" />
      </article>

    else {
      const { name, nativeName, flag } = this.props.countryDetail;
      return <article className='main_Area' >
        <div className="mainArea_Image">
          <img src={flag} alt="flag" />
        </div>
        <TeamOmegaHeader text={`${name} (${nativeName})`} type="h1" className="title" />
        <TeamOmegaForm className="mainArea_container" values={this.props.countryDetail} handleSubmit={this.onSubmitHandler} />
      </article>
    }
  }
}

const mapStateToProps = state => ({
  countryDetail: state.countries.countryDetails
});

export default connect(mapStateToProps, null)(MainArea)
