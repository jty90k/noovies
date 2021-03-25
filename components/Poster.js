import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { apiImage } from "../api";

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

const Poster = ({ url = "https://unsplash.com/photos/X_d7m2r70bA" }) => (
  <Image source={{ uri: apiImage(url) }} />
);

Poster.prototype = {
  url: PropTypes.string,
};

export default Poster;
