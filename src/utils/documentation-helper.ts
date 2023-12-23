import { Type2 } from '../model/schema.interface';

let arr = false;

export function parseType(arg: Type2, type = '') {
  if (arg.kind === 'NON_NULL' && !type.includes('!')) {
    type += '!';
  }
  if (arg.kind === 'LIST') {
    arr = true;
  }
  if (arg.name) {
    type = arg.name + type;
  } else if (arg.ofType) {
    return parseType(arg.ofType, type);
  }
  return arr ? `[${type}]` : type;
}

export const TYPE_CLASSES =
  'text-orange-600 mx-1 cursor-pointer hover:underline';
export const STANDARD_ICON = "w-7 h-7 cursor-pointer self-center hover:opacity-70";
