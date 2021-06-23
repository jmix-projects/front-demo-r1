import React, { useState, useEffect } from "react"
import {setGlobalMenuType} from "../App";
import {Space, Radio} from "antd";

export const DemoMenuSwitcher = () => {
  const [menuType, setMenuType] = useState<string>('vertical');
  useEffect(() => {
    setGlobalMenuType?.(menuType);
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