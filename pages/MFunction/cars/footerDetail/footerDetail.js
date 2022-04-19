// pages/MFunction/cars/footerDetail/footerDetail.js
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
    let serialid = decodeURIComponent(options.serialid)
    // 获取车型列表信息
    wx.request({
      url: 'http://price.cartype.kakamobi.com/api/open/car-serial-price/get-car-category-price.htm?serialId='+serialid,
      success (res) {
        // console.log(res.data.data)
        if (res.data.data.saleCategory.length) {
          that.setData({
            carList: res.data.data.saleCategory
          })
        }
      }
    })
  },

  // 点击列表item
  listItemClick (e) {
    let cartypeid = e.currentTarget.dataset.cartypeid
    wx.navigateTo({
      url: '../salesList/salesList?cartypeid=' + encodeURIComponent(cartypeid)
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