import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../client/components/Login";
import Signup from "../client/components/Signup";
import Dashboard from "../client/components/Dashboard";

describe("Front-End Tests", () => {
  // ---------------------- LOGIN TESTING ----------------------

  describe("Login", () => {
    let loginRender;
    let dummyUser;

    beforeAll(() => {
      dummyUser = {
        username: "dummyUsername",
        password: "dummyPassword",
      };
      loginRender = render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      );
    });

    it("login page should not be null and render form with user and password fields", () => {
      // console.log('CONTENTS: ',loginRender);
      expect(loginRender.container).not.toBeNull;
      // console.log('TEXT FROM RENDER: ',loginRender.getByPlaceholderText('Username'));
      expect(loginRender.getAllByPlaceholderText("Username")).toBeTruthy;
      // console.log('TEXT FROM RENDER: ',loginRender.getAllByPlaceholderText('Password'));
      expect(loginRender.getAllByPlaceholderText("Password")).toBeTruthy;
    });

    it("user should be able to input with username and password", () => {
      const usernameInput = loginRender.findByPlaceholderText("Username");
      const passwordInput = loginRender.findByPlaceholderText("Password");
      // console.log(loginRender);
      // console.log('username : ',usernameInput);
      usernameInput.value = dummyUser.username;
      passwordInput.value = dummyUser.password;
      expect(usernameInput.value).toBe(dummyUser.username);
      expect(passwordInput.value).toBe(dummyUser.password);
    });

    xit("if user info incorrect throw alert", () => {
      const usernameInput = loginRender.findByPlaceholderText("Username");
      const passwordInput = loginRender.findByPlaceholderText("Password");
      usernameInput.value = "notARegisteredUsername";
      passwordInput.value = "notARegisteredPassword";
      // expect current dir to be /
      // const sb = grabsubmit button
      // firevent.click(sb)
      // expect current dir to be /home
    });

    xit("if user info correct window should redirect", () => {
      const usernameInput = loginRender.findByPlaceholderText("Username");
      const passwordInput = loginRender.findByPlaceholderText("Password");
    });

    xit("client sent to sign up on signup click", () => {});
  });

  // ---------------------- SIGN UP TESTING ----------------------

  describe("Signup tests", () => {
    let signupRender;
    let dummyUser;

    beforeEach(() => {
      dummyUser = {
        username: "dummyUsername",
        password: "dummyPassword",
      };
      signupRender = render(
        <BrowserRouter>
          <Signup />
        </BrowserRouter>
      );
    });

    it("container is rendered on get request // signup render should be whats on the screen", () => {
      expect(signupRender.container).not.toBeNull;
      // expect(signupRender).toEqual(screen);
      const { container, baseElement, ...signupRenderFunctions } = signupRender;
      // console.log('--------------- SIGNUP RENDER ---------------- : \n', signupRender);
      // console.log('--------------- SIGNUP RENDER FUNCTIONS ---------------- : \n', signupRenderFunctions);
      // console.log('--------------- SCREEN FUNCTIONS ---------------- : \n', screen);
      expect(signupRenderFunctions).not.toEqual(screen);
      console.log(
        "the signupRenderFunctions will defer to the screen functions (screen has a function: logTestingPlaygroundURL which signupRenderFunctions does not contain)."
      );
    });

    xit("sign up containers contains form element", () => {
      const formElement = screen.getByRole(".form");
      console.log(formElement);

      // console.log('--------------- SCREEN FUNCTIONS ---------------- : \n', screen);

      // console.log('RENDER: ', screen.findByTitle('.signup-Form'));
      // expect(screen.findByTitle('.signup-Form')).not.toBeNull;
      // const formElement = screen.getByRole('form');
      // expect(formElement).toBeInTheDocument();
    });
    it("sign up for contains user password name lastname and zip code placeholder fields", () => {
      console.log(screen.getByPlaceholderText("Enter First Name Here"));

      // expect(screen.getByPlaceholderText('Enter First Name Here')).toBeTruthy;

      // expect(screen.findAllByPlaceholderText('Enter Last Name Here')).toBeTruthy;
      // expect(screen.findAllByPlaceholderText('Enter Username Here')).toBeTruthy;
      // expect(screen.findAllByPlaceholderText('Enter Password Here')).toBeTruthy;
      // expect(screen.findAllByPlaceholderText('Enter Zip Code Here')).toBeTruthy;
    });

    it("should have a valid submit button within the form", () => {
      const submitButton = screen.findByTestId("signup-submit-button");
      console.log(submitButton);
      expect(submitButton).not.toBeNull;
    });
  });

  // ---------------------- DASHBOARD TESTING ----------------------

  describe("Dashoard tests", () => {
    let dashRender;

    beforeEach(() => {
      dashRender = render(
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      );
    });

    it("dashboard returns main", () => {
      // console.log(dashRender);
      // console.log(screen);
      const mainContainer = dashRender.getByRole("main");
      // console.log(mainContainer);
      // expect
      // console.log(mainContainer);
    });

    xit("dashboard returns Header", () => {
      console.log(dashRender);
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
