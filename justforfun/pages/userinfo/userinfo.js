// userinfo.js
var app = getApp()
Page({
  data:{
    // text:"这是一个页面"
    userInfo: {}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //console.log(app.globalData.userInfo)
    this.setData({
        userInfo: app.globalData.userInfo
    })
  },
  onLogout:function(){
      app.globalData.userInfo=null
      wx.redirectTo({
          url:"../login/login"
      })
  },
  getWorks:function(){
      wx.navigateTo({
        url: "../record/record"
      })
  }
})