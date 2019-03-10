// pages/recommand/recommand.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/img/飞驰人生_wide.png',
      '../../images/img/流浪地球_wide.png',
      '../../images/img/疯狂的外星人_wide.png',
      '../../images/img/神探蒲松林_wide.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  onLoad: function (options) {

  }
})