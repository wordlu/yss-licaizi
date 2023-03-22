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

// 下载
function downloadFile(id) {
  var form = document.createElement("form");
  form.style.display = "none";
  form.id = "downLoad";
  var input1 = document.createElement("input");
  input1.type = "hidden";
  input1.name = "id";
  input1.value = id;
  form.appendChild(input1);

  form.method = "POST";
  form.action = fileManagementRoot + "mdm/files/downloadFile";
  if (document.querySelectorAll("#downLoad").length > 0) {
    document.body.removeChild(document.getElementById("downLoad"));
  }
  document.body.appendChild(form);
  form.submit();
  setTimeout(() => {
    document.body.removeChild(document.getElementById("downLoad"));
  }, 10);
}

// 下拉框
function getAllByClassId() {
  return post(fileManagementRoot + "mdm/dic/WJ_GL/allByClassId");
}

// 文件树-查找第一级
function getFileList(params) {
  return post(fileManagementRoot + "mdm/files/getFileList", params);
}

// 文件树-根据id查找子节点
function getFileListById(params){
  return post(fileManagementRoot + "mdm/files/getFileListById", params);
}

// 上传
function uploadFile(params) {
  return post(
    fileManagementRoot + "mdm/files/uploadFile",
    objTransformFormDada(params),
    { "Content-Type": "multipart/form-data" }
  );
}

// 删除
function deleteFile(params) {
  return post(fileManagementRoot + "mdm/files/deleteFile", params);
}
