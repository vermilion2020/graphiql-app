const WH_SPACE = '\t';

const addSpaces = (cnt: number) => {
  let acc = '';
  for (let i = 0; i < cnt; i++) {
    acc += WH_SPACE;
  }
  return acc;
};

export const prettifyQuery = (query: string) => {
  try {
    const clear = query.replace(/[\t|\r|\n]/gi, ' ');

    let firstI = clear.trim().split('{');
    const prefix = firstI[0].length ? firstI[0] : '';
    let maxIndent = '';
    firstI = firstI.slice(1);
    firstI = firstI.map((s, i) => {
      maxIndent = addSpaces(i + 1);
      return ` {\r${maxIndent}${s}`
    });
    firstI[0] = `${prefix}${firstI[0]}`;

    let parameters = firstI[firstI.length - 1];
    parameters = parameters.replace(/\s{1,}/g, ' ').replace(/\s}/g, '}').trim();
    parameters = parameters.replace(/\s{1}/g, `\r${maxIndent}`);
    firstI[firstI.length - 1] = parameters;

    const secondI = firstI.join('').trim().split('}');
    firstI = secondI.map((s, i) =>
      i === 0 ? s : `\r${s}${addSpaces(secondI.length - i - 1)}}`
    );

    let resultQuery = firstI.join('').trim();
    
    resultQuery = resultQuery.replace(/:/g, ': ');
    resultQuery = resultQuery.replace(/=/g, ' = ');

    resultQuery = resultQuery.replace(/ {1,}/g, ' ');

    return { status: 'ok', query: resultQuery };
  } catch {
    return { status: 'failed', query: '' };
  }
};
