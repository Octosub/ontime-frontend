"use client";

import { Box, Typography } from "@mui/material";
import { Form } from "./components/form";
import { useState } from "react";

export const Index = () => {
  const [nextTrainTime, setNextTrainTime] = useState<string>("");
  return (
    <Box>
      <h1>On Time</h1>
      <Form setNextTrainTime={setNextTrainTime} />
      <Typography sx={{fontSize:"12px"}}>Next Train Time</Typography>
      <Typography sx={{color:"red"}}>{nextTrainTime}</Typography>
    </Box>
  )
}