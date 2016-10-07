/*global React*/
/*global describe it*/
/*global expect*/
import CheeseTitle from "components/CheeseTitle";
import { shallow } from "enzyme";

describe("components/CheeseTitle", () => {
  it("renders without an issue", () => {
    const subject = <CheeseTitle />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

