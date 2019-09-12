Page({
  data: {
    PageCur: 'home'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: '微打卡',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})