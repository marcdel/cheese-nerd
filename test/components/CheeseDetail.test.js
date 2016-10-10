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
    const subject = <CheeseDetail />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders cheese title with cheese prop", () => {
    const subject = <CheeseDetail cheese={testCheese} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
    expect(wrapper.find('CheeseTitle').props().cheese).to.equal(testCheese);
  });

  it("renders cheese image with cheese prop", () => {
    const subject = <CheeseDetail cheese={testCheese} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
    expect(wrapper.find('CheeseImage').props().cheese).to.equal(testCheese);
  });

  it("renders cheese description with cheese prop", () => {
    const subject = <CheeseDetail cheese={testCheese} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
    expect(wrapper.find('CheeseDescription').props().cheese).to.equal(testCheese);
  });
});
