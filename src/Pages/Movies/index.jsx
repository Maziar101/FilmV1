import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import Spinner from "../../Components/Spinner";
import MoviesHome from "../../Components/Movies";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://movies-api14.p.rapidapi.com/shows", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "03e306520fmsh931dc39f81d2e12p1ed2abjsnddd0923b48a7",
        "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data?.movies);
      });
  }, []);

  const MovieImages = movies.map((e, index) => {
    return (
      <MoviesHome
        key={index}
        id={e._id}
        title={e.original_title}
        image={e?.backdrop_path}
      />
    );
  });

  return (
    <>
      {movies.length > 0 ? (
        <>
          <h1 style={{marginLeft:"120px"}} className="container">Movies :</h1>
          <Stack
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            gap={"20px"}
            p={"40px"}
            width={"90%"}
            margin={"auto"}
            height={"auto"}
            overflow={"hidden"}
          >
            {MovieImages}
          </Stack>
        </>
      ) : (
        <Stack style={{ height: "1000px" }}>
          <Spinner />
        </Stack>
      )}
    </>
  );
}
