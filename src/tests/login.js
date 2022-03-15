import { ReactSelector, waitForReact } from "testcafe-react-selectors";
const json = require("../data/data.json");

fixture`Login tests`
  .page("http://localhost:3000/login")
  .beforeEach(async () => {
    await waitForReact(5000);
  });

const usernameField = ReactSelector("InputLogin").withProps({
  name: "username",
});
const passwordField = ReactSelector("InputLogin").withProps({
  name: "password",
});
const submitButton = ReactSelector("button");

const usernameInput = usernameField.find("input");
const passwordInput = passwordField.find("input");

const fakeUsername = "Helmy";
const fakePassword = "123456";
const errorUsernameText = "username is Empty ! please fill the blank";
const errorPasswordText = "password is Empty ! please fill the blank";

test("input Fields exists", async (t) => {
  await t.expect(usernameField.exists).ok();
  await t.expect(passwordField.exists).ok();
});

test("No input provided", async (t) => {
  await t
    .click(submitButton)
    .expect(usernameField.find(".login__input--error").exists)
    .ok()
    .expect(usernameField.find(".login__input--error h6").innerText)
    .contains(errorUsernameText)
    .expect(passwordField.find(".login__input--error").exists)
    .ok()
    .expect(passwordField.find(".login__input--error h6").innerText)
    .contains(errorPasswordText);
});

test("No password provided", async (t) => {
  await t.typeText(usernameInput, fakeUsername);
  await t.expect(usernameInput.value).eql(fakeUsername);
  await t
    .click(submitButton)
    .expect(passwordField.find(".login__input--error").exists)
    .ok()
    .expect(passwordField.find(".login__input--error h6").innerText)
    .contains(errorPasswordText);
});

test("No username provided", async (t) => {
  await t.typeText(passwordInput, fakePassword);
  await t.expect(passwordInput.value).eql(fakePassword);
  await t
    .click(submitButton)
    .expect(usernameField.find(".login__input--error").exists)
    .ok()
    .expect(usernameField.find(".login__input--error h6").innerText)
    .contains(errorUsernameText);
});
