import axios from 'axios';
import { mergeWith, throttle, isEmpty } from 'lodash';

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
const THROTTLE_DELAY = 1000;

export const generateAppServiceToken = () => ({
  // 'X-Mobile-Device-Type': process.env.HEADER_X_MOBILE_DEVICE_TYPE,
});

const defaultOptions = {
  // withCredentials: true,
};

// eslint-disable-next-line default-param-last
function getApi(path, options = {}, apiURL) {
  return axios.get(`${apiURL || NEXT_PUBLIC_API_URL}/${path}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      ...generateAppServiceToken(),
    },
  });
}

function postApi(path, data, options = {}) {
  const headerParams = mergeWith(options.headers, generateAppServiceToken());

  return axios.post(`${NEXT_PUBLIC_API_URL}/${path}`, data, {
    ...defaultOptions,
    ...options,
    headers: headerParams,
  });
}

function putApi(path, data, options = {}) {
  return axios.put(`${NEXT_PUBLIC_API_URL}/${path}`, data, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      ...generateAppServiceToken(),
    },
  });
}

function deleteApi(path, options = {}) {
  return axios.delete(`${NEXT_PUBLIC_API_URL}/${path}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      ...generateAppServiceToken(),
    },
  });
}

function uploadApi(path, params, options = {}, uploadSingle = false) {
  const { layout_site_id, layout_id } = params;
  const ListFile = [params[Object.keys(params)[0]]];
  if (!ListFile || isEmpty(ListFile)) return;

  const formData = new FormData();
  uploadSingle
    ? ListFile.forEach((file) => {
        formData.append(`file`, file);
        layout_site_id && formData.append('layout_site_id', layout_site_id);
        layout_id && formData.append('layout_id', layout_id);
      })
    : ListFile.forEach((file, index) => {
        formData.append(`file[${index}]`, file);
        layout_site_id && formData.append('layout_site_id', layout_site_id);
        layout_id && formData.append('layout_id', layout_id);
      });

  return axios.post(`${NEXT_PUBLIC_API_URL}/${path}`, formData, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'multipart/form-data',
      ...generateAppServiceToken(),
    },
  });
}

const notAuthorizedCallback = throttle(() => {
  // signOut().then(() => Router.push(ROUTER_LOGIN, {}, { shallow: true }));
  console.log('sign out');
}, THROTTLE_DELAY);

axios.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      notAuthorizedCallback();
      return;
    }
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      notAuthorizedCallback();
      return error;
    }
    return Promise.reject(error);
  },
);

const Api = {
  get: getApi,
  post: postApi,
  put: putApi,
  delete: deleteApi,
  upload: uploadApi,
};

export default Api;
