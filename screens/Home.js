import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => (
  <View>
    <Text>Homes</Text>
    <Button
      onPress={() => navigation.navigate("Detail")}
      title="Go to Detail"
    />
  </View>
);
