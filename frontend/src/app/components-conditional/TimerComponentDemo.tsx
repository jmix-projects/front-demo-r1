import React, {useState} from "react";
import {useTimer} from "@haulmont/jmix-react-core";
import {Button, Checkbox, Space} from "antd";

export const TimerComponentDemo = () => {

  const [count, setCount] = useState(0);
  const [repeating, setRepeating] = useState(false);

  const {start, stop} = useTimer({
    callback: () => {
      setCount((count) => {
        return ++count
      })},
    delay: 1000,
    repeating
  });

  return (
    <Space direction={"horizontal"}>
      <Checkbox onChange={(e) => {setRepeating(e.target.checked)}}>
        Repeating
      </Checkbox>
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