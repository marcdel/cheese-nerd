import Home from "components/Home";
import { shallow } from "enzyme";

describe("components/Home", () => {
    const testCheeses = {
    cheese1 : {
      name : 'Cheese 1',
      image : 'image.jpg',
      desc : 'Description 1',
      rating : 10
    }
  };

  const filter = function(){ return testCheeses; };

  it("renders without an issue", () => {
    const subject = <Home cheeses={testCheeses} topCheeseFilter={filter} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});
