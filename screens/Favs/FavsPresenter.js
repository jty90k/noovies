import React, { useState } from "react";
import { Dimensions, PanResponder, Animated, LogBox } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  padding-top :50px
  flex: 1;
  background-color: black;
  align-items: center;
`;

const Poster = styled.Image`
  border-radius: 20px
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const styles = {
  top: 80,
  height: HEIGHT / 1.5,
  width: "90%",
  position: "absolute",
};

export default ({ results }) => {
  const [topIndex, setTopIndex] = useState(0);
  const nextCard = () => setTopIndex((currentValue) => currentValue + 1);
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (evt, { dx, dy }) => {
      if (dx >= 30) {
        //console.log("discard to the right");
        Animated.spring(position, {
          toValue: {
            x: WIDTH + 100,
            y: dy,
          },
          useNativeDriver: true,
        }).start(nextCard);
      } else if (dx <= -30) {
        //console.log("discard to the left");
        Animated.spring(position, {
          toValue: {
            x: -WIDTH - 100,
            y: dy,
          },
          useNativeDriver: true,
        }).start(nextCard);
      } else {
        Animated.spring(position, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
        }).start();
      }
    },
  });
  // 카드 넘기는 로직들
  const rotationValues = position.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ["-0deg", "0deg", "0deg"],
    extrapolate: "clamp",
  });
  const secondCardOpacity = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.5, 1],
    extrapolate: "clamp",
  });
  const secondCardScale = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.7, 1],
    extrapolate: "clamp",
  });

  // 포스터가 상단으로 올라가면 값이 0 가면서 zIndex:1이 된다.
  // 첫번째 포스터
  return (
    <Container>
      {results.map((result, index) => {
        if (index < topIndex) {
          return null;
        }
        if (index === topIndex) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: 1,
                transform: [
                  { rotate: rotationValues },
                  ...position.getTranslateTransform(),
                ],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else if (index === topIndex + 1) {
          // 두번째 포스터
          return (
            <Animated.View
              style={{
                ...styles,
                zindex: -index,
                opacity: secondCardOpacity,
                transform: [{ scale: secondCardScale }],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else {
          // 세번째 포스터
          return (
            <Animated.View
              style={{
                ...styles,
                zindex: -index,
                opacity: 0,
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        }
      })}
    </Container>
  );
};
