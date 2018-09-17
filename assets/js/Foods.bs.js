'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var FilterGroup = require("./FilterGroup.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var FoodItemList = require("./FoodItemList.bs.js");

var component = ReasonReact.reducerComponent("Foods");

function make() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement("div", undefined, React.createElement("div", undefined, ReasonReact.element(undefined, undefined, FilterGroup.make(self[/* state */1][/* activeFilters */0], (function (filterName) {
                                        return Curry._1(self[/* send */3], /* AddOrRemoveFilter */[filterName]);
                                      }), /* array */[])), ReasonReact.element(undefined, undefined, FoodItemList.make(self[/* state */1][/* activeFilters */0], /* array */[]))));
            }),
          /* initialState */(function () {
              return /* record */[/* activeFilters : [] */0];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              var clickedFilter = action[0];
              if (List.exists((function (filter) {
                        return filter === clickedFilter;
                      }), state[/* activeFilters */0])) {
                return /* Update */Block.__(0, [/* record */[/* activeFilters */List.filter((function (filter) {
                                      return filter !== clickedFilter;
                                    }))(state[/* activeFilters */0])]]);
              } else {
                return /* Update */Block.__(0, [/* record */[/* activeFilters : :: */[
                              clickedFilter,
                              state[/* activeFilters */0]
                            ]]]);
              }
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
