import React from 'react';
import { shallow } from 'enzyme';

import TeamOmegaDropDown from '../../../components/common/TeamOmegaDropDown';
import { checkProps, event, findTestByAttr, mockFunc } from '../../App.mock'


const setUp = (props = {}) => shallow(<TeamOmegaDropDown {...props} />);


describe('TeamOmegaDropDown Component', () => {

  let component, wrapper, props;

  let values = ["india", "pak", "usa"];

  beforeEach(() => {
    props = {
      changeSelect: mockFunc,
      values
    }
    component = setUp(props);
  })

  it('-->render', () => expect(findTestByAttr(component, 'TeamOmegaDropDown').exists()).toEqual(true));

  it("-->checking proptype", () => {
    const expectedProps = {
      values, typeHeader: "",
      changeSelect: mockFunc
    }
    const propsError = checkProps(TeamOmegaDropDown, expectedProps);
    expect(propsError).toBeUndefined();
  })



  describe('-->instance Method', () => {

    beforeEach(() => wrapper = component.instance());

    it("-->changeHander trigger pass selected element to changeSelect prop", () => {
      wrapper.changeHandler(event);
      expect(mockFunc.calledOnce).toEqual(true);
      expect(mockFunc.calledWith(event.target.value)).toEqual(true);
      mockFunc.resetHistory()
    });

  });

  describe("-->Child Component-->select", () => {

    beforeEach(() => wrapper = component.find("select"));

    it("-->not render dropdown if values are not passed", () => {
      component = setUp();
      wrapper = component.find("select");
      expect(wrapper.exists()).toEqual(false)
    });

    it("--> contain and render the select tag", () => expect(wrapper.exists()).toEqual(true));

    it("-->selecting diffrent value through dropdown will pass value to the changeSelect prop", () => {
      wrapper.simulate('change', event);
      expect(mockFunc.calledOnce).toEqual(true);
      expect(mockFunc.calledWith(event.target.value)).toEqual(true);
    })

  })

});
