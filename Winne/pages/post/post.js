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
    util.request({
      url: 'http://wx.romeo.wang/home/post/show?id='+options.id,
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
  },
  like:function(e){
    let that = this
    let pid = e.currentTarget.id
    util.request({
      url: 'http://wx.romeo.wang/home/post/like',
      data: {"id": pid},
      success: function(res){
        // success
        if(res.data.err == 0){
          let post = that.data.post
          post.like = res.data.like
          post.star = res.data.star
          that.setData({
            post: post
          })
          wx.showToast({
            title: res.data.msg,
            icon: "success",
            mask: true,
            duration: 1000
          })
        }else{
          wx.showModal({
            title: "提示",
            content: res.data.msg,
            showCancel: false
          })
        }
      }
    })
  }
})