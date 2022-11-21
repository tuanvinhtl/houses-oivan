export interface IHouse extends Identify {
  type: String;
  links: {
    self: String;
  };
  attributes: IAttributes;
}

export interface IAttributes {
  house_number: String;
  price: Number;
  block_number: Number | String;
  land_number: String;
  house_type: String;
  model: String;
  status: String;
}

export interface DataPayload {
  data: {
    id?: Number;
    type: String;
    attributes: IAttributes;
  };
}

export interface Identify {
  id: Number;
}

export interface HouseRequest extends DataPayload {}
export interface HouseResponse extends IHouse {}
export interface House extends IHouse {}
