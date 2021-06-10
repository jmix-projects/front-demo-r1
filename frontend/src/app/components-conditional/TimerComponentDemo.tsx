import React, {useState} from "react";
import {useTimer} from "@haulmont/jmix-react-core";
import {Button, Space} from "antd";

export const TimerComponentDemo = () => {

  const [count, setCount] = useState(0);

  const {start, stop} = useTimer(3000, () => {
    alert("Timer tick")
  }, false, true);

  return (
    <Space direction={"horizontal"}>
      <Button onClick={start}>
        Start timer
      </Button>
      <Button onClick={stop}>
        Stop timer
      </Button>
    </Space>
  )
}