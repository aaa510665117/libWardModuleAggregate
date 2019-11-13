// 出入量
function TrendCrl (params) {

}

var $patid = 0
var $lchart = false
var $week = 1
var $addPage = 1
var $data = []
var $length = null
var rowH = 0
var columnW = 0
var $index = null

TrendCrl.prototype = new Trend()
TrendCrl.prototype.construct = TrendCrl

TrendCrl.prototype.initView = function () {
  $('#main-viewport').show()
  $('#date').hide()
  $('#data-view').hide()

  var h = $('.container').height()
  var w = $('.container').width()
  rowH = parseInt((h) / 10)
  columnW = parseInt((w) / 8)
  var lw = parseInt(columnW / 3)
  var rw = lw * 2

  var top = parseInt((h - rowH * 10) / 2)
  var left = parseInt((w - columnW * 8) / 2)
  $('#crlWrap').css('top', top + 'px').css('left', left + 'px')

  // 绘制左边
  $('.left').css('width', columnW + 'px')
  $('.label').css('height', rowH + 'px').css('lineHeight', rowH + 'px')
  $('.label-r').css('left', lw + 'px').css('width', rw + 'px').css('height', rowH + 'px').css('lineHeight', rowH + 'px')

  $('.label-cl').css('height', rowH * 5 + 'px')
  $('.label-cl .label-l').css('height', rowH * 5 + 'px').css('lineHeight', lw + 'px').css('width', lw + 'px')
  var $label_rs = $('.label-cl .label-r')
  for (var i = 0; i < 5; i++) {
    $($label_rs[i]).css('top', rowH * i + 'px')
  }

  // $('.label-xt').css('height', rowH * 7 + 'px')
  // $('.label-xt .label-l').css('height', rowH * 7 + 'px').css('lineHeight', lw + 'px').css('width', lw + 'px')
  // var $label_rs = $('.label-xt .label-r')
  // for (var i = 0; i < 7; i++) {
  //   $($label_rs[i]).css('top', rowH * i + 'px')
  // }

  // 绘制右边
  $('.right').css('left', columnW + 'px').css('width', columnW * 7 + 'px').css('height', (rowH * 10 + 1) + 'px')
  $('.right-inner').css('width', columnW * 7 + 'px').css('height', rowH * 10 + 'px')
  $('.right-inner-data').css('height', rowH * 10 + 'px').css('width', columnW * 7 + 'px')

  var tplRow = '<div class="data-line">{0}</div>'
  var tplItem = '<div class="item">{1}</div>'
  var itemStr = ''
  var divStr = ''
  for (var i = 0; i < 7; i++) {
    itemStr += tplItem.replace('{1}', '')
  }
  for (var j = 0; j < 10; j++) {
    divStr += tplRow.replace('{0}', itemStr)
  }
  $('.right-inner-data').html(divStr)
  $('.data-line').css('height', rowH + 'px').css('width', columnW * 7 + 'px')
  $('.item').css('height', rowH + 'px').css('lineHeight', rowH + 'px').css('width', columnW + 'px')

  $('#crlLeft').show()
}

TrendCrl.prototype.loadData = function (patid, isPad) {
  $patid = patid
  var arr = []
  var obj = null

  // obj = {
  //   patid: $patid
  // }
  // if (!$App.isOnline()) {
  // if (false) {
  //   arr = ['patient', 'vital-signs', JSON.stringify(obj), '1', 'loadDataDone']
  // } else {

  // }

  obj = {
    patid: $patid,
    week: $week
  }
  // 获取第一周
  arr = ['patient', 'week-signs', JSON.stringify(obj), '1', 'loadDataDone']
  // arr = ['cnursing', 'body-signs', JSON.stringify(obj), '1', 'loadDataDone']
  nativeHttp(arr)

  if (isPad) {
    arr = ['nursing', 'all-record', JSON.stringify({ patid: $patid }), '1', 'recordsGetDone']
    nativeHttp(arr)
    $($('.nav-bar a')[0]).addClass('on')
  }

  $('#btnDoc').remove()
  $('.nav-bar').hide()
}

window.recordsGetDone = function (res) {
  window.Records = JSON.parse(res)
  if (window.Records && window.Records.length > 0) {
    $("<a id='btnDoc' style='margin-left:-6px;'>").on('click', function () { doSilde(this, 1) }).text('文书').appendTo('.nav-bar')
    $('.nav-bar').show()
    bindData(window.Records)
  }
}

