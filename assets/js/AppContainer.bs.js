'use strict';

var Week = require("./Week.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Search = require("./Search.bs.js");
var NotFound = require("./NotFound.bs.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var WeekDetails = require("./WeekDetails.bs.js");

require("../css/customstyles.scss");

function reducer(action, _) {
  return /* Update */Block.__(0, [/* record */[/* route */action[0]]]);
}

function mapUrlToRoute(url) {
  var match = url[/* path */0];
  if (match) {
    if (match[0] === "week") {
      var match$1 = match[1];
      if (match$1) {
        if (match$1[1]) {
          return /* NotFound */2;
        } else {
          return /* WeekDetails */[Caml_format.caml_int_of_string(match$1[0])];
        }
      } else {
        return /* Week */1;
      }
    } else {
      return /* NotFound */2;
    }
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
              var tmp;
              if (typeof match === "number") {
                switch (match) {
                  case 0 : 
                      tmp = ReasonReact.element(undefined, undefined, Search.make(/* array */[]));
                      break;
                  case 1 : 
                      tmp = ReasonReact.element(undefined, undefined, Week.make(/* array */[]));
                      break;
                  case 2 : 
                      tmp = ReasonReact.element(undefined, undefined, NotFound.make(/* array */[]));
                      break;
                  
                }
              } else {
                tmp = ReasonReact.element(undefined, undefined, WeekDetails.make(match[0], /* array */[]));
              }
              return React.createElement("div", {
                          className: "section"
                        }, React.createElement("div", {
                              className: "container has-text-centered"
                            }, React.createElement("h1", {
                                  className: "title"
                                }, "Mitä syödä?"), tmp));
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
