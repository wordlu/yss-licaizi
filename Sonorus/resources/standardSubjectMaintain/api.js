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

// json 转 FormData
function objTransformFormDada(parmas) {
  const formData = new FormData();
  if (!parmas || Object.keys(parmas).length === 0) return formData;
  Object.keys(parmas).map(function (item) {
    formData.append(item, parmas[item]);
  });
  return formData;
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
  form.action = standardSubjectMaintainRoot + "mdm/subject/subjectExport";
  if (document.querySelectorAll("#downLoad").length > 0) {
    document.body.removeChild(document.getElementById("downLoad"));
  }
  document.body.appendChild(form);
  form.submit();
}

// 机构下拉框
function getOrgList() {
  return post(standardSubjectMaintainRoot + "mdm/assets/orgList");
}

// 科目体系下拉框
function getAllByClassId() {
  return post(standardSubjectMaintainRoot + "mdm/dic/KM_TX/allByClassId");
}

// 科目类别下拉框
function allByClassIdCLS() {
  return post(standardSubjectMaintainRoot + "mdm/dic/KM_CLS/allByClassId");
}

// 审核状态下拉框
function getCChecked() {
  return post(standardSubjectMaintainRoot + "mdm/dic/is_check/allByClassId");
}

// 余额方向下拉框
function allByClassIdWAY() {
  return post(standardSubjectMaintainRoot + "mdm/dic/JD_WAY/allByClassId");
}

// 币种下拉框
function allByClassIdCURY() {
  return post(standardSubjectMaintainRoot + "mdm/dic/CURY/allByClassId");
}

// 明细科目下拉框
function allByClassIdDATAIL() {
  return post(standardSubjectMaintainRoot + "mdm/dic/IS_DATAIL/allByClassId");
}

// 审核反审核
function subjectCheck(params) {
  return post(standardSubjectMaintainRoot + "mdm/subject/subjectCheck", params);
}

// 删除
function subjectDelete(params) {
  return post(
    standardSubjectMaintainRoot + "mdm/subject/subjectDelete",
    params
  );
}

// 批量审核
function checkSubjectList(parmas) {
  return post(
    standardSubjectMaintainRoot + "mdm/subject/checkSubjectList",
    parmas
  );
}

// 导入excel
function importExcel(params) {
  return;
}

// 查询
function getSubjectList(params) {
  return post(
    standardSubjectMaintainRoot + "mdm/subject/getSubjectList",
    params
  );
}

// 保存
function subjectSave(params) {
  return post(standardSubjectMaintainRoot + "mdm/subject/subjectSave", params);
}

// 科目层级
function getLevelAllByClassId() {
  return post(standardSubjectMaintainRoot + "mdm/dic/KM_LEVEL/allByClassId");
}

// 科目层级
function getMapType() {
  return post(standardSubjectMaintainRoot + "mdm/dic/MapType/allByClassId");
}

// 是否虚拟净值
function getisV() {
  return post(standardSubjectMaintainRoot + "mdm/dic/isV/allByClassId");
}
