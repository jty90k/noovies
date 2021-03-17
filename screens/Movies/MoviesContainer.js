import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../../api";
import MoviesPresent from "./MoviesPresenter";

// 다른 곳으로 이동시 navigation을 사용한다.
export default () => {
  // state를 크게 2가지로 사용할 수 있다. (1. 전체를 받아서 사용, 2. 부분으로 사용)
  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    popular: [],
    upcoming: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      loading: false,
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcoming,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return <MoviesPresent {...movies} />;
};
