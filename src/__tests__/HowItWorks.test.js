import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import HowItWorks from '../components/HowItWorks';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<HowItWorks />);
});

describe('Testing HowItWorks component', () => {
  it('should render a div with the container_inner class', () => {
    expect(wrapper.find('div').prop('className')).toEqual('container_inner');
  });
});