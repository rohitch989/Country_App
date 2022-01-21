import React from 'react';
import TodoForm from './index';
import { shallow } from 'enzyme';
import { checkProps } from '../../../mockFile'
import TeamOmegaInputBox from '../TeamOmegaInputBox';


const setUp = (props = {}) => shallow(<TodoForm {...props} />);


describe('Todofrom Component', () => {

  let component, wrapper, props, mockFunc, e = { preventDefault: () => { } };
  let values = {
    capital: "sad", subregion: "fdf", region: "dsd", population: 322, area: 323, languages: ["fd", "fdf"]
  };
  beforeEach(() => {
    mockFunc = jest.fn()
    props = {
      handleSubmit: mockFunc,
      values
    }
    component = setUp(props);
  })

  it('-->render', () => {
    expect(component.find(`[data-test="TeamOmegaFormReadOnly"]`).exists()).toEqual(true);
  });

  it("-->checking proptype", () => {
    const expectedProps = {
      handleSubmit: () => { }, values: {}
    }
    const propsError = checkProps(TodoForm, expectedProps);
    expect(propsError).toBeUndefined();
  })

  describe('-->instance Method', () => {

    beforeEach(() => {
      wrapper = component.instance();
    });

    // // changeHandler nothing


    it("-->handleSubmit pass the todo through props and reset the state", () => {
      let preventDefault = () => { };
      wrapper.handleSubmit({ preventDefault });
      expect(mockFunc).toHaveBeenCalled();
      expect(mockFunc).toHaveBeenCalledWith(wrapper.props.values);
    });

  });

  describe('-->Child Component', () => {

    describe('-->input', () => {

      beforeEach(() => {
        wrapper = component.find(TeamOmegaInputBox);
      });

      it('-->contain a input', () => {
        expect(wrapper.exists()).toEqual(true);
      });

      it("input with id capital exist and render", () => {
        wrapper = wrapper.filter("#capital");
        expect(wrapper.exists()).toEqual(true);
        expect(wrapper.dive().find(`[data-test="TeamOmegaInputBox_Component"]`).exists()).toEqual(true);
      })

      it("input with id area exist and render", () => {
        wrapper = wrapper.filter("#area");
        expect(wrapper.exists()).toEqual(true);
        expect(wrapper.dive().find(`[data-test="TeamOmegaInputBox_Component"]`).exists()).toEqual(true);
      })

      it("input with id population exist and render", () => {
        wrapper = wrapper.filter("#population");
        expect(wrapper.exists()).toEqual(true);
        expect(wrapper.dive().find(`[data-test="TeamOmegaInputBox_Component"]`).exists()).toEqual(true);
      });

      it("input with id subregion exist and render", () => {
        wrapper = wrapper.filter("#subregion");
        expect(wrapper.exists()).toEqual(true);
        expect(wrapper.dive().find(`[data-test="TeamOmegaInputBox_Component"]`).exists()).toEqual(true);
      })

      it("input with id region exist and render", () => {
        wrapper = wrapper.filter("#region");
        expect(wrapper.exists()).toEqual(true);
        expect(wrapper.dive().find(`[data-test="TeamOmegaInputBox_Component"]`).exists()).toEqual(true);
      });

      it("input with id languages exist and render", () => {
        wrapper = wrapper.filter("#languages");
        expect(wrapper.exists()).toEqual(true);
        expect(wrapper.dive().find(`[data-test="TeamOmegaInputBox_Component"]`).exists()).toEqual(true);
      });
    })

    describe("-->form", () => {
      beforeEach(() => {
        wrapper = component.find("form");
      });

      it("--> contain and render the form tag", () => {
        expect(wrapper.exists()).toEqual(true)
      });

      it("-->submission should trigger handleSubmit Props", () => {
        wrapper.simulate('submit', e);
        expect(mockFunc).toHaveBeenCalled()
        expect(mockFunc).toHaveBeenCalledWith(component.instance().props.values);
      })
    })

  })
});