function bindData (list) {
  var tpl = '<div class="tpl-row model-item" onclick="flipPage({idx})">' +
    '<div class="item-left">' +
    '<div class="model-title"><span>{name}</span></div>' +
    '<div class="model-creator"><span>{editor}</span></div></div>' +
    '<div class="item-right"><span>{edit_time}</span></div></div>'
  var htmlStr = ''
  for (var i = 0; i < list.length; i++) {
    htmlStr += tpl.replace('{name}', list[i].name)
      .replace('{idx}', i)
      .replace('{editor}', list[i].gxczymc)
      .replace('{edit_time}', Date.fromRq16(list[i].gxsj).format('yyyy-MM-dd HH:mm'))
  }
  $('#record-index').html(htmlStr)
}

TrendCrl.prototype.loadDataDone = function (jsonData) {
  var that = this
  $data = $decode(jsonData)
  for (var i = 0; i < $data.length; i++) {
    $data[i] = JSON.parse($data[i].json)
  }
  that.drawView()
}

TrendCrl.prototype.drawView = function () {
  var len = $data.length
  var obj = {
    date: '',
    zyts: '',
    shts: '',
    items: []
  }
  if (len < 7) {
    for (var i = 0; i < 7 - len; i++) {
      $data.push(obj)
    }
  }
  len = $data.length
  $('.right-inner-data').css('height', rowH * 10 + 'px').css('width', columnW * len + 'px')
  var tplItem = '<div class="item" style="left:{2}px;top:{3}px;">{1}</div>'
  var itemStr = ''
  var v = ''
  for (i = 0; i < len; i++) {
    itemStr += tplItem.replace('{1}', $data[i].date).replace('{2}', columnW * i).replace('{3}', 0)
  }
  for (i = 0; i < len; i++) {
    v = ''
    if ($data[i].zyts > 0) {
      v = $data[i].zyts
    }
    itemStr += tplItem.replace('{1}', v).replace('{2}', columnW * i).replace('{3}', rowH)
  }
  for (var i = 0; i < len; i++) {
    v = ''
    if ($data[i].shts > 0) {
      v = $data[i].shts
    }
    itemStr += tplItem.replace('{1}', v).replace('{2}', columnW * i).replace('{3}', rowH * 2)
  }

  // $inner.labels = [{ name: "大便次数", type: 3 }, { name: "出量#尿&nbsp;&nbsp;&nbsp;量", type: 4 },
  // { name: "出量#痰&nbsp;&nbsp;&nbsp;量", type: 13 }, { name: "出量#引流量", type: 14 }, { name: "出量#呕吐量", type: 15 },
  // { name: "出量#总&nbsp;&nbsp;&nbsp;量", type: 2 }, { name: "入量", type: 1 }, { name: "血压", type: 5 },
  // { name: "血糖#早餐前", type: 6 }, { name: "血糖#早餐后", type: 7 }, { name: "血糖#午餐前", type: 8 },
  // { name: "血糖#午餐后", type: 9 }, { name: "血糖#晚餐前", type: 10 }, { name: "血糖#晚餐后", type: 11 },
  // { name: "血糖#睡&nbsp;&nbsp;&nbsp;前", type: 12 }];

  // var types = [3, 4, 13, 14, 15, 2, 1, 6, 7, 8, 9, 10, 11, 12]
  var types = [3, 4, 13, 14, 15, 2, 1]
  var l = null
  for (var j = 0; j < types.length; j++) {
    for (i = 0; i < len; i++) {
      l = $data[i].items
      v = ''
      for (var k = 0; k < l.length; k++) {
        if (l[k].type === types[j]) {
          if (l[k].value > 0) {
            v = l[k].value
          }
          break
        }
      }
      itemStr += tplItem.replace('{1}', v).replace('{2}', columnW * i).replace('{3}', rowH * (j + 3))
    }
  }
  $('.right-inner-data').html(itemStr)
  $('.item').css('height', rowH + 'px').css('lineHeight', rowH + 'px').css('width', columnW + 'px')
}

TrendCrl.prototype.refresh = function () {
  var obj = {
    patid: $patid,
    week: $week
  }
  // 获取第一周
  var arr = ['patient', 'week-signs', JSON.stringify(obj), '1', 'refreshGetDataDone']
  nativeHttp(arr)
}

TrendCrl.prototype.refreshGetDataDone = function (jsonData) {
  $data = $decode(jsonData)
  for (var i = 0; i < $data.length; i++) {
    $data[i] = JSON.parse($data[i].json)
  }
  if (!$data || !$data.length) {
    $addPage = 0
  }
  if ($addPage === 0) {
    --$week
    return nativeAlert('已到最早数据')
  }

  this.drawView()
}

