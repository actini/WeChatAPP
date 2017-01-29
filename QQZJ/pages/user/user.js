// pages/user/user.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data:{
    userid: null,
    userInfo: null,
    posts: null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      userid: options.userid
    })
  },
  onShow:function(){
    // 页面显示
    let that = this
    util.request({
      url: 'http://wx.romeo.wang/home/user/detail?userid='+that.data.userid,
      success: function(res){
        // success
        that.setData({
          userInfo: res.data.userInfo,
          posts: res.data.posts
        })
      },
    })
  },
  showDetail:function(e){
    util.navigateTo({
      url:"/pages/post/post?id="+e.currentTarget.id
    })
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
          let posts = that.data.posts
          let userInfo = that.data.userInfo
          if(posts[pid].star > res.data.star){
            userInfo.stars = parseInt(userInfo.stars)-1
          }else{
            userInfo.stars = parseInt(userInfo.stars)+1
          }
          posts[pid].like = res.data.like
          posts[pid].star = res.data.star
          that.setData({
            posts: posts,
            userInfo: userInfo
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