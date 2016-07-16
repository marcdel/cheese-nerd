/*global React*/
/*global describe it*/
/*global expect*/
import { CheeseSearchApp } from "containers/CheeseSearchApp";
import { shallow } from "enzyme";

describe("containers/CheeseSearchApp", () => {
  it("renders without an issue", () => {
    const subject = <CheeseSearchApp />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

