"use client";

export interface submitProps {
  station: string;
  direction: string;
}

export const handleSubmit = async (
  props: submitProps,
  setNextTrainTime: (time: string) => void
) => {
  const { station, direction } = props;

  try {
    const response = await fetch(`https://localhost:8000/${station}?direction=${direction}`);
    if (!response.ok) {
      throw new Error("Api call failed");
    }
    const result = await response.json();
    setNextTrainTime(result);
  } catch(error) {
    console.log("Error: ", error);
  }
}