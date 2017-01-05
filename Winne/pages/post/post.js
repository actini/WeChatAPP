// pages/post/post.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data:{
    post: null,
    user: null,
    pics: null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    let that = this
    wx.request({
      url: 'http://wx.romeo.wang/home/post/show?id=1',
      success: function(res){
        // success
        that.setData({
          post: res.data.post,
          user: res.data.user,
          pics: res.data.pics
        })
        wx.setNavigationBarTitle({ 
          title: res.data.post.title
        })
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})