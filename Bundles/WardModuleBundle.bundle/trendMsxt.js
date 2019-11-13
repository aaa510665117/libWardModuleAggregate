// 末梢血糖
function TrendMsxt (params) {

}

var timeData = ['清晨2:00', '早餐前6:30', '早餐后9:00', '午餐前11:00', '午餐后14:00', '晚餐前16:30', '晚餐后20:00', '睡前22:00', '半夜24:00']

TrendMsxt.prototype = new Trend()
TrendMsxt.prototype.construct = TrendMsxt

TrendMsxt.prototype.loadData = function () {
  $day = 3
  var msxt = 0
  var arr = []
  arr.push('patient')
  arr.push('bs-limitdate')
  arr.push('{"patid":"' + $info + '","type":"' + msxt + '"}')
  arr.push('1')
  arr.push('loadDataDone')

  nativeHttp(arr)
}

TrendMsxt.prototype.init = function () {
  start = $kssj
  var arr = new Array(4)
  var tempKey = 0
  arr[0] = 'patient'
  arr[1] = 'blood-sugar'
  arr[2] = '{"patid":"' + $info + '","kssj":"' + $kssj + '","jssj":"' + $jssj + '","type":"' + tempKey + '"}'
  arr[3] = 1
  arr[4] = 'initDone'

  nativeHttp(arr)
}

TrendMsxt.prototype.setX = function () {
  if ($patientDaysSigns.length === 0) nativeAlert('暂无数据')
  // 设置x轴
  var xtData = []

  if ($patientDaysSigns.length) {
    for (var i = 0; i < $patientDaysSigns.length; i++) {
      var lrsj = Date.fromRq16($patientDaysSigns[i].lrsj + '00:00:00').format('yyyy-MM-dd')
      xtData.push(lrsj + '\n' + timeData[0])
      xtData.push(timeData[1])
      xtData.push(timeData[2])
      xtData.push(timeData[3])
      xtData.push(timeData[4])
      xtData.push(timeData[5])
      xtData.push(timeData[6])
      xtData.push(timeData[7])
      xtData.push(timeData[8])
    }
  } else {
    for (i = 0; i < zyData.length; i++) {
      xtData.push(Date.fromRq16(addDate($jssj, -zyData.length + i + 1)).format('yyyy-MM-dd') + '\n' + timeData[0])
      xtData.push(timeData[1])
      xtData.push(timeData[2])
      xtData.push(timeData[3])
      xtData.push(timeData[4])
      xtData.push(timeData[5])
      xtData.push(timeData[6])
      xtData.push(timeData[7])
      xtData.push(timeData[8])
    }
  }

  xaxis = [{
    gridIndex: 0,
    type: 'category',
    name: '',
    position: 'bottom',
    boundaryGap: false,
    data: xtData,
    axisLine: { lineStyle: { color: '#CFD2D4' }, interval: 3 },
    axisLabel: {
      interval: 0,
      rotate: 60,
      margin: 14,
      textStyle: { fontSize: xaxisSize, color: '#999' }
    },
    splitLine: {
      show: true,
      lineStyle: { color: ['#DAE0FF', '#DAE0FF', '#DAE0FF', '#DAE0FF', '#DAE0FF', '#DAE0FF', '#DAE0FF', '#DAE0FF', '#C9D2FF'] }
    }
  },
  // 住院天数
  {
    gridIndex: 1,
    type: 'category',
    name: '',
    boundaryGap: false,
    position: 'bottom',
    data: zyData,
    axisLine: { show: false },
    axisLabel: {
      show: true,
      margin: 64,
      textStyle: { fontSize: xaxisSize, color: '#999' }
    }
  }]
}

TrendMsxt.prototype.setGrid = function () {
  grid = [{ left: 40, right: 30, bottom: 80, top: 40 }, { left: 40, right: 30, bottom: 80, height: 1 }]
}

TrendMsxt.prototype.drawGrid = function (data) {
  series = [
    {
      connectNulls: true,
      xAxisIndex: 0,
      yAxisIndex: 0,
      areaStyle: { normal: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#9EC5FF' }, { offset: 0.8, color: '#fff' }]) } },
      symbolSize: 12,
      symbol: 'circle',
      name: '',
      type: 'line',
      data: [],
      label: { normal: { show: true, textStyle: { fontSize: seriesSize, position: 'top', color: '#17A7FF' } } },
      itemStyle: { normal: { color: '#17A7FF' } },
      lineStyle: { normal: { color: '#4D8DFF', shadowColor: '#639BF2', shadowOffsetY: 1, shadowBlur: 5, opacity: 0.5 } }
    },
    { name: '天数', type: 'line', showSymbol: false, data: zyData, xAxisIndex: 1, yAxisIndex: 1 }
  ]

  for (var i = 0; i < data.length; i++) {
    if (data[i] && (data[i].lc_xt > 0 || data[i].zcq_xt > 0 || data[i].zch_xt > 0 ||
      data[i].wcq_xt > 0 || data[i].wch_xt > 0 || data[i].wancq_xt > 0 ||
      data[i].wanch_xt > 0 || data[i].sq_xt > 0 || data[i].by_xt > 0)) {
      if (i === 0) {
        if (Date.fromRq16(data[i].lrsj).format('yyyyMMdd') == start) continue
        else start = Date.fromRq16(data[i].lrsj).format('yyyyMMdd')
      } else continue
    } else {
      start = Date.fromRq16(data[i].lrsj).format('yyyyMMdd')
      break
    }
  }
  if (start == addDate($jssj, +1) || start == $kssj) {
    for (i = 0; i < data.length; i++) {
      series[0].data.push(data[i].lc_xt > 0 ? data[i].lc_xt : '_')
      series[0].data.push(data[i].zcq_xt > 0 ? data[i].zcq_xt : '_')
      series[0].data.push(data[i].zch_xt > 0 ? data[i].zch_xt : '_')
      series[0].data.push(data[i].wcq_xt > 0 ? data[i].wcq_xt : '_')
      series[0].data.push(data[i].wch_xt > 0 ? data[i].wch_xt : '_')
      series[0].data.push(data[i].wancq_xt > 0 ? data[i].wancq_xt : '_')
      series[0].data.push(data[i].wanch_xt > 0 ? data[i].wanch_xt : '_')
      series[0].data.push(data[i].sq_xt > 0 ? data[i].sq_xt : '_')
      series[0].data.push(data[i].by_xt > 0 ? data[i].by_xt : '_')
    }
    // 没数据填 -
    if (data.length === 0) {
      for (i = 0; i < zyData.length - 1; i++) {
        series[0].data.push('_')
        series[0].data.push('_')
        series[0].data.push('_')
        series[0].data.push('_')
        series[0].data.push('_')
        series[0].data.push('_')
        series[0].data.push('_')
        series[0].data.push('_')
        series[0].data.push('_')
      }
    }
  } else return redraw()
  unit = '毫摩/升'
}
