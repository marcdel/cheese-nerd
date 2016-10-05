/*global React*/
/*global describe it*/
/*global expect*/
import CheeseDetail from "components/CheeseDetail";
import { shallow } from "enzyme";

describe("components/CheeseDetail", () => {
  it("renders without an issue", () => {
    const subject = <CheeseDetail />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

