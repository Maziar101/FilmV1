import { AccordionDetails, Stack , Button} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../../../../Components/Spinner";
import "./style.css"
export default function Episodes({ episodeIndex, sources }) {
  return (
    <>
      {episodeIndex||sources ? (
        <>
          <AccordionDetails className="accardeon-episodes">
            <Stack className="accardeon-episode">
              <p>Episode : {episodeIndex+1}</p>
              <Link to={sources}><Button variant="contained">Watch</Button></Link>
            </Stack>
          </AccordionDetails>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
