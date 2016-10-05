/*global React*/
/*global describe it*/
/*global expect*/
import { HomeContainer } from "containers/HomeContainer";
import { shallow } from "enzyme";

describe("containers/HomeContainer", () => {
  it("renders without an issue", () => {
    const subject = <HomeContainer />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

