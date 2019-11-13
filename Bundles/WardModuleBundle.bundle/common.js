
(function ($) {
  $.fn.helpinput = function () {
    return this.on('click', function (e) {
      if (!$App.textinputbox) return
      $App.textinputbox($(this).attr('title'), this.value, this.id, $(this).data('input'))
      e.stopPropagation()
      return false
    })
  }
})(jQuery);

(function ($) {
  $.fn.toPicker = function () {
    var datetimepicker_click = function () {
      var $editor = $(this)
      var g = $editor.data('group') || ('control-' + $editor.data('form-index'))
      var isTimeSelector = $(window.__date_control[g][0]).data('type')
      var isRangeSelector = window.__date_control[g].length == 1 ? '0' : '1'
      var title = $(window.__date_control[g][0]).data('title') || ''
      var min = $(window.__date_control[g][0]).data('min') || ''; var max = $(window.__date_control[g][0]).data('max')
      var begin = $(window.__date_control[g][0]).val(); var end = window.__date_control[g].length == 1 ? '' : $(window.__date_control[g][1]).val()

      var iscode = /^\[.*\]$/
      if (iscode.test(min)) min = eval(min.substr(1, min.length - 2))
      if (iscode.test(max)) max = eval(max.substr(1, max.length - 2))
      if (iscode.test(begin)) begin = eval(begin.substr(1, begin.length - 2))
      else begin = Date.fromRq16(begin.replace(/[\- ]/g, '')).format('yyyyMMddHH:mm')
      if (iscode.test(end)) end = eval(end.substr(1, end.length - 2))
      else end = Date.fromRq16(end.replace(/[\- ]/g, '')).format('yyyyMMddHH:mm')

      $App.datetimepicker((isTimeSelector === undefined ? 1 : isTimeSelector) + '', isRangeSelector, title, min, max, begin, end, window.__date_control[g][0].id,
        window.__date_control[g][1] && window.__date_control[g][1].id)
    }

    return this.each(function (idx) {
      var $this = $(this)
      if (!$App.datetimepicker) return $this.attr('type', 'date')
      var group = $this.data('form-index', idx).data('group') || ('control-' + idx)
      if (!window.__date_control) window.__date_control = {}
      if (!window.__date_control[group]) window.__date_control[group] = []
      window.__date_control[group].push(this)
      $(this).on('click', $.proxy(datetimepicker_click, this)).attr('readonly', 'true')
    })
  }
})(jQuery)

