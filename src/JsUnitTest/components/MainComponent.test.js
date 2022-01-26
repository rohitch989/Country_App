import React from 'react';
import Sinon from 'sinon';
import { shallow } from 'enzyme';
import { findTestByAttr, event } from '../App.mock'
import MainComponent from '../../components/MainComponent';
import TeamOmegaDropDown from '../../components/common/TeamOmegaDropDown';
import store from '../../store'
import MainArea from '../../components/MainArea';




const setUp = () => shallow(<MainComponent store={store} />).childAt(0).dive()

describe('MainApp Component', () => {

  let component, wrapper, dispatch;

  beforeEach(() => {
    dispatch = store.dispatch, store.dispatch = Sinon.spy()
    component = setUp();
  })

  afterEach(() => store.dispatch = dispatch)

  it('Should render without errors', () => expect(findTestByAttr(component, 'maincomponent').exists()).toEqual(true));

  describe('-->instance', () => {

    beforeEach(() => wrapper = component.instance());

    it("-->DropDownHandlerContinent trigger dispatch", () => {

      wrapper.DropDownHandlerContinent("africa");
      expect(store.dispatch.calledOnce).toEqual(true);
      store.dispatch.resetHistory()
    });

    it("-->DropDownHandlerCountries trigger dispatch", () => {
      wrapper.DropDownHandlerCountries("india");
      expect(store.dispatch.calledOnce).toEqual(true);
      store.dispatch.resetHistory()
    })

  })

  describe('Child Component', () => {


    describe('DropDown', () => {

      beforeEach(() => wrapper = component.find(TeamOmegaDropDown));

      it("-->contain and render", () => expect(wrapper.exists()).toEqual(true));

      it("-->contain and render a ContinentDrowpdown", () => {
        wrapper = wrapper.filter(`[typeHeader="Continent"]`);
        expect(wrapper.exists()).toEqual(true);
        expect(findTestByAttr(wrapper.dive(), 'TeamOmegaDropDown').exists()).toEqual(true)
      });

      it("-->ContinentDrowpdown should trigger the dispatch", () => {
        wrapper = wrapper.filter(`[typeHeader="Continent"]`);
        wrapper.dive().find("select").simulate('change', event);
        expect(store.dispatch.calledOnce).toEqual(true);
        store.dispatch.resetHistory()
      })

    });

    describe('MainArea', () => {

      beforeEach(() => wrapper = component.find(MainArea));

      it("-->contain and render", () => expect(wrapper.exists()).toEqual(true));

      it("-->contain and render a MainArea Welcome", () => expect(findTestByAttr(wrapper.dive(), 'MainArea Welcome').exists()).toEqual(true));

    });



  });

}) 