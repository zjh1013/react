// pages/todolist/todolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt:'',
    num:0,
    ind:0,
    list:[], //原来的数据
    curlist:[],
    nav:[
      {
        name:'全部',
        type:'all'
      },
      {
        name:'待办',
        type:false
      },
      {
        name:'完成',
        type:true
      }
    ]
  },
  changetxt({detail}){
    let {value} = detail;
    this.setData({txt:value});
  },
  changeInd({target}){
    console.log(target);
    let {ind,type} = target.dataset;
    let {list,curlist} = this.data;
    if(type == 'all'){
      curlist = list;
    } else {
      curlist = list.filter(item => item.check === type)
    }
    this.setData({ind,curlist})
  },
  add(){ //添加
    let {txt,list,curlist} = this.data;
    console.log(txt);
    list.push({
      txt,
      check:false,
      id:new Date().getTime()
    })
    curlist = list;
    // if(type == 'all'){
    // } else {
    //   curlist = list.filter(item => item.check === type);
    // }
    this.setData({list,curlist,num:this.getnum(list),txt:''})
  },
  getnum(arr){
    return arr.reduce((prev,cur)=>{
      return prev + (cur.check? 0: 1)
    },0);
  },
  changeCheck({detail}){
    console.log(detail);
    let {value} = detail;
    let {list,curlist} = this.data;
    curlist.forEach(item => {
      item.check = value.includes(`${item.id}`)
    })
    this.setData({
      curlist,
      num:this.getnum(list)})
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