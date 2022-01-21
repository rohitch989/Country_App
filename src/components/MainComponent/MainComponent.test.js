import MainComponent from './index';
import { shallow } from 'enzyme';
import TeamOmegaDropDown from '../common/TeamOmegaDropDown';
import store from '../../store'
import React from 'react';
import MainArea from '../MainArea';

// const setUp = (initialState = {}) => {
//   const store = testStore(initialState);
//   return shallow(<MainComponent store={store} />).childAt(0).dive();
// };

const setUp = () => shallow(<MainComponent store={store} />).childAt(0).dive()

describe('MainApp Component', () => {

  let component, wrapper, dispatch;

  beforeEach(() => {
    dispatch = store.dispatch;
    store.dispatch = jest.fn()
    component = setUp();
  })

  afterEach(() => {
    store.dispatch = dispatch;
  })

  it('Should render without errors', () => {
    expect(component.find(`[data-test="maincomponent"]`).exists()).toEqual(true);
  });

  describe('-->instance', () => {

    beforeEach(() => {
      wrapper = component.instance();
    });

    it("-->DropDownHandlerContinent trigger dispatch", () => {
      wrapper.DropDownHandlerContinent("africa");
      expect(store.dispatch).toHaveBeenCalled()
    });

    it("-->DropDownHandlerCountries trigger dispatch", () => {
      wrapper.DropDownHandlerCountries("india");
      expect(store.dispatch).toHaveBeenCalled()
    })
  })

  describe('Child Component', () => {


    describe('DropDown', () => {
      beforeEach(() => {
        wrapper = component.find(TeamOmegaDropDown);
      });

      it("-->contain and render", () => {
        expect(wrapper.exists()).toEqual(true);
      });

      it("-->contain and render a ContinentDrowpdown", () => {
        wrapper = wrapper.filter(`[typeHeader="Continent"]`);
        expect(wrapper.exists()).toEqual(true);
        expect(wrapper.dive().find(`[data-test="TeamOmegaDropDown"]`).exists()).toEqual(true)
      });

      it("-->ContinentDrowpdown should trigger the dispatch", () => {
        wrapper = wrapper.filter(`[typeHeader="Continent"]`);
        let selected = "hjdsdk";

        // wrapper.dive().simulate('change', { target: { value: selected } });

        wrapper.props().changeSelect(selected);
        expect(store.dispatch).toHaveBeenCalled();
      })

    });

    describe('MainArea', () => {

      beforeEach(() => {
        wrapper = component.find(MainArea);
      });

      it("-->contain and render", () => {
        expect(wrapper.exists()).toEqual(true);
      });

      it("-->contain and render a MainArea Welcome", () => {
        console.log(wrapper.dive().debug())
        expect(wrapper.dive().find(`[data-text="MainArea Welcome"]`).exists()).toEqual(true)
      });

    });



  });

}) 