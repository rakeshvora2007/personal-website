import React, { useEffect, useState } from "react";
import axios from "axios";

export const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://personal-website--backend.herokuapp.com/project")
      .then(({ data }) => {
        setProjects(data.data);
      });
  }, []);

  const readURL = input => {
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
  });

  const addProject = () => {};

  const deleteProject = id => {};

  return (
    <>
      <div style={styles.header}>
        <div>Project Name</div>
        <div>Subtitles</div>
        <div>Technologies</div>
        <div>Project Image</div>
        {projects.length ? (
          projects.map(project => {
            return <div>{project.projectName} : {project.subtitle}</div>;
          })
        ) : (
          <div>None</div>
        )}
      </div>
      <form
        action="https://personal-website--backend.herokuapp.com/project"
        method="POST"
      >
        <div style={styles.form}>
          Project Name: <input name="projectName" required />
          Subititles: <input name="subtitle" required />
          Technologies: <input />
          Project Image :
          <input type="file" id="imgInp" required />
          <img
            id="blah"
            src="#"
            alt="No image selected"
            height="300px"
            width="300px"
          />
          <button tyoe="submit">Submit</button>
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
