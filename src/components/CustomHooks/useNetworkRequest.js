import { useState, useEffect } from "react";
import axios from "axios";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + sessionStorage.getItem("token");

const useNetworkRequest = category => {
  let url = `https://personal-website--backend.herokuapp.com/${category}`;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentData, setcurrentData] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    (async () => {
      setStatus("loading");
      setLoading(true);
      try {
        let { data } = await axios.get(url);
        setcurrentData(data.data);
        setStatus("data");
      } catch (error) {
        setStatus("error");
        setError(error);
      }
      setLoading(false);
    })();
  }, [category]);

  const fxn = async (type, requestData, _id) => {
    setStatus("loading");
    setLoading(true);
    let token = window.sessionStorage.getItem("token");
    switch (type) {
      case "ADD": {
        try {
          let { data } = await axios.post(url, requestData);
          let newData = [...currentData, data.data];
          setcurrentData(newData);
          setStatus("data");
        } catch (error) {
          setStatus("error");
          setError(error);
        }
        setLoading(false);
        break;
      }
      case "DELETE": {
        let deleted = await axios.delete(url, { data: { _id } });
        try {
          if (deleted.statusText === "deleted") {
            const newDataArray = currentData.filter(data => data._id !== _id);
            setcurrentData(newDataArray);
          }
          setStatus("data");
        } catch (error) {
          setStatus("error");
          setError(error);
        }
        setLoading(false);
        break;
      }
      case "UPDATE": {
        let { data } = await axios.put(url, requestData);
        try {
          let newData = [...currentData, data.data];
          setcurrentData(newData);
          setStatus("data");
        } catch (error) {
          setStatus("error");
          setError(error);
        }
        setLoading(false);
        break;
      }
    }
  };
  return { fxn, status, loading, error, currentData };
};

export default useNetworkRequest;
