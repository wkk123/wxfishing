/*
 * @Author: your name
 * @Date: 2020-12-15 12:57:43
 * @LastEditTime: 2020-12-18 17:28:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wxfishing/src/store/reducers/public.js
 */
import { handleActions } from 'redux-actions';
//这里把types里的函数名引入 注意相对路径
import { SETID, COMMIT } from '../types/public';
//通过handleActions函数导出
//这里函数接收2个函数 第一个函数为触发方法修改状态,第二个函数为状态里的默认值
const defaultState = {
  id: null,
  token: null,
  status: null,
  payInfo: null,
  masterPhone: null,
  order: null,
}
export default handleActions({
  [SETID] (state, action) {
    state.id = action.payload
    return state
  },

  [COMMIT] (state, action) {
    for(const key in action.payload){
      state[key] = action.payload[key]
    }
    return state
  }
}, defaultState)
