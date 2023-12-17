export interface ISchemaTypes {
  data: {
    __schema: {
      queryType: {
        name: string;
      };
      mutationType: {
        name: string;
      };
      types: SchemaType[];
      directives: Direc[];
    };
  };
}

export interface SchemaType {
  kind: string;
  name: string;
  fields?: Field[];
  inputFields?: InputField[];
  enumValues?: EnumValue[];
}

export interface Field {
  name: string;
  args: Arg[];
  type: Type3;
  isDeprecated: boolean;
  deprecationReason: string | null;
}

export interface Arg {
  name: string;
  type: Type2;
  defaultValue?: string;
}

export interface Type2 {
  kind: string;
  name?: string;
  ofType?: OfType;
}

interface OfType {
  kind: string;
  name?: string;
  ofType?: OfType;
}

interface Type3 {
  kind: string;
  name?: string;
  ofType?: OfType4;
}

interface OfType4 {
  kind: string;
  name?: string;
  ofType?: OfType5;
}

interface OfType5 {
  kind: string;
  name?: string;
  ofType?: OfType6;
}

interface OfType6 {
  kind: string;
  name: string;
  ofType: OfType;
}

interface InputField {
  name: string;
  type: Type4;
  defaultValue: null | string;
}

interface Type4 {
  kind: string;
  name: string;
  ofType: OfType;
}

interface EnumValue {
  name: string;
  isDeprecated: boolean;
  deprecationReason: string | null;
}

interface Direc {
  name: string;
  locations: string[];
  args: Arg2[];
}

interface Arg2 {
  name: string;
  type: Type5;
  defaultValue?: string;
}

interface Type5 {
  kind: string;
  name?: string;
  ofType?: OfType7;
}

interface OfType7 {
  kind: string;
  name: string;
  ofType: Type5;
}
