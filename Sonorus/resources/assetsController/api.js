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

// 资产科目映射-机构下拉框
function getOrgList() {
  return post(assetsControllerRoot + "mdm/assets/orgList");
}

// 资产科目映射-科目体系下拉框
function getAllByClassId() {
  return post(assetsControllerRoot + "mdm/dic/KM_TX/allByClassId");
}

// 资产科目映射-科目层级
function getLevelAllByClassId() {
  return post(assetsControllerRoot + "mdm/dic/KM_LEVEL/allByClassId");
}

// 资产科目映射-查询
function assetsSearch(params) {
  return post(assetsControllerRoot + "mdm/assets/search", params);
}

// 资产科目映射-保存
function assetsSave(params) {
  return post(assetsControllerRoot + "mdm/assets/save", params);
}

// 资产科目映射-审核
function assetsAudit(params) {
  return post(assetsControllerRoot + "mdm/assets/audit", params);
}

// 资产科目映射-单行删除
function deleteRow(params) {
  return post(assetsControllerRoot + "mdm/assets/delete", params);
}

// 资产科目映射-导出excel
function downLoadFile(orgId, subjSystem) {
  var form = document.createElement("form");
  form.style.display = "none";
  form.id = "downLoad";
  var input1 = document.createElement("input");
  input1.type = "hidden";
  input1.name = "orgId";
  input1.value = orgId;
  form.appendChild(input1);

  var input2 = document.createElement("input");
  input2.type = "hidden";
  input2.name = "subjSystem";
  input2.value = subjSystem;
  form.appendChild(input2);

  form.method = "POST";
  form.action = assetsControllerRoot + "mdm/assets/excel";
  if (document.querySelectorAll("#downLoad").length > 0) {
    document.body.removeChild(document.getElementById("downLoad"));
  }
  document.body.appendChild(form);
  form.submit();
  setTimeout(() => {
    document.body.removeChild(document.getElementById("downLoad"));
  }, 10);
}

// 资产科目映射-忽略
function ignore(params) {
  return post(assetsControllerRoot + "mdm/assets/ignore", params);
}

// 资产科目映射-有效
function valid(params) {
  return post(assetsControllerRoot + "mdm/assets/valid", params);
}

// 资产科目映射-审核状态
function getCChecked() {
  return post(assetsControllerRoot + "mdm/dic/is_check/allByClassId");
}

// 资产科目映射-批量审核
function batchAudit(params) {
  return post(assetsControllerRoot + "mdm/assets/batchAudit", params);
}

// tree
function assetsSearchTree(params) {
  return post(assetsControllerRoot + "mdm/assets/searchTree2", params);
}

// tree - 同步
function synchroTree(params) {
  return post(assetsControllerRoot + "mdm/assets/synchroKM", params);
}
