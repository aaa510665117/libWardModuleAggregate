// create by lsh 2016.05.24
var LChart = function (id, config) {
  var $this = this
  var $inner = {}
  var $element = typeof (id) === 'string' ? document.getElementById(id) : id
  var $settings = {
    margin: 5, // px
    'min-width': 0,
    'min-height': 0
  }// px
  for (var s in (config || {})) $settings[s] = config[s]

  // 每个canvas显示2周;
  var $weeks = 2

  var $rows = 6 + 26
  var $columns = 6 + 42

  var $width = Math.max($element.parentElement.offsetWidth, $settings['min-width'])
  var $height = Math.max($element.parentElement.offsetHeight - 10, $settings['min-height'])

  var $defined = {
    fontcolor: '#424242',
    linecolor: '#F1F1F1',
    labelcolor: '#C5C5C5',
    fieldcolor: '#193CDA',
    hbackcolor: '#fDfDfD',
    hcell: ($height - $settings.margin * 2.0) / $rows,
    wcell: ($width - $settings.margin * 2.0) / $columns,
    font: Math.round((($width - $settings.margin * 2.0) / $columns) * 0.7 * 100) / 100 + "px 'Microsoft YaHei'",
    dhcell: 0// 内容行的高度，此值需要按照内容行数来计算。
  }

  var $fontsize = Math.round((($width - $settings.margin * 2.0) / $columns) * 0.7 * 100) / 100

  $inner.labels = [{ name: '大便次数', type: 3 }, { name: '出量#尿&nbsp;&nbsp;&nbsp;量', type: 4 },
    { name: '出量#痰&nbsp;&nbsp;&nbsp;量', type: 13 }, { name: '出量#引流量', type: 14 }, { name: '出量#呕吐量', type: 15 },
    { name: '出量#总&nbsp;&nbsp;&nbsp;量', type: 2 }, { name: '入量', type: 1 },
    { name: '血糖#早餐前', type: 6 }, { name: '血糖#早餐后', type: 7 }, { name: '血糖#午餐前', type: 8 },
    { name: '血糖#午餐后', type: 9 }, { name: '血糖#晚餐前', type: 10 }, { name: '血糖#晚餐后', type: 11 },
    { name: '血糖#睡&nbsp;&nbsp;&nbsp;前', type: 12 }]
  $inner.labelGenerated = false
  $inner.drawers = []

  $inner.$dom = function (el) {
    // return document.getElementById.call(document, el)
    return document.getElementById(el)
  }

  $inner.apply = function (d, o) {
    if (!o) return d
    d = d || {}
    for (var p in o) d[p] = o[p]
  }

  $inner.find = function (arr, fn) {
    var r = []
    for (var i = 0; i < arr.length; i++) {
      if (fn.apply(arr[i], Array.prototype.slice.call(arguments, 2))) r.push(arr[i])
    }
    return r
  }

  $inner.each = function (arr, fn) {
    var result = new Array(arr.length)
    for (var i = 0; i < arr.length; i++) {
      var r = fn.apply(arr[i], Array.prototype.slice.call(arguments, 2))
      if (r === false) break
      else if (typeof (r) !== 'boolean') result[i] = r
    }
    return result
  }

  $inner.drawHeader = function (drawer, weeks) {
    var cols = weeks * 7 * 6.0
    drawer.strokeStyle = $defined.linecolor
    drawer.beginPath()
    // 画表头行，占6行
    for (var i = 0; i < 6; i++) {
      var y = $defined.hcell * (i + 1)
      if ((i + 1) % 2 == 1) continue
      drawer.moveTo(0, y)
      drawer.lineTo(cols * $defined.wcell, y)
    }
    drawer.stroke()
  }

  $inner.drawGrid = function (drawer, weeks) {
    $inner.drawHeader(drawer, weeks)

    var cols = weeks * 7 * 6.0
    drawer.strokeStyle = $defined.linecolor
    drawer.beginPath()
    // 画表身，根据显示内容画行数。
    for (var i = 0; i < $inner.labels.length; i++) {
      var y = $defined.dhcell * 2 * i + 6 * $defined.hcell + (3 / 26 * (i + 1))
      drawer.moveTo(0, y)
      drawer.lineTo(cols * $defined.wcell, y)
    }
    // 画列
    for (var i = 0; i < cols - 1; i++) {
      if ((i + 1) % 6 == 0) {
        drawer.moveTo((i + 1) * $defined.wcell, 0)
        drawer.lineTo((i + 1) * $defined.wcell, $height)
      }
    }
    drawer.stroke()
  }

  $inner.drawData = function (drawer, data) {
    drawer.font = $defined.font
    var lheight = $defined.hcell * 0.8
    var items = { length: 0 }
    for (var i = 0; i < data.length; i++) {
      var rec = eval('(' + (data[i].json || 'false') + ')') || data[i]

      drawer.fillStyle = $defined.fontcolor
      // 画日期
      var date = rec.date.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
      if (!$inner.dateWidth) $inner.dateWidth = drawer.measureText(date).width
      drawer.fillText(date, i * 6 * $defined.wcell + ($defined.wcell * 6 - $inner.dateWidth) / 2, ($defined.hcell * 2) - (($defined.hcell * 2 - lheight) / 2))

      // 画住院天数
      var zyts = rec.zyts + ''
      var textWidth = drawer.measureText(zyts).width
      drawer.fillText(zyts, i * 6 * $defined.wcell + ($defined.wcell * 6 - textWidth) / 2, ($defined.hcell * 2) + ($defined.hcell * 2) - (($defined.hcell * 2 - lheight) / 2))

      // 画术后天数
      var arrshts = (rec.shts || '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '').split('/')
      for (var x = arrshts.length - 1; x > -1; x--) {
        if (parseInt(arrshts[x]) < 1) arrshts.pop()
        else break
      }
      var shts = arrshts.join('/')
      textWidth = arrshts.length && drawer.measureText(shts).width
      if (arrshts.length > 0) drawer.fillText(shts, i * 6 * $defined.wcell + ($defined.wcell * 6 - textWidth) / 2, ($defined.hcell * 4) + ($defined.hcell * 2) - (($defined.hcell * 2 - lheight) / 2))

      if (!rec.items || !rec.items.length) continue

      // 画数据
      for (var j = 0; j < rec.items.length; j++) {
        if (rec.items[j].type == 0 || rec.items[j].type == 5) continue
        var row = -1
        for (var k = 0; k < $inner.labels.length; k++) {
          if ($inner.labels[k].type != rec.items[j].type) continue
          row = k
          break
        }

        if (rec.items[j].value === null) continue

        var vwidth = drawer.measureText(rec.items[j].value + '').width
        drawer.fillText(rec.items[j].value === 0 || rec.items[j].value === '0' ? '' : rec.items[j].value, (i * 6 * $defined.wcell) + (($defined.wcell * 6 - vwidth) / 2), ($defined.dhcell * 2 * (row + 1) + 6 * $defined.hcell) - (($defined.dhcell * 2 - lheight) / 2))
      }
    }
  }
  // 初始化容器
  $inner.initContainer = function (data, fontsize) {
    var tpl = ['<div style="float:left;width:12.5%;background-color:{hbackcolor};border:2px solid {linecolor};color:{labelcolor};">',
      '<div style="height:{hcell * 2};line-height:{hcell * 2};text-align:center;border-bottom:1px solid {linecolor};">日期</div>',
      '<div style="height:{hcell * 2};line-height:{hcell * 2};text-align:center;border-bottom:1px solid {linecolor};">住院天数</div>',
      '<div style="height:{hcell * 2};line-height:{hcell * 2};text-align:center;border-bottom:1px solid {linecolor};">术后天数</div>',
      '<div style="height:{hcell * 26};color:{labelcolor};">',
      '<div style="height:100%;" id="item-labels"></div>',
      '</div>',
      '</div>',
      '<div style="float:right;width:87.5%;overflow-x:auto;-webkit-overflow-scrolling:touch;"><div></div></div>',
      '<div class="clear"></div>']
    $element.style.margin = $settings.margin + 'px'
    $element.style.fontSize = fontsize + 'px'
    $element.innerHTML = tpl.join('').replace(/\{hcell \* [0-9]+\}/g, function (v) { return (data['hcell'] * v.match(/[0-9]+/)[0]) + 'px' }).replace(/\{\w+\}/g, function (v) { return data[v.substr(1, v.length - 2)] })
    $inner.container = $element.children[1].children[0]
  }

  $inner.initView = function () {
    var defaultCanvas = $inner.createCanvas(1)
    defaultCanvas.style.borderRight = '2px ' + $defined.linecolor + ' solid'
    var drawer = defaultCanvas.getContext('2d')
    defaultCanvas.drawer = drawer
    $inner.drawHeader(drawer, 1)
    $inner.drawers.push(defaultCanvas)
    $inner.container.style.width = defaultCanvas.width + 'px'
    $inner.container.appendChild(defaultCanvas)
  }

  $inner.createCanvas = function (weeks) {
    var cvs = document.createElement('canvas')
    cvs.height = $height - 6// 6像素误差
    cvs.width = weeks * 7 * 6.0 * $defined.wcell
    cvs.style.width = cvs.width + 'px'
    cvs.style.height = cvs.height + 'px'
    cvs.style.borderTop = '2px ' + $defined.linecolor + ' solid'
    cvs.style.borderBottom = '2px ' + $defined.linecolor + ' solid'
    cvs.style.styleFloat = 'left'
    return cvs
  }

  // 绘制界面
  $inner.buildCanvas = function (days) {
    var length = $inner.drawers.length
    var allweeks = Math.ceil(days / (7.0 * $weeks))
    if (allweeks > length) {
      // add
      for (var i = 1 * $weeks * 7; i < days; i += ($weeks * 7)) {
        var weeks = Math.ceil((Math.min(days, i + ($weeks * 7)) - i) / 7)
        var cvs = $inner.createCanvas(weeks)
        cvs.drawer = cvs.getContext('2d')
        $inner.drawers.push(cvs)
        $inner.container.appendChild(cvs)
        $inner.drawers[$inner.drawers.length - 2].style.borderRight = '1px ' + $defined.linecolor + ' solid'
      }
    } else if (allweeks < length) {
      // remove
      $inner.drawers.splice(allweeks || 1, length - allweeks)
      var children = Array.prototype.slice.call($inner.container.children, 0)
      var nodes = children.splice(allweeks || 1, length - allweeks)
      for (var r = 0; r < nodes.length; r++) nodes[r].parentElement.removeChild(nodes[r])
      // resize last canvas
      if (days % ($weeks * 7) > 7) {
        $inner.drawers[$inner.drawers.length - 1].width = $weeks * 7 * 6.0 * $defined.wcell
        $inner.drawers[$inner.drawers.length - 1].style.width = $inner.drawers[$inner.drawers.length - 1].width + 'px'
      } else {
        $inner.drawers[$inner.drawers.length - 1].width = 7 * 6.0 * $defined.wcell
        $inner.drawers[$inner.drawers.length - 1].style.width = $inner.drawers[$inner.drawers.length - 1].width + 'px'
      }
    }
    if (days > 7) {
      // resize first canvas
      $inner.drawers[0].width = $weeks * 7 * 6.0 * $defined.wcell
      $inner.drawers[0].style.width = $inner.drawers[0].width + 'px'
    }
    // resize container
    $inner.container.style.width = Math.max(Math.ceil(days / 7.0), 1) * 7 * 6.0 * $defined.wcell + 'px'
    $inner.drawers[$inner.drawers.length - 1].style.borderRight = '2px ' + $defined.linecolor + ' solid'
    // clear and draw grid line.
    for (var i = 0; i < $inner.drawers.length; i++) {
      $inner.drawers[i].drawer.clearRect(0, 0, $inner.drawers[i].width, $inner.drawers[i].height)
      $inner.drawGrid($inner.drawers[i].drawer, Math.round($inner.drawers[i].width / (7 * 6.0 * $defined.wcell)))
    }
  }

  $inner.buildLabel = function (xAxisLabels) {
    var labels = []
    var group = { current: '' }

    $defined.dhcell = ($defined.hcell * 26) / (xAxisLabels.length * 2)

    for (var i = 0; i < xAxisLabels.length; i++) {
      var name = xAxisLabels[i].name
      var arr = name.split('#')

      if (arr.length > 1) {
        if (group.current === arr[0]) {
          labels.push('<div style="height:', $defined.dhcell * 2, 'px;line-height:', $defined.dhcell * 2, 'px;text-align:center;border-bottom:1px solid #F1F1F1;">', arr[1], '</div>')
          group[arr[0]] = group[arr[0]] + 1
        } else {
          if (group.current) labels.push('</div></div>')
          labels.push('<div style="height:{', arr[0], ' * 2};"><div style="width:33.333%;height:100%;float:left;border-right:1px solid #F1F1F1;border-bottom:1px solid #F1F1F1;text-align:center;"><div style="display:table;_position:relative; overflow:hidden;height:100%;width:100%;"><div style="vertical-align:middle; display:table-cell; _position:absolute; _top:50%;"><div style="_position:relative; _top:-50%; text-align:center;">', Array.prototype.slice.call(arr[0], 0).join('<br/>'), '</div></div></div></div><div style="style:height:100%;float:right;width:66.667%;">')
          labels.push('<div style="height:', $defined.dhcell * 2, 'px;line-height:', $defined.dhcell * 2, 'px;text-align:center;border-bottom:1px solid #F1F1F1;">', arr[1], '</div>')
          group[arr[0]] = 1
          group.current = arr[0]
        }
      } else {
        if (i > 0 && $inner.labels[i - 1].name.indexOf('#') > 0) labels.push('</div></div>')
        labels.push('<div style="height:', $defined.dhcell * 2, 'px;line-height:', $defined.dhcell * 2, 'px;text-align:center;border-bottom:1px solid #F1F1F1;">', arr[0], '</div>')
      }
    }
    var html = labels.join('')
    for (var p in group) {
      if (p !== 'current') html = html.replace('{' + p + ' * 2}', (group[p] * $defined.dhcell * 2) + 'px')
    }
    return html
  }

  // 绑定数据
  this.load = function (data, labels) {
    // if (!data || !data.length) return;
    if (!$inner.labelGenerated) $inner.$dom('item-labels').innerHTML = $inner.buildLabel((labels && ($inner.labels = labels)) || $inner.labels)
    $inner.labelGenerated = true
    $inner.buildCanvas(data.length)
    for (var i = 0, j = 0; i < data.length; i += ($weeks * 7), j++) {
      var last = Math.min(data.length, i + ($weeks * 7))
      var arr = data.slice(i, last)
      $inner.drawData($inner.drawers[j].drawer, arr)
    }
    if (data.length > 7) $inner.container.parentElement.scrollLeft = Math.floor(data.length / 7 - 1) * 7 * 6 * $defined.wcell + data.length % 7 * 6 * $defined.wcell
  }

  // 初始化视图
  $inner.initContainer($defined, $fontsize)
  $inner.initView()
}
