/*global React*/
/*global describe it*/
/*global expect*/
import CheeseImage from "components/CheeseImage";
import { shallow } from "enzyme";

describe("components/CheeseImage", () => {
  it("renders without an issue", () => {
    const subject = <CheeseImage image={"file.jpg"} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders image of the cheese", () => {
    const subject = <CheeseImage image={"file.jpg"} />;
    const wrapper = shallow(subject);
    expect(wrapper.find('img').props().src).to.equal("file.jpg");
  });
});
