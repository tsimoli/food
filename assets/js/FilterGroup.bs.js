'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var FilterButton = require("./FilterButton.bs.js");

var component = ReasonReact.statelessComponent("FilterGroup");

function make(activeFilters, addOrRemoveFilter, _) {
  var isFilterSelected = function (filterName) {
    return List.exists((function (filter) {
                  return filter === filterName;
                }), activeFilters);
  };
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
              return React.createElement("div", undefined, $$Array.map((function (filterOption) {
                                var filterName = filterOption[/* filterName */1];
                                return ReasonReact.element(filterName, undefined, FilterButton.make(filterOption[/* buttonText */0], filterName, isFilterSelected(filterName), addOrRemoveFilter, filterOption[/* emoji */2], /* array */[]));
                              }), $$Array.of_list(/* :: */[
                                  /* record */[
                                    /* buttonText */"Suosikit",
                                    /* filterName */"FAVORITES",
                                    /* emoji */"⭐"
                                  ],
                                  /* :: */[
                                    /* record */[
                                      /* buttonText */"Kasvis",
                                      /* filterName */"VEGETABLE",
                                      /* emoji */"🥦"
                                    ],
                                    /* :: */[
                                      /* record */[
                                        /* buttonText */"Liha",
                                        /* filterName */"MEAT",
                                        /* emoji */"🥩"
                                      ],
                                      /* :: */[
                                        /* record */[
                                          /* buttonText */"Terveellinen",
                                          /* filterName */"HEALTHY",
                                          /* emoji */"💪"
                                        ],
                                        /* :: */[
                                          /* record */[
                                            /* buttonText */"Herkku",
                                            /* filterName */"TREAT",
                                            /* emoji */"🍕"
                                          ],
                                          /* :: */[
                                            /* record */[
                                              /* buttonText */"Nopea",
                                              /* filterName */"FAST",
                                              /* emoji */"⏳"
                                            ],
                                            /* :: */[
                                              /* record */[
                                                /* buttonText */"Halpa",
                                                /* filterName */"CHEAP",
                                                /* emoji */"💰"
                                              ],
                                              /* [] */0
                                            ]
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ])));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
