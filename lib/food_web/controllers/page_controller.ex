defmodule FoodWeb.PageController do
  use FoodWeb, :controller

  def index(conn, _params) do
    render(conn, "app.html")
  end
end
