/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { _saveQuestion, _saveQuestionAnswer } from "./data/_DATA";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import store from "./store";

test("login", () => {
  const component = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  const heading = component.getByTestId("login-heading");
  expect(heading).toBeInTheDocument();
});
test("should return true for savequestion", async () => {
  const response = await _saveQuestion({
    optionOneText: "hihi",
    optionTwoText: "tesr",
    author: "tylermcginnis",
  }).catch((e) => e);
  expect(response).toBeTruthy();
});
test("should return true for correct parameters", async () => {
  const response = await _saveQuestionAnswer({
    authedUser: "sarahedo",
    qid: "8xf0y6ziyjabvozdd253nd",
    answer: "optionOne",
  });

  expect(response).toBeTruthy();
});

test("should return error for false parameters", async () => {
  const response = await _saveQuestionAnswer({
    authedUser: "sarahedo",
    qid: undefined,
    answer: "optionOne",
  }).catch((e) => e);

  expect(response).toBe("Please provide authedUser, qid, and answer");
});
test("should return error for savequestion", async () => {
  const response = await _saveQuestion({
    optionOneText: "hihi",
    author: "sarahedo",
  }).catch((e) => e);

  expect(response).toBe(
    "Please provide optionOneText, optionTwoText, and author"
  );
});
it("should render the component", () => {
  const component = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  expect(component).toBeDefined();
  expect(component).toMatchSnapshot();
});
it("should render the component login", () => {
  const component = render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );
  expect(component).toBeDefined();
  expect(component).toMatchSnapshot();
});
it("should render the component notfound", () => {
  const component = render(
    <Provider store={store}>
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    </Provider>
  );
  expect(component).toBeDefined();
  expect(component).toMatchSnapshot();
});
it("should change username", async () => {
  const wrapper = render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );
  const usernameInputElement = wrapper.getByTestId("username");
  fireEvent.change(usernameInputElement, { target: { value: "sarahedo" } });
  expect(usernameInputElement.value).toBe("sarahedo");
});
it("should change password", async () => {
  const wrapper = render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );
  const usernameInputElement = wrapper.getByTestId("password");
  fireEvent.change(usernameInputElement, {
    target: { value: "wrongpassword" },
  });
  expect(usernameInputElement.value).toBe("wrongpassword");
});
