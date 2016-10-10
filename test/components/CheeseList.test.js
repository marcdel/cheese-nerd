/*global React*/
/*global describe it*/
/*global expect*/
import CheeseList from "components/CheeseList";
import { shallow } from "enzyme";

describe("components/CheeseList", () => {
  const testCheeses = {
    cheese1 : {
      name : 'Cheese 1',
      image : 'image.jpg',
      desc : 'Description 1',
      rating : 10
    }
  };

  it("renders without an issue", () => {
    const subject = <CheeseList cheeses={testCheeses} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders cheese title with cheese prop", () => {
    const subject = <CheeseList cheeses={testCheeses} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
    expect(wrapper.find('CheeseTitle').props().cheese).to.equal(testCheeses['cheese1']);
  });

  it("renders cheese image with cheese prop", () => {
    const subject = <CheeseList cheeses={testCheeses} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
    expect(wrapper.find('CheeseImage').props().cheese).to.equal(testCheeses['cheese1']);
  });

  it("renders cheese description with cheese prop", () => {
    const subject = <CheeseList cheeses={testCheeses} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
    expect(wrapper.find('CheeseDescription').props().cheese).to.equal(testCheeses['cheese1']);
  });
});
