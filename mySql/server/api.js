const mysql = require('mysql')
const dbConfig = require('./db')
const sqlMap = require('./sqlMap')

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true // 多语句查询
})

module.exports = {
  /**
   * @description: 获取数据库中的埋点数据
   * @param {type}
   * @return: 数据库中的埋点数据
   */
  getValue (req, res, next) {
    var pageId = Number(JSON.parse(req.query.params).pageId)
    var floorId = Number(JSON.parse(req.query.params).floorId)
    var widgetName = JSON.parse(req.query.params).widgetName
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getValue
      connection.query(sql, [pageId, floorId, widgetName], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  /**
   * @description: 数据库中的uv数量加1
   */
  setUv (req, res, next) {
    console.log(req)
    var pageId = req.body.pageId
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setUv
      connection.query(sql, [pageId], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  /**
   * @description: 数据库中的pv数量加1
   */
  setPv (req, res, next) {
    console.log(req)
    var pageId = req.body.pageId
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setPv
      connection.query(sql, [pageId], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  /**
   * @description: 数据库中的dt(点击量)数量加1
   */
  setDt (req, res, next) {
    console.log(req)
    var pageId = req.body.pageId,
      floorId = req.body.floorId,
      widgetName = req.body.widgetName
    console.log(req)
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setDt
      connection.query(sql, [pageId, floorId], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  /**
   * @description: 数据库中的广告曝光数量加1
   */
  setAd (req, res, next) {
    var pageId = Number(req.body.pageId)
    var ad1 = req.body.adsList.ad1 ? req.body.adsList.ad1 : 0
    var ad2 = req.body.adsList.ad2 ? req.body.adsList.ad2 : 0
    var ad3 = req.body.adsList.ad3 ? req.body.adsList.ad3 : 0
    var ad4 = req.body.adsList.ad4 ? req.body.adsList.ad4 : 0
    console.log('req.body.adsList', req.body.adsList)
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setAd
      connection.query(sql, [ad1, ad2, ad3, ad4, pageId], (err, result) => {
        console.log(result)
        res.json(result)
        connection.release()
      })
    })
  }
}
