import { Type2 } from "../model/schema.interface";

export function parseType(arg: Type2, type = '') {
  if (arg.kind === 'NON_NULL' && !type.includes('!')) {
    type += '!';
  }
  if (arg.kind === 'LIST') {
    type = '[]' + type;
  }
   if (arg.name) {
    type = arg.name + type;
   } else if (arg.ofType) {
    return parseType(arg.ofType, type)
   }
  return type;
}