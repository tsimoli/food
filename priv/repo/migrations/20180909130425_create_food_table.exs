defmodule Food.Repo.Migrations.CreateFoodTable do
  use Ecto.Migration

  def change do
    create(table(:foods)) do
      add(:name, :string)
      add(:url, :string)
      add(:tags, {:array, :string}, default: [])
      timestamps()
    end
  end
end
