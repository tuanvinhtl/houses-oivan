export interface House {
  id: Number;
  type: String;
  links: {
    self: String;
  };
  attributes: {
    house_number: String;
    price: Number;
    block_number: Number;
    land_number: String;
    house_type: String;
    model: String;
    status: String;
  };
}

export interface Response {
  data: [House];
}