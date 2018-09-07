let component = ReasonReact.statelessComponent("FilterButton");
let make =
    (~buttonText, ~filterName, ~isSelected, ~clickCallback, ~emoji, _children) => {
  ...component,
  render: _self =>
    <div
      className={
        "filter button info " ++ (isSelected ? "filter-selected" : "")
      }
      onClick={_event => clickCallback(filterName)}>
      {ReasonReact.string(emoji ++ buttonText)}
    </div>,
};