import React from "react";
import {registerRoute} from "@haulmont/jmix-react-ui";

export const VisualComponentsDemoScreen = () => (
  <div>VisualComponentsDemoScreen</div>
);

registerRoute(
  "/menu",
  "/menu",
  "Visual Components Demo",
  <VisualComponentsDemoScreen />,
  "VisualComponentsDemo",
  "VisualComponentsDemo"
);