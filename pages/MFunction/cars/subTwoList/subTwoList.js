// pages/MFunction/cars/subTwoList/subTwoList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '',
    topDic: {},
    carList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var id = decodeURIComponent(options.id)
    wx.request({
      url: 'http://price.cartype.kakamobi.com/api/open/car-type-basic/get-serial-base-info.htm?serialId='+id,
      success (res) {
        console.log('1111')
        console.log(res.data.data)
        if (res.data.data) {
          that.setData({
            topDic: res.data.data
          })
        }
      }
    })
    wx.request({
      url: 'http://price.cartype.kakamobi.com/api/open/car-serial-price/get-car-category-price.htm?serialId='+id,
      success (res) {
        console.log('2222')
        console.log(res.data.data)
        if (res.data.data.saleCategory.length) {
          that.setData({
            carList: res.data.data.saleCategory
          })
        }
      }
    })
  },

  imageTap (e) {
    let id = e.currentTarget.dataset.id
    let imgurl = e.currentTarget.dataset.imgurl
    let obj = {
      id: id,
      imgurl: imgurl
    }
    wx.navigateTo({
      url: '../infoDetail/infoDetail?obj=' + encodeURIComponent(JSON.stringify(obj))
    })
  },

  itemClick (e) {
    let id = e.currentTarget.dataset.id
    let imgurl = e.currentTarget.dataset.imgurl
    let obj = {
      id: id,
      imgurl: imgurl
    }
    wx.navigateTo({
      url: '../infoDetail/infoDetail?obj=' + encodeURIComponent(JSON.stringify(obj))
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