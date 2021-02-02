import axios from 'axios';

export default axios.create({
    baseURL: "https://601294d554044a00172dc3be.mockapi.io/todos",
    headers: {
        "Content-type": "application/json"
    }
});