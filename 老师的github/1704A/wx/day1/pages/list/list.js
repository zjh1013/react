// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mes:"周二",
    flag:1,
    title:'1704A',
    arr:[
      {
        namr:"小花",
        age:18
      },
      {
        namr: "小黑",
        age: 20
      },
      {
        namr: "小胖",
        age: 16
      }
    ],
    obj1:{
      name:'aa',
      address:'海淀',
      phone:'8989898989'
    }
  },

  goToLog({target}){ //查看日志
    console.log(target.dataset.name);
    wx.switchTab({ //跳转的是tabbar页面
      url: '/pages/logs/logs'
    })
  },
  goToDetail({ currentTarget}){ //详情页
    console.log(currentTarget);
    let { ind } = currentTarget.dataset;
    let obj = this.data.arr[ind];
    wx.navigateTo({ //跳转的是非tabbar的页面
      url: '/pages/detail/detail?id='+ind +'&name='+obj.namr+'&age='+obj.age,
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