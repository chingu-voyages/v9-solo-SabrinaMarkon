import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import PostJob from '../components/PostJob';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PostJob />);
});

describe('Testing PostJob component', () => {
  it('should render a div with the container_inner class', () => {
    expect(wrapper.find('div').prop('className')).toEqual('container_inner');
  });
});