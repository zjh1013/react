// component/navSlide/navSlide.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    },
    ind:{
      type:Number,
      value:0
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeInd({target}) { //点击左侧
      let {ind} = target.dataset;
      console.log(ind);
      this.triggerEvent('changeInd',{ind});
    }
  }
})
