import React from "react";
import {useMetadata} from "@haulmont/jmix-react-core";
import {useEntityList} from "@haulmont/jmix-react-ui";
import {gql} from "@apollo/client";

export const DataComponentsDemo = () => {

  const metadata = useMetadata();

  useEntityList({
    listQuery: gql`
        query {
          CustomerList {
            id,
            email,
            name
          }
        }
    `,
    routingPath: '/data-components',
    entityName: 'Customer',
    deleteMutation: gql`
      mutation($id: String!) {
        delete_Customer(id: $id)
      }
    `
  })



  return (
    <div>
      {JSON.stringify(metadata)}
    </div>
  )
};
