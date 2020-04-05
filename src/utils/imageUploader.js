import axios from "axios";

export const imageUpload = (e,cb) => {

    let imageFormObj = new FormData();

    imageFormObj.append("imageName", "multer-image-" + Date.now());
    imageFormObj.append("imageData", e.target.files[0]);

    axios.post(`https://personal-website--backend.herokuapp.com/image/uploadmulter`, imageFormObj)
      .then(({data}) => {
        if (data.success) {
            // setprojectImage(`https://personal-website--backend.herokuapp.com/${data.data.imageData}`)
            alert("Image has been successfully uploaded using multer");
            cb(`https://personal-website--backend.herokuapp.com/${data.data.imageData}`);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error while uploading image using multer");
      });
} 