import React, { useEffect, useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
  getFocusedRouteNameFromRoute(route) || "Movies";

// Stack Navigator 안에는 Tab Navigator가 들어가 있다. 하단에 메뉴 클릭 시 각 화면으로 이동 시켜주는 것
// ({route}) and console.log(route)하게 되면 각 하단 메뉴에 index값을 알 수 있다. 위에서 아래로 (0,1,2,3)이다.
export default ({ navigation, route }) => {
  // useEffect를 사용하여 각 각에 맞는 하단 스크린에 맞는 Header가 변경된다!
  useLayoutEffect(() => {
    console.log();
    navigation.setOptions({
      title: getHeaderName(route),
    });
  }, [route]);
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Favorite" component={Favs} />
    </Tabs.Navigator>
  );
};
