import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import Signup from '../components/Signup';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Signup />);
});

describe('Testing Signup component', () => {
  it('should render a div with the container_inner class', () => {
    expect(wrapper.find('div').prop('className')).toEqual('container_inner');
  });
});