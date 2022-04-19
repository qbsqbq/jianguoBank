// pages/release/release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '请选择地址',
    success: false
  },

  staticData: {
    type: 'buy',
    message: '',
    contact: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  addressSelect() {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          address: res.address
        });
        // 意思是把{}这个对象里的值直接拷贝到that.staticData里面
        Object.assign(that.staticData, {
          address: res.address,
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    });
  },

  radiochange(e) {
    var that = this;
    that.staticData.type = e.detail.value;
  },

  messageInput(e) {
    var that = this;
    that.staticData.message = e.detail.value;
  },

  contactInput(e) {
    var that = this;
    that.staticData.contact = e.detail.value;
  },

  submitInformation() {
    var that = this;
    if (that.data.address === '请选择地址' || !that.data.address) {
      wx.showToast({
        title: '请选择地址',
        icon: 'none',
        duration: 2000
      }) 
    } else if (that.staticData.message === '') {
      wx.showToast({
        title: '请填写说明',
        icon: 'none',
        duration: 2000
      })
    } else if (that.staticData.contact === '') {
      wx.showToast({
        title: '请填写联系方式',
        icon: 'none',
        duration: 2000
      })
    }else{
      that.setData({
        success: true
      })
      // that.requestData();
    }
  },

  requestData() {
    var that = this;
    that.staticData.distinct = 'mcej';
    wx.request({
      url: 'https://nuanwan.wekeji.cn/student/index.php/trade/add_item',
      data: that.staticData,
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      success(res) {
        console.log(res.data)
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})