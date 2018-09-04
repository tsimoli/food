let component = ReasonReact.statelessComponent("Week");
let make = _children => {
  ...component,
  render: _self => <div> {ReasonReact.string("Week")} </div>,
};