import React from 'react';
import { shallow } from 'enzyme';

// components
import MainPageContent from '../containers/MainPageContent';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<MainPageContent />);
});

describe('Testing MainPageContent component', () => {
  it('should render a div with the container_inner class', () => {
    expect(wrapper.find('div').prop('className')).toEqual('container_inner');
  });
});