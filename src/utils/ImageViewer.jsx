import React, {
  useState,
  forwardRef,
  useImperativeHandle
} from "react";

export const ImageViewer = forwardRef((props, ref) => {
  const [image, setImage] = useState();

  useImperativeHandle(ref, () => ({
    clearImage() {
      setImage("");
    }
  }));

  const imageView = e => {
    var file = e.target.files[0];

    // Setting Image
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      props.handleImageUrl(file);
    }
  };

  return (
    <>
      <input type="file" id="imgInp" required onChange={e => imageView(e)} />
      <img
        id="blah"
        src={image}
        alt="No image selected"
        height="300px"
        width="300px"
      />
    </>
  );
});
