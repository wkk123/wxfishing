import { handleActions } from 'redux-actions';
//这里把types里的函数名引入 注意相对路径
import { SETCART } from '../types/public';
//通过handleActions函数导出
//这里函数接收2个函数 第一个函数为触发方法修改状态,第二个函数为状态里的默认值
const defaultState = {
  cart: {
    Num: 0,
    List: [],
    total: 0,
  },
}
export default handleActions({
  [SETCART] (state, action) {
    state.cart = action.payload.cart;
    return state
  },

}, defaultState)
