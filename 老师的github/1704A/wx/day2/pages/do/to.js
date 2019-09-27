// pages/todolist/todolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    curlist:[],
    txt:'',
    num:0,
    ind:0,
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
  changeinput({detail}){
    console.log(detail);
    let {value} = detail;
    this.setData({txt:value});
  },
  changeColor({target}){
    let {ind,type} = target.dataset;
    console.log(target,type);
    let {curlist,list,nav} = this.data;
    if(type == 'all'){
      curlist = list;
    } else {
      curlist = list.filter(item => item.check == type);
    }
    this.setData({
      curlist
    })
  },
  add(){
    let {txt,list,curlist,nav} = this.data;
    let {type} = nav[0];
    list.push({
      txt,
      check:false,
      id:new Date().getTime()
    })
    if(type == 'all'){
      curlist = list;
    } else {
      curlist = list.filter(item => item.check == type)
    }
    this.setData({ list, curlist,txt:'',num:this.getnum(list)})
    console.log(this.data.curlist);
  },
  changechecbox({detail}){
    console.log(detail);
    let {value} = detail;
    let {nav,list,curlist} = this.data;
    curlist.forEach((item,index) => {
      item.check = value.includes(`${item.id}`);
    })
    this.setData({
      curlist,
      num:this.getnum(list)
    })
  },
  getnum(arr){
    return arr.reduce((prev,cur)=>{
      return prev + (cur.check ? 0 :1)
    },0)
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