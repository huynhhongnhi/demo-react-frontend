import axiosClient from "./axiosClient";

const authApi = {
    login: (params) => {
        const url = '/auth/login';
        const { email, password } = params
        return axiosClient.post(url, { email, password });
    },
    register: (params) => {
        const url = '/auth/register';
        const { email, password } = params
        return axiosClient.post(url, { email, password, username });
    },
    profile: () => {
        const url = '/api/profile';
        return axiosClient.get(url);
    }
}

export default authApi;