import { DatatypesTestEntity } from "./DatatypesTestEntity";
export class AssociationO2MTestEntity {
  static NAME = "AssociationO2MTestEntity";
  id?: string;
  datatypesTestEntity?: DatatypesTestEntity | null;
  name?: string | null;
}
export type AssociationO2MTestEntityViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type AssociationO2MTestEntityView<
  V extends AssociationO2MTestEntityViewName
> = V extends "_base"
  ? Pick<AssociationO2MTestEntity, "id" | "name">
  : V extends "_instance_name"
  ? Pick<AssociationO2MTestEntity, "id" | "name">
  : V extends "_local"
  ? Pick<AssociationO2MTestEntity, "id" | "name">
  : never;
