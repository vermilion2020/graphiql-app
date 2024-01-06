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
  'mx-1 cursor-pointer hover:underline';
export const STANDARD_ICON =
  'w-7 h-7 cursor-pointer self-center hover:opacity-70';
export const SMALL_ICON = 'w-6 h-6 cursor-pointer self-center hover:opacity-70';
export const BIG_ICON = 'w-9 h-9 cursor-pointer self-center hover:opacity-70';
