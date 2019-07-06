import React from 'react';
import { shallow } from 'enzyme';

// components
import Benefits from '../components/Benefits';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Benefits />);
});

describe('Testing Benefits component', () => {
  it('should render a div with the container_inner class', () => {
    expect(wrapper.find('div').prop('id')).toEqual('section2');
  });
});