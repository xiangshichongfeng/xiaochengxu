//index.js
//获取应用实例
var app = getApp();
import util from '../../utils/util.js';
Page({
  data:{
    title:'话题'
  },
  onReady: function () {
    var that = this;
    wx.setNavigationBarTitle({
      title: that.data.title,
    })
  }
})