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
          for(let i=0; i<posts.length; i++){
            if(posts[i].id == pid){
              posts[i]['like'] = res.data.like
            }
          }
          that.setData({
            posts: posts
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