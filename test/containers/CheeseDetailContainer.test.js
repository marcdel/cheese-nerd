/*global React*/
/*global describe it*/
/*global expect*/
import { CheeseDetailContainer } from "containers/CheeseDetailContainer";
import { shallow } from "enzyme";

describe("containers/CheeseDetailContainer", () => {
  const cheese = {
    name : 'Cheese 1',
    image : 'image.jpg',
    desc : 'Description 1',
    rating : 10
  };

  it("renders without an issue", () => {
    const subject = <CheeseDetailContainer cheese={cheese} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });

  it("renders CheeseDetail without an issue", () => {
    const subject = <CheeseDetailContainer cheese={cheese} />;
    const wrapper = shallow(subject);
    expect(wrapper.find('CheeseDetail')).to.have.length(1);
  });

  it("renders CheeseDetail with selected cheese", () => {
    const subject = <CheeseDetailContainer cheese={cheese} />;
    const wrapper = shallow(subject);
    expect(wrapper.find('CheeseDetail').props().cheese).to.equal(cheese);
  });

  it("renders the cheese name as the title", () => {
    const subject = <CheeseDetailContainer cheese={cheese} />;
    const wrapper = shallow(subject);
    expect(wrapper.find('HelmetWrapper').props().title).to.equal(cheese.name);
  });
});
