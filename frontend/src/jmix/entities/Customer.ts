export class Customer {
  static NAME = "Customer";
  id?: string;
  name?: string | null;
  email?: string | null;
  version?: number | null;
  createdBy?: string | null;
  createdDate?: any | null;
  lastModifiedBy?: string | null;
  lastModifiedDate?: any | null;
  deletedBy?: string | null;
  deletedDate?: any | null;
}
export type CustomerViewName = "_base" | "_instance_name" | "_local";
export type CustomerView<V extends CustomerViewName> = V extends "_base"
  ? Pick<
      Customer,
      | "id"
      | "name"
      | "email"
      | "version"
      | "createdBy"
      | "createdDate"
      | "lastModifiedBy"
      | "lastModifiedDate"
      | "deletedBy"
      | "deletedDate"
    >
  : V extends "_instance_name"
  ? Pick<Customer, "id" | "name">
  : V extends "_local"
  ? Pick<
      Customer,
      | "id"
      | "name"
      | "email"
      | "version"
      | "createdBy"
      | "createdDate"
      | "lastModifiedBy"
      | "lastModifiedDate"
      | "deletedBy"
      | "deletedDate"
    >
  : never;
