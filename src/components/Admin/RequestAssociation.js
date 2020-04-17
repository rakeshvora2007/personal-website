import axios from "axios";

/******************************
ACCEPTED
Category: Project, Education, Work
*******************************/


/*
@desc Desc: GET an entity
@param string category
@return array - success or failure
Type: GET
Request: GET

 */
export const getRequest = (category) => {
    // create url based on category
    let url = `https://personal-website--backend.herokuapp.com/${category}`
    // send request with appropriate data
    axios
    .get(url)
    .then(response => { return response })
    .catch(error => { return error })
}

/*
@desc Desc: ADD an entity
@param string category, object data
@return object - success or failure
Type: ADD
Request: POST
 */
export const addRequest = (category, data) => {
    // create url based on category
    let url = `https://personal-website--backend.herokuapp.com/${category}`
    // send request with appropriate data
    axios
    .post(url, data)
    .then(response => { return response })
    .catch(error => { return error })
}

/*
@desc Desc: DELETE an entity
@param string category, string id
@return object - success or failure
Type: DELETE
Request: DELETE
 */
export const deleteRequest = (category, _id) => {
    // create url based on category
    let url = `https://personal-website--backend.herokuapp.com/${category}`
    // send request with appropriate data
    axios
    .delete(url, {data: {_id}})
    .then(response => { return response })
    .catch(error => { return error })
}

/*
@desc Desc: UPDATE an entity
@param string category, object data
@return object - success or failure
Type: UPDATE
Request: PUT
 */
export const updateRequest = (category, data) => {
    // create url based on category
    let url = `https://personal-website--backend.herokuapp.com/${category}`
    // send request with appropriate data
    axios
    .put(url, data)
    .then(response => { return response })
    .catch(error => { return error })
}