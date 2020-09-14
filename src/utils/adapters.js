export const addChar = (options, input) => {
  const chars = options.chars
  const position = options.position
  switch (position) {
    case "start":
    case "beginning":
    case "front":
      return chars + input
    case "end":
    case "back":
      return input + chars
    default:
      return chars + input
  }
}
