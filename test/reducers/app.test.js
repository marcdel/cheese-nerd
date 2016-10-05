/*global describe it*/
/*global expect*/
import reducer from "reducers/app";

describe("reducers/app", () => {
  it("returns the initial state", () => {
    const state = void 0;
    expect(
      reducer(state, {})
    ).to.deep.equal({
      cheeses: require('../../src/sample-cheeses')
    });
  });
});
