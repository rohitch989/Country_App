import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import TeamOmegaHeader from '../components/common/TeamOmegaHeader';
import MainComponent from '../components/MainComponent';

const setUp = shallow(<App />);

describe('App Component', () => {
  let component, wrapper;
  beforeAll(() => {
    component = setUp;
  });

  describe('Render', () => {

    it("Should render without errors", () => {
      let wrapper = component.find(`[data-test="App_Component"]`);
      expect(wrapper.length).toBe(1);
    });

  });


  describe('Child Component', () => {

    describe('Header', () => {
      beforeEach(() => {
        wrapper = component.find(TeamOmegaHeader);
      });

      it('APP should contain Header', () => {
        expect(wrapper.exists()).toEqual(true);
      });

      it("Should render without Errors", () => {
        expect(wrapper.dive().find(`[data-test="TeamOmegaHeader_component"]`).length).toBe(1);
      })
      it('Should render the same type as passed', () => {
        expect(wrapper.dive().type()).toEqual(wrapper.props().type);
      })
      it('Should render the same text as passed', () => {
        expect(wrapper.dive().text()).toEqual(wrapper.props().text);
      })

    });
    describe('Main Component', () => {
      beforeEach(() => {
        wrapper = component.find(MainComponent)

      })
      it('APP should contain TodoList', () => {
        expect(wrapper.exists()).toEqual(true);
      });
    });
  })
});




