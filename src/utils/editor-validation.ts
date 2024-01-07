export function validQuery(query: string) {
  if (!query.length) return false;
  if (query.indexOf('{') === -1) return false;

  const openBraces = query.split('').filter((item) => item === '{');
  const closeBraces = query.split('').filter((item) => item === '}');
  const openBrackets = query.split('').filter((item) => item === '(');
  const closeBrackets = query.split('').filter((item) => item === ')');
  if (
    openBraces.length === closeBraces.length &&
    openBrackets.length === closeBrackets.length
  ) {
    return true;
  }
  return false;
}

export function validJson(value: string) {
  let json = {};
  try {
    json = JSON.parse(value);
    return { status: 'ok', json };
  } catch {
    return { status: 'failed', json: {} };
  }
}
