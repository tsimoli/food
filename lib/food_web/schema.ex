defmodule FoodWeb.Schema do
  use Absinthe.Schema

  alias Food.Schema.Middleware.ChangesetErrors

  query do
    field :foods, list_of(non_null(:food)) do
      arg(:tags, non_null(list_of(:string)))
      resolve(&Resolvers.Foods.get_foods/2)
    end
  end

  mutation do
    field :create_food, :food_result do
      arg(:input, non_null(:create_food_input))
      resolve(&Resolvers.Foods.create_food/3)
      middleware(ChangesetErrors)
    end

    field :update_food, :food_result do
      arg(:food_id, non_null(:id))
      arg(:input, non_null(:update_food_input))
      resolve(&Resolvers.Foods.update_food/3)
      middleware(ChangesetErrors)
    end
  end

  object :food do
    field(:id, non_null(:id))
    field(:name, non_null(:string))
    field(:tags, list_of(non_null(:string)))
    field(:url, :string)
  end

  @desc "Food tag"
  object :tag do
    field(:id, :id)
    field(:name, :string)
  end

  @desc "Input for food creation"
  input_object :create_food_input do
    field(:name, :string)
    field(:tags, list_of(:string))
    field(:url, :string)
  end

  @desc "Food result"
  object :food_result do
    field(:errors, list_of(:input_error))
    field(:food, :food)
  end

  @desc "An error encountered trying to persist input"
  object :input_error do
    field(:key, non_null(:string))
    field(:message, non_null(:string))
  end

  @desc "Input for food update"
  input_object :update_food_input do
    field(:name, :string)
    field(:tags, list_of(:tag))
    field(:url, :boolean)
  end
end
