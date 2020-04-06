import axios from "axios";
import React, { useState } from "react";

export const ImageUpload = ({setImageUrl}) => {
  const [image, setImage] = useState();
  const imageUploader = e => {
    let imageFormObj = new FormData();

    imageFormObj.append("imageName", "multer-image-" + Date.now());
    imageFormObj.append("imageData", e.target.files[0]);

    axios
      .post(
        `https://personal-website--backend.herokuapp.com/image/uploadmulter`,
        imageFormObj
      )
      .then(({ data }) => {
        if (data.success) {
          setImage(
            `https://personal-website--backend.herokuapp.com/${data.data.imageData}`
          );
          setImageUrl(`https://personal-website--backend.herokuapp.com/${data.data.imageData}`);
          alert("Image has been successfully uploaded using multer");
        }
      })
      .catch(err => {
        console.log(err);
        alert("Error while uploading image using multer");
      });
  };

  return (
    <>
      <input
        type="file"
        id="imgInp"
        required
        onChange={e => imageUploader(e)}
      />
      <img
        id="blah"
        src={image}
        alt="No image selected"
        height="300px"
        width="300px"
      />
    </>
  );
};
