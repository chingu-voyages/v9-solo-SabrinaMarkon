import React from 'react';
import { shallow } from 'enzyme';

// components
import NotFound from '../components/NotFound';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<NotFound />);
});

describe('Test 404 NotFound component', () => {
  it('should render a div with the container_inner class', () => {
    expect(wrapper.find('div').prop('className')).toEqual('container_inner');
  })
});