import React, { useEffect, useState } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi } from "../../api";

export default ({
  navigation,
  route: {
    params: { id, title, backgroundImage, poster, votes, overview },
  },
}) => {
  const [moive, setMoive] = useState({
    title,
    backgroundImage,
    poster,
    overview,
    votes,
  });
  const getData = async () => {
    const [getMovie, getMovieError] = await movieApi.moive(id);
    setMoive({
      ...getMovie,
      title: getMovie.title,
      backgroundImage: getMoive.poster_path,
      poster: getMovie.poster_path,
      overview: getMovie.overview,
      votes: getMovie.votes_average,
    });
  };

  useEffect(() => {
    getData();
  }, [id]);
  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });
  return <DetailPresenter {...moive} />;
};
