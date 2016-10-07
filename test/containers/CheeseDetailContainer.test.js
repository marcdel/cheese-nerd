/*global React*/
/*global describe it*/
/*global expect*/
import { CheeseDetailContainer } from "containers/CheeseDetailContainer";
import { shallow } from "enzyme";

describe("containers/CheeseDetailContainer", () => {
  it("renders without an issue", () => {
    const subject = <CheeseDetailContainer />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders CheeseDetail without an issue", () => {
    const subject = <CheeseDetailContainer />;
    const wrapper = shallow(subject);
    expect(wrapper.find('CheeseDetail')).to.have.length(1);
  });
});
