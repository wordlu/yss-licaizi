var copyAll = function (obj) {
  if (obj === null) return null
  if (typeof obj !== 'object') return obj
  if (obj.constructor === Date) return new Date(obj)
  var newObj = new obj.constructor() //保持继承链
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      //不遍历其原型链上的属性
      var val = obj[key]
      newObj[key] = typeof val === 'object' ? arguments.callee(val) : val // 使用arguments.callee解除与函数名的耦合
    }
  }
  return newObj
}

/**
 * 时间format->"yyyyMMdd"
 *
 * @param {string || Date || undefined} date 时间
 * @returns {string} "yyyyMMdd"
 */
function formatDate(date) {
  let nowDate = ''
  if (date instanceof Date || typeof date === 'string' || typeof date === 'undefined') {
    nowDate = date ? new Date(date) : new Date()
    const years = String(nowDate.getFullYear())
    const month = String(
      nowDate.getMonth() + 1 < 10 ? `0${nowDate.getMonth() + 1}` : nowDate.getMonth() + 1
    )
    const dates = String(nowDate.getDate() < 10 ? 0 + nowDate.getDate() : nowDate.getDate())
    return years + month + dates
  }
  return nowDate
}

//下载excel
function downLoadExcel(data, filename, header, params, title, type) {
  let dataObj
  if (type == 'map') {
    dataObj = {
      filename: filename,
      sheets: [
        {
          params: copyAll(params),
          header: copyAll(header),
          mapData: copyAll(data),
          title: title
        }
      ]
    }
  } else {
    dataObj = {
      filename: filename,
      sheets: [
        {
          params: copyAll(params),
          header: copyAll(header),
          data: copyAll(data),
          title: title
        }
      ]
    }
  }
  var form = document.createElement('form')
  form.style.display = 'none'
  form.id = 'downLoad'
  var input1 = document.createElement('input')
  input1.type = 'hidden'
  input1.name = 'data'
  input1.value = JSON.stringify(dataObj)
  form.appendChild(input1)
  form.method = 'POST'
  form.action = keyCustomerRoot + 'export/excel'
  if (document.querySelectorAll('#downLoad').length > 0) {
    document.body.removeChild(document.getElementById('downLoad'))
  }
  document.body.appendChild(form)
  form.submit()
}

// axios.defaults.baseURL = 'http://172.20.10.5:8089/'
// axios.defaults.baseURL = 'http://192.168.124.5:8089/'
axios.defaults.baseURL = 'http://192.168.111.18:8089/'
axios.defaults.timeout = 90000

function get(url, params) {
  return new Promise(function (resolve, reject) {
    axios
      .get(url, {
        params: params
      })
      .then(function (res) {
        if (
          res.status !== 200 ||
          (typeof res.data === 'string' &&
            ['错误信息'].findIndex(function (i) {
              return !!res.data.includes(i)
            }) > -1)
        ) {
          reject('接口出错')
        } else {
          resolve(res.data)
        }
      })
      .catch(function (err) {
        reject(err.data)
      })
  })
}
function post(url, params) {
  return new Promise(function (resolve, reject) {
    axios
      .post(url, params, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(function (res) {
        if (
          res.status !== 200 ||
          (typeof res.data === 'string' &&
            ['错误信息'].findIndex(function (i) {
              return !!res.data.includes(i)
            }) > -1)
        ) {
          reject('接口出错')
        } else {
          resolve(res.data)
        }
      })
      .catch(function (err) {
        reject(err.data)
      })
  })
}

function post2(url, params) {
  return new Promise(function (resolve, reject) {
    axios
      .post(url, params)
      .then(function (res) {
        if (res.status !== 200 || res.data.code !== 200) {
          reject(res.data)
        } else {
          resolve(res.data.data)
        }
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

function getParamsSplicing(obj) {
  if (!obj) {
    obj = {}
  }
  const keys = Object.keys(obj)
  if (keys.length > 0) {
    return keys
      .reduce(function (prev, item) {
        if (Array.isArray(obj[item]) && obj[item].length > 0) {
          return prev + item + '=' + obj[item].join(',') + '&'
        } else if (!Array.isArray(obj[item]) && obj[item]) {
          return prev + item + '=' + obj[item] + '&'
        } else {
          return prev
        }
      }, '?')
      .slice(0, -1)
  } else {
    return ''
  }
}
