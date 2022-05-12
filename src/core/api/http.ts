import axios, { AxiosError } from 'axios';
import { config } from '../config';
import { store } from '../store';
import { apiActions } from '../store/api';
import Cookies from 'universal-cookie';
import { constant } from '../constant';

const http = axios.create({
    baseURL: config.SERVER_URL,
    withCredentials: true,
});

http.interceptors.request.use(function (req) {
    store.dispatch(apiActions.initReq());
    const cookies = new Cookies();
    const token = cookies.get(constant.TOKEN_COOKIE_KEY) || '';
    if (token && req.headers) req.headers[constant.TOKEN_HEADER_KEY] = `Bearer ${token}`;

    return req;
});

http.interceptors.response.use(
    function (response) {
        store.dispatch(apiActions.resetState());
        if (response?.data?.message) store.dispatch(apiActions.updateSuccessMessage(response.data));

        return response;
    },
    function (error: AxiosError) {
        store.dispatch(apiActions.resetState());
        if (error.response?.status) store.dispatch(apiActions.updateErrorDetails(error.response.data));

        return Promise.reject(error.response);
    }
);

export { http };
