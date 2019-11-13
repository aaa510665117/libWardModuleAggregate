var Trend = function () {

}

var standard = []
var colors = ['#6B8DFF', '#00CA6E', '#FF7A7A', '#3655FF']
var key = 'hx'
var title = ''
var $kssj = ''
var $jssj = ''
var $fontBasic = 14
var $hour = 6
var $day = 5
var $date = 0
var yaxis = []
var $patientDaysSigns = []
var $info = []
var grid = {}
var $tempData = []
var limitData = ''
var start = ''
var $ryrq = ''

var zyData = []
var zyTime = []
var xaxis = null
var maxMb = 0
var maxHx = 0
var max_value = 0
var yaxis = null
var series = null
var unit = null

Trend.prototype.initView = function () {
  $('#main-viewport').hide()
  $('#date').show()
  $('#data-view').show()
}

Trend.prototype.loadData = function () {
  var arr = []
  arr.push('patient')
  arr.push('vs-limitdate')
  arr.push('{"patid":"' + $info + '"}')
  arr.push('1')
  arr.push('loadDataDone')

  nativeHttp(arr)
}

Trend.prototype.loadDataDone = function (d) {
  limitData = JSON.parse(d)
  $date = parseInt($day)
  $jssj = limitData.maxDate.length > 4 ? limitData.maxDate : (new Date()).format('yyyyMMdd')
  $kssj = addDate($jssj, -$day + 1)
  if (limitData.minDate && limitData.maxDate) {
    var dtbegin = Date.fromRq16(limitData.minDate + ' 00:00:00').format('yyyy-MM-dd')
    $('#dtbegin').val(dtbegin)
    $('.caretStart').html(getWeek(dtbegin))
    var dtend = Date.fromRq16(limitData.maxDate + ' 00:00:00').format('yyyy-MM-dd')
    $('#dtend').val(dtend)
    $('.caretEnd').html(getWeek(dtend))

    var d = Math.abs(dateDiff(dtbegin, dtend))
    if (isNaN(d)) {
      $('.day').html('')
    } else {
      $('.day').html('共' + d + '天')
    }

    $('#dtbegin').data('min', Date.fromRq16(limitData.minDate + ' 00:00:00').format('yyyyMMddHH:mm')).data('max', Date.fromRq16(limitData.maxDate + ' 00:00:00').format('yyyyMMddHH:mm'))

    // 设置选择日期范围  caretStart
    $('#dtend').data('max', Date.fromRq16(limitData.maxDate + ' 00:00:00').format('yyyyMMddHH:mm')).data('min', Date.fromRq16(limitData.minDate + ' 00:00:00').format('yyyyMMddHH:mm'))
    // 初始化 x轴 y轴
  }
  this.init()
}

Trend.prototype.init = function () {
  start = $kssj
  var arr = []
  arr[0] = 'patient'
  arr[1] = 'days-signs'
  arr[2] = '{"patid":"' + $info + '","kssj":"' + $kssj + '","jssj":"' + $jssj + '"}'
  arr[3] = 1
  arr[4] = 'initDone'
  nativeHttp(arr)
}

