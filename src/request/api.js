import request from './request';

export const postDome = p => {
  return request.POST('url',  {...p, isLoading: false})
}

export const getDome = p => {
  return request.GET('url', {...p, isLoading: false})
}


export const uploadDome = p => {
  return request.UPLOAD('url', p)
}