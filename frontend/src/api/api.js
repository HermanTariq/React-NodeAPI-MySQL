import axios from "axios";

const baseUrl = 'http://nodeapi-env.eba-nmpx3itx.us-east-1.elasticbeanstalk.com';

export const showSTD = () => axios.get(`${baseUrl}/`);
export const createSTD = (std) => axios.post(`${baseUrl}/api/create`, std);
export const updateStD = (id, updateStD) => axios.put(`${baseUrl}/api/update/${id}`, updateStD);
export const deletSTD = (id) => axios.delete(`${baseUrl}/api/delete/${id}`);
