/* Open Food here to get food record */

type state = {activeFilters: list(string)};

type action =
  | AddOrRemoveFilter(string);

type foods = list(Food.food);

let component = ReasonReact.reducerComponent("Foods");
let make = _children => {
  ...component,
  initialState: () => {activeFilters: []},
  reducer: (action, state) =>
    switch (action) {
    | AddOrRemoveFilter(clickedFilter) =>
      if (List.exists(filter => filter == clickedFilter, state.activeFilters)) {
        ReasonReact.Update({
          activeFilters:
            List.filter(
              filter => filter != clickedFilter,
              state.activeFilters,
            ),
        });
      } else {
        ReasonReact.Update({
          activeFilters: [clickedFilter, ...state.activeFilters],
        });
      }
    },
  render: self =>
    <div>
      <div>
        <FilterGroup
          activeFilters={self.state.activeFilters}
          addOrRemoveFilter={
            filterName => self.send(AddOrRemoveFilter(filterName))
          }
        />
        <FoodItemList activeFilters={self.state.activeFilters} />
      </div>
    </div>,
};