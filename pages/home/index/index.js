Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    aaa: '../../../images/tabbar/home.png'
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {

    },//show相当于onLoad
    hide: function () { },
    resize: function () { },
  },
  //执行wxml方法
  methods: {
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    show:function(){
      console.log(1234);
      
    }
  }
})