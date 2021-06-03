import { DatatypesTestEntity } from "./DatatypesTestEntity";
export class AssociationM2MTestEntity {
  static NAME = "AssociationM2MTestEntity";
  id?: string;
  datatypesTestEntities?: DatatypesTestEntity[] | null;
  name?: string | null;
}
export type AssociationM2MTestEntityViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type AssociationM2MTestEntityView<
  V extends AssociationM2MTestEntityViewName
> = V extends "_base"
  ? Pick<AssociationM2MTestEntity, "id" | "name">
  : V extends "_instance_name"
  ? Pick<AssociationM2MTestEntity, "id" | "name">
  : V extends "_local"
  ? Pick<AssociationM2MTestEntity, "id" | "name">
  : never;