Trend.prototype.initDone = function (patient) {
  $patientDaysSigns = JSON.parse(patient)
  if (window.chartView) window.chartView.dispose()
  // 动态设置y轴
  zyData = []
  zyTime = []
  var kssj = Date.fromRq16($kssj).format('yyyy-MM-dd')
  var ryrq = Date.fromRq16($ryrq).format('yyyy-MM-dd')
  var timeDiffer = dateDiff(kssj, ryrq)
  var timeDifference = timeDiffer + 1
  for (var i = 0; i < $date + 1; i++) {
    zyData.push('住院' + timeDifference + '天')
    timeDifference++
  }
  for (i = 0; i < $date; i++) {
    zyTime.push('12:00')
  }
  this.setX()
  this.setY()
  this.setGrid()
  // 绑定趋势图
  window.chartView = echarts.init(document.getElementById('data-view'), null, { renderer: 'svg' })
  // 设置基础信息
  window.chartView.__Option = {
    title: { left: 'left', text: '', textStyle: { fontSize: 12, color: '#333' } },
    // x轴
    xAxis: [],
    legend: {
      left: 'right',
      top: 10,
      data: [],
      textStyle: { fontSize: 12, padding: [5, 30, 1, 1], shadowColor: 'rgba(33,52,120,0.50)', borderColor: '#213478' },
      connectNulls: true,
      grid: {},
      yAxis: [],
      tooltip: { trigger: 'item', formatter: '{a}<br/>{b}:{c}', borderColor: '#333' },
      plotOptions: {
        line: { connectNulls: true, dataLabels: { enabled: true }, enableMouseTracking: false }
      },
      series: []
    }
  }
  // 绑定x轴y轴
  window.chartView.__Option.yAxis = yaxis
  window.chartView.__Option.xAxis = xaxis
  window.chartView.__Option.grid = grid
  // 设置y轴提示语
  if (key === 'hx') title = '呼吸/脉搏/体温'
  else if (key === 'xy') title = '血压'
  else if (key === 'zy') title = '血氧饱和度'
  else if (key === 'msxt') title = '末梢血糖检测值'
  else if (key === 'sjxt') title = '随机血糖检测值'
  if ($patientDaysSigns) {
    this.drawView($patientDaysSigns, key)
  }
}

Trend.prototype.setX = function () {
  // 动态设置x轴
  xaxis = [{
    gridIndex: 0,
    type: 'time',
    name: '',
    position: 'bottom',
    data: [],
    interval: 3600 * 24 * 1000,
    axisLine: { lineStyle: { color: '#DAE0FF' } },
    axisLabel: { margin: 4, interval: 0, textStyle: { fontSize: 10, color: '#333' } },
    splitLine: { show: true, lineStyle: { color: ['#6B8DFF', '#DAE0FF', '#DAE0FF', '#DAE0FF', '#DAE0FF', '#DAE0FF'] } }
  },
  // 显示格
  {
    gridIndex: 0,
    type: 'time',
    name: '',
    position: 'top',
    data: [],
    interval: 3600 * 24 / $hour * 1000,
    axisLine: { lineStyle: { color: '#DAE0FF' } },
    axisLabel: { show: false, margin: 5, interval: 0, textStyle: { fontSize: 10, color: '#333', fontWeight: 'bold' } },
    splitLine: { show: true, lineStyle: { color: ['#6B8DFF', '#DAE0FF', '#DAE0FF', '#DAE0FF', '#DAE0FF', '#DAE0FF'] } }
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
    axisLabel: { show: true, margin: 20, textStyle: { fontSize: 10, color: '#999' } },
    splitLine: { show: false }
  },
  // 显示时间段
  {
    gridIndex: 1,
    type: 'category',
    name: '',
    position: 'bottom',
    data: zyTime,
    axisLine: { show: false },
    axisLabel: { show: true, margin: 10, textStyle: { fontSize: 10, color: '#666' } }
  }]
}

Trend.prototype.setY = function () {
  yaxis = [{
    gridIndex: 0,
    type: 'value',
    name: '',
    nameTextStyle: { color: '#999', fontSize: ($fontBasic * 1.334).toFixed(2) },
    lineStyle: { width: 3, color: '#999' },
    axisLabel: { margin: 10, textStyle: { yaxisSize, color: '#999' } }
  },
  { gridIndex: 1, type: 'value', name: '住院天数', position: 'left', offset: 10, show: false }]
}

Trend.prototype.setGrid = function () {
  grid = [{ left: 40, right: 40, bottom: 36, top: 40 }, { left: 40, right: 40, bottom: 36, height: 1 }]
}

