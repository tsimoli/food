'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");

var component = ReasonReact.statelessComponent("FoodItemList");

var ppx_printed_query = "query ($tags: [String!]!)  {\nfoods(tags: $tags)  {\nname  \ninstructions  \ningredients  \n}\n\n}\n";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_primitive.valFromOption(match)["foods"];
    var tmp;
    if (match$1 !== undefined) {
      var match$2 = Js_json.decodeNull(match$1);
      if (match$2 !== undefined) {
        tmp = undefined;
      } else {
        var match$3 = Js_json.decodeArray(match$1);
        tmp = match$3 !== undefined ? match$3.map((function (value) {
                  var match = Js_json.decodeObject(value);
                  if (match !== undefined) {
                    var value$1 = Js_primitive.valFromOption(match);
                    var match$1 = value$1["name"];
                    var field_name;
                    if (match$1 !== undefined) {
                      var match$2 = Js_json.decodeString(match$1);
                      field_name = match$2 !== undefined ? match$2 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$1));
                    } else {
                      field_name = Js_exn.raiseError("graphql_ppx: Field name on type Food is missing");
                    }
                    var match$3 = value$1["instructions"];
                    var field_instructions;
                    if (match$3 !== undefined) {
                      var match$4 = Js_json.decodeString(match$3);
                      field_instructions = match$4 !== undefined ? match$4 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$3));
                    } else {
                      field_instructions = Js_exn.raiseError("graphql_ppx: Field instructions on type Food is missing");
                    }
                    var match$5 = value$1["ingredients"];
                    var field_ingredients;
                    if (match$5 !== undefined) {
                      var match$6 = Js_json.decodeString(match$5);
                      field_ingredients = match$6 !== undefined ? match$6 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$5));
                    } else {
                      field_ingredients = Js_exn.raiseError("graphql_ppx: Field ingredients on type Food is missing");
                    }
                    return /* record */[
                            /* name */field_name,
                            /* ingredients */field_ingredients,
                            /* instructions */field_instructions
                          ];
                  } else {
                    return Js_exn.raiseError("graphql_ppx: Expected object of type Food, got " + JSON.stringify(value));
                  }
                })) : Js_exn.raiseError("graphql_ppx: Expected array, got " + JSON.stringify(match$1));
      }
    } else {
      tmp = undefined;
    }
    return {
            foods: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make(tags, _) {
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray(/* array */[/* tuple */[
                  "tags",
                  tags.map((function (prim) {
                          return prim;
                        }))
                ]]),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var tags = variables.tags;
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray(/* array */[/* tuple */[
                  "tags",
                  tags.map((function (prim) {
                          return prim;
                        }))
                ]]),
          parse: parse
        };
}

function ret_type() {
  return /* module */[];
}

var MT_Ret = /* module */[];

var GetFoods = /* module */[
  /* ppx_printed_query */ppx_printed_query,
  /* query */ppx_printed_query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var GetFoodsQuery = ReasonApollo.CreateQuery([
      ppx_printed_query,
      parse
    ]);

function make$1(activeFilters, _) {
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
          /* render */(function () {
              console.log("REnder");
              var foodsQuery = make($$Array.of_list(activeFilters), /* () */0);
              return ReasonReact.element(undefined, undefined, Curry.app(GetFoodsQuery[/* make */3], [
                              Js_primitive.some(foodsQuery.variables),
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              (function (param) {
                                  var result = param[/* result */0];
                                  if (typeof result === "number") {
                                    return React.createElement("div", undefined, "Loading");
                                  } else if (result.tag) {
                                    var match = result[0].foods;
                                    if (match !== undefined) {
                                      return React.createElement("div", undefined, $$Array.map((function (food) {
                                                        return React.createElement("p", undefined, food[/* name */0]);
                                                      }), match));
                                    } else {
                                      return React.createElement("div", undefined, "Failed");
                                    }
                                  } else {
                                    return React.createElement("div", undefined, result[0].message);
                                  }
                                })
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.GetFoods = GetFoods;
exports.GetFoodsQuery = GetFoodsQuery;
exports.make = make$1;
/* component Not a pure module */
