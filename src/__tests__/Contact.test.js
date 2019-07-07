import React from 'react';
import { shallow } from 'enzyme';

// components
import Contact from '../components/Contact';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Contact />);
});

describe('Testing Contact component', () => {
  it('should render a div with the container_inner class', () => {
    expect(wrapper.find('#section4').exists()).to.equal(true);
  });
});