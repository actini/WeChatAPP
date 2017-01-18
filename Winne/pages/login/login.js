//login.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data:{
    msg: null,
    code: null,
    wxlogin: null
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    let that = this
    // 微信用户登陆
    wx.login({
      success: function(res) {
        if (res.code) {
          that.setData({
            code: res.code
          })
        } else {
          that.setData({
            msg: '微信登陆调用失败！',
            wxlogin: true
          })
        }
      },
      fail: function(){
        that.setData({
          msg: "微信登陆调用失败！",
          wxlogin: true
        })
      }
    })
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  login: function(e){
    let that = this
    wx.request({
      url: 'http://wx.romeo.wang/home/login',
      data: e.detail.value,
      method: 'POST', 
      header: {"content-type": "application/x-www-form-urlencoded"},
      success: function(res){
        // success
        if(res.data.err){
          that.setData({
            msg: res.data.msg
          })
        }else{
          wx.setStorageSync('userInfo', res.data.userInfo)
          app.globalData.userInfo = res.data.userInfo
          wx.navigateBack({ delta: 1 })
        }
      }
    })
  },
  wxlogin: function(){
    wx.getUserInfo({
      success: function(res){
        app.globalData.userInfo = {"nickname":res.userInfo.nickName, "avatar":res.userInfo.avatarUrl, "id":"weixin"}
        wx.setStorageSync('userInfo', app.globalData.userInfo)
        wx.navigateBack({ delta: 1 })
      }
    })
  }
})