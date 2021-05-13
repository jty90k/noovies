import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import Poster from "./Poster";
import { trimText, formatDate } from "../utils";
import { useNavigation } from "@react-navigation/native";

// 다음에 나올 신작영화 소개 로직 코드

const Container = styled.View`
  padding: 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold
  margin-bottom:10px;
`;

const ReleaseData = styled.Text`
  color: white;
  font-size: 12px;
`;

const Overview = styled.Text`
  margin-top: 10px;
  color: white;
`;

const Horizontal = ({
  isTv = false,
  id,
  title,
  poster,
  overview,
  releaseData,
}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      isTv,
      id,
      title,
      poster,
      overview,
      releaseData,
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 30)}</Title>
          {releaseData ? (
            <ReleaseData>{formatDate(releaseData)}</ReleaseData>
          ) : null}
          <Overview>{trimText(overview, 80)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};
Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseData: PropTypes.string,
  poster: PropTypes.string,
  overview: PropTypes.string.isRequired,
};

export default Horizontal;