window.$App = (function (app) {
  var external = {
    // 弹出警告提示框
    // @text <string> 要提示内容
    alert: function (text) {
      if (app && app.alert) app.alert(text)
      else window.alert(text)
    },
    confirm: function (title, message) {
      if (!app || !app.confirm) return window.confirm(message)
      return app.confirm(title, message)
    },
    // 获取当前登录医生信息
    // @return <string> doctorinfo的json格式字符串。
    getDoctor: function () {
      return (app && app.getDoctor && $decode(app.getDoctor())) || {}
    },
    // 获取权限
    getLimit: function () {
      return (app && app.getLimit && $decode(app.getLimit())) || {}
    },
    // 获取当前科室
    // @return <string> DeptWardMapInfo的json格式字符串。
    getDept: function () {
      return (app && app.getDept && $decode(app.getDept())) || {}
    },

    // 获取暂存的数据
    // @key <string>  数据关键字
    // @return <string> 字符串数据.
    getData: function (key) {
      if (app && app.getData) return $decode(app.getData(key)) || {}
      var arr = document.cookie.split(';')
      for (var i = 0; i < arr.length; i++) {
        if (arr[0].indexOf(key + '=') === 0) return $decode(unescape(arr[0].substr(key.length + 1)))
      }
      return {}
    },
    // 暂存数据
    // @key <string> 暂存数据的关键字
    // @val <string> 暂存的数据字符串
    setData: function (key, val) {
      if (app && app.setData) app.setData(key, val)
      else document.cookie = 'key=' + escape(val)
      return val
    },
    // 注册患者信息（包含床位和房间号）
    getBedSearch: function (syxh, yexh, name, sex, age, cwdm, blh, zdmc, room, lcljbz, ryrq) {
      if (app) app.getBedSearch.apply(app, arguments)
    },

    // 切换到患者数据展示界面(病历、医嘱、检查、检验等);
    switchPatient: function (syxh, yexh, name, sex, age, blh, ryrq, zdmc, lcljbz, cwdm, zzysmc, weight, height, body_surface) {
      if (app) app.switchPatient.apply(app, arguments)
    },
    // 获取数据
    findData: function (provider, service, jsonargs, model, func) {
      return (app && app.findData && $decode(app.findData(provider, service, jsonargs, ((model === undefined) || (model === null)) ? '0' : model, func))) || {}
    },
    // 提交数据
    postData: function (provider, service, jsonargs) {
      return (app && app.postData && $decode(app.postData(provider, service, jsonargs))) || {}
    },
    // 增加录入医嘱
    doEditOrder: function (data) {
      if (app && app.doEditOrder) return app.doEditOrder(data)
    },
    // 下载综合查询页面指定数据
    downloadData: function (data) {
      if (app && app.downloadData) return app.downloadData(data)
    },
    // 下载整个科室病区数据
    downloadAll: function () {
      var dept = this.getDept()
      if (app && app.downWard) return app.downWard(dept.ksdm, dept.bqdm)
    },
    // 下载指定病人数据
    download: function (syxh, yexh) {
      if (app && app.downSingle) return app.downSingle(parseInt(syxh), parseInt(yexh))
    },
    // 获取指定病区已下载患者列表
    getDownloaded: function () {
      var dept = this.getDept()
      if (app && app.getDownloadedPatients) return app.getDownloadedPatients(dept.ksdm, dept.bqdm)
      else if (app && app.getDownPaient) return app.getDownPaient(dept.ksdm, dept.bqdm)
      return {}
    },

    // 转到查房界面
    forwardToVisit: function (syxh, yexh, name, sex, age, blh, ryrq, zdmc, lcljbz) {
      if (app && app.forwardCFJL) app.forwardCFJL.apply(app, arguments)
    },
    // 转到查房历史界面
    showVisits: function () {
      if (app && app.showVisits) app.showVisits()
    },
    // 是否在线
    // @return <int>  在线状态:1，在线   0, 离线
    isOnline: function () {
      if (app && app.isOnline) return app.isOnline() == 1
      return false
    },
    doEditBookmark: function (syxh, yexh, emrid) {
      if (app && app.doEditBookmark) return app.doEditBookmark(syxh, yexh, emrid)
      return false
    },
    notify: function (module, action, data) {
      if (app && app.notify) app.notify(module, action, data)
    },
    search: function (url, provider, service, jsonargs) {
      if (app && app.search) app.search(url, provider, service, jsonargs)
    },
    getConfig: function (keys) {
      var arr = app.getConfig(keys)
      return eval(arr)
    },
    getHospital: function () {
      if (app && app.getHospital) return $decode(app.getHospital())
      return { code: '', name: '' }
    },
    loadUrl: function (url) {
      if (!!url && app.loadUrl) app.loadUrl(url)
    }
  }

  if (app && app.datetimepicker) {
    external.datetimepicker = function (time, range, title, min, max, begin, end, editor1, editor2) {
      var format = ['yyyy-MM-dd', 'yyyy-MM-dd HH:mm'][parseInt(time)]
      // alert(Array.prototype.slice.call(arguments, 0).join(','));
      var script = ["delete window['datetimepicker_callback'];",
        "if(begin) begin = Date.fromRq16(begin).format('" + format + "');",
        "if(end) end = Date.fromRq16(end).format('" + format + "');",
        "document.getElementById('" + editor1 + "').value = begin;",
        "document.getElementById('" + editor2 + "').value = end;",
        "var ev = document.createEvent('Event');",
        "ev.initEvent('change',true,true);",
        "document.getElementById('" + editor1 + "').dispatchEvent(ev);"]
      // if (editor2) script.push("document.getElementById('" + editor2 + "').value = end;")
      window['datetimepicker_callback'] = new Function('begin', 'end', script.join('\n'))

      return app.datetimepicker(time, range, title, min, max, begin, end)
    }
  }

  if (window.webkit && window.webkit.messageHandlers) {
    external.datetimepicker = function (time, range, title, min, max, begin, end, editor1, editor2) {
      var format = ['yyyy-MM-dd', 'yyyy-MM-dd HH:mm'][parseInt(time)]

      window['datetimepicker_callback'] = function (begin, end) {
        delete window['datetimepicker_callback']
        if (begin) begin = Date.fromRq16(begin).format(format)
        if (end) end = Date.fromRq16(end).format(format)
        if (editor1) document.getElementById(editor1).value = begin
        if (editor2) document.getElementById(editor2).value = end
        var ev = document.createEvent('Event')
        ev.initEvent('change', true, true)
        document.getElementById(editor1).dispatchEvent(ev)
      }

      var arr = [time, range, title, min, max, begin, end, 'datetimepicker_callback']
      return window.webkit.messageHandlers.datetimepicker.postMessage(arr)
    }
  }

  if (app && app.textinputbox) {
    external.textinputbox = function (title, text, dom, inFromat) {
      var script = ["delete window['textinputbox_callback'];",
        "document.getElementById('" + dom + "').value = val;",
        "var ev = document.createEvent('Event');",
        "ev.initEvent('change',true,true);",
        "document.getElementById('" + dom + "').dispatchEvent(ev);"]
      window['textinputbox_callback'] = new Function('val', script.join('\n'))
      return app.textinputbox(title, text, inFromat)
    }
  }

  if (app && app.diagnoseSelect) {
    external.diagnoseSelect = function (ysdm, ksdm, bqdm, diagnoses, dom) {
      var script = ["delete window['diagnoseSelect_callback'];",
        'if(!items) return;',
        "document.getElementById('" + dom + "').setAttribute('data-selectData',JSON.stringify(items));",
        "var element = document.getElementById('" + dom + "');",
        'var children = [];',
        'for(var i = 0; i < items.length; i++){',
        "children.push('<div data-code=\"' + items[i].code + '\">' + items[i].name + '</div>');",
        '}',
        "element.innerHTML = children.join('');"]
      // "if(!items || !items.length) return;",
      var handler = document.getElementById(dom).getAttribute('data-handler') || script.join('\n')
      window['diagnoseSelect_callback'] = new Function('items', handler)
      return app.diagnoseSelect(ysdm, ksdm, bqdm, diagnoses)
    }
  }

  if (app && app.deptSelect) {
    external.deptSelect = function (depts, dom) {
      var script = ["delete window['deptSelect_callback'];",
        'if(!items || !items.length) return;',
        "var element = document.getElementById('" + dom + "');",
        'var children = [];',
        'for(var i = 0; i < items.length; i++){',
        "     if('input,textarea'.indexOf(element.tagName.toLowerCase()) > -1){",
        "         element.value = (element.value && (element.value + ',')) + items[i].ksmc;",
        "         element.code = ((element.code && (element.code + ',')) || '') + items[i].ksdm;",
        '     }',
        '     else{',
        "         children.push('<div data-id=\"' + items[i].ksdm + '\">' + items[i].ksmc + '</div>');",
        '     }',
        '}',
        "if(children.length > 0) element.innerHTML = children.join('');"]

      var handler = document.getElementById(dom).getAttribute('data-handler') || script.join('\n')
      window['deptSelect_callback'] = new Function('items', handler)
      return app.deptSelect(depts)
    }
  }

  if (app && app.doctorSelect) {
    external.doctorSelect = function (dom) {
      document.getElementById(dom).calling = true
      var script = ["delete window['doctorSelect_callback'];",
        'var doctor = doctors[0];',
        "var editor = document.getElementById('" + dom + "');",
        "if(editor.tagName.toLowerCase() == 'input') editor.value = doctor.name;",
        'else editor.innerText = doctor.name;',
        "editor.setAttribute('dataValue',doctor);",
        'editor.calling = false;',
        "if(editor.tagName.toLowerCase() == 'input'){",
        "   var ev = document.createEvent('Event');",
        "   ev.initEvent('change',true,true);",
        '   editor.dispatchEvent(ev);',
        '}',
        'else{',
        "   var handler = editor.getAttribute('ondoctorselected');",
        '   if(handler) eval(handler);',
        '}']
      window['doctorSelect_callback'] = new Function('doctors', document.getElementById(dom).getAttribute('data-handler') || script.join('\n'))
      return app.doctorSelect()
    }
  }

  return external
})(window.App)

