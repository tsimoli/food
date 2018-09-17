ReactDOMRe.renderToElementWithId(
  <ReasonApollo.Provider client=Client.instance>
    <AppContainer />
  </ReasonApollo.Provider>,
  "app",
);

ReasonReact.Router.push("");