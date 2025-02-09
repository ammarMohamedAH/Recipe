import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import React from "react";

export default function useApidata(url, keyValue) {
  function getData() {
    return axios.get(url);
  }

  return useQuery({
    queryKey: [keyValue],
    queryFn: getData,
  });
}
