defmodule Food.Foods.Food do
  use Ecto.Schema

  import Ecto.Changeset

  schema "foods" do
    field(:name, :string)
    field(:tags, {:array, :string})
    timestamps()
  end

  def changeset(food, params \\ %{}) do
    food
    |> cast(params, [:name, :instructions, :tags])
    |> cast_embed(:ingredients)
    |> validate_required([:name])
  end
end
