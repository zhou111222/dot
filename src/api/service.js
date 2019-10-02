import { post, get } from './index'

import { commonApi } from './apimap'

// 获取groupid
const getGroupId = params => post(commonApi.apiGetGroupId, params)
// 修改埋点
const postOpt = params => post(commonApi.apiPostOpt, params)
// 修改埋点
const postPv = params => post(commonApi.apiPostPv, params)
// 修改埋点
const postUv = params => post(commonApi.apiPostUv, params)
// 修改埋点
const postDt = params => post(commonApi.apiPostDt, params)
// 修改埋点
const postAd = params => post(commonApi.apiPostAd, params)
// 获取埋点数据
const getOpt = params => get(commonApi.apiGetOpt, params)
export {
  getGroupId,
  postOpt,
  postPv,
  postUv,
  postDt,
  postAd,
  getOpt
}
