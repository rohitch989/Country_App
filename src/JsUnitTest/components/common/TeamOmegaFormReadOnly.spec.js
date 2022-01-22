import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, event, findTestByAttr, mockFunc } from '../../App.mock';
import TeamOmegaFormReadOnly from '../../../components/common/TeamOmegaFormReadOnly';
import TeamOmegaInputBox from '../../../components/common/TeamOmegaInputBox';

const setUp = (props = {}) => shallow(<TeamOmegaFormReadOnly {...props} />);


describe('Todofrom Component', () => {

  let component, wrapper, props;
  let values = { capital: "sad", subregion: "fdf", region: "dsd", population: 322, area: 323, languages: ["fd", "fdf"] };

  beforeEach(() => {
    props = { handleSubmit: mockFunc, values }
    component = setUp(props);

  })

  it('-->render', () => expect(findTestByAttr(component, 'TeamOmegaFormReadOnly').exists()).toEqual(true));

  it("-->checking proptype", () => {
    const expectedProps = {
      handleSubmit: () => { }, values: {}
    }
    const propsError = checkProps(TeamOmegaFormReadOnly, expectedProps);
    expect(propsError).toBeUndefined();
  })

  describe('-->instance Method', () => {

    beforeEach(() => wrapper = component.instance());

    // // changeHandler nothing

    it("-->handleSubmit pass the todo through props and reset the state", () => {
      wrapper.handleSubmit(event);
      expect(mockFunc.calledOnce).toEqual(true);
      expect(mockFunc.calledWith(values)).toEqual(true);
      mockFunc.resetHistory()
    });

  });

  describe('-->Child Component', () => {

    describe('-->input', () => {

      beforeEach(() => wrapper = component.find(TeamOmegaInputBox));

      it('-->contain a input', () => expect(wrapper.exists()).toEqual(true));

      it("input with id capital exist and render", () => {
        wrapper = wrapper.filter("#capital");
        expect(wrapper.exists()).toEqual(true);
        expect(findTestByAttr(wrapper.dive(), 'TeamOmegaInputBox_Component').exists()).toEqual(true);
      })

      it("input with id area exist and render", () => {
        wrapper = wrapper.filter("#area");
        expect(wrapper.exists()).toEqual(true);
        expect(findTestByAttr(wrapper.dive(), 'TeamOmegaInputBox_Component').exists()).toEqual(true);
      })

      it("input with id population exist and render", () => {
        wrapper = wrapper.filter("#population");
        expect(wrapper.exists()).toEqual(true);
        expect(findTestByAttr(wrapper.dive(), 'TeamOmegaInputBox_Component').exists()).toEqual(true);
      });

      it("input with id subregion exist and render", () => {
        wrapper = wrapper.filter("#subregion");
        expect(wrapper.exists()).toEqual(true);
        expect(findTestByAttr(wrapper.dive(), 'TeamOmegaInputBox_Component').exists()).toEqual(true);
      })

      it("input with id region exist and render", () => {
        wrapper = wrapper.filter("#region");
        expect(wrapper.exists()).toEqual(true);
        expect(findTestByAttr(wrapper.dive(), 'TeamOmegaInputBox_Component').exists()).toEqual(true);
      });

      it("input with id languages exist and render", () => {
        wrapper = wrapper.filter("#languages");
        expect(wrapper.exists()).toEqual(true);
        expect(findTestByAttr(wrapper.dive(), 'TeamOmegaInputBox_Component').exists()).toEqual(true);
      });

    })

    describe("-->form", () => {

      beforeEach(() => wrapper = component.find("form"));

      it("--> contain and render the form tag", () => expect(wrapper.exists()).toEqual(true));

      it("-->submission should trigger handleSubmit Props", () => {
        wrapper.simulate('submit', event);
        expect(mockFunc.calledOnce).toEqual(true);
        expect(mockFunc.calledWith(values)).toEqual(true);
      });

    })

  })
});
