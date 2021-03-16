import React from "react";
import { View, Text, Button } from "react-native";

// 다른 곳으로 이동시 navigation을 사용한다.
export default ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: "black" }}>
    <Text>Movies</Text>
    <Button title="Movie" onPress={() => navigation.navigate("Detail")} />
  </View>
);
