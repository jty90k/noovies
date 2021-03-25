import React from "react";
import { ScrollView, View } from "react-native";
import Title from "./Title";
import PropTypes from "prop-types";

const HorizontalSlider = ({ title, children }) => (
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

HorizontalSlider.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;
