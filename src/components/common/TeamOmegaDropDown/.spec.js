import React from 'react';
import TeamOmegaDropDown from './index';
import { shallow } from 'enzyme';
import { checkProps } from '../../../mockFile'



const setUp = (props = {}) => shallow(<TeamOmegaDropDown {...props} />);


describe('TeamOmegaDropDown Component', () => {

  let component, wrapper, props, mockFunc;
  let values = ["india", "pak", "usa"];

  beforeEach(() => {
    mockFunc = jest.fn()
    props = {
      changeSelect: mockFunc,
      values
    }
    component = setUp(props);
  })

  it('-->render', () => {
    expect(component.find(`[data-test="TeamOmegaDropDown"]`).exists()).toEqual(true);
  });

  it("-->checking proptype", () => {
    const expectedProps = {
      values,
      typeHeader: "",
      changeSelect: mockFunc
    }
    const propsError = checkProps(TeamOmegaDropDown, expectedProps);
    expect(propsError).toBeUndefined();
  })



  describe('-->instance Method', () => {

    beforeEach(() => {
      wrapper = component.instance();
    });

    it("-->changeHander trigger pass slected element to cangeSelect prop", () => {
      let selected = "hjk";
      wrapper.changeHandler({ target: { value: selected } });
      expect(mockFunc).toHaveBeenCalled();
      expect(mockFunc).toHaveBeenCalledWith(selected);
    });

  });

  describe('-->Child Component', () => {


    describe("-->select", () => {
      beforeEach(() => {
        wrapper = component.find("select");
      });

      it("-->not render dropdown if values are not passed", () => {

        component = setUp();
        wrapper = component.find("select");
        expect(wrapper.exists()).toEqual(false)
      })
      it("--> contain and render the select tag", () => {
        expect(wrapper.exists()).toEqual(true)
      });

      it("-->selecting diffrent value through dropdown will pass value to the changeSelect prop", () => {
        let selected = "hjdsdk";
        wrapper.simulate('change', { target: { value: selected } });
        expect(mockFunc).toHaveBeenCalled()
        expect(mockFunc).toHaveBeenCalledWith(selected);
      })
    })

  })
});
