import {Category, Component, Palette, Previews, Variant} from "@haulmont/react-ide-toolbox";
import React from "react";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Link from "antd/es/typography/Link";

export const AntdPalette = () => {
  return (
    <Palette>
      <Category name="Typography">
        <Component name="Title">
          <Variant requiredParams={["level"]}>
            <Title/>
          </Variant>
        </Component>
        <Component name="Text">
          <Variant>
            <Text/>
          </Variant>
          <Variant name="Code">
            <Text code={true}></Text>
          </Variant>
        </Component>
        <Component name="Link">
          <Variant>
            <Link href="" target="_blank"></Link>
          </Variant>
        </Component>
      </Category>
    </Palette>
  );
}