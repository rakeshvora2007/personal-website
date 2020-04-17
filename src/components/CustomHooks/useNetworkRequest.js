import React, { useState, useEffect } from "react";
import axios from "axios";

/* import {
  getRequest,
  addRequest,
  deleteRequest,
  updateRequest
} from "../Admin/RequestAssociation"; */

const useNetworkRequest = (category, type, requestData, _id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setStatus("loading");
    setLoading(true);
    switch (type) {
      case "GET": {
        let url = `https://personal-website--backend.herokuapp.com/${category}`;
        // send request with appropriate data
        axios
          .get(url)
          .then(({ data }) => {
            console.log(data.data)
            setData(data.data);
            setStatus("data");
            setLoading(false);
          })
          .catch(error => {
            setStatus("error");
            setError(error);
            setLoading(false);
          });
          break;
      }
    }
  }, [category, type]);

  return { status, loading, error, data };
};

export default useNetworkRequest;
