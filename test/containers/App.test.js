import { App } from "containers/App";
import { shallow } from "enzyme";

describe("containers/App", () => {
  it("renders without an issue", () => {
    const subject = <App />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});
