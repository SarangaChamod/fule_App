import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DrawerNavi from "../screen/DrawerNavi";

const Stack = createStackNavigator();

const StackNavi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="DrawerNavi" component={DrawerNavi}  options={{ headerShown: false }} // Hide header for DrawerNavi
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavi;
