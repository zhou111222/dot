var sqlMap = {
  getValue: 'SELECT * FROM test WHERE pageId = ? and floorId = ? and widgetName = ?',
  setPv: 'UPDATE test SET pv = (pv + 1) WHERE pageId = ?',
  setUv: 'UPDATE test SET uv = (uv + 1) WHERE pageId = ?',
  setDt: 'UPDATE test SET dt = (dt + 1) WHERE pageId = ? and floorId = ? and widgetName = ?',
  setAd: 'UPDATE test SET ad1 = (ad1 + ?),ad2 = (ad2 + ?),ad3 = (ad3 + ?),ad4 = (ad4 + ?) WHERE pageId = ?'
}

module.exports = sqlMap
