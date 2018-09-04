'use strict';

var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var AppContainer = require("./AppContainer.bs.js");

ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, AppContainer.make(/* array */[])), "app");

ReasonReact.Router[/* push */0]("");

/*  Not a pure module */
