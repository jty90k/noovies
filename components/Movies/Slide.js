import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Dimensions, Image } from "react-native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  background-color: red;
`;

const BG = styled.Image`
    height: 100%,
    width: 100%;
`;

//최종적으로 슬라이드 정보 가져와서 화면에 띄운다.
const Slide = ({ id, title, backgroundImage, votes, overview }) => (
  <Container>
    <Image
      style={{ width: "100%", height: "100%" }}
      source={{ uri: apiImage(backgroundImage) }}
    />
  </Container>
);

//슬라이드안에 넣을 정보
Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Slide;
