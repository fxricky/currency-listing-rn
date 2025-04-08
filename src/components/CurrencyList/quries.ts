export function isStartsWith(target: string, search: string) {
  return target.toLowerCase().startsWith(search.toLowerCase());
}

export function containLeadingWhitespace(target: string, search: string) {
  return target.includes(" " + search)
}
