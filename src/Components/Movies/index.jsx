import { Stack } from "@mui/material";
import React from "react";
import "./style.css"
import { Link } from "react-router-dom";
export default function MoviesHome({ image, title , id}) {
  return (
    <>
      <Link  to={`/movie-details/${id}`} class="card movies-img-home" style={{width: "18rem"}}>
        <img src={image} class="card-img-top" alt="..." />
        <Stack class="card-body">
          <p class="card-text">
            {title}
          </p>
        </Stack>
      </Link>
    </>
  );
}
