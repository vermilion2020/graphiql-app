export function validQuery(query: string) {
  console.log(query);
  const openBraces = query.split('').filter((item) => item === '{');
  const closeBraces = query.split('').filter((item) => item === '}');
  const openBrackets = query.split('').filter((item) => item === '(');
  const closeBrackets = query.split('').filter((item) => item === ')');
  if (openBraces.length === closeBraces.length && openBrackets.length === closeBrackets.length) {
    return true;
  }
  return false;
}

export function validJson(value: string) {
  console.log(value);
  const openBraces = value.split('').filter((item) => item === '{');
  const closeBraces = value.split('').filter((item) => item === '}');
  const openBrackets = value.split('').filter((item) => item === '(');
  const closeBrackets = value.split('').filter((item) => item === ')');
  if (openBraces.length === closeBraces.length && openBrackets.length === closeBrackets.length) {
    return true;
  }
  return false;
}
