import React from "react";
import { shallow } from "enzyme";
import MainArea from './index';
import TeamOmegaHeader from "../common/TeamOmegaHeader";
import TeamOmegaFormReadOnly from "../common/TeamOmegaFormReadOnly";

const setUp = (props = {}) => shallow(<MainArea {...props} />);


describe('MainArea', () => {
  let component, wrapper;


  describe('-->display welcome', () => {
    let jsAlert = window.alert;
    beforeEach(() => {
      window.alert = jest.fn();
      let props;
      component = setUp(props);
    })

    afterEach(() => {
      window.alert = jsAlert;
    })

    it("-->render mainArea welcome", () => {
      expect(component.find(`[data-text="MainArea Welcome"]`).exists()).toEqual(true);
    });

    it("-->not render mainArea form", () => {
      expect(component.find(`[data-text="MainArea Form"]`).exists()).toEqual(false);
    });
    it("-->render a article tag", () => {
      expect(component.find(`article`).exists()).toEqual(true);
    })
    it("call alert ", () => {
      expect(window.alert).toHaveBeenCalled()
    })
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


  });

  describe('-->display a MainArea Form', () => {
    let props = {
      countryDetail: { nativeName: "rerff", flag: "32324", name: "erer" }
    }
    beforeEach(() => {
      component = setUp(props);
    })

    it("-->render MainArea Form", () => {
      expect(component.find(`[data-text="MainArea Form"]`).exists()).toEqual(true);
    });

    it("-->not render MainArea Form", () => {
      expect(component.find(`[data-text="MainArea Welcome"]`).exists()).toEqual(false);
    });
    it("-->render a article tag", () => {
      expect(component.find(`article`).exists()).toEqual(true);
    })

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

      describe('TeamOmegaFormReadOnly', () => {
        beforeEach(() => {
          wrapper = component.find(TeamOmegaFormReadOnly)

        })
        it('APP should contain TeamOmegaFormReadOnly', () => {
          expect(wrapper.exists()).toEqual(true);
        });

        it('-->take countryDetals props to its props to display', () => {
          expect(component.instance().props.countryDetail).toEqual(wrapper.dive().instance().props.values);
        });

        // handlesubmit is dummy
      });
    })
  })
});
