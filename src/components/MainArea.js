import React, { Component } from 'react'
import TeamOmegaHeader from './common/TeamOmegaHeader';
import TeamOmegaFormReadOnly from './common/TeamOmegaFormReadOnly';

class MainArea extends Component {

  onSubmitHandler = text => {
    return text;
  }
  showAlert = () => {
    if (this.props.countryDetail === undefined)
      setTimeout(alert(`Got Error from the server please change the country`), 500);
  }
  render() {
    if (this.props.countryDetail === undefined || this.props.countryDetail.name === undefined)
      return <article className='main_Area' data-test="MainArea Welcome">
        {this.showAlert()}
        <TeamOmegaHeader text="Welcome to the  World" type="h1" className="main_area_empty_header" />
      </article>

    else {
      let { nativeName, flag, name } = this.props.countryDetail;
      return <article className='main_Area' data-test="MainArea Form">
        {flag && <div className="mainArea_Image">
          <img src={flag} alt="flag" />
        </div>}
        {
          name && <TeamOmegaHeader text={`${name} (${nativeName})`} type="h1" className="title" />
        }

        <TeamOmegaFormReadOnly className="mainArea_container" values={this.props.countryDetail} handleSubmit={this.onSubmitHandler} />
      </article>
    }
  }
}



export default MainArea
