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
    },
    cheese2 : {
      name : 'Cheese 2',
      image : 'image.jpg',
      desc : 'Description 2',
      rating : 8
    }
  };

  it("renders without an issue", () => {
    const subject = <CheeseList cheeses={testCheeses} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders cheeses", () => {
    const subject = <CheeseList cheeses={testCheeses} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
    expect(wrapper.find('Cheese')).to.have.length(2);
  });
});
