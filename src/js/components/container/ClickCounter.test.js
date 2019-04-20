import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import ClickCounter from './ClickCounter';
import { wrap } from 'module';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShallowWrapper for the ClickCounter component
 * @function setup
 * @param {object} props
 * @param {object} state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = {}) => {
    const wrapper = shallow(<ClickCounter {...props} />)
    if (state) wrapper.setState(state);
    return wrapper
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}


test('renders without error', () => {
    const wrapper = setup();
    const clickContainerComponent = findByTestAttr(wrapper,'component-click-counter');
    expect(clickContainerComponent.length).toBe(1)
});

test('renders increment button', () => {
    const wrapper = setup();
    const counterIncButton = findByTestAttr(wrapper, 'button-increment-counter');
    expect(counterIncButton.length).toBe(1)
});

test('renders reset button', () => {
    const wrapper = setup();
    const counterResetButton = findByTestAttr(wrapper, 'button-reset-counter');
    expect(counterResetButton.length).toBe(1)
});

test('renders counter display', () => {
    const wrapper = setup();
    const counterTextDisplay = findByTestAttr(wrapper, 'component-text-display-counter');
    expect(counterTextDisplay.length).toBe(1)
});

test('counter starts at 0', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('count');
    expect(initialCounterState).toBe(0)
});

test('clicking button increments counter', () => {
    const testState = { count: 7 }
    const wrapper = setup(null, testState);
    
    // simulate clicking on increment button
    const counterIncButton = findByTestAttr(wrapper, 'button-increment-counter');
    counterIncButton.simulate('click');
    wrapper.update();

    // get updated display when incrementing
    const counterTextDisplay = findByTestAttr(wrapper, 'component-text-display-counter');
    expect(counterTextDisplay.text()).toContain(testState.count + 1)
});