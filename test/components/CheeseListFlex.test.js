/*global React*/
/*global describe it*/
/*global expect*/
import CheeseListFlex from "components/CheeseListFlex";
import { shallow } from "enzyme";

describe("components/CheeseListFlex", () => {
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
      rating : 10
    }
  };

  it("renders without an issue", () => {
    const subject = <CheeseListFlex cheeses={testCheeses} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});
