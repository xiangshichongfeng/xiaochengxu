//index.js
//获取应用实例
var app = getApp();
// 获取公共的方法
import util from '../../utils/util.js';
Page({
  data: {
    title: '我的'
  },
  onReady: function () {
    var that = this;
    wx.setNavigationBarTitle({
      title: that.data.title,
    })
  }
})