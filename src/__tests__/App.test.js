import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import App from '../containers/App';
import Nav from '../components/Nav';
import Header from '../components/Header';

import Footer from '../components/Footer';

function setup() {
  const wrapper = shallow(<App />);
  //return { wrapper, props }
  return wrapper;
}

describe('Testing main App component', () => {
  it('should render a React Fragment in the App component.', () => {
    const fragment = document.createElement('Fragment');
    ReactDOM.render(<App />, fragment);
    ReactDOM.unmountComponentAtNode(fragment);
  });

  it('should render a child Nav component', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a child Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  }); 

  
  it('should render a child Footer component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('it should match the App snapshot', () => {
    const wrapper = setup();
    // If snapshot exists, compare. If not, create the snapshot.
    expect(wrapper).toMatchSnapshot();
  });

});