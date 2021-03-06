// pages/MFunction/cars/footerSubView/footerSubView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottomList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 获取底部相关车型
    wx.request({
      url: 'http://price.cartype.kakamobi.com/api/open/car-type-basic/get-compete-car-serial.htm?serialId=' + options.serialid,
      success (res) {
        if (res.data.data.length) {
          that.setData({
            bottomList: res.data.data
          })
        }
      }
    })
  },

  // 点击item跳转
  itemClick (e) {
    let serialid = e.currentTarget.dataset.serialid
    wx.navigateTo({
      url: '../footerDetail/footerDetail?serialid=' + encodeURIComponent(serialid),
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})