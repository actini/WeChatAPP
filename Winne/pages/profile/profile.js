// pages/profile/profile.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data:{
    userInfo: null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    this.setData({
      userInfo: app.globalData.userInfo
    })
    console.log(app.globalData.userInfo)
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  signin:function(){
    util.navigateTo({
      url: '/pages/login/login'
    })
  },
  signout:function(){
    let that = this
    wx.showModal({
      title: '提示',
      content: '确定要退出吗？',
      success: function(res) {
        if (res.confirm) {
          that.setData({
            userInfo: null
          })
          app.globalData.userInfo = null
        }
      }
    })
  }
})