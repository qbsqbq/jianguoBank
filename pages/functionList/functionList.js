// pages/functionList/functionList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: 0, title: '贷款界面一', path: '../nkxxLoans/nkxxLoans' },
      { id: 1, title: '贷款界面二', path: '../bankLoans/loans/loans' },
      { id: 2, title: '获取手机号授权', path: '../getPhoneNum/getPhoneNum' },
      { id: 3, title: '招商银行信用卡', path: '../creditCard/creditCard' },
    ],
  },

  //事件处理函数
  itemClick(e) {
    var that = this;
    var url = that.data.list[parseInt(e.currentTarget.id)].path;
    wx.navigateTo({
      url: url,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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