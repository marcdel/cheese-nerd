/*global React*/
/*global describe it*/
/*global expect*/
import CheeseDescription from "components/CheeseDescription";
import { shallow } from "enzyme";

describe("components/CheeseDescription", () => {
  const testCheese = {
    name : 'Cheese 1',
    image : 'image.jpg',
    desc : 'Description 1',
    rating : 10
  };

  it("renders without an issue", () => {
    const subject = <CheeseDescription cheese={testCheese} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders a description of the cheese", () => {
    const subject = <CheeseDescription cheese={testCheese} />;
    const wrapper = shallow(subject);
    expect(wrapper.find('p').text()).to.equal("Description 1");
  });
});
