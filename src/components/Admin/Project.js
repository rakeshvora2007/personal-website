import React, { useEffect, useState } from "react";
import axios from "axios";

export const Project = () => {
  const [projects, setProjects] = useState();
  const [projectName, setProjectName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [projectImage, setprojectImage] = useState();
  const [imageId, setImageId] = useState();

  useEffect(() => {
    console.log(projects);
    axios
      .get("https://personal-website--backend.herokuapp.com/project")
      .then(({ data }) => {
        setProjects(data.data);
      });
  }, []);

  /* const readURL = input => {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        $("#blah").attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
  };

  $("#imgInp").change(function() {
    readURL(this);
  }); */

  const addProject = () => {
    axios
      .post("https://personal-website--backend.herokuapp.com/project", {
        projectName,
        subtitle,
        technologies,
        projectImage
      })
      .then(newProject => {
        const newProjectsArray = [...projects, newProject.data.data];
        setProjects(newProjectsArray);
      });
  };

  const deleteProject = id => {};

  const handleSubmit = e => {
    e.preventDefault();
    addProject();
  };

  const onAdd = () => {
    const newArray = [...technologies, " "];
    setTechnologies(newArray);
  };

  const onDelete = index => {
    console.log(index)
    const newArray = [
      ...technologies.slice(0, index),
      ...technologies.slice(index + 1)
    ];
    setTechnologies(newArray);
  };

  const handleChange = (index, value) => {
    const newArray = technologies.slice(0);
    newArray[index] = value;
    setTechnologies(newArray);
  };


  const uploadImage = (e) => {
    // let imageObj = {};

      let imageFormObj = new FormData();

      imageFormObj.append("imageName", "multer-image-" + Date.now());
      imageFormObj.append("imageData", e.target.files[0]);

      setprojectImage(URL.createObjectURL(e.target.files[0]))

      axios.post(`https://personal-website--backend.herokuapp.com/image/uploadmulter`, imageFormObj)
        .then(({data}) => {
          if (data.success) {
            setImageId(data.data.imageData);
            setprojectImage(`https://personal-website--backend.herokuapp.com/${data.data.imageData}`)
            alert("Image has been successfully uploaded using multer");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Error while uploading image using multer");
        });
  }





  return (
    <>
      <div style={styles.header}>
        <div>Project Name</div>
        <div>Subtitles</div>
        <div>Technologies</div>
        <div>Project Image</div>
        {projects ? (
          projects.map(project => {
            return (
              <div key={project._id}>
                {project.projectName} : {project.subtitle}
                {project.technologies
                  ? project.technologies.map((technology, index) => {
                      return <span key={index}>{technology}</span>;
                    })
                  : null}
                {project.projectImage ? <img src={project.projectImage} height="200px" width="200px"/> : null}
              </div>
            );
          })
        ) : (
          <div>None</div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div style={styles.form}>
          Project Name:
          <input
            name="projectName"
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
            required
          />
          Subititles:
          <input
            name="subtitle"
            value={subtitle}
            onChange={e => setSubtitle(e.target.value)}
            required
          />
          Technologies:
          {technologies.map((technology, index) => {
            return (
              <div key={index}>
                <input
                  name={technology}
                  value={technology}
                  onChange={e => handleChange(index, e.target.value)}
                />
                <span onClick={() => onDelete(index)}>x</span>
              </div>
            );
          })}
          <button type="button" onClick={() => onAdd()}>
            Add
          </button>
          Project Image :
          <input type="file" id="imgInp" required onChange={e => uploadImage(e)}/>
          <img
            id="blah"
            src={projectImage}
            alt="No image selected"
            height="300px"
            width="300px"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

const styles = {
  header: {
    display: "inline-flex",
    border: "2px solid black"
  },
  form: {
    margin: "200px",
    display: "inline-flex",
    flexDirection: "column"
  }
};
