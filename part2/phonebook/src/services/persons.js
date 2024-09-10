import axios from "axios";
const baseUrl = "/api/persons";

async function create(newPerson) {
    const response = await axios.post(baseUrl, newPerson);
    return response.data;
}

async function read() {
    const response = await axios.get(baseUrl);
    return response.data;
}

async function update(id, newPerson) {
    const response = await axios.put(`${baseUrl}/${id}`, newPerson);
    return response.data;
}

async function del(id) {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
}

export default { read, create, del, update };
