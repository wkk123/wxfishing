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

// 创建品牌 ------
export const brandSave = p => {
  return request.POST('/goods/brand/save',  {...p, isLoading: false})
}
// 更新品牌
export const brandUpdate = p => {
  return request.POST('/goods/brand/update',  {...p, isLoading: false})
}
// 品牌详情
export const goodsBrand = p => {
  return request.GET('/goods/brand', {...p, isLoading: false})
}
// 品牌列表
export const brandList = p => {
  return request.GET('/goods/brandList', {...p, isLoading: false})
}

// 更新商品 ------
export const goodsUpdate = p => {
  return request.POST('/goods/update',  {...p, isLoading: false})
}
// 商品入库
export const goodsSave = p => {
  return request.POST('/goods/save',  {...p, isLoading: false})
}
// 更新库存
export const goodsQuantityUpdate = p => {
  return request.POST('/goods/quantity/update',  {...p, isLoading: false})
}
// 库存列表
export const goodsGoodsList = p => {
  return request.GET('/goods/goodsList', {...p, isLoading: false})
}


// 查询所有分类
export const goodsAllClasses = p => {
  return request.GET('/goods/allClasses', {...p, isLoading: false})
}
// 商户的所有品牌
export const goodsBrands = p => {
  return request.GET('/goods/brands', {...p, isLoading: false})
}
// 分类下商品属性及类别
export const goodsPropertiesAndTypes = p => {
  return request.GET('/goods/propertiesAndTypes', {...p, isLoading: false})
}

// 下单
export const orderCreate = p => {
  return request.POST('/order/create',  {...p, isLoading: true})
}
// 订单二维码
export const orderQRCode = p => {
  return request.GET('/order/QRCode', {...p, isLoading: false})
}
// 订单详情
export const orderDetail = p => {
  return request.GET('/order/detail', {...p, isLoading: false})
}
// 撤销订单
export const orderRevoke = p => {
  return request.POST('/order/revoke',  {...p, isLoading: false})
}
// 线下支付
export const orderOfflinePay = p => {
  return request.POST('/order/offlinePay',  {...p, isLoading: false})
}
// 微信支付信息****
export const orderWechatPayment = p => {
  return request.GET('/order/wechatPayment', {...p, isLoading: false})
}
// 微信查询支付结果
export const orderWechatPaymentStatus = p => {
  return request.GET('/order/wechatPaymentStatus', {...p, isLoading: true})
}


// 会员管理

// 会员列表
export const userVipList = p => {
  return request.GET('/user/vipList', {...p, isLoading: true})
}
// 续费VIP
export const userRenewVip = p => {
  return request.GET('/user/renewVip', {...p, isLoading: true})
}
// 会员等级列表
export const userNextVipLevel = p => {
  return request.GET('/user/nextVipLevel', {...p, isLoading: true})
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