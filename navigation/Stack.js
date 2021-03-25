import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Detail";
import Tabs from "./Tabs";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default () => (
  // Tabs Stack Navigator안에는 Tabs-> screens파일들이 들어가 있다.(화면에 나옴) / Detail은 Tab이 감싸고 있다.
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "black",
        borderBottomColor: "black",
        shadowColor: "black",
      },
      headerTintColor: "white",
      headerBackTitleVisible: false,
      headerBackImage: () => (
        <Ionicons name="md-arrow-back" color={"white"} size={26} />
      ),
    }}
  >
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