Trend.prototype.drawView = function (data, key) {
  var kssj = Date.fromRq16($kssj + ' 00:00:00').format('yyyy/MM/dd \n HH:mm')
  var jssj = Date.fromRq16(addDate($jssj, 1) + ' 00:00:00').format('yyyy/MM/dd \n HH:mm')
  $tempData = [{ name: kssj, value: [kssj, 0] }, { name: jssj, value: [jssj, 0] }]

  this.drawGrid(data)
  if (data.length > 0 && standard && standard.length > 0) {
    var marks = []
    this.setMax()
    $.extend(series[0], { markLine: { itemStyle: { normal: { label: { textStyle: { fontSize: seriesSize } } } }, data: marks } })
  }

  tooltip = {
    axisPointer: { type: 'line', lineStyle: { color: '#17a7ff' } },
    trigger: 'axis',
    backgroundColor: '#fff',
    padding: [10, 15],
    textStyle: { color: '#000', fontSize: 10 },
    borderWidth: 1,
    borderColor: '#17a7ff',
    formatter: function (params, ticket, callback) {
      var flag = true
      var htmlStr = ''
      for (var i = 0; i < params.length; i++) {
        var param = params[i]
        var value = param.value// y轴值
        var name = param.name
        var sname = param.seriesName
        if (value && value[1] && value[1].length > 0) {
          if (i === 1 && name && flag) {
            htmlStr += "<div class='pro'><span class='cont time'>" + name + '</span></div>'
            flag = false
          } else if (i === 2 && name && flag) {
            htmlStr += "<div class='pro'><span class='cont time'>" + name + '</span></div>'
            flag = false
          } else if (i === 3 && name && flag) {
            htmlStr += "<div class='pro'><span class='cont time'>" + name + '</span></div>'
            flag = false
          } else if (i === 4 && name && flag) {
            htmlStr += "<div class='pro'><span class='cont time'>" + name + '</span></div>'
          }
          if (key === 'msxt') htmlStr += "<div class='pro'><span >" + '末梢血糖' + "：</span><span class='cont'>" + value + '</span></div>'
          else if (key === 'sjxt') htmlStr += "<div class='pro'><span >" + '随机血糖' + "：</span><span class='cont'>" + value[1] + '</span></div>'
          else if (sname === '呼吸') htmlStr += "<div class='pro'><span >" + sname + "：</span><span class='cont hx'>" + value[1] + '</span></div>'
          else if (sname === '体温') htmlStr += "<div class='pro'><span >" + sname + "：</span><span class='cont tw'>" + value[1] + '</span></div>'
          else if (sname === '脉搏') htmlStr += "<div class='pro'><span >" + sname + "：</span><span class='cont mb'>" + value[1] + '</span></div>'
          else htmlStr += "<div class='pro'><span >" + sname + "：</span><span class='cont'>" + value[1] + '</span></div>'
        }
      }
      return htmlStr
    }
  }

  window.chartView.__Option.yAxis.name = unit
  window.chartView.__Option.series = series
  window.chartView.__Option.tooltip = tooltip
  window.chartView.setOption(window.chartView.__Option, true)
}

Trend.prototype.drawGrid = function (data) {
  console.log('err')
}

Trend.prototype.setMax = function () {
  window.chartView.__Option.yAxis[0].max = max_value > 42 ? max_value : 42
  window.chartView.__Option.yAxis[1].max = maxHx > 80 ? maxHx : 80
  window.chartView.__Option.yAxis[2].max = maxMb > 180 ? maxMb : 180
}

Trend.prototype.refresh = function () {
  if (limitData.minDate.length < 4 || limitData.maxDate.length < 4) return nativeAlert('暂无数据')
  // 滑动事件  清空echarts
  if (event == 'swiperight') {
    if ($kssj < limitData.minDate || $kssj == limitData.minDate) return nativeAlert('已到最后一页')
    else {
      $kssj = addDate($kssj, -$day)
      $jssj = addDate($jssj, -$day)
    }
  } else if (event === 'swipeleft') {
    if ($jssj > limitData.maxDate || $jssj == limitData.maxDate) return nativeAlert('已到第一页')
    else {
      $kssj = addDate($kssj, $day)
      $jssj = addDate($jssj, $day)
    }
  }
  // window.chartView.clear();

  // 初始化 x轴 y轴
  this.init()
}

Trend.prototype.refreshGetDataDone = function () {
  console.log('err')
}

Trend.prototype.refreshGetData2Done = function () {
  console.log('err')
}
