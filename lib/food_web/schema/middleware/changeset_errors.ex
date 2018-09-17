defmodule Food.Schema.Middleware.ChangesetErrors do
  @behaviour Absinthe.Middleware

  def call(res, _) do
    with %{errors: [%Ecto.Changeset{} = changeset]} <- res do
      %{res | value: %{errors: transform_errors(changeset)}, errors: []}
    end
  end

  defp transform_errors(changeset) do
    changeset
    |> Ecto.Changeset.traverse_errors(&format_error/1)
    |> Enum.map(fn {key, value} ->
      %{key: key, message: value}
    end)
  end

  defp format_error({msg, opts}) do
    Enum.reduce(opts, msg, fn {key, value}, acc ->
      String.replace(acc, "%{#{key}}", format_string(value))
    end)
  end

  defp format_string(value) when is_binary(value) do
    to_string(value)
  end

  defp format_string(_) do
    "Unprocessable value"
  end
end
