// pages/MFunction/cars/salesList/salesList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://price.cartype.kakamobi.com/api/open/car-type-price/get-car-type-price-list.htm?limit=10&orderField=2&orderType=1&cartypeId='+options.cartypeid,
      success (res) {
        if (res.data.data.length) {
          that.setData({
            carList: res.data.data
          })
        }
      }
    })
  },

  // 拨打电话
  callPhone (e) {
    let phone = e.currentTarget.dataset.phone
    wx.makePhoneCall({
      phoneNumber: phone,
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