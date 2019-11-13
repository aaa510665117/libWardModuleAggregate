// 呼吸脉搏体温
function TrendHx (params) {

}

TrendHx.prototype = new Trend()
TrendHx.prototype.construct = TrendHx

TrendHx.prototype.setY = function () {
  yaxis = [{
    gridIndex: 0,
    type: 'value',
    name: '',
    min: 34,
    max: 43,
    interval: 0.5,
    position: 'left',
    nameTextStyle: { color: colors[0], fontSize: 14 },
    axisLine: { lineStyle: { width: 2, color: colors[0] } },
    axisLabel: { textStyle: { fontSize: yaxisSize, color: colors[0] } },
    splitLine: { lineStyle: { color: '#DAE0FF' } }
  },
  {
    gridIndex: 0,
    type: 'value',
    name: '',
    min: 0,
    max: 100,
    position: 'left',
    offset: 28,
    nameTextStyle: { color: colors[1], fontSize: 14 },
    axisLine: { lineStyle: { width: 2, color: colors[1] } },
    axisLabel: { textStyle: { fontSize: yaxisSize, color: colors[1] } },
    splitLine: { show: false }
  },
  {
    gridIndex: 0,
    type: 'value',
    name: '',
    min: 40,
    max: 220,
    position: 'left',
    offset: 54,
    nameTextStyle: { color: colors[2], fontSize: 14 },
    axisLine: { lineStyle: { width: 2, color: colors[2] } },
    axisLabel: { textStyle: { fontSize: yaxisSize, color: colors[2] } },
    splitLine: { show: false }
  },
  {
    gridIndex: 1,
    type: 'value',
    name: '住院天数',
    position: 'left',
    offset: 80,
    show: false,
    axisLabel: { splitLine: { show: false } }
  }]
}

TrendHx.prototype.setGrid = function () {
  grid = [{ left: 80, right: 30, bottom: 36, top: 40 }, { left: 80, right: 30, bottom: 36, height: 1 }]
}

