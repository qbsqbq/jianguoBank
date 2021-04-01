// pages/bankLoans/loans/loans.js
const util = require('../../../../utils/util')
const Request = require('../../../../utils/request')

Page({
  data: {
    logs: [],
    imageUrl: Request.imageUrl,
    TotalNum: 0, // 总页数初始值
    listArr: [1,2]
  },

  requestData() {
    Request.post(
      'ScoreConvertRuleQry.do', 
      {
        SendTime: '20210105110200',
        SendJnlNo: 'dc98d8a221e845f1a27beec69b6a4456',
        SendChannel: 'C30104',
        CloudTenantId: 'yrrcbimp',
        ChannelId: 'C30104',
        DeptId: '0170004',
        PageSize: '10',
        CurrentIndex: this.data.listArr.length,
        ConvertType: '1'
      }
    )
    .then(res => {
      wx.stopPullDownRefresh()
      console.log(res.CouponsList)
      for (const i in res.CouponsList) {
        this.data.listArr.push(res.CouponsList[i])
      }
      this.setData({
        TotalNum: parseInt(res.TotalNum),
        listArr: this.data.listArr
      })
    })
  },

  itemClick(e) {
  //   var that = this;
  //   var myObj = {};
  //   for (const i in that.data.listArr) {
  //     if (that.data.listArr[i].ToolNo.toString() === e.currentTarget.id.toString()) {
  //       myObj = that.data.listArr[i]
  //     }
  //   }
  //   var obj = JSON.stringify(myObj);
    wx.navigateTo({
      url: '../../nkxxLoans/nkxxLoans'
    })
  },

  onLoad() {

    // this.requestData()

    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // this.setData({
    //   listArr: []
    // })
    // this.requestData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.listArr.length < this.data.TotalNum) {
      // this.requestData()
    }else{
      // wx.showToast({
      //   title: '没有更多数据了',
      //   icon: 'none',
      //   duration: 1000
      // })
    }
  }

})
