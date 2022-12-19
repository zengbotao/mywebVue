/*
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-12-08 19:53:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-15 13:45:05
 */
let query = require('querystring')
import axios from '../utils/axios';
export const getMdbyID = params => axios.get(`/md/${params.id}`);