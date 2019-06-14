import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import App from '../containers/App';

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




});