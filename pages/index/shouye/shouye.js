//index.js
//获取应用实例
var app = getApp();
import util from '../../../utils/util.js';
Page({
  data:{
    title:'首页'
  },
  onReady: function () {
    var that = this;
    util.setTitle(that.data.title);
  }
})