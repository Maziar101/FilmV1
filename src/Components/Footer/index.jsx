import { Stack } from "@mui/material";
import React from "react";
import "../Footer/Style/style.css"
export default function Footer() {
  return (
    <Stack className="footer" component={"footer"}>
      <Stack className="container part-1-of-footer">
        <Stack className="about-site-in-footer">
          <img className="netflix-logo" src="https://s6.uupload.ir/files/logo_cc4r.png" alt="logo" />
          <Stack component={"h2"}>Netflix Site</Stack>
          <p>Developer: Maziar Zamani</p>
        </Stack>
        <Stack><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias accusantium aperiam numquam ab? Pariatur accusamus magnam nobis amet atque molestias laborum neque odio velit fugiat veritatis totam illum, ducimus ullam sint eos perferendis. Ad quae facilis earum nesciunt tempore tempora voluptatum rerum, eligendi error eveniet exercitationem quaerat molestiae numquam odio!</p></Stack>
      </Stack>
      <Stack style={{textAlign:"center"}}>© Maziar 2023 : Dont Copy The Codes !</Stack>
    </Stack>
  );
}
