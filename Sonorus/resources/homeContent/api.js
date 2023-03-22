function post(url, params, headers) {
  return new Promise(function (resolve, reject) {
    axios
      .post(url, params, { headers })
      .then(function (res) {
        if (
          res.status !== 200 ||
          (typeof res.data === "string" &&
            ["错误信息"].findIndex(function (i) {
              return !!res.data.includes(i);
            }) > -1)
        ) {
          reject("接口出错");
        } else {
          resolve(res.data);
        }
      })
      .catch(function (err) {
        reject(err.data);
      });
  });
}

// 文件接收异常表
function getFileException(params){
  return post(homeContentRoot+"mdm/index/getFileException",params);
}

// 邮件接收异常
function getMailException(params){
  return post(homeContentRoot+"mdm/index/getMailException",params);
}

// 数据处理异常
function getDataException(params){
  return post(homeContentRoot+"mdm/index/getDataException",params);
}