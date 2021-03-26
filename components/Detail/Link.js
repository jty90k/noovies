import React from "react";
import { TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  font-weight: 600;
  margin-right: 10px;
`;

const Link = ({ onPress, text, icon }) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <Text style={{ color: "white" }}>{text}</Text>
      <Fontisto name={icon} color="white" size={26} />
    </Container>
  </TouchableOpacity>
);

export default Link;
