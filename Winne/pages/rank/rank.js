// pages/rank/rank.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data:{
    posts: null,
    pics: null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    let that = this
    util.request({
      url: 'http://wx.romeo.wang/home/index/rank',
      success: function(res){
        that.setData({
          posts: res.data.posts,
          pics: res.data.pics
        })
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    console.log(this.data.posts)
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  showDetail:function(e){
    wx.navigateTo({
      url:"/pages/post/post?id="+e.currentTarget.id
    })
  }
})