/*global React*/
/*global describe it*/
/*global expect*/
import CheeseSearch from "components/CheeseSearch";
import { shallow } from "enzyme";

describe("components/CheeseSearch", () => {
  it("renders without an issue", () => {
    const subject = <CheeseSearch searchText="" onChange={function(){}} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});
