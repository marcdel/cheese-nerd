/*global React*/
/*global describe it*/
/*global expect*/
import { HomeContainer, topCheeseFilter } from "containers/HomeContainer";
import { shallow } from "enzyme";

describe("containers/HomeContainer", () => {
  const testCheeses = {
    cheese1 : {
      name : 'Cheese 1',
      image : 'image.jpg',
      desc : 'Description 1',
      rating : 10
    },
    cheese4 : {
      name : 'Cheese 4',
      image : 'image.jpg',
      desc : 'Description 4',
      rating : 8
    },
    cheese6 : {
      name : 'Cheese 6',
      image : 'image.jpg',
      desc : 'Description 6',
      rating : 5
    },
    cheese3 : {
      name : 'Cheese 3',
      image : 'image.jpg',
      desc : 'Description 3',
      rating : 9
    },
    cheese5 : {
      name : 'Cheese 5',
      image : 'image.jpg',
      desc : 'Description 5',
      rating : 7
    },
    cheese2 : {
      name : 'Cheese 2',
      image : 'image.jpg',
      desc : 'Description 2',
      rating : 10
    },
  };

  it("renders without an issue", () => {
    const subject = <HomeContainer />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders the page title", () => {
    const subject = <HomeContainer />;
    const wrapper = shallow(subject);
    expect(wrapper.find('HelmetWrapper').props().title).to.equal("Home");
  });

  it("renders Home with cheeses", () => {
    const subject = <HomeContainer cheeses={testCheeses} />;
    const wrapper = shallow(subject);
    expect(wrapper.find('Home').props().cheeses).to.equal(testCheeses);
  });

  it("top cheese filter sorts by rating and returns top 4", () => {
    const filteredCheeses = topCheeseFilter(testCheeses);
    const expectedCheeses = ['cheese1', 'cheese2', 'cheese3', 'cheese4'];

    expect(Object.keys(filteredCheeses)).to.deep.equal(expectedCheeses);
  });
});
