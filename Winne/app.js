//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
  },
  onShow: function () {
    let cache = wx.getStorageSync('userInfo')
    if(cache){
      this.globalData.userInfo = cache
    }
  },
  globalData:{
    userInfo:null
  }
})