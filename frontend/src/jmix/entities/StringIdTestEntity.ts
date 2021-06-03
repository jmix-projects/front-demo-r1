export class StringIdTestEntity {
  static NAME = "StringIdTestEntity";
  id?: string;
  description?: string | null;
  productCode?: string | null;
  createTs?: any | null;
  createdBy?: string | null;
  updateTs?: any | null;
  updatedBy?: string | null;
  deleteTs?: any | null;
  deletedBy?: string | null;
  version?: number | null;
}
export type StringIdTestEntityViewName = "_base" | "_instance_name" | "_local";
export type StringIdTestEntityView<
  V extends StringIdTestEntityViewName
> = V extends "_base"
  ? Pick<
      StringIdTestEntity,
      | "id"
      | "description"
      | "productCode"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
      | "deleteTs"
      | "deletedBy"
      | "version"
    >
  : V extends "_instance_name"
  ? Pick<StringIdTestEntity, "id">
  : V extends "_local"
  ? Pick<
      StringIdTestEntity,
      | "id"
      | "description"
      | "productCode"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
      | "deleteTs"
      | "deletedBy"
      | "version"
    >
  : never;
