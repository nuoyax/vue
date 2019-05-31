import axios from 'axios';
import config from '../config';
const host = config.api.host;
const {isDebug} = config;
const requestPayload = function(method = 'get', url, params = {}, paramType){
    const token = window.localStorage.getItem('token');
    let headers = { 'Access-Control-Allow-Origin': '*' };
    if (token) {
        headers.Authorization = token;
    }

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = isDebug ? url : `${host}${url}`;
    }
    let payload = {
        method,
        url: url,
        headers
    }
    for(let prop in params){
        if(params.hasOwnProperty(prop)){
            if(!params[prop] && params[prop] !== 0){
                delete params[prop];
            }
        }
    }
    if (paramType === 'query') {
        payload.params = params
    } else {
        payload.data = params;
    }
    return payload;
}

const api = {
    get(url, params = {}, paramType = 'query') {
        const payload = requestPayload('get', url, params, paramType)
        return new Promise((resolve, reject) => {
            axios(payload)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                const res = error.response;
                if (res && res.data) {
                    if (res.data.status === '099') {
                        window.wm.$message.error('登录已超时');
                        window.wm.$router.push('/login');
                    } else {
                        window.wm.$message.error(res.data.message);
                    }
                } else {
                    window.wm.$message.error('服务器请求失败');
                }
                reject(error);
            });
        });
    },

    post(url, params = {}, paramType = 'body') {
        const payload = requestPayload('post', url, params, paramType)
        return new Promise((resolve, reject) => {
            axios(payload)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                const res = error.response;
                if (res && res.data) {
                    if (res.data.status === '099') {
                        window.wm.$message.error('登录已超时');
                        window.wm.$router.push('/login');
                    } else {
                        window.wm.$message.error(res.data.message);
                    }
                } else {
                    window.wm.$message.error('服务器请求失败');
                }
                reject(error);
            });
        });
    },

    put(url, params = {}, paramType = 'body') {
        const payload = requestPayload('put', url, params, paramType)
        return new Promise((resolve, reject) => {
            axios(payload)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                const res = error.response;
                if (res && res.data) {
                    if (res.data.status === '099') {
                        window.wm.$message.error('登录已超时');
                        window.wm.$router.push('/login');
                    } else {
                        window.wm.$message.error(res.data.message);
                    }
                } else {
                    window.wm.$message.error('服务器请求失败');
                }
                reject(error);
            });
        });
    },

    patch(url, params = {}, paramType = 'body') {
        const payload = requestPayload('patch', url, params, paramType)
        return new Promise((resolve, reject) => {
            axios(payload)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                const res = error.response;
                if (res && res.data) {
                    if (res.data.status === '099') {
                        window.wm.$message.error('登录已超时');
                        window.wm.$router.push('/login');
                    } else {
                        window.wm.$message.error(res.data.message);
                    }
                } else {
                    window.wm.$message.error('服务器请求失败');
                }
                reject(error);
            });
        });
    },

    delete(url, params = {}, paramType = 'body') {
        const payload = requestPayload('delete', url, params, paramType)
        return new Promise((resolve, reject) => {
            axios(payload)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                const res = error.response;
                if (res && res.data) {
                    if (res.data.status === '099') {
                        window.wm.$message.error('登录已超时');
                        window.wm.$router.push('/login');
                    } else {
                        window.wm.$message.error(res.data.message);
                    }
                } else {
                    window.wm.$message.error('服务器请求失败');
                }
                reject(error);
            });
        });
    }
};

export default api;
