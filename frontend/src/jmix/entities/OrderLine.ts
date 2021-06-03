import { Product } from "./Product";
import { Order } from "./Order_";
export class OrderLine {
  static NAME = "OrderLine";
  id?: string;
  quantity?: number | null;
  product?: Product | null;
  createdBy?: string | null;
  createdDate?: any | null;
  version?: number | null;
  lastModifiedBy?: string | null;
  lastModifiedDate?: any | null;
  deletedBy?: string | null;
  deletedDate?: any | null;
  order?: Order | null;
}
export type OrderLineViewName = "_base" | "_instance_name" | "_local";
export type OrderLineView<V extends OrderLineViewName> = V extends "_base"
  ? Pick<
      OrderLine,
      | "id"
      | "quantity"
      | "createdBy"
      | "createdDate"
      | "version"
      | "lastModifiedBy"
      | "lastModifiedDate"
      | "deletedBy"
      | "deletedDate"
    >
  : V extends "_local"
  ? Pick<
      OrderLine,
      | "id"
      | "quantity"
      | "createdBy"
      | "createdDate"
      | "version"
      | "lastModifiedBy"
      | "lastModifiedDate"
      | "deletedBy"
      | "deletedDate"
    >
  : never;
