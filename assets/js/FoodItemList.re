open Food;

let component = ReasonReact.statelessComponent("FoodItemList");

module GetFoods = [%graphql
  {|
  query($tags: [String!]!){
      foods (tags: $tags) @bsRecord {
          id
          name
          tags
          url
      }
  }
|}
];

module GetFoodsQuery = ReasonApollo.CreateQuery(GetFoods);

let make = (~activeFilters, _children) => {
  ...component,
  render: _self => {
    let foodsQuery = GetFoods.make(~tags=Array.of_list(activeFilters), ());

    <GetFoodsQuery variables=foodsQuery##variables>
      ...{
           ({result}) =>
             switch (result) {
             | Loading => <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
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

                           <p key=food.id>
                            (switch(food.url) {
                             | None => {ReasonReact.string("No url")}
                             | Some(url) =>

                              {ReasonReact.string(url)}
                              }
                            )
                            </p>
                         ,

                         foods,
                       ),
                     )
                   }
                 </div>
               | None =>
                 <div> {ReasonReact.string("Failed to load foods")} </div>
               }
             }
         }
    </GetFoodsQuery>;
  },
};