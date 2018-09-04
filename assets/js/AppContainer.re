[@bs.val] external requireCSS: string => unit = "require";

requireCSS("../css/customstyles.scss");

type route =
  | Search
  | Week
  | WeekDetails(int)
  | NotFound;

type state = {route};

type action =
  | ChangeRoute(route);

let reducer = (action, _state) =>
  switch (action) {
  | ChangeRoute(route) => ReasonReact.Update({route: route})
  };

let mapUrlToRoute = (url: ReasonReact.Router.url) =>
  switch (url.path) {
  | [] => Search
  | ["week"] => Week
  | ["week", id] => WeekDetails(int_of_string(id))
  | _ => NotFound
  };

let component = ReasonReact.reducerComponent("App");
let make = _children => {
  ...component,
  reducer,
  initialState: () => {route: Search},
  didMount: self => {
    let watcherID =
      ReasonReact.Router.watchUrl(url =>
        self.send(ChangeRoute(url |> mapUrlToRoute))
      );
    self.onUnmount(() => ReasonReact.Router.unwatchUrl(watcherID));
  },
  render: self =>
    <div className="section">
      <div className="container has-text-centered">
        <h1 className="title">
          {ReasonReact.string({js|Mitä syödä?|js})}
        </h1>
        {
          switch (self.state.route) {
          | Search => <Search />
          | Week => <Week />
          | WeekDetails(id) => <WeekDetails id />
          | NotFound => <NotFound />
          }
        }
      </div>
    </div>,
};