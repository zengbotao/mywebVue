/*
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-12-14 16:50:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-15 16:52:34
 */
export function getQueryString(name) {
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r != null) {
      return  unescape(r[2]);
  } else {
      return null
  }
}
