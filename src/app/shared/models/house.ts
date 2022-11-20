export interface IHouse {
  id: Number;
  type: String;
  links: {
    self: String;
  };
  attributes: {
    house_number: String;
    price: Number;
    block_number: Number | String;
    land_number: String;
    house_type: String;
    model: String;
    status: String;
  };
}

export interface HouseResponse extends IHouse {}
export interface House extends IHouse {}