// pages/MFunction/cars/carsSubList/carsSubList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '',
    subDic: {},
    lists: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var obj = JSON.parse(decodeURIComponent(options.obj))
    that.setData({
      imgurl: obj.imgurl
    })
    wx.request({
      url: 'http://price.cartype.kakamobi.com/api/open/car-type-basic/get-grouped-serial-list.htm?type=0&brandId='+obj.id,
      success (res) {
        if (res.data.data.length) {
          that.setData({
            subDic: res.data.data[0],
            lists: res.data.data[0].lists
          })
        }
      }
    })
  },

  itemClick (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../subTwoList/subTwoList?id=' + encodeURIComponent(id)
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