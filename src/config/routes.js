/* @flow */
import React from "react";
import { Route, IndexRoute } from "react-router";
import { ROUTE_NAME_404_NOT_FOUND } from "gluestick-shared";

import App from "containers/App";
import HomeContainer from "containers/HomeContainer";
import NoMatchApp from "containers/NoMatchApp";

export default function routes (/*store:Object*/) {
  return (
    <Route name="app" component={App} path="/">
      <IndexRoute name="home" component={HomeContainer} />
      <Route name={ROUTE_NAME_404_NOT_FOUND} path="*" component={NoMatchApp}/>
    </Route>
  );
}
