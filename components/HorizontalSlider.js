import React from "react";
import { ScrollView } from "react-native";
import Title from "./Title";

export default ({ title, children }) => (
  <>
    {/* 현재 인기 영화 */}
    <Title title={title} />
    <ScrollView
      style={{ marginTop: 20, marginBottom: 40 }}
      contentContainerStyle={{ paddingleft: 30 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </>
);
