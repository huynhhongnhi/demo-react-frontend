import axiosClient from "./axiosClient";

const postApi = {
    fetchList: (limit, skip) => {
        const urlApi = `/posts?limit=${limit}&page=${skip}`;
        return axiosClient.get(urlApi);
    }
}

export default postApi;