function getDocContent (doc) {
  if (doc.content.indexOf('url://') > -1) {
    return $('<div style="width:100%;height:100%;">').load(doc.content.substr(6) + (doc.content.indexOf('?') > 0 ? '&nohandlerurl=1' : '?nohandlerurl=1'))
  } else if (doc.content.indexOf('img://') > -1) {
    return $('<div style="width:100%;height:100%;text-align:center;zoom:1.3;">').append($("<img class='doc-loading' src='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg ==' onerror=\"$App.alert('无法加载资源\n' + this.src);\">").data('url', doc.content.substr(6) + (doc.content.indexOf('?') > 0 ? '&nohandlerurl=1' : '?nohandlerurl=1')))
  }
  return $('<div style="width:100%;height:100%;">').html(doc.content)
}

function initDocuments (documents) {
  // 设置第一页
  if (documents.length > 0) {
    $('.doc-page:eq(1)').empty().append(getDocContent(documents[0])).find('img.doc-loading').removeClass('doc-loading').each(function () { this.src = $(this).data('url') })
  } else {
    $('.doc-page:eq(1)').empty()
  }

  // 补充页数
  for (var i = $('.doc-page').length - 1; i < documents.length; i++) {
    $('.doc-book').turn('addPage', $('<div class="doc-page">'))
  }

  // 移除多余页
  $('.doc-page:gt(' + (documents.length || 1) + ')').each(function (idx) { $('.doc-book').turn('removePage', documents.length + 1 + i + 1) })

  // 设置后续页
  for (var i = 1; i < documents.length; i++) {
    $('.doc-page:eq(' + (i + 1) + ')').empty().append(getDocContent(documents[i]))
  }

  if (documents.length > 0) {
    $('.doc-book').turn('peel', 'tr')
  }
}

function doSilde (sender, index) {
  var viewer = document.getElementById('chart-viewer')
  var vchild = $(viewer).children('div')
  if ($(sender).hasClass('on') || viewer.isbusy === true) return
  $(sender).addClass('on').siblings().removeClass('on')

  viewer.isbusy = true
  var direction = index > window.$vindex ? 'swipeUp' : 'swipeDown'
  var pindex = window.$vindex
  window.$vindex = index

  if (direction == 'swipeUp') vchild.eq(window.$vindex).css('top', '100%').show()
  else vchild.eq(window.$vindex).css('top', '-100%').show()

  viewer.anpercent = 0
  viewer.anhandler = setInterval(function (dir, idx) {
    viewer.anpercent += 10
    if (dir == 'swipeUp') {
      vchild.eq(window.$vindex).css('top', (100 - viewer.anpercent) + '%')
      vchild.eq(idx).css('top', (0 - viewer.anpercent) + '%')
    } else {
      vchild.eq(window.$vindex).css('top', (viewer.anpercent - 100) + '%')
      vchild.eq(idx).css('top', viewer.anpercent + '%')
    }
    if (viewer.anpercent == 100) {
      clearInterval(viewer.anhandler)
      viewer.isbusy = false
      $('.doc-book').turn('page', 1)
    }
  }, 30, direction, pindex)
}

function onPageTurned (e, p) {
  if (p == 1) $('#go-catalog').hide()
  else $('#go-catalog').show()

  var pages = $(this).data().pages
  if (pages[p - 1]) {
    $(this).turn('peel', 'tl')
  }
  if (pages[p + 1]) {
    $(this).turn('peel', 'tr')
    pages[p + 1].find('img.doc-loading').removeClass('doc-loading').each(function () {
      this.src = $(this).data('url')
    })
  }
}

function flipPage (idx) {
  $index = parseInt(idx)
  var rec = window.Records[$index]
  var arr = ['nursing', 'record-doc', JSON.stringify({ patid: $patid, id: rec.code }), '1', 'docGetDone']
  nativeHttp(arr)
}

window.docGetDone = function (res) {
  var rec = window.Records[$index]
  rec.documents = JSON.parse(res)
  var documents = rec.documents
  if (documents && documents[0] && documents[0].content.indexOf('pdf://') > -1) {
    return location.replace(documents[0].content.substr(6))
  } else if (rec.__loaded) {
    return $('.doc-book').turn('page', 2)
  }
  rec.__loaded = true
  initDocuments(documents)
  // 翻页
  $('.doc-book').turn('page', 2)
}
