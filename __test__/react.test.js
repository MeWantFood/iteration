import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from '../client/components/Login';
import { BrowserRouter } from 'react-router-dom';
import { mock } from 'jest';
import Signup from '../client/components/Signup';


describe('Front-End Tests', () => {

  // ---------------------- LOGIN TESTING ----------------------

  describe('Login', () => {
    let loginRender;
    let dummyUser;

    beforeAll(() => {
      dummyUser = {
        username: 'dummyUsername',
        password: 'dummyPassword'
      };
      loginRender = render(
      <BrowserRouter>
        <Login/>
      </BrowserRouter>
      )
    });

    it('login page should not be null and render form with user and password fields', () => {
      // console.log('CONTENTS: ',loginRender);
      expect(loginRender.container).not.toBeNull
      // console.log('TEXT FROM RENDER: ',loginRender.getByPlaceholderText('Username'));
      expect(loginRender.getAllByPlaceholderText('Username')).toBeTruthy;
      // console.log('TEXT FROM RENDER: ',loginRender.getAllByPlaceholderText('Password'));
      expect(loginRender.getAllByPlaceholderText('Password')).toBeTruthy;

    });

    it('user should be able to input with username and password', () => {
      const usernameInput = loginRender.findByPlaceholderText('Username');
      const passwordInput = loginRender.findByPlaceholderText('Password');
      // console.log(loginRender);
      // console.log('username : ',usernameInput);
      usernameInput.value = dummyUser.username;
      passwordInput.value = dummyUser.password;
      expect(usernameInput.value).toBe(dummyUser.username);
      expect(passwordInput.value).toBe(dummyUser.password);
    });

    // @TODO: finish this one
    xit('if user info incorrect throw alert', () => {
      const usernameInput = loginRender.findByPlaceholderText('Username');
      const passwordInput = loginRender.findByPlaceholderText('Password');
      usernameInput.value = 'notARegisteredUsername';
      passwordInput.value = 'notARegisteredPassword';
      
      console.log(loginRender);
      
      // const submitButton = loginRender.getByText('Login');

      // submitButton.click();
      // const alertSpy = jest.spyOn(window, 'alert');
      // submitButton.click();

      // expect(alertSpy).toHaveBeenCalledWith('Wrong Username/Password');

      // alertSpy.mockRestore();
      
      
    });

    // @TODO: finish this one
    it('if user info correct window should redirect', () => {
      const usernameInput = loginRender.findByPlaceholderText('Username');
      const passwordInput = loginRender.findByPlaceholderText('Password');


      fireEvent.click(loginRender.getByText('Login'));

      // Wait for the async operations to complete
      // await loginRender.findByTestId('/home');

      // expect(loginRender.queryByTestId('home-page')).toBeInTheDocument();
      
      
    });

    // @TODO: finish this one
    xit('client sent to sign up on signup click', () => {
      
      
      
    });
  });

  // ---------------------- SIGN UP TESTING ----------------------

  describe('Signup tests', () => {
    let signupRender;
    let dummyUser;

    beforeAll(() => {
      dummyUser = {
        username: 'dummyUsername',
        password: 'dummyPassword'
      };
      signupRender = render(
      <BrowserRouter>
        <Signup/>
      </BrowserRouter>
      )
    });

    // @TODO: finish this one
    it('container is rendered on get request', () => {
      
      });
    });

  // ---------------------- DASHBOARD TESTING ----------------------

  xdescribe('Dashoard tests', () => {
    xit('', () => {
      
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
