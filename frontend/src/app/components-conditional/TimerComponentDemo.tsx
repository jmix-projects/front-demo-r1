import React, {useState} from "react";
import {useTimer} from "@haulmont/jmix-react-core";
import {Button, Space} from "antd";

export const TimerComponentDemo = () => {

  const [count, setCount] = useState(0);


  const {start, stop} = useTimer(1000, () => {
    setCount((count) => {
      return ++count
    })
  }, false, true);

  return (
    <Space direction={"horizontal"}>
      <Button onClick={start}>
        Start timer
      </Button>
      <Button onClick={stop}>
        Stop timer
      </Button>
      {count}
    </Space>
  )
}