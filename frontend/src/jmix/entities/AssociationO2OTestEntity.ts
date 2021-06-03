import { DatatypesTestEntity } from "./DatatypesTestEntity";
import { DeeplyNestedTestEntity } from "./DeeplyNestedTestEntity";
export class AssociationO2OTestEntity {
  static NAME = "AssociationO2OTestEntity";
  id?: string;
  datatypesTestEntity?: DatatypesTestEntity | null;
  name?: string | null;
  deeplyNestedTestEntity?: DeeplyNestedTestEntity | null;
}
export type AssociationO2OTestEntityViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type AssociationO2OTestEntityView<
  V extends AssociationO2OTestEntityViewName
> = V extends "_base"
  ? Pick<AssociationO2OTestEntity, "id" | "name">
  : V extends "_instance_name"
  ? Pick<AssociationO2OTestEntity, "id" | "name">
  : V extends "_local"
  ? Pick<AssociationO2OTestEntity, "id" | "name">
  : never;
