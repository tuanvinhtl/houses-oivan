export interface Auth {
  type: Type.AUTHEN;
  attributes: Attributes;
}

export enum Type {
  AUTHEN = "auth",
}

export interface Attributes {
  username: string;
  password: string;
  token: string;
}

export interface AuthResponse extends Auth {}
export interface AuthRequest {
  data: Auth;
}
