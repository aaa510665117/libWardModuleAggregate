// 指氧
function TrendZy (params) {

}

TrendZy.prototype = new Trend()
TrendZy.prototype.construct = TrendZy

TrendZy.prototype.drawGrid = function (data) {
  series = [
    { name: 'anchor', type: 'line', showSymbol: false, data: $tempData, itemStyle: { normal: { opacity: 0 } }, lineStyle: { normal: { opacity: 0 } }, xAxisIndex: 0 },
    { name: '.anchor', type: 'line', showSymbol: false, data: $tempData, itemStyle: { normal: { opacity: 0 } }, lineStyle: { normal: { opacity: 0 } }, xAxisIndex: 1 },
    {
      xAxisIndex: 1,
      areaStyle: { normal: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#9EC5FF' }, { offset: 0.8, color: '#fff' }]) } },
      symbolSize: ($fontBasic * 0.754).toFixed(2),
      symbol: 'circle',
      name: '',
      type: 'line',
      data: [],
      label: { normal: { show: true, textStyle: { fontSize: seriesSize, position: 'top', color: '#17A7FF' } } },
      itemStyle: { normal: { color: '#17A7FF' } },
      lineStyle: { normal: { color: '#4D8DFF', shadowColor: '#639BF2', shadowOffsetY: 1, shadowBlur: 5, opacity: 0.5 } }
    },
    { name: '天数', type: 'line', showSymbol: false, data: zyData, xAxisIndex: 2, yAxisIndex: 1 },
    { name: '时间', type: 'line', showSymbol: false, data: zyTime, xAxisIndex: 3, yAxisIndex: 1 }
  ]
  for (var i = 0; i < data.length; i++) {
    if (data[i] && data[i].zy && data[i].twlx == 'True') {
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
      if (!data[i] || !data[i].zy || data[i].twlx == 'True') continue
      series[2].data.push({ name: lrsj, value: [bzsjd, data[i].zy] })
      max_value = parseFloat(data[i].zy) > max_value ? parseFloat(data[i].zy) : max_value
    }
  } else return redraw()
  unit = '百分比'
}

TrendZy.prototype.setMax = function () {
  // marks.push({ yAxis: parseFloat(standard[5]),name: '血氧浓度基准线', lineStyle: { normal: { color: "red" } } });
  window.chartView.__Option.yAxis.max = standard[5] > max_value ? standard[5] : max_value
}
