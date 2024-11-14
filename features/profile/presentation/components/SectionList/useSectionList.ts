import {useState} from "react";

export const useSectionList = () => {
  const [selection, setSelection]= useState(0)

  return {selection, setSelection}
}
