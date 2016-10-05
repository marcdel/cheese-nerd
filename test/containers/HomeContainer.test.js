/*global React*/
/*global describe it*/
/*global expect*/
import { HomeContainer } from "containers/HomeContainer";
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

  it("renders the top 4 cheeses by rating", () => {
    const subject = <HomeContainer />;
    const wrapper = shallow(subject);
    const expectedCheeses = ['cheese1', 'cheese2', 'cheese3', 'cheese4'];
    wrapper.setState({ cheeses: testCheeses });

    var cheeses = Object.keys(wrapper.find('Home').prop('cheeses'));
    cheeses.map(function(key){
      expect(cheeses[key]).to.equal(expectedCheeses[key]);
    });
  });
});
