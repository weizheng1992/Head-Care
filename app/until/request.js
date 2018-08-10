import axios from 'axios';


import baseConfig from '../constants/httpBaseConfig';
axios.defaults.baseURL = baseConfig.baseUrl + ':' + baseConfig.port + baseConfig.prefix;


//将对象序列化
const paramsString = (data) => {
    var arg = [];
    for (var i in data) {
        arg.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
    }
    return arg.join('&');
}

export default class request {
    static async get(url, params) {
      /**
       * params{
       *  goods：id，
       *  name：string
       * } ==> ?goods=id&name=string
       */
      try {
        let query = await paramsString(params)
        let res = null;
        if (!params) {
          res = await axios.get(url)
        } else {
          res = await axios.get(url + '?' + query)
        }
        return res
      } catch (error) {
        return error
      }
    }
    static async post(url, params) {
      try {
        let res = await axios.post(url, params)
        return res
      } catch (error) {
        return error
      }
    }
}