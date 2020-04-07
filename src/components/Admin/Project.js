import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import imageUploader from "../../utils/imageUploader.js";
import { ImageViewer } from "../../utils/ImageViewer.jsx";

export const Project = () => {
  const [projects, setProjects] = useState();
  const [projectName, setProjectName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [imageUrl, setImageUrl] = useState();

  const childRef = useRef();

  useEffect(() => {
    console.log(projects);
    axios
      .get("https://personal-website--backend.herokuapp.com/project")
      .then(({ data }) => {
        setProjects(data.data);
      });
  }, []);

  const addProject = () => {
    // submit image
    imageUploader(imageUrl).then(firebaseUrl => {
      // execute add project api
      axios
        .post("https://personal-website--backend.herokuapp.com/project", {
          projectName,
          subtitle,
          technologies,
          projectImage: firebaseUrl
        })
        .then(newProject => {
          const newProjectsArray = [...projects, newProject.data.data];
          setProjects(newProjectsArray);
        });
    });
  };

  const deleteProject = id => {};

  const clearForms = () => {
    setProjectName("");
    setSubtitle("");
    setTechnologies([]);
    setImageUrl("");
    childRef.current.clearImage();
  };

  const handleSubmit = e => {
    e.preventDefault();
    addProject();
    clearForms();
  };

  const handleImageUrl = url => {
    setImageUrl(url);
  };


  const onAdd = () => {
    const newArray = [...technologies, " "];
    setTechnologies(newArray);
  };

  const onDelete = index => {
    console.log(index);
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
                {project.projectImage ? (
                  <img
                    src={project.projectImage}
                    height="200px"
                    width="200px"
                  />
                ) : null}
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
          <ImageViewer handleImageUrl={handleImageUrl} ref={childRef}/>
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
