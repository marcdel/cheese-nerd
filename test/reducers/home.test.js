/*global describe it*/
/*global expect*/
import reducer from "reducers/home";

describe("reducers/home", () => {
  it("returns the initial state", () => {
    const state = void 0;
    expect(
      reducer(state, {})
    ).to.equal(null);
  });
});
