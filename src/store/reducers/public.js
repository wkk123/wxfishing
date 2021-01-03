import { handleActions } from 'redux-actions';
//这里把types里的函数名引入 注意相对路径
import { SETID, SORT, COMMIT } from '../types/public';
//通过handleActions函数导出
//这里函数接收2个函数 第一个函数为触发方法修改状态,第二个函数为状态里的默认值
const defaultState = {
  id: null,
  token: null,
  status: null,
  checkedSort: {
    name: '',
    firstClassId: '',// 一级分类id
    secondClassId: '',// 二级分类id
  },
  // 门店信息
  shopInfo:{},
  userDetail:{},//会员信息
  // 订单详情
  orderDetail: {},
}
export default handleActions({
  [SETID] (state, action) {
    state.id = action.payload
    return state
  },

  [SORT] (state, action) {
    state.checkedSort = action.payload.checkedSort
    return state
  },

  [COMMIT] (state, action) {
    for(const key in action.payload){
      state[key] = action.payload[key]
    }
    return state
  }
}, defaultState)
