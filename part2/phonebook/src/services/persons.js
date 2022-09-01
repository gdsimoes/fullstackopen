import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(baseUrl).then((res) => res.data);
};

const create = (newObject) => {
    return axios.post(baseUrl, newObject).then((res) => res.data);
};

const update = (newObject) => {
    return axios
        .put(`${baseUrl}/${newObject.id}`, newObject)
        .then((res) => res.data);
};

const del = (id) => {
    // The data should be an empty object
    return axios.delete(`${baseUrl}/${id}`).then((res) => res.data);
};

const personsService = { getAll, create, update, del };

export default personsService;
