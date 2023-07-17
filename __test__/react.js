const path = require('path');
// const app = require(path.resolve(__dirname, './server/server.js'));
// const Signup = require('./../client/components/Signup.jsx');
// import { Provider } from 'react-redux';
// import userEvent from '@testing-library/user-event';
// import regeneratorRuntime from 'regenerator-runtime';
// import App from '../client/components/App';
// import App from '../client/components/Card';

import React from 'react';
// import { render } from '@testing-library/react';
import Signup from '../client/components/Signup';
import Login from '../client/components/Login';

describe('testing react stuffs', () => {
  describe('Signup', () => {
    let text;
    let otherText;
    beforeAll(() => {
      text = render(<Signup />);
      otherText = render(<Login />);
    });
    test('testing Signup button functionality to redirect to /', () => {
      const testingVar = text.goBack();
      console.log(testingVar);
      expect(testingVar).toEqual(otherText);
    });
  });
});
