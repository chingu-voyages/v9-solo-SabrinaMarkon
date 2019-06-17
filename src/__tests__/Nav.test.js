import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

// components
import Nav from '../containers/Nav';

let wrapper;

beforeEach(() => {
  wrapper = mount(<MemoryRouter><Nav /></MemoryRouter>);
});

describe('Testing Nav component', () => {
  it('renders the navigation menu', () => {
    const nav = document.createElement('nav');
    ReactDOM.render(wrapper, nav);
    ReactDOM.unmountComponentAtNode(nav);
  });

  describe('Test the NavLinks in the navigation menu', () => {
    it('should render 5 NavLink elements', () => {
      expect(wrapper.find('NavLink')).toHaveLength(5);
    });

    it('includes a NavLink to the Home page', function() {
      expect(wrapper.find('NavLink').at(0).prop('to')).toEqual('/');
    });

    it('includes a NavLink to the How It Works page', function() {
      expect(wrapper.find('NavLink').at(1).prop('to')).toEqual('/howitworks');
    });

    it('includes a NavLink to the Signup page', function() {
      expect(wrapper.find('NavLink').at(2).prop('to')).toEqual('/signup');
    });

    it('includes a NavLink to the Login page', function() {
      expect(wrapper.find('NavLink').at(3).prop('to')).toEqual('/login');
    });

    it('includes a NavLink to the Post a Job page', function() {
      expect(wrapper.find('NavLink').at(4).prop('to')).toEqual('/postjob');
    });
  });

  it('it should match the Nav snapshot', () => {
    // If snapshot exists, compare. If not, create the snapshot.
    expect(wrapper).toMatchSnapshot();
  });

});