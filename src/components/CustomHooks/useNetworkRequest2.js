import React, { useState, useEffect } from "react";
import axios from "axios";

/* import {
  getRequest,
  addRequest,
  deleteRequest,
  updateRequest
} from "../Admin/RequestAssociation"; */

const useNetworkRequest2 = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("loading");

  const fxn = (category, type, requestData, _id) => {
    setStatus("loading");
    setLoading(true);
      switch (type) {
        case "ADD": {
          console.log("I am addddingggg");
          let url = `https://personal-website--backend.herokuapp.com/${category}`;
          // send request with appropriate data
          axios
            .post(url, requestData)
            .then(({ data }) => {
              let oldData = data;
              let newData = [...oldData, data.data];
              setData(newData);
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
        case "DELETE": {
          let url = `https://personal-website--backend.herokuapp.com/${category}`;
          // send request with appropriate data
          axios
            .delete(url, { data: { _id } })
            .then(deleted => {
              if (deleted.statusText === "deleted") {
                const newDataArray = data.filter(value => value._id !== _id);
                setData(newDataArray);
              }
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
        case "UPDATE": {
          let url = `https://personal-website--backend.herokuapp.com/${category}`;
          // send request with appropriate data
          axios
            .put(url, requestData)
            .then(({ data }) => {
              let oldData = data;
              let newData = [...oldData, data.data];
              setData(newData);
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
  }

/*   useEffect(() => {
    
  }, [category, type]); */

  return { fxn, status, loading, error, data };
};

export default useNetworkRequest2;
