//index.js
//获取应用实例
var app = getApp();
import util from '../../utils/util.js';

Page({
    data: {
        motto: '',
        topBarList: [{
                title: '首页',
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
        currentIdx: 0,
        slides: [
          { url: 'http://ov64c42s3.bkt.clouddn.com/1.jpg' },
          { url: 'http://ov64c42s3.bkt.clouddn.com/2.jpg' },
          { url: 'http://ov64c42s3.bkt.clouddn.com/3.jpg' },
          { url: 'http://ov64c42s3.bkt.clouddn.com/4.jpg' },
          { url: 'http://ov64c42s3.bkt.clouddn.com/5.jpg' }
        ],
        hotSearch: [{
          title: '专题',
        },
        {
          title: '新菜谱',
        },
        {
          title: '视频',
        },
        {
          title: '活动'
        },{
          title: '福利社'
        }],
        VerticalSlide: [{
          title: '专题|吃货的人生不可估量',
          url:'http://ov64c42s3.bkt.clouddn.com/1.jpg',
          detail:'今天碰见个采蘑菇的小姑娘~'
        },
        {
          title: '新菜谱|新的一天新的菜谱',
          url: 'http://ov64c42s3.bkt.clouddn.com/2.jpg',
          detail: '下雨天，和德芙更配哦~'
        },
        {
          title: '视频|囧囧囧囧~',
          url: 'http://ov64c42s3.bkt.clouddn.com/3.jpg',
          detail: '赏万亩荷花，品三湖美食~'
        },
        {
          title: '活动|吃货来啦',
          url: 'http://ov64c42s3.bkt.clouddn.com/4.jpg',          
          detail:'万般皆下品，惟有“海鲜”高'
        }, {
          title: '福利社|领吃货节福利啦',
          url: 'http://ov64c42s3.bkt.clouddn.com/5.jpg',
          detail:'我是吃货，我为自己代言~'
        }, {
          title: '专题|吃货的人生不可估量',
          url: 'http://ov64c42s3.bkt.clouddn.com/1.jpg',
          detail: '今天碰见个采蘑菇的小姑娘~'
        }],
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    menuTap: function(e) {
        // console.log(e.currentTarget.dataset.idx);
        this.setData({
            currentIdx: e.currentTarget.dataset.idx
        })
    },

    onLoad: function() {
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    },
    onReady: function() {}
})