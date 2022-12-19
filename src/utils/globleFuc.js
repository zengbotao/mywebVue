/*
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-12-19 09:36:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-19 09:45:00
 */
import { ElMessage } from 'element-plus'

export const showMsg = (msg,type) => {
    ElMessage({
      message: `${msg}`,
      type: `${type}`,
    });
  };