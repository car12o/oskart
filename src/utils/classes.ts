import compose from "lodash/fp/compose"
import entries from "lodash/fp/entries"
import map from "lodash/fp/map"
import fromPairs from "lodash/fp/fromPairs"

export const mergeClasses = (classes: Record<string, string>) => compose(
  fromPairs,
  map(([key, value]: string[]) => [key, `${value} ${classes[key] || ""}`]),
  entries,
)
