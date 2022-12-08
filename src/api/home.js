/*
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-12-08 19:53:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-08 20:20:42
 */
import axios from '../utils/axios';
import qs from 'querystring'
export const login = params => axios.get(`/base/users`);