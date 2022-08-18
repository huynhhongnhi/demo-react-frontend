import axiosClient from "./axiosClient";

const authApi = {
    login: (params) => {
        const url = 'http://localhost:7000/api/auth/login';
        const { email, password } = params
        return axiosClient.post(url, { email, password });
    }
}

export default authApi;