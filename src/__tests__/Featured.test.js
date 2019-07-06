import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import Featured from '../components/Featured';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Featured />);
});

describe('Testing Featured component', () => {
  it('should render a div with the container_inner class', () => {
    expect(wrapper.find('div').prop('className')).toEqual('container_inner');
  });
});