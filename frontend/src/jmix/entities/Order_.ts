import { OrderLine } from "./OrderLine";
import { Customer } from "./Customer";
export class Order {
  static NAME = "Order_";
  id?: string;
  number?: string | null;
  lines?: OrderLine[] | null;
  customer?: Customer | null;
  numberOfSpecialProducts?: number | null;
  amount?: any | null;
  date?: any | null;
  version?: number | null;
  createdBy?: string | null;
  createdDate?: any | null;
  lastModifiedBy?: string | null;
  lastModifiedDate?: any | null;
  deletedBy?: string | null;
  deletedDate?: any | null;
}
export type OrderViewName = "_base" | "_instance_name" | "_local";
export type OrderView<V extends OrderViewName> = V extends "_base"
  ? Pick<
      Order,
      | "id"
      | "number"
      | "numberOfSpecialProducts"
      | "amount"
      | "date"
      | "version"
      | "createdBy"
      | "createdDate"
      | "lastModifiedBy"
      | "lastModifiedDate"
      | "deletedBy"
      | "deletedDate"
    >
  : V extends "_local"
  ? Pick<
      Order,
      | "id"
      | "number"
      | "numberOfSpecialProducts"
      | "amount"
      | "date"
      | "version"
      | "createdBy"
      | "createdDate"
      | "lastModifiedBy"
      | "lastModifiedDate"
      | "deletedBy"
      | "deletedDate"
    >
  : never;
