// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    scrollH:[],
    ind:0,
    tit:'title0'
  },
  changeind({detail}){
    console.log(detail);
    let {ind} = detail;
    this.setData({
      ind,
      tit:'title'+ind
    })
  },
  scroll({detail}){
    let {scrollTop} =  detail;
    let {scrollH}  = this.data;
    // console.log(scrollH);
    scrollH.forEach((item,index) => {
      if (scrollH[index + 1] && (scrollTop > item && scrollTop < scrollH[index+1])){
        console.log(index);
        this.setData({ind:index})
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://192.168.4.203:8000/shop.json',
      success:(res)=>{
        console.log(res);
        this.setData({
          list: res.data.goods
        },()=>{
          const query = wx.createSelectorQuery();
          console.log(query);
          query.selectAll('.rightlist').boundingClientRect((rects)=>{
            this.setData({
              scrollH: rects.map((item, index) => item.top)
            })
          }).exec()
        })
      }
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