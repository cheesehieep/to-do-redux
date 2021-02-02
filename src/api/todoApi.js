import http from "./axiosHttp";

const getAll = () => {
    return http.get("/");
};

const get = (id) => {
    return http.get(`/${id}`);
};

const create = (data) => {
    return http.post("/", data);
};

const update = (id, data) => {
    return http.put(`/${id}`, data);
};

const remove = (id) => {
    return http.delete(`/${id}`);
};

const todoApi = {
    getAll, get, create, update, remove
};

export default todoApi;