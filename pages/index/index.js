//index.js
//获取应用实例
var app = getApp();
import util from '../../utils/util.js';

Page({
  data: {
    motto: '吴涛是个好人',
    title:'菜谱',
    topBarList:[
      {
        title:'首页',
        },
      {
        title: '上菜',
      },
      {
        title: '分类',
      },
      {
        title: '食材'
      }
    ],
    currentIdx:0,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  menuTap:function(e){
    // console.log(e.currentTarget.dataset.idx);
    this.data.currentIdx = e.currentTarget.dataset.idx;
    console.log(this.data.currentIdx)
  },

  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady:function(){
    var that=this;
    wx.setNavigationBarTitle({
      title: that.data.title,
    })
  }
})
