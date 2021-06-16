import { VisualComponentsDemoScreen } from "../app/components-visual/VisualComponentsDemoScreen";
import { BlankTemplateDemo } from "../app/templates/blank/BlankTemplateDemo";
import CustomerListDemo from "../app/templates/entity-list/CustomerList";
import { DataComponentsDemo } from "../app/components-data/DataComponentsDemo";
import { CustomerCards } from "../app/templates/entity-cards/CustomerCards";
import CustomerMasterDetail from "../app/templates/master-detail/CustomerMasterDetail";
import { ConditionalComponentsDemoScreen } from "../app/components-conditional/ConditionalComponentsDemoScreen";
import DeeplyNestedTestEntityEdit from "../app/datatypes/deeply-nested-test-entity/DeeplyNestedTestEntityEdit";
import CompositionO2OTestEntityList from "../app/datatypes/composition-o2o/CompositionO2OTestEntityList";
import CompositionO2OTestEntityEditor from "../app/datatypes/composition-o2o/CompositionO2OTestEntityEditor";
import CustomerList from "../app/templates/entity-management/CustomerList";
import CustomerEditor from "../app/templates/entity-management/CustomerEditor";
import { MenuDemoScreen } from "../app/menu/MenuDemoScreen";
import CompositionO2MTestEntityList from "../app/datatypes/composition-o2m/CompositionO2MTestEntityList";
import CompositionO2MTestEntityEditor from "../app/datatypes/composition-o2m/CompositionO2MTestEntityEditor";
import DatatypesTestEntityList from "../app/datatypes/datatypes-test-entity/DatatypesTestEntityList";
import DatatypesTestEntityEditor from "../app/datatypes/datatypes-test-entity/DatatypesTestEntityEditor";
import React from "react";
import { Previews, ComponentPreview } from "@haulmont/react-ide-toolbox";
import { JsxTreeDemoScreen } from "../app/tools/jsx-tree/JsxTreeDemoScreen";
import { TimerComponentDemo } from "../app/components-conditional/TimerComponentDemo";
import { UseEntityListDataDemo } from "../app/components-data/UseEntityListDataDemo";

export const ComponentPreviews = () => {
  return (
    <Previews>
      <ComponentPreview path="/DatatypesTestEntityEditor">
        <DatatypesTestEntityEditor />
      </ComponentPreview>
      <ComponentPreview path="/DatatypesTestEntityList">
        <DatatypesTestEntityList />
      </ComponentPreview>
      <ComponentPreview path="/jsxTreeDemo">
        <JsxTreeDemoScreen />
      </ComponentPreview>
      <ComponentPreview path="/CompositionO2MTestEntityEditor">
        <CompositionO2MTestEntityEditor />
      </ComponentPreview>
      <ComponentPreview path="/CompositionO2MTestEntityList">
        <CompositionO2MTestEntityList />
      </ComponentPreview>
      <ComponentPreview path="/menuDemoScreen">
        <MenuDemoScreen />
      </ComponentPreview>
      <ComponentPreview path="/CustomerEditor">
        <CustomerEditor />
      </ComponentPreview>
      <ComponentPreview path="/CustomerList">
        <CustomerList />
      </ComponentPreview>
      <ComponentPreview path="/CompositionO2OTestEntityEditor">
        <CompositionO2OTestEntityEditor />
      </ComponentPreview>
      <ComponentPreview path="/CompositionO2OTestEntityList">
        <CompositionO2OTestEntityList />
      </ComponentPreview>
      <ComponentPreview path="/DeeplyNestedTestEntityEdit">
        <DeeplyNestedTestEntityEdit />
      </ComponentPreview>
      <ComponentPreview path="/visualComponentsDemoScreen">
        <VisualComponentsDemoScreen />
      </ComponentPreview>
      <ComponentPreview path="/conditionalComponentsDemoScreen">
        <ConditionalComponentsDemoScreen />
      </ComponentPreview>
      <ComponentPreview path="/timerComponentDemo">
        <TimerComponentDemo />
      </ComponentPreview>
      <ComponentPreview path="/CustomerMasterDetail">
        <CustomerMasterDetail />
      </ComponentPreview>
      <ComponentPreview path="/customerCards">
        <CustomerCards />
      </ComponentPreview>
      <ComponentPreview path="/dataComponentsDemo">
        <DataComponentsDemo />
      </ComponentPreview>
      <ComponentPreview path="/UseEntityListDataDemo">
        <UseEntityListDataDemo />
      </ComponentPreview>
      <ComponentPreview path="/CustomerListDemo">
        <CustomerListDemo />
      </ComponentPreview>
      <ComponentPreview path="/blankTemplateDemo">
        <BlankTemplateDemo />
      </ComponentPreview>
    </Previews>
  );
};
