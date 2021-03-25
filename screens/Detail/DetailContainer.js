import React, { useEffect, useState } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi } from "../../api";
import { tvApi } from "../../api";

export default ({
  navigation,
  route: {
    params: { isTv, id, title, backgroundImage, poster, votes, overview },
  },
}) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMoive] = useState({
    title,
    backgroundImage,
    poster,
    overview,
    votes,
  });
  const getData = async () => {
    if (isTv) {
      const [getMoive, getMoiveError] = await tvApi.show(id);
    } else {
      const [getMovie, getMovieError] = await movieApi.moive(id);
    }
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
  return <DetailPresenter movie={movie} loading={loading} />;
};
