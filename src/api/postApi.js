import axiosClient from "./axiosClient";
import queryString from 'query-string';

const postApi = {
    fetchList: (limit, skip) => {
        const paramString = queryString.stringify({ limit, skip });
        const urlApi = `/posts?${paramString}`;
        return axiosClient.get(urlApi);
    },
    fetchDetail: (id) => {
        const urlApi = `/posts/${id}`;
        return axiosClient.get(urlApi);
    },
    addItem: (params) => {
        const urlApi = `/posts`;
        return axiosClient.post(urlApi,  params );
    },
    editItem: (id, params) => {
        const urlApi = `/posts/${id}`;
        return axiosClient.patch(urlApi, params);
    },
    deleteItem: (id) => {
        const urlApi = `/posts/${id}`;
        return axiosClient.delete(urlApi);
    }
}

export default postApi;