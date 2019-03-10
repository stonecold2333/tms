// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filmlist:[
      {
        img:'../../images/img/疯狂的外星人.jpg',
        title:'疯狂的外星人',
        desc:'喜剧,科幻',
        length:'片长:116分钟',
        points:'评分:6.4'
      },
      {
        img:'../../images/img/飞驰人生.jpg',
        title:'飞驰人生',
        desc:'喜剧',
        length:'片长:98分钟',
        points:'评分:7.0'
      },
      {
        img:'../../images/img/神探蒲松林.jpg',
        title:'神探蒲松林',
        desc:'喜剧，动作，奇幻',
        length:'片长:108分钟',
        points:'评分:4.1'
      },
      {
        img: '../../images/img/流浪地球.jpg',
        title: '流浪地球',
        desc: '科幻，灾难',
        length: '片长:125分钟',
        points: '评分:7.9'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }

})