import { handleActions } from 'redux-actions';
import { SETID, COMMIT } from '../types/public';

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
}, {
  id: null,
  status: null,
  payInfo: null,
  masterPhone: null,
  order: null,
})
