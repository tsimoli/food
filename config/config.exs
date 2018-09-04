# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :food,
  ecto_repos: [Food.Repo]

# Configures the endpoint
config :food, FoodWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "tEkqotx2zmk4aeeGYbT9GIOvx8uH0lKReb6Ulo4vhMQs8ZJ65I/VsPBT0qTuJNWU",
  render_errors: [view: FoodWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Food.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
