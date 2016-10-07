/*global React*/
/*global describe it*/
/*global expect*/
import CheeseTitle from "components/CheeseTitle";
import { shallow } from "enzyme";

describe("components/CheeseTitle", () => {
  it("renders without an issue", () => {
    const subject = <CheeseTitle title={"Cheese 1"} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders the title", () => {
    const subject = <CheeseTitle title={"Cheese 1"} />;
    const wrapper = shallow(subject);
    expect(wrapper.find('h3').text()).to.equal("Cheese 1");
  });
});
