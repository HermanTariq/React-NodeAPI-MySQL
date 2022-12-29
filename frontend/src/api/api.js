import axios from "axios";

const baseUrl = 'http://localhost:9001';

export const showSTD = () => axios.get(`${baseUrl}/`);
export const createSTD = (std) => axios.post(`${baseUrl}/api/create`, std);
export const updateStD = (id, updateStD) => axios.put(`${baseUrl}/api/update/${id}`, updateStD);
export const deletSTD = (id) => axios.delete(`${baseUrl}/api/delete/${id}`);