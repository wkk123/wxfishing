// 请求地址
const baseURL = 'https://h5.shitingjiankang.cn/yjapi';
const http = ({url, params, method} = {}) => {
  console.log(url, params, method);
  let isLoading = params.isLoading;
  return new Promise((resolve, reject) => {
    let header = {
      'content-type': 'application/json',
    }
    if(url!=='/shop/login'){
      let token = wx.getStorageSync('token')
      // let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5dWp1YSIsImlkIjoxLCJleHAiOjQxOTcwMTU0ODIsImlhdCI6MTYwNTAxNTQ4Mn0.BN-Y2JlpjEs6cWPTQjE56NOfvn3_WXjFFGkIYbnh2Y0GrC-91Qyip4itd9FZ34V4rbugwg47rIl7MRriSPCg2Q';
      if(!token||token === ''){
        if(isLoading){
          wx.hideLoading()
        }
        wx.navigateTo({
          url: '/pages/login'
        })
        return
      }
      header['Authorization'] = 'Bearer' + token
    }
    if (isLoading) {
      wx.showLoading({
        title: '加载中...'
      })
    }
    delete params.isLoading
    wx.request({
      url: baseURL+url,
      data: params,
      header: header,
      method: method,
      complete: (res) => {
        if (isLoading) {
          wx.hideLoading()
        }
        if(res.statusCode === 200||res.statusCode === 204){
          if(res.data.code===10000){
            resolve(res.data)
          }else{
            // if(res.data.code===30002||res.data.code===30003||res.data.code===30004){
            //   if(wx.getStorageSync('token')){
            //     wx.removeStorageSync('token')
            //   }
            //   wx.showToast({
            //     title: '请重新登录',
            //     icon: 'none',
            //     duration: 1500,
            //     complete: function(){
            //       setTimeout(()=> {
            //         wx.navigateTo({
            //           url: '/pages/login'
            //         })
            //       },1500)
            //     }
            //   })
            // }
            reject(res.data)
          }
        } else {
          reject(res.data)
        }
      }
    })
  })
}

const upload = (url, params) => {
  return new Promise((resolve, reject) => {
    const token = wx.getStorageSync('token')
    if(!token||token===''){
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 1500,
        complete: function(){
          setTimeout(()=> {
            wx.navigateTo({
              url: '/pages/login'
            })
          },1500)
        }
      })
      return
    }
    wx.uploadFile({
      url: baseURL+url,
      filePath: params,
      name: 'file',
      header: {
        "token": token,
        "content-type": "multipart/form-data"
      },
      success (res){
        resolve(res)
      },
      fail (err){
        reject(err)
      }
    })
  })
}

const GET = (url, params = {}) => {
  return http({
    url,
    params: {
      isLoading: true,
      ...params,
    },
    method: "GET",
  })
}
const POST = (url, params = {}) => {
  return http({
    url,
    params: {
      isLoading: true,
      ...params,
    },
    method: 'POST'
  })
}

const UPLOAD = (url, params) => {
  return upload(url,params)
}

module.exports = {
  GET,
  POST,
  UPLOAD
}
