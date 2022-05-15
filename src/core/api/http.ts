import axios, { AxiosError } from 'axios';
import { config } from '../config';
import { store } from '../store';
import { apiActions } from '../store/api';
import Cookies from 'universal-cookie';
import { constant } from '../constant';
import { closeGlobalLoading } from '../util/loading';

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
        if (response?.data?.message) store.dispatch(apiActions.updateSuccessMessage(response.data));
        closeGlobalLoading();
        return response;
    },
    function (error: AxiosError) {
        if (error.response?.status) store.dispatch(apiActions.updateErrorDetails(error.response.data));
        closeGlobalLoading();
        return Promise.reject(error.response);
    }
);

export { http };
