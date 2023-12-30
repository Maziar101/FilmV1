import { Stack } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Stack style={{ flexDirection: "row", alignItems: "center" ,gap:"30px"}} p={"50px"}>
      <Stack>
        <img
          width={"500px"}
          src="https://s6.uupload.ir/files/logo_cc4r.png"
          alt=""
        />
      </Stack>
      <Stack style={{gap:"20px"}}>
        <h1>Netflix</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea aliquid veritatis officia in! Dignissimos numquam, a minima ea enim dolore corporis possimus esse obcaecati minus quo ut harum laborum explicabo voluptatibus maxime totam porro veritatis vero pariatur asperiores magni?</p>
        <p>Created By Maziar</p>
      </Stack>
    </Stack>
  );
}
