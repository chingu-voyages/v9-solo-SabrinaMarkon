import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import Footer from '../components/Footer';

function setup() {
  const wrapper = shallow(<Footer />);
  return wrapper;
}

describe('Testing footer component', () => {
  it('renders the footer', () => {
    const footer = document.createElement('footer');
    ReactDOM.render(<Footer />, footer);
    ReactDOM.unmountComponentAtNode(footer);
  });
});