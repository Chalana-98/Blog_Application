import { useState } from "react";
import apiEndpoints from "../api/apiEndpoints";

export const useFetchJson = (endPointKey) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(apiEndpoints[endPointKey]);
      const json = await response.json();
      console.log(json);
      setData(json);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setIsLoading(false);
    }
  };

  return { error, isLoading, data, fetchData };
};
