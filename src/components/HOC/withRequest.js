import React, { useEffect, useRef, useState } from "react";
import useNetworkRequest from "../CustomHooks/useNetworkRequest";
import imageUploader from "../../utils/imageUploader";
import { ImageViewer } from "../../utils/ImageViewer.jsx";

const withRequest = (WrappedComponent, category) => props => {
  const { fxn, status, loading, error, currentData } = useNetworkRequest(
    category
  );
  const [imageUrl, setImageUrl] = useState();
  const childRef = useRef();

  const handleImageUrl = url => {
    setImageUrl(url);
  };

  const handleAdd = async data => {
    console.log("handle add");
    let firebaseUrl = await imageUploader(imageUrl);
    data[`${category}Image`] = firebaseUrl;
    fxn("ADD", data);
    setImageUrl("");
  };

  const handleDelete = id => {
    console.log("handle delete");
    fxn("DELETE", null, id);
  };

  const handleUpdate = data => {
    console.log("handle update");
    fxn("UPDATE", data);
  };

  useEffect(() => {
    console.log("with Request loaded... NEW DATA");
    console.log(currentData);
  }, [currentData]);

  return (
    <WrappedComponent
      {...props}
      status={status}
      loading={loading}
      error={error}
      data={currentData}
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      imageUrl={imageUrl}
      imageView={<ImageViewer handleImageUrl={handleImageUrl} ref={childRef} />}
    />
  );
};

export default withRequest;
