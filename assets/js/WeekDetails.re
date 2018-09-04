let component = ReasonReact.statelessComponent("WeekDetails");
let make = (~id, _children) => {
  ...component,
  render: _self => <div> {ReasonReact.string("WeekDetails")} </div>,
};