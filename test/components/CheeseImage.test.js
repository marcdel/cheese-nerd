/*global React*/
/*global describe it*/
/*global expect*/
import CheeseImage from "components/CheeseImage";
import { shallow } from "enzyme";

describe("components/CheeseImage", () => {
  const testCheese = {
    name : 'Cheese 1',
    image : 'image.jpg',
    desc : 'Description 1',
    rating : 10
  };

  it("renders without an issue", () => {
    const subject = <CheeseImage cheese={testCheese} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders image of the cheese", () => {
    const subject = <CheeseImage cheese={testCheese} />;
    const wrapper = shallow(subject);
    expect(wrapper.find('img').props().src).to.equal("image.jpg");
  });
});
