'use strict';

var Client = require("./client/Client.bs.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var AppContainer = require("./AppContainer.bs.js");
var ApolloProvider = require("reason-apollo/src/ApolloProvider.bs.js");

ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, ApolloProvider.make(Client.instance, /* array */[ReasonReact.element(undefined, undefined, AppContainer.make(/* array */[]))])), "app");

ReasonReact.Router[/* push */0]("");

/*  Not a pure module */
