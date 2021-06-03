export class Product {
  static NAME = "Product";
  id?: string;
  special?: boolean | null;
  price?: any | null;
  name?: string | null;
  version?: number | null;
  createdBy?: string | null;
  createdDate?: any | null;
  lastModifiedBy?: string | null;
  lastModifiedDate?: any | null;
  deletedBy?: string | null;
  deletedDate?: any | null;
}
export type ProductViewName = "_base" | "_instance_name" | "_local";
export type ProductView<V extends ProductViewName> = V extends "_base"
  ? Pick<
      Product,
      | "id"
      | "name"
      | "special"
      | "price"
      | "version"
      | "createdBy"
      | "createdDate"
      | "lastModifiedBy"
      | "lastModifiedDate"
      | "deletedBy"
      | "deletedDate"
    >
  : V extends "_instance_name"
  ? Pick<Product, "id" | "name">
  : V extends "_local"
  ? Pick<
      Product,
      | "id"
      | "special"
      | "price"
      | "name"
      | "version"
      | "createdBy"
      | "createdDate"
      | "lastModifiedBy"
      | "lastModifiedDate"
      | "deletedBy"
      | "deletedDate"
    >
  : never;
