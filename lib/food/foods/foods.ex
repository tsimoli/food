defmodule Food.Foods.Foods do
  import Ecto.Query

  alias Food.Repo
  alias Food.Foods.Food

  def create_food(attrs \\ %{}) do
    %Food{}
    |> Food.changeset(attrs)
    |> Repo.insert()
  end

  def get_foods([] = tags) when is_list(tags) do
    {:ok, Repo.all(Food)}
  end

  def get_foods(tags) do
    {:ok,
     Repo.all(
       from(f in Food,
         where: fragment("? @> ?::varchar[]", f.tags, ^tags)
       )
     )}
  end
end
