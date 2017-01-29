// pages/profile/mylike/mylike.js
const app = getApp()
const util = require('../../../utils/util.js')
Page({
  data:{
    posts: null
  },
  onShow:function(){
    // 页面显示
    let that = this
    util.request({
      url: 'http://wx.romeo.wang/home/user/mylike',
      success: function(res){
        that.setData({
          posts: res.data
        })
      }
    })
  },
  showDetail:function(e){
    util.navigateTo({
      url:"/pages/post/post?id="+e.currentTarget.id
    })
  },
  unlike:function(e){
    let that = this
    let pid = e.currentTarget.id
    util.request({
      url: 'http://wx.romeo.wang/home/user/unlike',
      data: {"id": pid},
      success: function(res){
        // success
        if(res.data.err == 0){
          wx.showToast({
            title: res.data.msg,
            icon: "success",
            mask: true,
            duration: 1000
          })
          let posts = new Array();
          for(let i=0; i<that.data.posts.length; i++){
            if(that.data.posts[i].id == pid){
              continue
            }
            posts[i] = that.data.posts[i]
          }
          that.setData({
            posts: posts
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