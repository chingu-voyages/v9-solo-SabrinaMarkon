import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import Header from '../components/Header';

function setup() {
  const wrapper = shallow(<Header />);
  return wrapper;
}

describe('Testing Header component', () => {
  it('renders the header', () => {
    const header = document.createElement('header');
    ReactDOM.render(<Header />, header);
    ReactDOM.unmountComponentAtNode(header);
  });
});