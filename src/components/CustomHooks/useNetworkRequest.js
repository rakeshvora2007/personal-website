import React, { useState, useEffect } from "react";
import axios from "axios";

const useNetworkRequest = url => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setStatus("loading");
    setLoading(true);
    axios
      .get(url)
      .then(({ data }) => {
        setStatus("data");
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setStatus("error");
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { status, loading, error, data };
};

export default useNetworkRequest;
