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

// 下载excel
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
  form.action = newStrategicAccountRoot + "mdm/specialStrategy/specialExport";
  if (document.querySelectorAll("#downLoad").length > 0) {
    document.body.removeChild(document.getElementById("downLoad"));
  }
  document.body.appendChild(form);
  form.submit();
}

// 组合树下拉
function getSelectData(params) {
  return get(newStrategicAccountRoot + "mdm/comTreeConfiguration/getUserAuthTreeId");
}

// 投资管理人
function orgList() {
  return get(newStrategicAccountRoot + "mdm/userAuthorityInfo/findOrgInfo");
}

// 托管人
function trustmngrList() {
  return post(newStrategicAccountRoot + "mdm/specialStrategy/trustmngrList");
}

// 查询
function searchHandler(params) {
  return post(
    newStrategicAccountRoot + "mdm/userAuthorityInfo/grid",
    params
  );
}

// 查看编辑
function specialInfo(params) {
  return post(
    newStrategicAccountRoot + "mdm/specialStrategy/specialInfo",
    params
  );
}

// 新增-保存
function specialStrategySave(params) {
  return post(
    newStrategicAccountRoot + "mdm/specialStrategy/specialStrategySave",
    params
  );
}

// 更新
function specialUpdate(params) {
  return post(
    newStrategicAccountRoot + "mdm/specialStrategy/specialUpdate",
    params
  );
}

// 审核、反审核
function specialCheck(params) {
  return post(
    newStrategicAccountRoot + "mdm/specialStrategy/specialCheck",
    params
  );
}

// 投资经理下拉框
function investMgrList(){
  return post(newStrategicAccountRoot+"mdm/specialStrategy/investMgrList");
}

// 投资经理下拉框
function getOrgList(){
  return post(newStrategicAccountRoot+"mdm/specialStrategy/getOrgList");
}

// 审核状态下拉框
function getcChecked() {
  return post(newStrategicAccountRoot + "mdm/dic/is_check/allByClassId");
}

// 左侧树
function getProductTree(params) {
  return post(newStrategicAccountRoot + "mdm/comTreeConfiguration/getSynchroPfTree", params)
}