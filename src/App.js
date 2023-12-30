import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SumState from "./utils/SumState";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Movies from "./Pages/Movies";
import MovieDetails from "./Pages/MovieDetails";
import PageNotFound from "./Pages/PageNotFound";
import { Stack } from "@mui/material";
import Form from "./Pages/LoginRegister/Form";
export default function App() {
  const [token, setToken] = useState(false);

  return (
    <>
      <SumState.Provider value={{ token, setToken }}>
        <Navbar />
        <Stack p={"50px"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie-details/:id" element={<MovieDetails />} />
            <Route
              path="/login-register"
              element={token ? <Navigate to={"/"} /> : <Form />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Stack>
        <Footer />
      </SumState.Provider>
    </>
  );
}
