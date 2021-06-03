import { TestEnum } from "../enums/enums";
import { AssociationO2OTestEntity } from "./AssociationO2OTestEntity";
import { AssociationO2MTestEntity } from "./AssociationO2MTestEntity";
import { AssociationM2OTestEntity } from "./AssociationM2OTestEntity";
import { AssociationM2MTestEntity } from "./AssociationM2MTestEntity";
import { CompositionO2OTestEntity } from "./CompositionO2OTestEntity";
import { CompositionO2MTestEntity } from "./CompositionO2MTestEntity";
import { IntegerIdTestEntity } from "./IntegerIdTestEntity";
import { StringIdTestEntity } from "./StringIdTestEntity";
export class DatatypesTestEntity {
  static NAME = "DatatypesTestEntity";
  id?: string;
  bigDecimalAttr?: any | null;
  booleanAttr?: boolean | null;
  dateAttr?: any | null;
  dateTimeAttr?: any | null;
  doubleAttr?: any | null;
  integerAttr?: number | null;
  longAttr?: any | null;
  stringAttr?: string | null;
  timeAttr?: any | null;
  uuidAttr?: any | null;
  localDateTimeAttr?: any | null;
  offsetDateTimeAttr?: any | null;
  localDateAttr?: any | null;
  localTimeAttr?: any | null;
  offsetTimeAttr?: any | null;
  enumAttr?: TestEnum | null;
  associationO2Oattr?: AssociationO2OTestEntity | null;
  associationO2Mattr?: AssociationO2MTestEntity[] | null;
  associationM2Oattr?: AssociationM2OTestEntity | null;
  associationM2Mattr?: AssociationM2MTestEntity[] | null;
  compositionO2Oattr?: CompositionO2OTestEntity | null;
  compositionO2Mattr?: CompositionO2MTestEntity[] | null;
  name?: string | null;
  integerIdTestEntityAssociationM2MAttr?: IntegerIdTestEntity[] | null;
  stringIdTestEntityAssociationO2O?: StringIdTestEntity | null;
  stringIdTestEntityAssociationM2O?: StringIdTestEntity | null;
}
export type DatatypesTestEntityViewName = "_base" | "_instance_name" | "_local";
export type DatatypesTestEntityView<
  V extends DatatypesTestEntityViewName
> = V extends "_base"
  ? Pick<
      DatatypesTestEntity,
      | "id"
      | "bigDecimalAttr"
      | "booleanAttr"
      | "dateAttr"
      | "dateTimeAttr"
      | "doubleAttr"
      | "integerAttr"
      | "longAttr"
      | "stringAttr"
      | "timeAttr"
      | "uuidAttr"
      | "localDateTimeAttr"
      | "offsetDateTimeAttr"
      | "localDateAttr"
      | "localTimeAttr"
      | "offsetTimeAttr"
      | "enumAttr"
      | "name"
    >
  : V extends "_local"
  ? Pick<
      DatatypesTestEntity,
      | "id"
      | "bigDecimalAttr"
      | "booleanAttr"
      | "dateAttr"
      | "dateTimeAttr"
      | "doubleAttr"
      | "integerAttr"
      | "longAttr"
      | "stringAttr"
      | "timeAttr"
      | "uuidAttr"
      | "localDateTimeAttr"
      | "offsetDateTimeAttr"
      | "localDateAttr"
      | "localTimeAttr"
      | "offsetTimeAttr"
      | "enumAttr"
      | "name"
    >
  : never;
