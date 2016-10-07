/*global React*/
/*global describe it*/
/*global expect*/
import CheeseDescription from "components/CheeseDescription";
import { shallow } from "enzyme";

describe("components/CheeseDescription", () => {
  it("renders without an issue", () => {
    const subject = <CheeseDescription />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders a description of the cheese", () => {
    const subject = <CheeseDescription desc={"Cheese description"} />;
    const wrapper = shallow(subject);
    expect(wrapper.find('p').text()).to.equal("Cheese description");
  });
});
