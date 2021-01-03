import { handleActions } from 'redux-actions';
//这里把types里的函数名引入 注意相对路径
import { SETCART, SETORDER } from '../types/public';
//通过handleActions函数导出
//这里函数接收2个函数 第一个函数为触发方法修改状态,第二个函数为状态里的默认值
const defaultState = {
  // 购物车
  cart: {
    Num: 0,
    List: [],
    total: 0,
  },
  // 下单
  placeAnOrder: {
    totalMoney: 0,
    goodsList: [],
  },
}
export default handleActions({
  [SETCART] (state, action) {
    state.cart = action.payload.cart;
    return state
  },
  [SETORDER] (state, action) {
    state.placeAnOrder = action.payload.placeAnOrder;
    return state
  },

}, defaultState)
