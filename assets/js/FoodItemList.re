open Food;

let component = ReasonReact.statelessComponent("FoodItemList");

module GetFoods = [%graphql
  {|
  query($tags: [String!]!){
      foods (tags: $tags) @bsRecord {
          name
          instructions
          ingredients
      }
  }
|}
];

module GetFoodsQuery = ReasonApollo.CreateQuery(GetFoods);

let make = (~activeFilters, _children) => {
  ...component,
  render: _self => {
    Js.log("REnder");
    let foodsQuery = GetFoods.make(~tags=Array.of_list(activeFilters), ());

    <GetFoodsQuery variables=foodsQuery##variables>
      ...{
           ({result}) =>
             switch (result) {
             | Loading => <div> {ReasonReact.string("Loading")} </div>
             | Error(error) =>
               <div> {ReasonReact.string(error##message)} </div>
             | Data(response) =>
               switch (response##foods) {
               | Some(foods) =>
                 <div>
                   {
                     ReasonReact.array(
                       Array.map(
                         (food: Food.food) =>
                           <p> {ReasonReact.string(food.name)} </p>,
                         foods,
                       ),
                     )
                   }
                 </div>
               | None => <div> {ReasonReact.string("Failed")} </div>
               }
             }
         }
    </GetFoodsQuery>;
  },
};