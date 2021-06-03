import { DatatypesTestEntity } from "./DatatypesTestEntity";
export class CompositionO2MTestEntity {
  static NAME = "CompositionO2MTestEntity";
  id?: string;
  datatypesTestEntity?: DatatypesTestEntity | null;
  quantity?: number | null;
  name?: string | null;
}
export type CompositionO2MTestEntityViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type CompositionO2MTestEntityView<
  V extends CompositionO2MTestEntityViewName
> = V extends "_base"
  ? Pick<CompositionO2MTestEntity, "id" | "name" | "quantity">
  : V extends "_instance_name"
  ? Pick<CompositionO2MTestEntity, "id" | "name">
  : V extends "_local"
  ? Pick<CompositionO2MTestEntity, "id" | "quantity" | "name">
  : never;
