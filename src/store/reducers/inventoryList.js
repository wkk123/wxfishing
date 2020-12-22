import { handleActions } from 'redux-actions';
//这里把types里的函数名引入 注意相对路径
import { SETQUERY, SETINVENTORY } from '../types/public';
//通过handleActions函数导出
//这里函数接收2个函数 第一个函数为触发方法修改状态,第二个函数为状态里的默认值
const defaultState = {
  queryObj: {
    keyword: '',// 搜索关键字
    sortField: 'heat',//排序字段 heat 热度 quantity 库存量 expire_time 到期时间
    order: 'asc',//排序规则 desc 降序 asc 升序
    firstClassId:'',//一级分类id
    secondClassId:'',//二级分类id
  },
  inventoryList: []
}
export default handleActions({

  [SETQUERY] (state, action) {
    console.log('state, action',state, action);
    state.queryObj = action.payload.queryObj;
    return state
  },

  [SETINVENTORY] (state, action) {
    state.inventoryList = action.payload.inventoryList
    return state
  },

}, defaultState)