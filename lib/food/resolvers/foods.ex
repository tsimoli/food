defmodule Resolvers.Foods do
  alias Food.Foods.Foods

  def get_foods(%{tags: tags}, _) do
    Foods.get_foods(tags)
  end
end
