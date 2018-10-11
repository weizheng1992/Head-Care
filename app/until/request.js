import axios from "axios";
import Toast from "react-native-root-toast";
import baseConfig from "../config/httpBaseConfig";
import { storage } from "../until/index";
const Axios = axios.create({
  baseURL: baseConfig.baseUrl + ":" + baseConfig.port + baseConfig.prefix,
  timeout: 100000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
});

//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前
    if (config.params && !config.params.noLoading) {
    }
    // 若是有做鉴权token , 就给头部带上token
    // if (getCookie("token")) {

    storage.getIdsForKey("token", ids => {
      config.headers.token = ids;
    });

    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    if (res.data && res.data.code !== 1000) {
      switch (parseInt(res.data.code)) {
        case 4444:
          //   jumpPage("bcoin://userLogin");
          return Promise.reject(res);
        default:
          //   Dialogs.toast({
          //     text:
          //       (res.data.dialog && res.data.dialog.title) ||
          //       "系统繁忙，请稍后再试",
          //     icon: "&#xe68e;",
          //     delay: 1500
          //   });
          Toast.show(res.data.message, {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0
          });
          return Promise.reject(res);
      }
    }
    return res.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default class request {
  //GET 请求方式
  static async get(url, params = {}) {
    try {
      res = Axios.get(url, { params: params });
      return res;
    } catch (error) {
      return error;
    }
  }
  //Post  请求方式
  static async post(url, params={},config={}) {
    try {
      let res = await Axios.post(url, params, config);
      return res;
    } catch (error) {
      return error;
    }
  }
}
