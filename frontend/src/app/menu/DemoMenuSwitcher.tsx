import React, { useState, useEffect } from "react"
import {globalMenuType} from "../App";
import {Space, Radio} from "antd";

export const DemoMenuSwitcher = () => {
  const [menuType, setMenuType] = useState<string>(globalMenuType?.menuType);
  useEffect(() => {
    globalMenuType?.setMenuType(menuType);
  }, [menuType]);

  return (
    <Space direction={"horizontal"}>
      <Radio
        value={"vertical"}
        checked={menuType === 'vertical'}
        onChange={(e) => {
          setMenuType(e.target.value);
        }}
      >
        Vertical Menu
      </Radio>
      <Radio
        value={"horizontal"}
        checked={menuType === 'horizontal'}
        onChange={(e) => {
          setMenuType(e.target.value);
        }}
      >
        Horizontal Menu
      </Radio>
    </Space>
  )
}