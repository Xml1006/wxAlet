// pages/home/home.js
// Page 注册小程序页面 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word:"Are you OK",
    flag:!!0,
    id:1902,
    count:7788,
    imgUrl:"https://zuozhaoxi.com/base/img/3.jpg",
    url:"https://zuozhaoxi.com/project"
  },


  changeFlag(e){
    console.log(e);
    this.setData({
      flag:!this.data.flag
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
    return {
      title:"每日购欢迎你来购买",
      url:"pages/home/home"
    }
  }
})