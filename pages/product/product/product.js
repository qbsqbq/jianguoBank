
Page({

  data: {

//item的初始数据
    menus: [{
      meunId: 1,
      title: "信用卡",
      icon: "/resources/produc/xyk.png",
    },
    {
      meunId: 2,
      title: "存款",
      icon: "/resources/produc/ck.png",
    },
    {
      meunId: 3,
      title: "热门活动",
      icon: "/resources/produc/rmhd.png",
    },
    {
      meunId: 4,
      title: "社保功能",
      icon: "/resources/produc/sbfw.png",
    },
    {
      meunId: 5,
      title: "网点预约",
      icon: "/resources/produc/wdyy.png",
    },
    {
      meunId: 6,
      title: "贷款",
      icon: "/resources/produc/dk.png",
    },
    {
      meunId: 7,
      title: "理财产品",
      icon: "/resources/produc/lccp.png",
    },
    {
      meunId: 8,
      title: "基金",
      icon: "/resources/produc/jj.png",
    },
    {
      meunId: 9,
      title: "充值",
      icon: "/resources/produc/cz.png",
    },
    {
      meunId: 10,
      title: "全部",
      icon: "/resources/produc/qb.png",
    },
  ],

  //轮播图的初始数据
    imgUrls: [{
      "id": 1,
      "path": "https://market.cmbchina.com/MPage/online/210318161939496/gjfx.html?clean=false&behavior_entryid=stqlbt003&behavior_pageid=84590979&behavior_slotid=M60018&behavior_respid=c66e3b8b-b2e8-46f1-889b-0f77ff15664b&behavior_ofrcod=MAT2103231027533528&MID=corp8&AuthType=snsapi_base&OpenID=oDXZ9jnEIGbU2g8irDhK9d3PxHfo&TimeStamp=1617091583&Nonce=3101&Signature=hYf0%2fe%2fWOyOrVOGKyAWX7uyxCIfJsrzyDKOf05yhx%2bw%3d",
      url: 'https://www.cib.com.cn/cn/customer/home/slider-20210312.jpg'
    }, {
      "id": 2,
      "path": "https://market.cmbchina.com/MPage/online/210318161939496/gjfx.html?clean=false&behavior_entryid=stqlbt003&behavior_pageid=84590979&behavior_slotid=M60018&behavior_respid=c66e3b8b-b2e8-46f1-889b-0f77ff15664b&behavior_ofrcod=MAT2103231027533528&MID=corp8&AuthType=snsapi_base&OpenID=oDXZ9jnEIGbU2g8irDhK9d3PxHfo&TimeStamp=1617091583&Nonce=3101&Signature=hYf0%2fe%2fWOyOrVOGKyAWX7uyxCIfJsrzyDKOf05yhx%2bw%3d",
      url: 'https://www.cib.com.cn/cn/customer/home/20201014.jpg'
    }, {
      "id": 3,
      "path": "https://market.cmbchina.com/MPage/online/210318161939496/gjfx.html?clean=false&behavior_entryid=stqlbt003&behavior_pageid=84590979&behavior_slotid=M60018&behavior_respid=c66e3b8b-b2e8-46f1-889b-0f77ff15664b&behavior_ofrcod=MAT2103231027533528&MID=corp8&AuthType=snsapi_base&OpenID=oDXZ9jnEIGbU2g8irDhK9d3PxHfo&TimeStamp=1617091583&Nonce=3101&Signature=hYf0%2fe%2fWOyOrVOGKyAWX7uyxCIfJsrzyDKOf05yhx%2bw%3d",
      url: 'https://www.cib.com.cn/cn/customer/home/20200917.jpg'
    }],
    indicatorDots: true, //小点
    indicatorColor: "white", //指示点颜色
    activeColor: "coral", //当前选中的指示点颜色
    autoplay: true, //是否自动轮播
    interval: 2000, //间隔时间
    duration: 300, //滑动时间
    circuLar: true, //是否采用衔接滑动
    easingFunction: "easeInOutCubic", //缓入缓出动画
  },



   /**
   *选中menu
   */
  selectMenu:function(e){
    var option = e.currentTarget.dataset['title'];
   
     wx.showModal({
       title: '提示',
       content: "确定要进入" + option,
       showCancel: true,
       cancelText: '取消',
       cancelColor: '#000000',
       confirmText: '确定',
       confirmColor: '#3CC51F',
       success: (result) => {
         if (result.confirm) {
          //跳转
          // wx.navigateTo({
          //   url: '/pages/detaile/detaile?Title=' + option,
          // });
         }
       },
     });
  },
})