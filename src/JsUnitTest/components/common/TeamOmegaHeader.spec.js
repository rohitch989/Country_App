import React from 'react';
import { shallow } from 'enzyme';

import TeamOmegaHeader from '../../../components/common/TeamOmegaHeader';
import { checkProps, findTestByAttr } from '../../App.mock';

const setUp = (props = {}) => shallow(<TeamOmegaHeader {...props} />);

describe('TeamOmegaHeader Component', () => {

  let component, wrapper, props, type, text;



  describe(`-->type h6`, () => {
    text = "welcoe";
    type = "h6"
    beforeEach(() => {
      props = { type, text };
      component = setUp(props);
    });

    it('-->render', () => expect(findTestByAttr(component, 'TeamOmegaHeader_component').exists()).toEqual(true));

    describe(`-->Child Component-->${type} html tag`, () => {

      beforeEach(() => wrapper = component.find(`${type}`));

      it(`-->contain a ${type} header`, () => expect(wrapper.exists()).toEqual(true));

      it("-->pass the input through props", () => {
        let ComponentPropVal = component.instance().props.text;
        let valuePassed = wrapper.text().trim();
        expect(ComponentPropVal).toEqual(valuePassed);
      });

    });
  });


  describe(`-->type h1`, () => {
    text = "welcome";
    type = "h1"
    beforeEach(() => {
      props = { type, text };
      component = setUp(props);
    });

    it('-->render', () => expect(findTestByAttr(component, 'TeamOmegaHeader_component').exists()).toEqual(true));

    describe(`-->Child Component-->${type} html tag`, () => {

      beforeEach(() => wrapper = component.find(`${type}`));

      it(`-->contain a ${type} header`, () => expect(wrapper.exists()).toEqual(true));

      it("-->pass the input through props", () => {
        let ComponentPropVal = component.instance().props.text;
        let valuePassed = wrapper.text().trim();
        expect(ComponentPropVal).toEqual(valuePassed);
      });

    });
  });

  describe(`-->type h2`, () => {
    text = "welcome";
    type = "h2"
    beforeEach(() => {
      props = { type, text };
      component = setUp(props);
    });

    it('-->render', () => expect(findTestByAttr(component, 'TeamOmegaHeader_component').exists()).toEqual(true));

    describe(`-->Child Component-->${type} html tag`, () => {

      beforeEach(() => wrapper = component.find(`${type}`));

      it(`-->contain a ${type} header`, () => expect(wrapper.exists()).toEqual(true));

      it("-->pass the input through props", () => {
        let ComponentPropVal = component.instance().props.text;
        let valuePassed = wrapper.text().trim();
        expect(ComponentPropVal).toEqual(valuePassed);
      });

    });
  });



});