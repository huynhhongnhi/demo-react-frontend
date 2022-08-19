import axiosClient from "./axiosClient";

const authApi = {
    login: (params) => {
        const url = '/auth/login';
        const { email, password } = params
        return axiosClient.post(url, { email, password });
    },
    profile: (params) => {
        const url = '/api/profile';
        const { email, password } = params
        return axiosClient.post(url, { email, password });
    }
}

export default authApi;