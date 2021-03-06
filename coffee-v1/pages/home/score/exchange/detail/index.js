// pages/home/order/detail/index.js

import {
  IntOrderModel
} from '../../../../../api/IntOrder.js';

let intOrderModel = new IntOrderModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: {}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    intOrderModel.GetOrderIdByFind(options.id, res => {
      that.setData({
        details: res
      })
      console.log(that.data.details)
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

  },

  OnDelete() {
    var that = this;
    intOrderModel.GetIdByDelete(that.data.details.id, res => {
      wx.redirectTo({
        url: '/pages/home/order/index',
      })
    })
  }
})