import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import Nav from '../components/Nav';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Nav />);
});

describe('Testing Nav component', () => {
  it('renders the navigation', () => {
    const nav = document.createElement('nav');
    ReactDOM.render(<Nav />, nav);
    ReactDOM.unmountComponentAtNode(nav);
  });

  it('should render 1 child Material-UI AppBar component', () => {
    expect(wrapper.find('AppBar')).toHaveLength(1);
  });

  it('it should match the Nav snapshot', () => {
    // If snapshot exists, compare. If not, create the snapshot.
    expect(wrapper).toMatchSnapshot();
  });
});