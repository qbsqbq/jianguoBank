// pages/MFunction/cars/carsList.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topList: [],
    carList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('jxzd')
    var that = this
    wx.request({
      url: 'http://price.cartype.kakamobi.com/api/open/car-type-basic/get-hot-serial-list.htm',
      success (res) {
        console.log(res)
        if (res.data.data.length) {
          that.setData({
            topList: res.data.data
          })
        }
      }
    })
    wx.request({
      url: 'http://price.cartype.kakamobi.com/api/open/car-type-basic/get-grouped-brand.htm',
      success (res) {
        if (res.data.data.length) {
          that.setData({
            carList: res.data.data
          })
        }
      }
    })
  },

  // 点击顶部item
  topItemClick (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../subTwoList/subTwoList?id=' + encodeURIComponent(id)
    })
  },

  // 点击列表item
  carItemClick (e) {
    let id = e.currentTarget.dataset.id
    let imgurl = e.currentTarget.dataset.imgurl
    let obj = {
      id: id,
      imgurl: imgurl
    }
    wx.navigateTo({
      url: '../carsSubList/carsSubList?obj=' + encodeURIComponent(JSON.stringify(obj))
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