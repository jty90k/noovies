import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  margin-bottom: 40px;
`;

const Container = styled.View``;

const UpcomingContainer = styled.View`
  margin-top: 20px;
`;

// React-Native에서  ScrollView가 필요한 건 웹브라우저처럼, 브라우저에서는 뭔가가 발생하면 더 많은 컨텐츠들이 있고 크롬에서도 자동으로 스크롤이 되잖아
// 근데 핸드폰에서는 그게 안 되기 때문에 SchrollView를 추가한거다 인건 필수다
// 그냥 justifyContent쓰면 default값이다. React-Native의 flex direction은 column이다, 기본 설정에 의한 거다 (매우중요)

export default ({ loading, nowPlaying, popular, upcoming }) => (
  // 현자 상영중인 영화 소개
  <ScrollContainer loading={loading}>
    <>
      <SliderContainer>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {nowPlaying.map((movie) => (
            <Slide
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              votes={movie.vote_average}
              backgroundImage={movie.backdrop_path}
              poster={movie.poster_path}
            />
          ))}
        </Swiper>
      </SliderContainer>

      {/* 현재 인기 영화 */}
      <Container>
        <HorizontalSlider title={"Popular Movies"}>
          {popular.map((movie) => (
            <Vertical
              id={movie.id}
              key={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
        {/* 신작 영화 */}
        <Title title={"Coming Soon"}></Title>
        <UpcomingContainer>
          {upcoming.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseData={movie.release_date}
              poster={movie.poster_path}
              overview={movie.overview}
            />
          ))}
        </UpcomingContainer>
      </Container>
    </>
  </ScrollContainer>
);
