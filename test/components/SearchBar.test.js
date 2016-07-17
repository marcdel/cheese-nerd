/*global React*/
/*global describe it*/
/*global expect*/
import SearchBar from "components/SearchBar";
import { shallow } from "enzyme";

describe("components/SearchBar", () => {
  it("renders without an issue", () => {
    const subject = <SearchBar searchText="" onChange={function(){}} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});
