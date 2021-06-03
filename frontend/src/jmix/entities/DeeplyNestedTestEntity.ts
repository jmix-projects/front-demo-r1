import { AssociationO2OTestEntity } from "./AssociationO2OTestEntity";
export class DeeplyNestedTestEntity {
  static NAME = "DeeplyNestedTestEntity";
  id?: string;
  name?: string | null;
  associationO2Oattr?: AssociationO2OTestEntity | null;
}
export type DeeplyNestedTestEntityViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type DeeplyNestedTestEntityView<
  V extends DeeplyNestedTestEntityViewName
> = V extends "_base"
  ? Pick<DeeplyNestedTestEntity, "id" | "name">
  : V extends "_instance_name"
  ? Pick<DeeplyNestedTestEntity, "id" | "name">
  : V extends "_local"
  ? Pick<DeeplyNestedTestEntity, "id" | "name">
  : never;
