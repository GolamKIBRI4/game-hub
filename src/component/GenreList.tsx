import React from "react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres, errors, IsLoading } = useGenre();
  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
