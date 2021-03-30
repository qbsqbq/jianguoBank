Page({
      data: {
        imgUrls: [{
          "id": 1,
          url: 'https://www.cib.com.cn/cn/customer/home/slider-20210312.jpg'
        }, {
          "id": 2,
          url: 'https://www.cib.com.cn/cn/customer/home/20201014.jpg'
        }, {
          "id": 3,
          url: 'https://www.cib.com.cn/cn/customer/home/20200917.jpg'
        }],
        indicatorDots: true, //小点
        indicatorColor: "white", //指示点颜色
        activeColor: "coral", //当前选中的指示点颜色
        autoplay: true, //是否自动轮播
        interval: 2000, //间隔时间
        duration: 300, //滑动时间
        circuLar: true, //是否采用衔接滑动
        easingFunction:"easeInOutCubic", //缓入缓出动画
      }
    })