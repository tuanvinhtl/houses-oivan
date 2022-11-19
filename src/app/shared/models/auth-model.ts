export interface Auth {
  type: Type.AUTHEN;
  attributes: Attributes;
}

export enum Type {
  AUTHEN = "auth",
}

export interface Attributes {
  username: String;
  password: String;
  token?: String;
}