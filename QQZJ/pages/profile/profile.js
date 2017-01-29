// pages/profile/profile.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data:{
    userInfo: null
  },
  onShow:function(){
    // 页面显示
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },
  navigate:function(e){
    //判断登陆状态：未登录用户以及微信用户无法跳转进入下级页面
    if(app.globalData.userInfo.id == null){
      wx.showModal({
        title: '提示',
        content: '您还未登录！',
        showCancel: false
      })
    }else if(app.globalData.userInfo.id == "weixin"){
      wx.showModal({
        title: '提示',
        content: '微信登陆用户没有权限！',
        showCancel: false
      })
    }else{
      wx.navigateTo({url: e.currentTarget.dataset.url})
    }
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
          wx.clearStorageSync()
          app.globalData.userInfo = null
        }
      }
    })
  }
})