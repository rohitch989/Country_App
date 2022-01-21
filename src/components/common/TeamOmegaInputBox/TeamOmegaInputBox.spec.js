import React from 'react';
import TeamOmegaInputBox from './index';
import { shallow } from 'enzyme';
import { checkProps } from '../../../mockFile'

const setUp = (props = {}) => shallow(<TeamOmegaInputBox {...props} />);


describe('TeamOmegaInputBox Component', () => {

  let component, wrapper, props, mockFunc;

  beforeAll(() => {
    mockFunc = jest.fn()
    props = {
      handlerChange: mockFunc,
      values: "",
      type: ""
    }
    component = setUp(props);
  })

  it('-->render', () => {
    expect(component.find(`[data-test="TeamOmegaInputBox_Component"]`).exists()).toEqual(true);
  });

  it("-->checking proptype", () => {
    const expectedProps = {
      handlerChange: () => { },
      values: "",
      type: "",
      ariaDescribedby: "",
      placeholder: "",
      className: "",
      ariaLabel: "",
      name: "",
      id: "",
      focus: true
    }
    const propsError = checkProps(TeamOmegaInputBox, expectedProps);
    expect(propsError).toBeUndefined();
  })

  describe('-->instance Method', () => {

    beforeEach(() => {
      wrapper = component.instance();
    });

    it("-->handleChange trigger the props handlerChange", () => {
      let e = { target: { value: "hello" } };
      wrapper.handleChange(e);

      expect(mockFunc).toHaveBeenCalled();
      expect(mockFunc).toHaveBeenLastCalledWith(e.target.value)

    });



  });

  describe('-->Child Component', () => {

    describe('-->input html tag ', () => {

      beforeEach(() => {
        wrapper = component.find("input");
      });

      it('-->contain a input', () => {
        expect(wrapper.exists()).toEqual(true);
      });

      it("-->pass the input through props", () => {
        let ComponentPropVal = component.instance().props.values;
        let valuePassed = wrapper.props().value;
        expect(ComponentPropVal).toEqual(valuePassed);
      });

      it("-->handleChange should trigger the props handlerChange", () => {
        let e = { target: { value: "jfjdf" } };
        wrapper.simulate('change', e);
        expect(mockFunc).toHaveBeenCalled();
        expect(mockFunc).toHaveBeenLastCalledWith(e.target.value)
      });

    });


  });



});