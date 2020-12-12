import request from './request';
// 商户登录 ------
export const shopLogin = p => {
  return request.POST('/shop/login',  {...p, isLoading: false})
}
// 门店信息 ------
export const shopDetail = p => {
  return request.GET('/shop/detail', {...p, isLoading: false})
}
// 更新门店信息
export const shopUpdate = p => {
  return request.POST('/shop/update',  {...p, isLoading: false})
}

// 品牌列表 ------
export const brandList = p => {
  return request.GET('/goods/brandList', {...p, isLoading: false})
}
// 品牌详情
export const goodsBrand = p => {
  return request.GET('/goods/brand', {...p, isLoading: false})
}
// 创建品牌
export const brandSave = p => {
  return request.POST('/goods/brand/save',  {...p, isLoading: false})
}
// 更新品牌
export const brandUpdate = p => {
  return request.POST('/goods/brand/update',  {...p, isLoading: false})
}





export const postDome = p => {
  return request.POST('url',  {...p, isLoading: false})
}

export const getDome = p => {
  return request.GET('url', {...p, isLoading: false})
}

export const uploadDome = p => {
  return request.UPLOAD('url', p)
}