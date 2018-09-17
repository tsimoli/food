defmodule Resolvers.Foods do
  alias Food.Foods.Foods

  def create_food(_, %{input: create_food_input}, _) do
    with {:ok, created_food} <- Foods.create_food(create_food_input) do
      {:ok, %{food: created_food}}
    end
  end

  def get_foods(%{tags: tags}, _) do
    Foods.get_foods(tags)
  end

  def update_food(_, %{input: update_food_input, food_id: food_id}, _) do
    case Foods.get_food(food_id) do
      nil ->
        {:error, :not_found}

      food ->
        with {:ok, update_food} <- Foods.update_food(food, update_food_input) do
          {:ok, %{food: update_food}}
        end
    end
  end
end
