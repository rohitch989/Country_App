import checkPropTypes from "check-prop-types";
import Sinon from "sinon";

export const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

export let event = { target: { value: "hello" }, preventDefault: () => { } };

export let mockFunc = Sinon.spy()

export const findTestByAttr = (component, attr) => component.find(`[data-test='${attr}']`);