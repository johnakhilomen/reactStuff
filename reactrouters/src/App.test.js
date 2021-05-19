import React from "react";
import App from "./App";
import { shallow } from "enzyme";

//App
it("renders APP component without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
