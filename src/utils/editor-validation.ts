export function validQuery(query: string) {
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
  let json = {}
  try {
    json = JSON.parse(value);
    for (const key in json) {
      if (typeof (json[key as keyof typeof json]) === "object") {
        return {status: 'failed', json: {}}
      }
    }
    return {status: 'ok', json};
  } catch {
    return {status: 'failed', json: {}};
  }
}
