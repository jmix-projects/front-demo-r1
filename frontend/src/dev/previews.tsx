import DatatypesTestEntityList from "../app/datatypes/datatypes-test-entity/DatatypesTestEntityList";
import DatatypesTestEntityEditor from "../app/datatypes/datatypes-test-entity/DatatypesTestEntityEditor";
import React from "react";
import { Previews, ComponentPreview } from "@haulmont/react-ide-toolbox";
import { JsxTreeDemoScreen } from "../app/tools/jsx-tree/JsxTreeDemoScreen";

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

    </Previews>
  );
};
