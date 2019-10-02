const express = require('express')
const router = express.Router()
const api = require('./api')
// 获取埋点数据
router.get('/getOpt', (req, res, next) => {
  api.getValue(req, res, next)
})
// 设置pv埋点数据
router.post('/postPv', (req, res, next) => {
  api.setPv(req, res, next)
})
// 设置uv埋点数据
router.post('/postUv', (req, res, next) => {
  api.setUv(req, res, next)
}) // 设置点击量埋点数据
router.post('/postDt', (req, res, next) => {
  api.setDt(req, res, next)
}) // 设置广告曝光量埋点数据
router.post('/postAd', (req, res, next) => {
  api.setAd(req, res, next)
})
module.exports = router
