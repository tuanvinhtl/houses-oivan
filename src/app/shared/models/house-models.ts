import { IHouse } from "./house";

export interface IHouseModels {
  id: Number;
  type: String;
  links: {
    self: String;
  };
  attributes: Attributes;
}

export interface Attributes {
  model: String;
  media: {
    title: String;
    video: String;
    banner: String;
    description: String;
  };
  house_type: String;
}

export interface HouseModels extends IHouseModels {}

export interface HouseModelsCombiner extends IHouseModels {
  houses: IHouse[];
}
