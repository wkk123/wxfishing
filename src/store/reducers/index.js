//入口文件 把reducers下的所有函数引入 并且通过combineReducers函数导出
import { combineReducers } from 'redux';
import publics from './public';
import inventoryList from './inventoryList';

export default combineReducers({
  publics,
  inventoryList
});
