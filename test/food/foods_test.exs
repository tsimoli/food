defmodule Food.FoodsTest do
  use Food.DataCase

  alias Food.Foods.Foods
  alias Food.Foods.Food

  describe "foods" do
    test "create_food/1 with valid data creates food" do
      assert {:ok, %Food{} = food} = Foods.create_food(%{name: "Test", tags: ["CHEAP", "TREAT"]})

      Foods.create_food(%{name: "Test", tags: ["TREAT"]})
      {:ok, foods} = Foods.get_foods(["CHEAP", "TREAT"])
      assert(2 == length(foods))
      assert(food.name == "Test")
    end
  end
end
