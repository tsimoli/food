'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("Link");

function handleClick(href, $$event) {
  if ($$event.defaultPrevented) {
    return 0;
  } else {
    $$event.preventDefault();
    return ReasonReact.Router[/* push */0](href);
  }
}

function make(href, $staropt$star, children) {
  var className = $staropt$star !== undefined ? $staropt$star : "";
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
              return ReasonReact.createDomElement("a", {
                          href: href,
                          className: className,
                          onClick: (function (param) {
                              return handleClick(href, param);
                            })
                        }, children);
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.handleClick = handleClick;
exports.make = make;
/* component Not a pure module */
