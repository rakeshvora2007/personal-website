import React, { useEffect, useRef, useState } from "react";
import useNetworkRequest from "../CustomHooks/useNetworkRequest";
import useNetworkRequest2 from "../CustomHooks/useNetworkRequest2";
import imageUploader from "../../utils/imageUploader";
import { ImageViewer } from "../../utils/ImageViewer.jsx";

const withRequest = (WrappedComponent, category) => props => {
  const { status, loading, error, data } = useNetworkRequest(category, "GET");
  const {fxn, status: defStatus, loading: defLoading, error: defError, data: defData } = useNetworkRequest2();
  const [imageUrl, setImageUrl] = useState();
  const childRef = useRef();

  const handleImageUrl = url => {
    setImageUrl(url);
  };

  const handleAdd = data => {
    console.log(data);
    imageUploader(imageUrl).then(firebaseUrl => {
      data["projectImage"] = firebaseUrl;
      fxn(category, "ADD", data);
    });
    console.log("handle add");
  };

  const handleDelete = id => {
    console.log("handle delete");
    fxn(category, "DELETE", null, id);
  };

  const handleUpdate = () => {
    console.log("handle update");
    fxn(category, "UPDATE", data);
  };

  useEffect(() => {
    console.log("with Request loaded...");
  }, []);

  return (
    <WrappedComponent
      {...props}
      status={status}
      loading={loading}
      error={error}
      data={data}
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      imageUrl={imageUrl}
      imageView={<ImageViewer handleImageUrl={handleImageUrl} ref={childRef} />}
    />
  );
};

export default withRequest;
