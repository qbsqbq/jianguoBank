// pages/MFunction/mixFunc/mixFunc.js

const app = getApp()
const QR = require('../../../utils/qrcode');
var Gesture = require("../../../utils/wxlocker.js");
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    inputValue: '10086',
    imgUrls: [
      'https://onegoods.nosdn.127.net/resupload/2016/9/18/4082e075e9ff72110bb1d73750be065b.jpg','https://onegoods.nosdn.127.net/resupload/2016/9/20/01d732b0c46a38fc07bbc887dfe23af9.jpg','https://onegoods.nosdn.127.net/resupload/2016/9/19/777e4b1711fb1b0283726cb0b197e8ba.jpg','https://onegoods.nosdn.127.net/resupload/2016/9/20/f2f210633ca371ea6dc56a4b8916a15d.jpg','https://onegoods.nosdn.127.net/resupload/2016/9/21/33c38d5283a862b2523fe2e085355cb2.jpg','https://res.126.net/p/dbqb/resupload/onlinepath/2016/7/28/0/69e1275c4460f97f2d4b26d716348892.jpg'],
    indicatorDots: true,
    autoplay: true,
    circular: false,
    interval: 3000,
    duration: 500,
    windowWidth: app.public.width,
    scanedMessage: '',
    qrValue: 'http://www.baidu.com',
    dateList: [
      { id: 0, value: '选项一' },
      { id: 1, value: '选项二' },
      { id: 2, value: '选项三' },
      { id: 3, value: '选项四' }
    ],
    dateIndex: 0,
    tabs: ["选项一", "选项二", "选项三"],
    activeIndex: "0",
    sliderOffset: 0,
    sliderLeft: 0,
    title: '请设置手势密码',
    resetHidden: false,
    titleColor: ""
  },

  onLoad() {
    var that = this

    //生成二维码
    that.createQrCode(that.data.qrValue);

    //自定义segment选择器
    sliderWidth = (app.public.width / this.data.tabs.length);
    that.setData({
      sliderLeft: (app.public.width / this.data.tabs.length - sliderWidth)
    })

    //手势密码
    Gesture.lock.init();
    that.initState();

  },

  // **************** 拨打电话 ******************
  inputHandle(e) {
    var that = this;
    that.setData({
      inputValue: e.detail.value
    })
  },
  callupClick(e) {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.inputValue
    }).catch((e) => {
      // console.log(e)  //用catch(e)来捕获错误{makePhoneCall:fail cancel}
    })
  },
  // **************** 拨打电话 ******************

  // **************** 轮播图 ******************
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  // **************** 轮播图 ******************
  
  // **************** 扫描二维码 ******************
  scanButtonClick() {
    var that = this
    wx.scanCode({
      success: (res) => {
        that.setData({
          scanedMessage: res.result
        });
      }
    })
  },
  // **************** 扫描二维码 ******************
  
  // **************** 生成二维码 ******************
  createQrCode: function (message) {
    //调用插件中的draw方法，绘制二维码图片
    var size = this.data.windowWidth/2-10
    QR.qrApi.draw(message, 'canvas', size, size);
  },
  qrInputHandle(e) {
    var that = this;
    that.setData({
      qrValue: e.detail.value
    })
  },
  qrcodeClick() {
    var that = this;
    console.log(
      'ssss'
    )
    that.createQrCode(that.data.qrValue);
  },
  // **************** 生成二维码 ******************
  
  // **************** 仿系统segment ******************
  dateChange(e) {
    this.setData({
      dateIndex: parseInt(e.detail.value)
    })
  },
  // **************** 仿系统segment ******************

  // **************** 自定义segment选择器 ******************
  // 选择事件
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  // **************** 自定义segment选择器 ******************

  // **************** 获取手机号授权 ******************
  // 获取手机号
  getPhoneNumber (e) {
    if (e.detail.errMsg == 'getPhoneNumber:ok') {
      wx.showToast({
        title: '授权成功',
      })
    }else {
      wx.showToast({
        title: '拒绝授权',
        icon: 'none'
      })
    }
  },
  // **************** 获取手机号授权 ******************

  // **************** 手势密码 ******************
  //设置提示语与重置按钮
  initState: function () {
    var resetHidden = Gesture.lock.resetHidden;
    var title = Gesture.lock.title;
    var titleColor = Gesture.lock.titleColor;
    this.setData({
      resetHidden: resetHidden,
      title: title,
      titleColor: titleColor
    });
  },
  touchstart (e) {//touchstart事件绑定
    Gesture.lock.bindtouchstart(e);
  },
  touchmove (e) {//touchmove事件绑定
    Gesture.lock.bindtouchmove(e);
  },
  touchend (e) {//touchend事件绑定
    Gesture.lock.bindtouchend(e, this.lockSucc);
    this.initState();
  },
  lockSucc () {//解锁成功的回调函数
    wx.showToast({
      title: '解锁成功',
    })
  },
  lockreset () {
    Gesture.lock.updatePassword();
    this.initState();
  },
  // **************** 手势密码 ******************


  // **************** 生成二维码 ******************


  // **************** 生成二维码 ******************


  // **************** 生成二维码 ******************


  // **************** 生成二维码 ******************

  // **************** 生成二维码 ******************

  // **************** 生成二维码 ******************


})
