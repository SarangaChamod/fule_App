import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Index from "./index";
import IndexTwo from "./IndexTwo";
import IndexTree from "./indexTree";

const Drawer = createDrawerNavigator();

const DrawerNavi = () => {
  return (
    <Drawer.Navigator initialRouteName="Index">
      <Drawer.Screen name="Index" component={Index} />
      <Drawer.Screen name="IndexTwo" component={IndexTwo} />
      <Drawer.Screen name="IndexTree" component={IndexTree} />
    </Drawer.Navigator>
  );
};

export default DrawerNavi;
