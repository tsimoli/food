let component = ReasonReact.statelessComponent("NotFound");
let make = _children => {
  ...component,
  render: _self => <div> {ReasonReact.string("NotFound")} </div>,
};