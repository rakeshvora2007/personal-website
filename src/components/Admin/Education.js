import React from 'react';
import withRequest from "../HOC/withRequest.js";


const Education = ({handleAdd}) => {
    return (
        <div>
            <button onClick={() => handleAdd()}>ADD Education</button>
        </div>
    )
}

export default withRequest(Education, "education")