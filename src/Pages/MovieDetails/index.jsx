import { Alert, Stack, Button } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import "../MovieDetails/Style/style.css";
import Seasions from "./Seasions";
import SumState from "../../utils/SumState";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const { token } = useContext(SumState);
  useEffect(() => {
    fetch(`https://movies-api14.p.rapidapi.com/show/${id}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "03e306520fmsh931dc39f81d2e12p1ed2abjsnddd0923b48a7",
        "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);
  const Seasons = movie?.seasons?.map((e, index) => {
    return (
      <Seasions key={index} season={e.season} seasons={movie.seasons[index]} />
    );
  });
  return (
    <>
      {movie ? (
        <>
          <Stack>
            <Stack
              className="movie-background-img"
              style={{ background: `url(${movie.show.backdrop_path})` }}
            ></Stack>
            <Stack className="movie-poster-detail">
              <img
                className="movie-poster-detail-img"
                src={movie.show.poster_path}
                alt=""
              />
              <Stack className="movie-about">
                <h2>{movie.show.title}</h2>
                <p>{movie.show.overview}</p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontWeight: "700",
                  }}
                >
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/imdb.png"
                    alt="imdb"
                  />{" "}
                  : {movie.show.vote_average}
                </p>
              </Stack>
            </Stack>
            <Stack p={"50px"} gap={"20px"} className="container">
              <h4 className="text-center">Youtube Video</h4>
              <Link
                style={{ width: "100px", margin: "auto" }}
                to={movie.show.youtube_trailer}
                className="btn btn-primary"
                type="button"
              >
                Watch
              </Link>
            </Stack>
            {token ? (
              <>
                <Stack style={{ width: "80%", margin: "auto", gap: "20px" }}>
                  {Seasons}
                </Stack>
              </>
            ) : (
              <>
                <Stack justifyContent={"center"}>
                  <Alert severity="error" className="error-alert">
                    Please Login To See Download Box !
                    <Link to={"/login-register"} style={{ marginLeft: "20px" }}>
                      <Button variant="outlined" color="error">
                        Login
                      </Button>
                    </Link>
                  </Alert>
                </Stack>
              </>
            )}
          </Stack>
        </>
      ) : (
        <>
          <Stack style={{height:"1000px"}}>
            <Spinner />
          </Stack>
        </>
      )}
    </>
  );
}
