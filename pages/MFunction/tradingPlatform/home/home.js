// pages/home/home.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: '',
    longitude: '',
    controls: [{
      iconPath: '../../../../resources/location.png',
      position: {
        left: app.public.width/2-20,
        top: (app.public.height-49) / 2 - 39,
        width: 40,
        height: 40
      },
    }, {
      id: 1,
      iconPath: '../../../../resources/circle.png',
      position: {
        left: 20,
        top: (app.public.height - 49) - 50,
        width: 30,
        height: 30
      },
      clickable: true // 设置可点击
    }]
  },

  //点击回到当前位置
  controltap (e) {
    var that = this;
    that.maxCtr.moveToLocation();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    that.maxCtr = wx.createMapContext('map');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    that.getCurrentLocation();
  },

  getCurrentLocation() {
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '交易平台',
      path: 'pages/home/home'
    }
  }
})