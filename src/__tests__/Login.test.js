import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import Login from '../components/Login';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Login />);
});

describe('Testing Login component', () => {
  it('should render a div with the container_inner class', () => {
    expect(wrapper.find('div').prop('className')).toEqual('container_inner');
  });
});