var calc = function (expression) {
  try {
    return eval('(' + expression.substr(2, expression.length - 3) + ')') || ''
  } catch (e) {
    return ''
  }
}

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
// 获取当前时间
Date.now = function () {
  return new Date()
}
Date.from = function (v) {
  if (/Date\(\-?[\d+]+\)/.test(v)) return eval('new ' + v.replace(/\//g, ''))
  alert('error format ' + v)
}

Array.prototype.toConfigObject = function (keyfield, valuefield) {
  var obj = {}
  for (var i = 0; i < this.length; i++) {
    if (typeof (this[i]) !== 'object') continue
    var fields = valuefield.split('|')
    for (var j = 0; j < fields.length; j++) {
      if (!this[i][fields[j]]) continue
      obj[this[i][keyfield] + ''] = this[i][fields[j]]
    }
  }
  return obj
}

var $decode = function (json, defaultVal) {
  return eval('(' + (json || defaultVal) + ')')
}
String.format = function (m) {
  var values = Array.prototype.slice.call(arguments, 0).slice(1)
  var regex = /\{[0-9]+\}/g
  return m.replace(regex, function (v) {
    return values[parseInt(v.replace(/^\{|\}$/g, ''))]
  })
}
var bindingData = function (component, append) {
  var fields = window['data-binding-fields']
  for (var p in fields) $(fields[p]).html(calc(p)).show()

  $(window['data-binding-components']).each(function () {
    if (!!component && this.id != component) return

    var $self = $(this)
    var $this = this
    var data = eval('(' + $self.data('source').replace(/^\{binding |\}$/g, '') + ')')
    var formater = eval('(' + (($self.data('formater') && ('window.' + $self.data('formater'))) || 'false') + ')')
    var defaultRowCount = parseInt($self.data('default-rows') || '0')
    var key_expr = $self.data('key-expression')
    var fn_key = key_expr ? new Function('idx', 'return ' + key_expr + " + '';") : new Function('idx', "return idx + '';")
    var rowbindEvent = $self.data('row-bind')
    var rowbindHandler = window[rowbindEvent] || false

    var dataRows = []; var beginIndex = 0
    var dataSource = {}
    if (append !== true) {
      if ($self.prop('tagName').toLowerCase() == 'table') $self.children('tbody').empty()
      else $self.empty()
    } else {
      dataSource = $this['meta-data']
      beginIndex = $this['meta-data'].length
    }
    for (var i = 0; !!data && (i < data.length || (append !== true && i < defaultRowCount)); i++) {
      var row = $this.row_template
      var regex = /\{\$[0-9a-zA-Z_]+\}/g
      if (i < data.length) {
        var rec = data[i]
        if (rec.json) {
          var mjson = rec.json
          rec = $decode(mjson)
          rec._mjson = mjson
        }
        var key = fn_key.call(rec, i)
        dataSource[key] = rec
        dataSource.length = (dataSource.length || 0 + 1)
        row = row.replace(/\{data\-key\}/g, key).replace(/tpl\-row/g, 'data-row').replace(regex, function (v) {
          var field = v.substr(2, v.length - 3)
          if (formater && formater[field]) return formater[field].call($this, rec, beginIndex + i)
          else return (rec[field] === 0 ? 0 : (rec[field] || ''))
        })
        if (rowbindHandler && $.isFunction(rowbindHandler)) rowbindHandler.call($this, rec)
      } else {
        row = row.replace(/tpl\-row/g, 'data-row').replace(/\{data\-key\}/g, beginIndex + i).replace(regex, '')
      }
      dataRows.push(row)
    }
    if (dataRows.length > 0) $self.append(dataRows.join(''))
    $this['meta-data'] = dataSource
  })
}
$(document).ready(function () {
  // 识别所有 data-binding fields
  var regex = /\{\$[a-zA-Z]+.?[a-zA-Z\.\(\)]*\}/g
  var fields = {}
  window['data-binding-fields'] = fields

  var components = []
  window['data-binding-components'] = components

  $('.data-binding').each(function () {
    var $this = this
    $($this).html($($this).html().replace(regex, function (v) {
      fields[v] = $this
      return ''
    })).show()
  })
  $('.data-source-binding').each(function () {
    components.push(this)
    var $this = $(this)
    var defaultRowCount = parseInt($(this).data('default-rows') || '0')
    var tpl = []; var dataRows = []
    $this.find('.tpl-row').each(function () {
      tpl.push(this.outerHTML)
    })
    var row = tpl.join('')
    this.row_template = row
    if ($this.prop('tagName').toLowerCase() == 'table') $this.children('tbody').empty()
    else $this.empty()
    for (var i = 0; i < defaultRowCount; i++) {
      var regex = /\{\$[0-9a-zA-Z_]+\}/g
      dataRows.push(row.replace(regex, '').replace(/\{data\-key\}/g, i).replace(/tpl\-row/g, 'data-row'))
    }
    $this.append(dataRows.join(''))
  })

  $('.app-binding').each(function () {
    var regex = /\{\$[a-zA-Z]+.?[a-zA-Z\.\(\)]*\}/g
    $(this).html($(this).html().replace(regex, function (v) {
      return calc(v)
    }))
  })

  $('.date-picker').toPicker()

  // 处理菜单
  $('.xdropdown-toggle').on('click', function () {
    var $this = $(this)
    var menu = $($this.data('menu') || '.xdropdown-panel')
    var region = this.getBoundingClientRect()
    var size = { width: $this.outerWidth(), height: $this.outerHeight() }
    var align = $this.data('align')

    menu[0].toggle = this

    if (this.isExpanded) {
      menu.hide()
      this.isExpanded = false
    } else {
      this.isExpanded = true
      var defaultItem = this.tagName.toLowerCase() == 'input' ? $this.val() : $this.text()
      var position = {
        top: (region.top + size.height + 8) + 'px',
        left: (align == 'left' ? region.left : (region.left + size.width - menu.outerWidth())) + 'px'
      }
      menu.find('.xmenu-item').each(function () {
        var $item = $(this)
        if ($item.text() == defaultItem) {
          $item.addClass('selected')
          return false
        }
      })
      menu.css(position).show()
      event.stopPropagation()
      $(document).one('click', function () {
        $('.xdropdown-panel').hide()
        $('.xdropdown-toggle').each(function () { this.isExpanded = false })
      })
    }
  })

  $('.xmenu-item').on('click', function () {
    var $this = $(this)

    var menu = findParent(this, function () { return $(this).hasClass('xdropdown-panel') })
    var text = $this.text()
    var key = $this.children().attr('key') || text
    var $toggle = $(menu.toggle)
    var handler = new Function($toggle.attr('onitemclick') || '')

    $(menu).find('.selected').removeClass('selected')
    $this.addClass('selected')

    if (menu.toggle.tagName.toLowerCase() == 'input') $toggle.val(text)
    else $toggle.text(text)
    $(menu.toggle).data('key', key)

    handler.apply(menu.toggle)
  })

  $('.xmenu-button').on('click', function () {
    var menuBody = $(this.parentElement).children('.xmenu-body')
    if (this.isExpanded !== true) {
      var size = { h: 0 }
      menuBody.children('div').each(function () { size.h += $(this).outerHeight() })
      menuBody.animate({ height: size.h + 'px' }, 100, 'linear')
      this.isExpanded = true
    } else {
      menuBody.animate({ height: '0px' }, 100, 'linear')
      this.isExpanded = false
    }
  })
})

window.findParent = function (el, fn) {
  if (fn.apply(el) === true) return el
  else if (el.parentElement) return findParent(el.parentElement, fn)
  else return false
}

window.onerror = function (msg, url, line) {
  var error = ['error: ', msg, '\nurl: ', url, '\nline: ', line]
  if (window.$App) console.log(error.join(''))
  else console.log(error.join(''))
}

// 处理优化后的json数组，转化为对象数组。
Array.prototype.toObjectList = function () {
  var data = []
  if (this.length == 0) return this
  var fields = this[0]
  for (var i = 1; i < this.length; i++) {
    var instance = {}
    for (var j = 0; j < fields.length; j++) instance[fields[j]] = this[i][j]
    data.push(instance)
  }
  return data
}

// linq
Array.prototype.count = function (expression) {
  var c = 0; var args = Array.prototype.slice.call(arguments, 1)
  for (var i = 0; i < this.length; i++) {
    if (typeof (expression) === 'function') c += expression.apply(this[i], Array.prototype.slice.call(arguments, 1)) ? 1 : 0
    if (typeof (expression) !== 'string') continue

    var code = expression.split('=>')
    var a = []// 其他参数
    for (var j = 0; j < args.length; j++) a[j] = '$' + (j + 1)

    var fn = null
    if (a.length > 0) fn = eval("(new Function('" + code[0] + "','" + a.join("','") + "','return " + code[1] + "'))")
    else fn = eval("(new Function('" + code[0] + "','return " + code[1] + "'))")

    c += fn.apply(c, [this[i]].concat(args))
  }
  return c
}
