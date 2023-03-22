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
  form.action = netWorthSubjectRoot + "mdm/netWorth/exportExcel";
  if (document.querySelectorAll("#downLoad").length > 0) {
    document.body.removeChild(document.getElementById("downLoad"));
  }
  document.body.appendChild(form);
  form.submit();
}

// 下拉
// function getJZAllByClassId(){
//   return post(netWorthSubjectRoot+"mdm/dic/XN_JZ/allByClassId")
// }

// 下拉
function getJZAllByClassId() {
  return post(netWorthSubjectRoot + "mdm/netWorth/treeList");
}

// 左侧树
function getProductTree(params) {
  return post(netWorthSubjectRoot + "mdm/netWorth/productTree", params);
}

// 查询
function getList(params) {
  return post(netWorthSubjectRoot + "mdm/netWorth/getList", params);
}
