import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../api";

// 다른 곳으로 이동시 navigation을 사용한다.
export default () => {
  // state를 크게 2가지로 사용할 수 있다. (1. 전체를 받아서 사용, 2. 부분으로 사용)
  const getData = async () => {
    const [nowPlaying, error] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text>Movies</Text>
    </View>
  );
};
