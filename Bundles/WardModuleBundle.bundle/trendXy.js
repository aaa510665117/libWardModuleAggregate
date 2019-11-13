// 血压
function TrendXy (params) {

}

TrendXy.prototype = new Trend()
TrendXy.prototype.construct = TrendXy

TrendXy.prototype.drawGrid = function (data) {
  series = [
    { xAxisIndex: 0, name: 'anchor', type: 'line', showSymbol: false, data: $tempData, itemStyle: { normal: { opacity: 0 } }, lineStyle: { normal: { opacity: 0 } } },
    { xAxisIndex: 1, name: '.anchor', type: 'line', showSymbol: false, data: $tempData, itemStyle: { normal: { opacity: 0 } }, lineStyle: { normal: { opacity: 0 } } },
    { xAxisIndex: 0, symbolSize: seriesPoint, symbol: 'circle', name: '收缩压', type: 'line', data: [], label: { normal: { show: true, textStyle: { fontSize: seriesSize, position: 'top', color: '#ff0000' } } }, itemStyle: { normal: { color: '#ff0000' } }, lineStyle: { normal: { color: '#ff0000', shadowColor: '#ff0000', shadowOffsetY: 1, shadowBlur: 5, opacity: 0.5 } } },
    { xAxisIndex: 0, symbolSize: seriesPoint, symbol: 'circle', name: '舒张压', type: 'line', data: [], label: { normal: { show: true, textStyle: { fontSize: seriesSize, position: 'top', color: '#2e7d32' } } }, itemStyle: { normal: { color: '#2e7d32' } }, lineStyle: { normal: { color: '#2e7d32', shadowColor: '#2e7d32', shadowOffsetY: 1, shadowBlur: 5, opacity: 0.5 } } },
    { name: '天数', type: 'line', showSymbol: false, data: zyData, xAxisIndex: 2, yAxisIndex: 1 },
    { name: '时间', type: 'line', showSymbol: false, data: zyTime, xAxisIndex: 3, yAxisIndex: 1 }
  ]
  for (var i = 0; i < data.length; i++) {
    if (!data[i] || !data[i].xy || data[i].twlx == 'True') {
      if (i == 0) {
        if (Date.fromRq16(data[i].lrsj).format('yyyyMMdd') == start) continue
        else start = Date.fromRq16(data[i].lrsj).format('yyyyMMdd')
      } else continue
    } else {
      start = Date.fromRq16(data[i].lrsj).format('yyyyMMdd')
      break
    }
  }
  if (start < limitData.minDate) start = limitData.minDate

  if (start == addDate($jssj, +1) || start == $kssj) {
    for (var i = 0; i < data.length; i++) {
      var bzsjd = Date.fromRq16(data[i].jlsj).format('yyyy/MM/dd HH:mm')
      var lrsj = Date.fromRq16(data[i].lrsj).format('yyyy/MM/dd HH:mm')
      if (!data[i] || !data[i].xy || data[i].twlx == 'True') continue
      var xyData = (data[i].xy).split('/')
      series[2].data.push({ name: lrsj, value: [bzsjd, xyData[0]] })
      series[3].data.push({ name: lrsj, value: [bzsjd, xyData[1]] })
      var max = parseFloat(xyData[1]) > parseFloat(xyData[2]) ? parseFloat(xyData[1]) : parseFloat(xyData[2])
      max_value = max > max_value ? max : max_value
    }
  } else return redraw()

  unit = 'mmHg'
  window.chartView.__Option.legend.data = ['收缩压', '舒张压']
}

TrendXy.prototype.setMax = function () {
  // marks.push({ yAxis: parseFloat(standard[3] ), name: '血压最小值', lineStyle: { normal: { color: "green" } } });
  // window.chartView.__Option.yAxis.max =standard[3]>max_value?standard[3]:max_value  ;
  marks.push({ yAxis: parseFloat(standard[4]), name: '血压最大值', lineStyle: { normal: { color: 'red' } } })
  window.chartView.__Option.yAxis.max = max_value
}
