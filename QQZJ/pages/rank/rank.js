// pages/rank/rank.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data:{
    posts: null,
    pics: null
  },
  onShow:function(){
    // 页面显示
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
              posts[i]['star'] = res.data.star
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