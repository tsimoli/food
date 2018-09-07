type state = {activeFilters: list(string)};

type action =
  | AddOrRemoveFilter(string);

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
      <FilterGroup
        activeFilters={self.state.activeFilters}
        addOrRemoveFilter={
          filterName => self.send(AddOrRemoveFilter(filterName))
        }
      />
      <FoodItemList />
    </div>,
  /*
   <div>
     {
       ReasonReact.array(
         Array.map(
           filter => <p> {ReasonReact.string(filter)} </p>,
           Array.of_list(self.state.activeFilters),
         ),
       )
     }
   </div>
   */
};