TrendHx.prototype.drawGrid = function (data) {
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
    // 体温复测
    {
      lineStyle: {
        normal: {
          type: 'dashed',
          show: true,
          color: '#00F',
          shadowColor: '#00F',
          shadowOffsetY: 1,
          shadowBlur: 5,
          opacity: 0.5
        }
      },
      symbolSize: 8,
      symbol: 'circle',
      name: '体温1',
      type: 'line',
      data: [],
      label: { normal: { show: true, textStyle: { fontSize: 12, position: 'top', color: '#00F' } } },
      itemStyle: { normal: { color: '#fff', borderColor: '#00F', borderWidth: 1 } },
      yAxisIndex: 0,
      xAxisIndex: 1
    },
    // 呼吸
    {
      connectNulls: true,
      symbolSize: seriesPoint,
      symbol: 'emptyCircle',
      color: '#0000FF',
      name: '呼吸',
      type: 'line',
      data: [],
      label: {
        normal: {
          show: true,
          textStyle: { fontSize: seriesSize, position: 'top', color: '#008B00' }
        }
      },
      itemStyle: { normal: { color: '#008B00' } },
      lineStyle: { normal: { color: '#008B00', shadowColor: '#008B00', shadowOffsetY: 1, shadowBlur: 5, opacity: 0.5 } },
      yAxisIndex: 1,
      xAxisIndex: 0
    },
    // 脉搏
    {
      connectNulls: true,
      symbolSize: seriesPoint,
      symbol: 'circle',
      color: '#FF0000',
      name: '脉搏',
      type: 'line',
      data: [],
      label: {
        normal: {
          show: true,
          textStyle: { fontSize: seriesSize, position: 'top', color: '#FF3030' }
        }
      },
      itemStyle: { normal: { color: '#FF3030' } },
      lineStyle: { normal: { color: '#FF3030', shadowColor: '#FF3030', shadowOffsetY: 1, shadowBlur: 5, opacity: 0.5 } },
      yAxisIndex: 2,
      xAxisIndex: 0
    },
    // 体温
    {
      connectNulls: true,
      symbolSize: seriesPoint,
      symbol: 'triangle',
      color: colors[0],
      name: '体温',
      type: 'line',
      data: [],
      label: {
        normal: {
          show: true,
          textStyle: { fontSize: seriesSize, position: 'top', color: colors[3] }
        }
      },
      itemStyle: { normal: { color: colors[0] } },
      lineStyle: { normal: { show: true, color: colors[0], shadowColor: colors[0], shadowOffsetY: 1, shadowBlur: 5, opacity: 0.5 } },
      yAxisIndex: 0,
      xAxisIndex: 0
    },
    // 住院天数
    { name: '天数', type: 'line', showSymbol: false, data: zyData, xAxisIndex: 2, yAxisIndex: 3 },
    { name: '时间', type: 'line', showSymbol: false, data: zyTime, xAxisIndex: 3, yAxisIndex: 3 }
  ]
  var checkTimes = {}
  for (var i = 0; i < data.length; i++) {
    if (!data[i] && !(data[i].tw > 0 || data[i].hx > 0 || data[i].mb > 0)) {
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

  if (start === addDate($jssj, +1) || start === $kssj) {
    for (i = 0; i < data.length; i++) {
      if (!(data[i]) || !(data[i].tw > 0 || data[i].hx > 0 || data[i].mb > 0)) continue
      var bzsjd = Date.fromRq16(data[i].jlsj).format('yyyy/MM/dd HH:mm')
      var lrsj = Date.fromRq16(data[i].lrsj).format('yyyy/MM/dd HH:mm')
      var isCheck = isCheckTw(data[i])
      if (i > 0) prevIsCheck = isCheckTw(data[i - 1])
      if (i < data.length - 1) nextIsCheck = isCheckTw(data[i + 1])

      var hx = parseFloat(data[i].hx)
      if (hx > 0) series[3].data.push({ name: lrsj, value: [bzsjd, data[i].hx] })

      var mb = parseFloat(data[i].mb)
      if (mb > 0) series[4].data.push({ name: lrsj, value: [bzsjd, data[i].mb] })

      var tw = parseFloat(data[i].tw)
      if (tw > 0 && !isCheck) {
        series[5].data.push({ name: lrsj, value: [bzsjd, data[i].tw] })
      } else if (tw > 0 && isCheck && !checkTimes[bzsjd]) {
        if (i > 0) {
          for (var x = (i - 1); x > -1 && data[x].jlsj == data[i].jlsj; x--) {
            if (data[x].tw > 0) series[2].data.push({ name: lrsj, value: [bzsjd, data[x].tw], itemStyle: { normal: { opacity: 0 } } })
          }
        }
        series[2].data.push({ name: lrsj, value: [bzsjd, data[i].tw] })
        if (i < data.length - 1) {
          for (x = (i + 1); x < data.length && data[x].jlsj == data[i].jlsj; x++) {
            if (!(data[x].tw > 0)) continue
            var currentIsCheck = isCheckTw(data[x])
            if (!currentIsCheck) series[2].data.push({ name: lrsj, value: [bzsjd, data[x].tw], itemStyle: { normal: { opacity: 0 } } })
            else series[2].data.push({ name: lrsj, value: [bzsjd, data[x].tw] })
          }
        }
        series[2].data.push({ name: lrsj, value: [bzsjd, null] })
        checkTimes[bzsjd] = true
      }
      maxMb = parseFloat(data[i].mb) > maxMb ? parseFloat(data[i].mb) : maxMb
      maxHx = parseFloat(data[i].hx) > maxHx ? parseFloat(data[i].hx) : maxHx
      max_value = parseFloat(data[i].tw) > max_value ? parseFloat(data[i].tw) : max_value
    }
  } else return redraw()
  unit = ''
  window.chartView.__Option.legend.data = ['体温', '呼吸', '脉搏']
}

function isCheckTw (it) {
  return it.twlx === '11' || it.twlx === '10' || it.twlx === '12' || it.twlx === '13'
}
