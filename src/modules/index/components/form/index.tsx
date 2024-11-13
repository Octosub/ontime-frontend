'use client';

import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { handleSubmit as handleFormSubmit, submitProps} from "../../hooks/useLogic";

interface FormProps {
  setNextTrainTime: (time: string) => void;
}

export const Form = (props: FormProps) => {
  const { setNextTrainTime } = props;
  const {
    register,
    handleSubmit
  } = useForm<submitProps>();

  const onSubmit = (data: submitProps) => {
    handleFormSubmit(data, setNextTrainTime);
  }

  return (
    <Box>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="水道橋" {...register("station")} />
        <input defaultValue="north" {...register("direction")} />
        <input type="submit" />
      </form>
    </Box>
  )
}