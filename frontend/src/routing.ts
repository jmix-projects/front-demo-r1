import "./app/templates/entity-cards/CustomerCards";
import "./app/templates/master-detail/CustomerMasterDetail";
import "./app/components-conditional/ConditionalComponentsDemoScreen";
import "./app/components-visual/VisualComponentsDemoScreen";
import "./app/datatypes/deeply-nested-test-entity/DeeplyNestedTestEntityEdit";
import "./app/datatypes/composition-o2o/CompositionO2OTestEntityList";
import "./app/datatypes/composition-o2o/CompositionO2OTestEntityEditor";
import "./app/templates/entity-management/CustomerList";
import "./app/templates/entity-management/CustomerEditor";
import "./app/menu/MenuDemoScreen";
import "./app/datatypes/composition-o2m/CompositionO2MTestEntityList";
import "./app/datatypes/composition-o2m/CompositionO2MTestEntityEditor";
import "./app/tools/jsx-tree/JsxTreeDemoScreen";
import "./app/datatypes/datatypes-test-entity/DatatypesTestEntityList";
import "./app/datatypes/datatypes-test-entity/DatatypesTestEntityEditor";
import { menuItems } from "@haulmont/jmix-react-ui";
// Code below demonstrates how we can create SubMenu section
// Remove '/*' '*/' comments and restart app to get this block in menu

/*
// This is RouteItem object that we want to see in User Settings sub menu
const backToHomeRouteItem = {
  pathPattern: "/backToHome",
  menuLink: "/",
  component: null,
  caption: "home"
};
// SubMenu object
const userSettingsSubMenu = {
  caption: 'UserSettings', // add router.UserSettings key to src/i18n/en.json for valid caption
  items: [backToHomeRouteItem]};
// Add sub menu item to menu config
menuItems.push(userSettingsSubMenu);
*/
