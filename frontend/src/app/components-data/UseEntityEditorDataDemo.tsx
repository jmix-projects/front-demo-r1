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
    `,
    entityId: '0fd79ee4-be3e-9ecf-8450-068be04dc4a1'
  },);

  return (
    <div>
      {JSON.stringify(item)}
    </div>
  )
}