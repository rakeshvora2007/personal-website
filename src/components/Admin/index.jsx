import React, { useEffect, useState } from "react";
import axios from "axios";

import {Project} from "./Project.js";

const Admin = () => {
  const [data, setData] = useState([]);
  return <div>Admin<Project /></div>;
};

export default Admin;
