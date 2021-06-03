import { DeeplyNestedTestEntity } from "./DeeplyNestedTestEntity";
export class CompositionO2OTestEntity {
  static NAME = "CompositionO2OTestEntity";
  id?: string;
  name?: string | null;
  quantity?: number | null;
  nestedComposition?: DeeplyNestedTestEntity | null;
}
export type CompositionO2OTestEntityViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type CompositionO2OTestEntityView<
  V extends CompositionO2OTestEntityViewName
> = V extends "_base"
  ? Pick<CompositionO2OTestEntity, "id" | "name" | "quantity">
  : V extends "_instance_name"
  ? Pick<CompositionO2OTestEntity, "id" | "name">
  : V extends "_local"
  ? Pick<CompositionO2OTestEntity, "id" | "name" | "quantity">
  : never;
