/*global React*/
/*global describe it*/
/*global expect*/
import Cheese from "components/Cheese";
import { shallow } from "enzyme";

describe("components/Cheese", () => {
  const testCheese = {
    name : 'Cheese 1',
    image : 'image.jpg',
    desc : 'Description 1',
    rating : 10
  };

  it("renders without an issue", () => {
    const subject = <Cheese cheese={testCheese} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});
