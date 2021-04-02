// pages/MFunction/cars/subTwoList/subTwoList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '',
    topDic: {},
    carList: [],
    bottomList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var id = decodeURIComponent(options.id)
    // 获取车辆品牌信息
    wx.request({
      url: 'http://price.cartype.kakamobi.com/api/open/car-type-basic/get-serial-base-info.htm?serialId='+id,
      success (res) {
        if (res.data.data) {
          that.setData({
            topDic: res.data.data
          })
        }
      }
    })
    // 获取车型列表信息
    wx.request({
      url: 'http://price.cartype.kakamobi.com/api/open/car-serial-price/get-car-category-price.htm?serialId='+id,
      success (res) {
        if (res.data.data.saleCategory.length) {
          that.setData({
            carList: res.data.data.saleCategory
          })
        }
      }
    })
    // 获取底部相关车型
    wx.request({
      url: 'http://price.cartype.kakamobi.com/api/open/car-type-basic/get-compete-car-serial.htm?serialId='+id,
      success (res) {
        if (res.data.data.length) {
          that.setData({
            bottomList: res.data.data
          })
        }
      }
    })
  },

  imageTap (e) {
    var topdic = e.currentTarget.dataset.topdic
    wx.navigateTo({
      url: '../infoDetail/infoDetail?topdic=' + encodeURIComponent(JSON.stringify(topdic))
    })
  },

  itemClick (e) {
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