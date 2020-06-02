import compose from "lodash/fp/compose"
import entries from "lodash/fp/entries"
import map from "lodash/fp/map"
import fromPairs from "lodash/fp/fromPairs"

export type MergeClasses = <C extends Partial<Record<string, string>>>(classes: C | undefined) => <B>(base: B) => B

export const mergeClasses: MergeClasses = (classes) => (base) => compose(
  fromPairs,
  map(([key, value]: string[]) => classes && classes[key]
    ? [key, `${value || ""} ${classes[key] || ""}`.trim()]
    : [key, value]),
  entries,
)(base)
