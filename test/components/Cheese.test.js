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

  it("renders the image", () => {
    const subject = <Cheese cheese={testCheese} />;
    const wrapper = shallow(subject);
    expect(wrapper.find('img').props().src).to.equal(testCheese.image);
  });

  it("renders the cheese name", () => {
    const subject = <Cheese cheese={testCheese} />;
    const wrapper = shallow(subject);
    expect(wrapper.find('CheeseTitle').props().title).to.equal(testCheese.name);
  });

  it("renders the cheese description", () => {
    const subject = <Cheese cheese={testCheese} />;
    const wrapper = shallow(subject);
    expect(wrapper.find('p').text()).to.equal(testCheese.desc);
  });
});
