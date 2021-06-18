import {useEntityEditorData} from "@haulmont/jmix-react-core";
import {gql} from "@apollo/client";

export const UseEntityEditorDataDemo = () => {

  const {item, executeLoadQuery} = useEntityEditorData({
    entityName: "Customer",
    loadQuery: gql`
      query CustomerById($id: String = "", $loadItem: Boolean!) {
        CustomerById(id: $id) @include(if: $loadItem) {
          id
          _instanceName
          email
          name
        }
      }
    `
  },);

  return (
    <div>
      {JSON.stringify(item)}
    </div>
  )
}