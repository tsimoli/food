'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Foods = require("./Foods.bs.js");
var React = require("react");
var NotFound = require("./NotFound.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

require("../css/customstyles.scss");

function reducer(action, _) {
  return /* Update */Block.__(0, [/* record */[/* route */action[0]]]);
}

function mapUrlToRoute(url) {
  var match = url[/* path */0];
  if (match) {
    return /* NotFound */1;
  } else {
    return /* Search */0;
  }
}

var component = ReasonReact.reducerComponent("App");

function make() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (self) {
              var watcherID = ReasonReact.Router[/* watchUrl */1]((function (url) {
                      return Curry._1(self[/* send */3], /* ChangeRoute */[mapUrlToRoute(url)]);
                    }));
              return Curry._1(self[/* onUnmount */4], (function () {
                            return ReasonReact.Router[/* unwatchUrl */2](watcherID);
                          }));
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var match = self[/* state */1][/* route */0];
              return React.createElement("div", {
                          className: "section"
                        }, React.createElement("div", {
                              className: "container has-text-centered"
                            }, React.createElement("h1", {
                                  className: "title"
                                }, "Mitä syödä?"), match ? ReasonReact.element(undefined, undefined, NotFound.make(/* array */[])) : ReasonReact.element(undefined, undefined, Foods.make(/* array */[]))));
            }),
          /* initialState */(function () {
              return /* record */[/* route : Search */0];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */reducer,
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.reducer = reducer;
exports.mapUrlToRoute = mapUrlToRoute;
exports.component = component;
exports.make = make;
/*  Not a pure module */
