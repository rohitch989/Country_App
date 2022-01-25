import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, event, findTestByAttr, mockFunc } from '../../App.mock';
import TeamOmegaInputBox from '../../../components/common/TeamOmegaInputBox';

const setUp = (props = {}) => shallow(<TeamOmegaInputBox {...props} />);


describe('TeamOmegaInputBox Component', () => {

  let component, wrapper, props;

  beforeAll(() => {

    props = {
      handlerChange: mockFunc,
      values: "",
      type: ""
    }
    component = setUp(props);
  })

  it('-->render', () => expect(findTestByAttr(component, 'TeamOmegaInputBox_Component').exists()).toEqual(true));

  it("-->checking proptype", () => {
    const expectedProps = {
      handlerChange: () => { }, values: "",
      type: "", ariaDescribedby: "",
      placeholder: "", className: "",
      ariaLabel: "", name: "",
      id: "", focus: true
    }
    const propsError = checkProps(TeamOmegaInputBox, expectedProps);
    expect(propsError).toBeUndefined();
  })

  describe('-->instance Method', () => {

    beforeEach(() => wrapper = component.instance());

    it("-->handleChange trigger the props handlerChange", () => {
      wrapper.handleChange(event);
      expect(mockFunc.calledOnce).toEqual(true);
      expect(mockFunc.calledWith(event.target.value)).toEqual(true);
      mockFunc.resetHistory()
    });

  });



  describe('-->Child Component-->input html tag ', () => {

    beforeEach(() => wrapper = component.find("input"));

    it('-->contain a input', () => expect(wrapper.exists()).toEqual(true));

    it("-->pass the input through props", () => {
      let ComponentPropVal = component.instance().props.values;
      let valuePassed = wrapper.props().value;
      expect(ComponentPropVal).toEqual(valuePassed);
    });

    it("-->handleChange should trigger the props handlerChange", () => {
      wrapper.simulate('change', event);
      expect(mockFunc.calledOnce).toEqual(true);
      expect(mockFunc.calledWith(event.target.value)).toEqual(true);
    });

  });



});