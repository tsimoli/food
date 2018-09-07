let component = ReasonReact.statelessComponent("FoodItemList");
let make = _children => {
  ...component,
  render: _self =>
    <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {ReasonReact.string("Kasvislasagne")}
          </p>
        </header>
        <div className="card-content"> <div className="content" /> </div>
      </div>
    </div>,
};