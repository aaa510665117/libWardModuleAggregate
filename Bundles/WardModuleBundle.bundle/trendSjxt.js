// 随机血糖
function TrendSjxt (params) {

}

TrendSjxt.prototype = new Trend()
TrendSjxt.prototype.construct = TrendSjxt

TrendSjxt.prototype.loadData = function () {
  $day = 3
  var msxt = 1
  var arr = []
  arr.push('patient')
  arr.push('bs-limitdate')
  arr.push('{"patid":"' + $info + '","type":"' + msxt + '"}')
  arr.push('1')
  arr.push('loadDataDone')

  nativeHttp(arr)
}

TrendSjxt.prototype.init = function () {
  start = $kssj
  var arr = new Array(4)
  var tempKey = 1
  arr[0] = 'patient'
  arr[1] = 'blood-sugar'
  arr[2] = '{"patid":"' + $info + '","kssj":"' + $kssj + '","jssj":"' + $jssj + '","type":"' + tempKey + '"}'
  arr[3] = 1
  arr[4] = 'initDone'

  nativeHttp(arr)
}

TrendSjxt.prototype.drawGrid = function (data) {
  series = [
    // X轴模板，每隔5天，每天显示几个点
    {
      name: 'anchor',
      type: 'line',
      showSymbol: false,
      data: $tempData,
      itemStyle: { normal: { opacity: 0 } },
      lineStyle: { normal: { opacity: 0 } },
      yAxisIndex: 0,
      xAxisIndex: 0
    },
    // X轴日期数据轴
    {
      name: '.anchor',
      type: 'line',
      showSymbol: false,
      data: $tempData,
      itemStyle: { normal: { opacity: 0 } },
      lineStyle: { normal: { opacity: 0 } },
      yAxisIndex: 0,
      xAxisIndex: 1
    },
    {
      yAxisIndex: 0,
      xAxisIndex: 0,
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#9EC5FF' },
          { offset: 0.8, color: '#fff' }])
        }
      },
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
  for (i = 0; i < data.length; i++) {
    if (data[i] && data[i].sj_xt) {
      if (i === 0) {
        if (Date.fromRq16(data[i].lrsj).format('yyyyMMdd') === start) continue
        else start = Date.fromRq16(data[i].lrsj).format('yyyyMMdd')
      } else continue
    } else {
      start = Date.fromRq16(data[i].lrsj).format('yyyyMMdd')
      break
    }
  }
  if (start < limitData.minDate) start = limitData.minDate

  if (start === addDate($jssj, +1) || start === $kssj) {
    for (i = 0; i < data.length; i++) {
      var bzsjd = Date.fromRq16(data[i].jlsj).format('yyyy/MM/dd HH:mm')
      var lrsj = Date.fromRq16(data[i].lrsj).format('yyyy/MM/dd HH:mm')
      if (!data[i] || !data[i].sj_xt) continue

      series[2].data.push({ name: lrsj, value: [bzsjd, data[i].sj_xt] })
      max_value = parseFloat(data[i].sj_xt) > max_value ? parseFloat(data[i].sj_xt) : max_value
    }
  } else return redraw()
  unit = '毫摩/升'
}
