type state = {filters: list(string)};

/* Action declaration */
type action =
  | AddFilter(string);

let component = ReasonReact.reducerComponent("Search");
let make = _children => {
  ...component,
  initialState: () => {filters: []},
  reducer: (action, state) =>
    switch (action) {
    | AddFilter(filter) =>
      ReasonReact.Update({filters: [filter, ...state.filters]})
    },
  render: _self =>
    <div>
      <button className="button"> {ReasonReact.string("Kasvis")} </button>
    </div>,
};