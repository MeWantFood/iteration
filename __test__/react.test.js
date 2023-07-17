// const path = require('path');
// const app = require(path.resolve(__dirname, './server/server.js'));
import React from 'react';
import { render } from '@testing-library/react';
// import Signup from '../client/components/Signup';
import Login from '../client/components/Login';
import { BrowserRouter } from 'react-router-dom';
import App from '../client/components/App';
import Signup from './../client/components/Signup.jsx';
// import TestDiv from '../client/components/TestDiv';
// const Signup = require('./../client/components/Signup.jsx');
// import { Provider } from 'react-redux';
// import userEvent from '@testing-library/user-event';
// import regeneratorRuntime from 'regenerator-runtime';
// import App from '../client/components/Card';

describe('testing react stuffs', () => {
  describe('Login', () => {
    test('testing Zip-code input is equal to restaurant ', () => {
      const bRouterWrappedLogin = render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      );
      console.log(bRouterWrappedLogin);
      expect(bRouterWrappedLogin).not.toBeNull
    });
  });
});

// describe('testDiv test', () => {
//   // beforeAll(() => {

//   // });
//   test('testingDiv', () => {
//     const testDivVar = render(<TestDiv />);
//     expect(testDivVar).not.toBeNull;
//   });
// });
