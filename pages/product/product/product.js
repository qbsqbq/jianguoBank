Page({
      data: {
        imgUrls: [{
          "id": 1,
          url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2388864148,4157044652&fm=26&gp=0.jpg'
        }, {
          "id": 2,
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=129474270,2801435851&fm=26&gp=0.jpg'
        }, {
          "id": 3,
          url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2804989228,4006217075&fm=26&gp=0.jpg'
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