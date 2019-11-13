function nativeAlert (tips) {
  if (window.App) {
    $App.alert(tips)
  } else {
    alert(tips)
  }
}

// 日期不顶格  提前一天显示
function redraw () {
  $kssj = start
  $jssj = addDate($kssj, parseInt($day) - 1)
  // window.chartView.clear();
  // 初始化 x轴 y轴
  init()
}

function nativeHttp (arr) {
  // ios
  if (window.webkit && window.webkit.messageHandlers) {
    window.webkit.messageHandlers.findData.postMessage(arr)
  }
  // android
  else if (window.App) {
    $App.findData(arr[0], arr[1], arr[2], arr[3], arr[4])
  }
  // web
  else {
    $.get('http://172.17.17.43:52326/api/data/' + arr[0] + '/' + arr[1], JSON.parse(arr[2]),
      function (response, status, xhr) {
        window[arr[4]](JSON.stringify(response.data))
      }
    )
  }
}

// 日期加减
function addDate (date, days) {
  var d = new Date(Date.fromRq16(date).format('yyyy/MM/dd'))
  var time = d.valueOf()
  time = timestampToTime(time + 3600 * 24 * 1000 * days)
  return time.replace('-', '').replace('-', '').replace(' ', '')
}
function timestampToTime (timestamp) {
  var date = new Date(timestamp)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  var h = date.getHours() + ':'
  var m = date.getMinutes() + ':'
  var s = date.getSeconds()
  return Y + M + D
}
// 计算相差天数
function dateDiff (sDate1, sDate2) {
  var aDate, oDate1, oDate2, iDays
  aDate = sDate1.split('-')
  oDate1 = new Date(aDate[0], aDate[1] - 1, aDate[2])
  aDate = sDate2.split('-')
  oDate2 = oDate2 = new Date(aDate[0], aDate[1] - 1, aDate[2])
  iDays = Math.abs(parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24))
  return iDays
}
// 计算星期
function getWeek (dateString) {
  var date
  var dateArray = dateString.split('-')

  date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2])
  var result = '周' + '日一二三四五六'.charAt(date.getDay())
  return result
};

Date.fromRq16 = function (rq16) {
  if (!rq16 || !rq16.length || rq16.length < 8) return new Date()
  rq16 = rq16.replace(/[^0-9]/ig, '')
  var y = parseInt(rq16.substr(0, 4))
  var m = parseInt(rq16.substr(4, 2)) - 1
  var d = parseInt(rq16.substr(6, 2))

  var h = parseInt(rq16.length >= 10 ? rq16.substr(8, 2) : '01')
  var mi = parseInt(rq16.length >= 12 ? rq16.substr(10, 2) : '01')
  var s = parseInt(rq16.length >= 14 ? rq16.substr(12, 2) : '01')

  return new Date(y, m, d, h, mi, s)
}

// 格式化日期
Date.prototype.format = function (mask) {
  var o = {
    'y+': this.getFullYear(),
    'MM?': this.getMonth() + 1, // month
    'dd?': this.getDate(), // day
    'HH?': this.getHours(), // hour
    'mm?': this.getMinutes(), // minute
    'ss?': this.getSeconds(), // second
    'qq?': Math.floor((this.getMonth() + 3) / 3), // quarter
    'S': this.getMilliseconds() // millisecond
  }

  if (o['y+'] == 1) return ''

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(mask)) mask = mask.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('00' + o[k]).length - RegExp.$1.length))
  }
  return mask
}

// 日期选择后搜索
function onSearchClick () {
  limitData.maxDate = $('#dtend').val().replace('-', '').replace('-', '')
  limitData.minDate = $('#dtbegin').val().replace('-', '').replace('-', '')
  window.chartView.clear()
  $kssj = limitData.minDate
  $jssj = addDate($kssj, parseInt($day) - 1)
  init()
}

function dateRangeChanged () {
  // 更改值
  var dtend = $('#dtend').val()
  var dtbegin = $('#dtbegin').val()

  $('.caretStart').html(getWeek(dtbegin))
  $('.caretEnd').html(getWeek(dtend))
  // 处理NaN
  var d = Math.abs(dateDiff(dtbegin, dtend))
  if (isNaN(d)) {
    $('.day').html('')
  } else {
    $('.day').html('共' + d + '天')
  }
}

var myElement = document.getElementById('data-view')
var mc = new Hammer(myElement)

mc.on('swipeleft swiperight', function (ev) {
  event = ev.type
  trend.refresh()
})

var myElement = document.getElementById('crlWrap')
var mc = new Hammer(myElement)
mc.on('swipeleft swiperight', function (ev) {
  if (ev.type === 'swipeleft') {
    ++$week
  } else {
    --$week
    $addPage = 1
  }
  if ($week === 0) {
    $week = 1
    return nativeAlert('已到最新数据')
  }

  trend.refresh()
})

var trend = null
function loadData (k, patid, f, ryrq) {
  key = k
  var isPad = false
  if (f === undefined && ryrq === undefined) {
    isPad = patid
  } else {
    isPad = ryrq
  }

  if (window.App) {
    var ii = $App.getData('CURRENT_PATIENT')
    $info = ii.patid
    $ryrq = ii.ryrq
    $hour = ($App.getConfig('NMR06') || []).toConfigObject('id', 'configvalue')['NMR06'].split(',')[1]
    $day = ($App.getConfig('NMR06') || []).toConfigObject('id', 'configvalue')['NMR06'].split(',')[0]
  } else {
    // ios 和 测试一致
    $info = patid
    $ryrq = ryrq
    $hour = f.split(',')[1]
    $day = f.split(',')[0]
  }

  if (key === 'crl') {
    // 出入量
    trend = new TrendCrl()
  } else if (key === 'sjxt') {
    // 随机血糖
    trend = new TrendSjxt()
  } else if (key === 'msxt') {
    // 末梢血糖
    trend = new TrendMsxt()
  } else if (key === 'hx') {
    // 呼吸脉搏体温
    trend = new TrendHx()
  } else if (key === 'zy') {
    // 指氧
    trend = new TrendZy()
  } else if (key === 'xy') {
    // 血压
    trend = new TrendXy()
  }

  trend.initView()
  trend.loadData($info, isPad)
}

function loadDataDone (data) {
  trend.loadDataDone(data)
}

function refreshGetDataDone (data) {
  trend.refreshGetDataDone(data)
}

function refreshGetData2Done (data) {
  trend.refreshGetData2Done(data)
}

function init (data) {
  trend.init(data)
}

function initDone (data) {
  trend.initDone(data)
}
