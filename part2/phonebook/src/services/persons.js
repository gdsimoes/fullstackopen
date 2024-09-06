import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

async function getAll() {
    const response = await axios.get(baseUrl);
    return response.data;
}

async function create(newPerson) {
    const response = await axios.post(baseUrl, newPerson);
    return response.data;
}

export default { getAll, create };
