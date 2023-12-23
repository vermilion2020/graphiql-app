const WH_SPACE = '  ';
const TO_REMOVE = [' ', '\n', '\r', '\t'];

const addSpaces = (cnt: number) => {
  let acc = '';
  for (let i = 0; i < cnt; i++)
  {
    acc += WH_SPACE;
  }
  return acc;
}

export const prettifyQuery = (query: string) => {
  try {
    const clear = query.split('').filter(s => !TO_REMOVE.includes(s)).join('');
    
    let firstI = clear.trim().split('{');
    const prefix = firstI[0].length ? firstI[0] : '';

    firstI = firstI.slice(1);
    firstI = firstI.map((s,i) =>  `\r${addSpaces(i)}{\r${addSpaces(i+1)}${s}`);
    firstI[0] = `${prefix}${firstI[0]}`;

    const secondI = firstI.join('').trim().split('}');
    firstI = secondI.map((s,i) => i === 0 ? s : `\r${s}${addSpaces(secondI.length - i - 1 )}}`);

    const resultQuery = firstI.join('').trim();
    return {status: 'ok', query: resultQuery};
  } catch {
    return {status: 'failed', query: ''};
  }
}