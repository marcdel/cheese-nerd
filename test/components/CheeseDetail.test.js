/*global React*/
/*global describe it*/
/*global expect*/
import CheeseDetail from "components/CheeseDetail";
import { shallow } from "enzyme";

describe("components/CheeseDetail", () => {
  const testCheese =  {
    name : 'Cheese 1',
    image : 'image.jpg',
    desc : 'Description 1',
    rating : 10
  };

  it("renders without an issue", () => {
    const subject = <CheeseDetail cheese={testCheese} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders cheese image", () => {
    const subject = <CheeseDetail cheese={testCheese} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
    expect(wrapper.find('img').props().src).to.equal(testCheese.image);
  });
});
