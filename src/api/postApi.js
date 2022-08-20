import axiosClient from "./axiosClient";

const postApi = {
    fetchList: (limit, skip) => {
        const urlApi = `/posts?limit=${limit}&page=${skip}`;
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