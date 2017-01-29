// pages/profile/post/post.js
var util = require('../../../utils/util.js')
var app = getApp()
Page({
  data:{
    imgs: null,
    title: null,
    outline: null
  },
  uploadImg:function(){
    //上传图片
    let that = this
    wx.chooseImage({
      count: 5,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res){
        // success
        that.setData({
          imgs: res.tempFilePaths
        })
      }
    })
  },
  submit:function(e){
    //判断图片是否上传
    if(this.data.imgs === null){
      wx.showModal({
        title: '提示',
        content: '至少添加一张图片！',
        showCancel: false
      })
      return;
    }
    //判断是否填写标题
    if(e.detail.value.title == ''){
      wx.showModal({
        title: '提示',
        content: '必须填写标题！',
        showCancel: false
      })
      return;
    }
    //判断是否填写内容
    if(e.detail.value.outline == ''){
      wx.showModal({
        title: '提示',
        content: '必须填写内容！',
        showCancel: false
      })
      return;
    }
    //准备参数：title、outline、id
    e.detail.value.uid = app.globalData.userInfo.id
    let that = this
    //发布文章标题及内容
    wx.request({
      url: 'http://wx.romeo.wang/home/post/save',
      data: e.detail.value,
      method: 'POST', 
      header: {'content-type':'application/x-www-form-urlencoded'},
      success: function(res){
        //发布未成功，提示用户操作
        if(res.data.err != 0){
          wx.showModal({
            title: "提示",
            content: res.data.msg,
            confirmText: "重试",
            success: function(res){
              if(res.confirm){
                that.submit()
              }
            }
          })
          return
        }
        //发布成功发布成功，上传图片
        util.multiUpload({
          url: 'http://wx.romeo.wang/home/post/upload',
          files: that.data.imgs,
          name: 'imgs',
          formData: {pid: res.data.pid},
          success: function(){
            //图片上传成功成功，提示用户操作
            wx.showModal({
              title: "提示",
              content: "发布成功！",
              cancelText: "返回",
              confirmText: "继续发布",
              success: function(res){
                if(res.confirm){
                  wx.redirectTo({url: '/pages/profile/post/post'})
                }else{
                  wx.navigateBack({delta: 1,})
                }
              }
            })
          }
        })
      }
    })
  },
  reset:function() {
    let that = this
    wx.showModal({
      title: '提示',
      content: '确定要退出吗？',
      success: function(res) {
        if (res.confirm) {
          that.setData({
            imgs: [],
            title: null,
            outline: null
          })
          wx.navigateBack({delta: 1})
        }
      }
    })
  }
})