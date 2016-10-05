/*global React*/
/*global describe it*/
/*global expect*/
import { CheeseListContainer } from "containers/CheeseListContainer";
import { shallow } from "enzyme";

describe("containers/CheeseListContainer", () => {
  it("renders without an issue", () => {
    const subject = <CheeseListContainer />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

