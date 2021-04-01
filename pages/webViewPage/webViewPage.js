// pages/webViewPage/webViewPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    postid: "",
    detaileUrl :"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    console.log("HAHA" + options.postid),

    wx.request({
      url: 'http://un.jipinlantu.com/index/News2/new_detail?postid=' + options.postid,
      success: (result) => {
        console.log(result),

        this.setData({
          detaileUrl: result.data.data.body,
        })
      },
     
      fail: (res) => {},
      complete: (res) => {},
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