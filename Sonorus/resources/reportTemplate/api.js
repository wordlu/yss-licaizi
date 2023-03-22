// axios.defaults.baseURL = "http://192.168.124.5:8089/";
// axios.defaults.timeout = 90000;
function post3(url, params, headers) {
  return new Promise(function (resolve, reject) {
    axios
      .post(url, params, { headers:headers })
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

// excel 导出
function downLoadFile(params) {
  const dataObj = JSON.stringify(params);
  var form = document.createElement("form");
  form.style.display = "none";
  form.id = "downLoad";

  var input1 = document.createElement("input");
  input1.type = "hidden";
  input1.name = "data";
  input1.value = JSON.stringify(dataObj);

  form.appendChild(input1);
  form.method = "POST";
  form.action = reportTemplateRoot + "mdm/reportTemplate/export";
  if (document.querySelectorAll("#downLoad").length > 0) {
    document.body.removeChild(document.getElementById("downLoad"));
  }
  document.body.appendChild(form);
  form.submit();
}

// 左侧树-模板树
function reportTmpQuey() {
  return post3(reportTemplateRoot + "mdm/reportTemplate/reportTmpQuey");
}

// 左侧树-指标树
function reportIndexQuey() {
  return post3(reportTemplateRoot + "mdm/reportTemplate/reportIndexQuey");
}

// 查询
function searchReportTemplate(params) {
  return post3(reportTemplateRoot + "mdm/reportTemplate/query", params);
}

// 保存
function submit(params) {
  return post3(reportTemplateRoot + "mdm/reportTemplate/add", params);
}

// 删除
function deleteReportTemplate(params) {
  return post3(reportTemplateRoot + "mdm/reportTemplate/delete", params);
}

// 树-添加子节点
function reportTmpAdd(params) {
  return post3(reportTemplateRoot + "mdm/reportTemplate/reportTmpAdd", params);
}
