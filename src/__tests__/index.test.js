import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import App from '../containers/App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('Testing index.js App rendering', () => {
  it('should render an App component.', () => {
    const app = document.createElement('App');
    ReactDOM.render(wrapper, app);
    ReactDOM.unmountComponentAtNode(app);
  });


});