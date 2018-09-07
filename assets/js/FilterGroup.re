type filterOption = {
  buttonText: string,
  filterName: string,
  emoji: string,
};

let component = ReasonReact.statelessComponent("FilterGroup");
let make = (~activeFilters, ~addOrRemoveFilter, _children) => {
  let possibleFilters: list(filterOption) = [
    {buttonText: "Suosikit", filterName: "FAVORITES", emoji: {js|⭐|js}},
    {buttonText: "Kasvis", filterName: "VEGETABLE", emoji: {js|🥦|js}},
    {buttonText: "Liha", filterName: "MEAT", emoji: {js|🥩|js}},
    {buttonText: "Terveellinen", filterName: "HEALTHY", emoji: {js|💪|js}},
    {buttonText: "Herkku", filterName: "TREAT", emoji: {js|🍕|js}},
    {buttonText: "Nopea", filterName: "FAST", emoji: {js|⏳|js}},
    {buttonText: "Halpa", filterName: "CHEAP", emoji: {js|💰|js}},
  ];

  let isFilterSelected = filterName =>
    List.exists(filter => filter == filterName, activeFilters);
  {
    ...component,
    render: _self =>
      <div>
        {
          ReasonReact.array(
            Array.map(
              filterOption => {
                let {buttonText, filterName, emoji} = filterOption;
                <FilterButton
                  key=filterName
                  buttonText
                  filterName
                  isSelected={isFilterSelected(filterName)}
                  clickCallback=addOrRemoveFilter
                  emoji
                />;
              },
              Array.of_list(possibleFilters),
            ),
          )
        }
      </div>,
  };
};