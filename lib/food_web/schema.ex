defmodule FoodWeb.Schema do
  use Absinthe.Schema

  query do
    field :foods, list_of(non_null(:food)) do
      arg(:tags, non_null(list_of(:string)))
      resolve(&Resolvers.Foods.get_foods/2)
    end
  end

  mutation do
    # Insert food
  end

  object :food do
    field(:id, non_null(:id))
    field(:name, non_null(:string))
    field(:ingredients, non_null(:string))
    field(:instructions, non_null(:string))
  end
end
