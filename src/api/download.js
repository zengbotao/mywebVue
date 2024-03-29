/*
 * @Description:
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-12-08 19:53:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-16 21:04:15
 */
import axios from "../utils/axios";
// let query = require('querystring')
//获取md的详细信息
export const getDownloadbyID = (params) => axios.get(`/download/${params.id}`);
//上传md内容
export const savedownload = (params) => axios.post(`/download/upload`, params);
//条件查询
export const pagedownload = (params) =>
  axios.get(`/download/Wrapper`, { params });
