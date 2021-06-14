import {useEntityListData} from "@haulmont/jmix-react-core";
import {Order} from "../../jmix/entities/Order_";
import {gql} from "@apollo/client";
import React, {useState} from "react";
import {Button, InputNumber, List, Space, Spin} from "antd";

export const UseEntityListDataDemo = () => {

  const [offset, setOffset] = useState(0);

  const {items, listQueryResult: {loading}, executeListQuery} = useEntityListData<Order>({
    listQuery: gql`
      query OrderList {
        Order_List (
          filter:{amount: [{_gte: 10}]}
          offset: 0,
          limit: 10
        ) {
          id
          amount
          date
          lines {
            id
            quantity
            product {
              id
              name
            }
          }
        }
      }
    `,
    entityName: 'Order_'
  });

  if (loading) {
    return <Spin/>
  }

  return (
    <div>
      <Space direction={"horizontal"}>
        Offset
        <InputNumber value={offset}
                     onChange={(e) => setOffset(e)}/>
        <Button type={"primary"} onClick={() => executeListQuery({variables: {offset}})}>
          Reload
        </Button>
      </Space>
      <List dataSource={items}/>
    </div>
  )
}
