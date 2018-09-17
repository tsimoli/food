defmodule Food.Foods.Food do
  use Ecto.Schema

  import Ecto.Changeset

  schema "foods" do
    field(:name, :string)
    field(:url, :string)
    field(:tags, {:array, :string})
    timestamps()
  end

  def changeset(food, params \\ %{}) do
    food
    |> cast(params, [:name, :url, :tags])
    |> validate_required([:name])
  end
end
