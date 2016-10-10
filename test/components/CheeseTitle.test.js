/*global React*/
/*global describe it*/
/*global expect*/
import CheeseTitle from "components/CheeseTitle";
import { shallow } from "enzyme";

describe("components/CheeseTitle", () => {
  const testCheese = {
    name : 'Cheese 1',
    image : 'image.jpg',
    desc : 'Description 1',
    rating : 10
  };

  it("renders without an issue", () => {
    const subject = <CheeseTitle cheese={testCheese} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders the title", () => {
    const subject = <CheeseTitle cheese={testCheese} />;
    const wrapper = shallow(subject);
    expect(wrapper.find('h3').text()).to.equal("Cheese 1");
  });
});
