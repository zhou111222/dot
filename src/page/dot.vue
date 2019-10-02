<!--
 * @Description: 商品详情页埋点测试
 * @Author: 周鹏飞
 * @Date: 2019-09-26 18:47:14
 -->
<template>
  <div class="dot">
    <div id="bigImage" class="arrDom">
      <div class="bigimg-title">商品详情</div>
      <div class="imgcon">
        <div>
          <div class="exposure-statistics" show-dot="{'act':'show',' key':'ad1'}">
          <img src="http://img20.360buyimg.com/vc/jfs/t10156/243/2575859382/93364/fd144ba7/59fad5c1Nafa4cc5e.jpg"/>
          </div>
          <div class="exposure-statistics" show-dot="{'act':'show',' key':'ad2'}">
            <img src="http://img20.360buyimg.com/vc/jfs/t10378/195/2598219354/80430/1d0d7aaa/59fad5c8N4707fc54.jpg" />
          </div>
          <div class="exposure-statistics" show-dot="{'act':'show',' key':'ad3'}">
            <img src="http://img20.360buyimg.com/vc/jfs/t11863/190/909541478/119765/f83b04f9/59fad5a4N75c5b3bc.jpg" />
          </div>
          <div class="exposure-statistics" show-dot="{'act':'show',' key':'ad4'}">
            <img src="http://img20.360buyimg.com/vc/jfs/t10180/119/2581479656/102027/cc9cd640/59fad5b4N271b5bac.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div id="recommendations" class="arrDom exposure-statistics" show-dot="{'act':'show',' key':'hotProduct'}">
      <div class="hot-title">热门推荐 </div>
      <div class="products w"
      v-for="product in hotProductList"
      :key="product.productId"
      v-clstag-dot = "{'act':'click', 'key': product.productId}">
        <div class="pro-img">
          <img :src="product.imgUrl"/>
        </div>
        <div class="pro-attr">
          <div class="pro-name">
            <i>京东</i>
            {{product.productName}}
          </div>
          <div class="pro-price">
            <p class="price">
              <span class="productPrice">￥{{product.productPrice}}</span>
              <i class="labels"
                :style="{background:item.bgColor}"
                v-for="(item,index) in product.labels"
                :key="index">
                <span>{{item.text}}</span>
              </i>
            </p>
            <p class="monthAmt">
              <span v-clstag-dot = "{'act':'thumbs', 'key': product.productId}">点赞</span>
              <span v-clstag-dot = "{'act':'collection', 'key': product.productId}">收藏</span>
              <span v-clstag-dot = "{'act':'comment', 'key': product.productId}">评论</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dot',
  data () {
    return {
      hotProductList: [
        {
          imgUrl: 'http://img13.360buyimg.com/n12/jfs/t19591/34/1767647263/178814/d27794a4/5ad6ee13N13afb1bc.jpg',
          labels: [
            {
              bgColor: '#FF9800',
              text: '全分已立减8.00'
            }
          ],
          miniPriceText: '最低京东报价 查看其他平台报价',
          monthAmt: '13.58',
          productId: '173197831',
          productName: 'HLA海澜之家牛仔裤男舒适简约版耐磨柔软HKNAD1E071A牛仔蓝(71)175/88A(34)',
          productPrice: '150.00'
        },
        {
          imgUrl: 'http://img13.360buyimg.com/n12/jfs/t19591/34/1767647263/178814/d27794a4/5ad6ee13N13afb1bc.jpg',
          labels: [
            {
              bgColor: '#FF9800',
              text: '全分已立减8.00'
            }
          ],
          miniPriceText: '最低京东报价 查看其他平台报价',
          monthAmt: '13.58',
          productId: '173197832',
          productName: 'HLA海澜之家牛仔裤男舒适简约版耐磨柔软HKNAD1E071A牛仔蓝(71)175/88A(34)',
          productPrice: '150.00'
        },
        {
          imgUrl: 'http://img13.360buyimg.com/n12/jfs/t19591/34/1767647263/178814/d27794a4/5ad6ee13N13afb1bc.jpg',
          labels: [
            {
              bgColor: '#FF9800',
              text: '全分已立减8.00'
            }
          ],
          miniPriceText: '最低京东报价 查看其他平台报价',
          monthAmt: '13.58',
          productId: '173197833',
          productName: 'HLA海澜之家牛仔裤男舒适简约版耐磨柔软HKNAD1E071A牛仔蓝(71)175/88A(34)',
          productPrice: '150.00'
        }
      ],
      pageId: 1
    }
  },
  mounted () {
    document.title = '商品详情页'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../assets/style/reset.scss";
  html,
  body,
  #app {
      width: 100%;
      background: #fff;
      margin-top:0;
  }
  #app{
    position: relative;
  }
  * {
      padding: 0;
      margin: 0;
  }
  .a {
      font-size: 40px;
  }
  .b {
      font-family: "AlternateGothicEF-NoTwo";
      font-size: 40px;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .car {
  width: 100%;
  height: 50px;
  background-color: #f5380a;
  line-height: 50px;
  text-align: center;
  font-size: 26px;
  margin: 20px 0;
}
.aa{
  display:none;
}
.bigimg-title{
  width:100%;
  height:100px;
  line-height:100px;
  font-size:32px;
}
#recommendations{
  padding-bottom: 1.546667rem /* 116/75 */;
  background: #fff;
  overflow: hidden;
  text-align:left;
  .hot-title{
    padding-left: 0.4rem;
    height: 1.493333rem /* 112/75 */;
    line-height: 1.493333rem /* 112/75 */;
    font-family: PingFangSC-Medium;
    font-size: .4rem /* 30/75 */;
    color: #262121;
    letter-spacing: 0;
    font-weight: 700;
    background-color: #fafafa;
  }
  .products{
    padding-left: 0.4rem !important;
    padding-right: 0.4rem !important;
    height: 3.2rem /* 220/75 */;
    padding-top: .4rem /* 30/75 */;
    position: relative;
    border-bottom: .133333rem solid #fafafa;
    .pro-img{
      width: 2.666667rem /* 200/75 */;
      height: 2.666667rem /* 200/75 */;
      float: left;
      img{
        width: 2.666667rem /* 200/75 */;
        height: 2.666667rem /* 200/75 */;
      }
    }
    .pro-attr{
      height: 3rem /* 225/75 */;
      padding-left: .266667rem /* 20/75 */;
      position: relative;
      margin-left: 2.66667rem;
      .pro-name{
        height: 1.066667rem /* 80/75 */;
        font-family: PingFangSC-Medium;
        font-size: .373333rem /* 28/75 */;
        line-height: .533333rem /* 40/75 */;
        color: #262121;
        letter-spacing: 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-align: left;
        margin-bottom: .48rem /* 36/75 */;
        i{
          display: inline-block;
          width: .8rem /* 50/75 */;
          height: .32rem /* 23/75 */;
          line-height: .32rem /* 23/75 */;
          text-align: center;
          border: 1px solid #F64F2F;
          font-family: PingFangSC-Regular;
          font-size: .24rem /* 18/75 */;
          color: #F64F2F;
          letter-spacing: 0;
          position: relative;
          top: -0.045rem;
        }
      }
      .pro-price{
        width: 6.266667rem /* 470/75 */;
        line-height: .56rem /* 42/75 */;
        .price{
          font-family: Futura-Medium;
          font-size: .4rem /* 30/75 */;
          color: #000F0F;
          letter-spacing: 0;
          display: flex;
          flex-wrap: wrap;
          .productPrice{
            display: block;
            line-height: .56rem /* 42/75 */;
            margin-right: .306667rem /* 23/75 */;
          }
          .labels{
            display: inline-block;
            height: .4rem /* 30/75 */;
            line-height:0.4rem;
            padding: 0 0.3rem;
            margin-right: .133333rem /* 10/75 */;
            font-family: PingFangSC-Regular;
            font-size: .24rem /* 18/75 */;
            color: #FFFFFF;
            letter-spacing: 0;
            z-index: 1;
            margin-top: 0.08rem;
            background-color:red;
            span{
              display: block;
              width: 100%;
              height: 0.4rem;
              padding: 0 0.1333rem;
              line-height: 0.4rem;
            }
          }
        }
        .monthAmt{
          height: .493333rem /* 37/75 */;
          line-height: .493333rem /* 37/75 */;
          font-family: PingFangSC-Regular;
          font-size: .32rem /* 24/75 */;
          color: #262121;
          letter-spacing: 0;
          span{
            display: inline-block;
            width: 1.333333rem /* 100/75 */;
            height: .426667rem /* 32/75 */;
            line-height: .426667rem /* 32/75 */;
            text-align: center;
            font-family: Futura-Medium;
            font-size: .32rem /* 24/75 */;
            background-color:  #F64F2F;
            color: #fff;
            letter-spacing: 0;
            border-radius: 10%;
            margin-left: .133333rem /* 10/75 */;
          }
        }
      }
      .mailAmt{
        width: 100%;
        height: .533333rem /* 40/75 */;
        margin-top: .68rem /* 51/75 */;
        font-family: PingFangSC-Medium;
        font-size: .373333rem /* 28/75 */;
        color: #666666;
        letter-spacing: 0;
        text-align: right;
      }
    }
  }
}
// iphone x max底部适配
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    #recommendations {
        padding-bottom: 2.5rem;
    }
}
</style>
