import React from "react";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/material";
import Episodes from "./Episodes";
import "../Seasions/Episodes/style.css"
export default function Seasions({ season, seasons }) {
  const epids = seasons?.episodes?.map((e, index) => {
    return (
      <Episodes
        episodeIndex={index}
        key={index}
        sources={e?.sources[0]?.link}
      />
    );
  });
  return (
    <div>
      <Accordion style={{padding:"20px",borderRadius:"25px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight:"700"}}>Season : {season}</Typography>
        </AccordionSummary>
        <Stack className="episodes">{epids}</Stack>
      </Accordion>
    </div>
  );
}
