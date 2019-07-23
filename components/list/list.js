// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    tab: {
      type: String
    },
    goods: {
      type: Array
    }

  },

  /**
   * 组件的初始数据
   */
  data: {


    good: []

  },

  lifetimes: {

    attached: function () {
      console.log(333, this.properties.goods);
      var good = this.properties.goods.filter(item => item.type == this.properties.tab);
      console.log(555, good);

      this.setData({
        good
      })
    },
    moved: function () { },
    detached: function () { }

  },

  /**
   * 组件的方法列表
   */
  methods: {

    upper() {
      console.log("upper 下拉刷新");
      setTimeout(() => {
        this.data.good.reverse();
        this.setData({
          good: this.data.good
        })

        wx.showToast({
          title: "下拉刷新 成功"
        })
      }, 1000)
    },
    lower() {
      console.log("lower 上拉加载更多 ")
      var length = this.data.good.length;
      var num = 0 + Math.floor(Math.random() * (length - 4));
      console.log(num);
      var arr = this.data.good.slice(num, num + 4);
      var good = this.data.good.concat(arr);
      setTimeout(() => {
        this.setData({
          good
        })
        wx.showToast({
          title: "上拉加载更多 成功"
        })
      }, 1000)
    },
    scroll() {
      console.log("scroll 正在滑动")
    }

  }
})
