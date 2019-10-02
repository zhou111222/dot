'use strict'
/**
 *所有图片js
 */
let loading = ["https://pic12.secooimg.com/res/common/2019-707-lucky/707/img_0.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/img_1.png"];
//流光
let streamer_img = ["https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-1.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-2.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-3.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-4.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-5.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-6.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-7.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-8.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-9.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-10.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-11.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-12.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-13.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-14.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-15.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-16.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-17.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-18.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-19.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-20.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-21.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-22.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-21.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-20.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-19.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-18.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-17.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-16.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-15.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-14.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-13.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-12.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-11.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-10.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-9.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-8.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-7.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-6.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-5.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-4.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-3.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-2.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a-1.png"];
//
let turn_balls = ["https://pic12.secooimg.com/res/common/2019-707-lucky/707/z1.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z2.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z3.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z4.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z5.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z6.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z7.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z8.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z9.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z10.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z11.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z12.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z13.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z14.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z15.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z16.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z17.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z18.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z19.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z20.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z21.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z22.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z23.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z24.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z25.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z26.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z27.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z28.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z29.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z30.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z31.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z32.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z33.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z34.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z35.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z36.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z37.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z38.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z39.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z40.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z41.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z42.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z43.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z44.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z45.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z46.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z47.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z48.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z49.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z50.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z51.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z52.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z53.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z54.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z55.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z56.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z57.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z58.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z59.jpg",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z60.jpg", "https://pic12.secooimg.com/res/common/2019-707-lucky/707/z1.jpg"];

//中奖图片
let lucky_balls = [
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0000-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0001-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0002-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0003-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0004-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0005-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0006-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0007-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0008-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0009-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0010-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0011-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0012-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0013-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0014-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0015-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0016-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0017-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0018-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0019-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0020-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0021-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0022-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0023-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0024-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0025-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0026-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0027-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0028-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0029-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0030-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0031-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0032-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0033-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0034-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0035-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0036-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0037-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0038-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0039-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/40.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/41.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/42.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/43.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/44.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/45-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/46-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/47-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/48-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/49-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/50-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/51-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/52-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/53-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/54-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/55-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/56-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/57-min.png"
]

let iphone_x_lucky = [
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a1.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a1.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a1.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a1.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a1.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a1.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a1.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a1.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a1.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a1.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a1.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a2.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a3.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a4.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a5.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a6.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a7.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/a8.png"]

//默认图
let tabBtn = ["https://pic12.secooimg.com/res/common/2019-707-lucky/707/bg4-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/36_0000-min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/default1.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/touch1.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/touch2.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/default2.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/giftcard1@.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/vip.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/tobe vip.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/qiandao.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/share.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/invite.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/bag.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/my_mission_new.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/finish_niudanbi bg_min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/finish_huodongjieshu bg_min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/success_button_min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/success_bg_min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/sign-in_bg_min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/alert_close_min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/rules_bg_min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/toDaybox.png"];

//大奖弹窗动画
let bigGift = [
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/r1_min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/r2_min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/r3_min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/r4_min.png",
  "https://pic12.secooimg.com/res/common/2019-707-lucky/707/r5_min.png"]



let imgAll = loading.concat(tabBtn, turn_balls, lucky_balls, bigGift, iphone_x_lucky, streamer_img);
// imgAll.forEach((src, index) => {
//   imgAll[index] = "https://pic12" + src;
// })


export default {
  imgAll,
  loading,
  turn_balls,
  lucky_balls,
  bigGift,
  iphone_x_lucky,
  streamer_img
};



//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}