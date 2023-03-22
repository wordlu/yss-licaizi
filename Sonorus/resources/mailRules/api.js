//查询 列表
function mainSearchHandler(params) {
  return post(mdmRoot + 'mailRules/getMailRulesList' ,params);
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

function post3(url, params) {
  return new Promise(function (resolve, reject) {
    axios
      .post(url, params, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(function (res) {
        if (res.status !== 200 || res.data.code !== 200) {
          reject(res.data);
        } else {
          resolve(res.data.data);
        }
      })
      .catch(function (err) {
        reject(err);
      });
  });
}

// 新增 
function addHandler(params){
  return post(mdmRoot + 'mailRules/register' ,objTransformFormDada(params));
}

//删除
function deleteHandler(params){
  return post(mdmRoot + 'mailRules/delete' ,params);
}

//下载
function downLoadFile (id,parsingRules){
  var form = document.createElement('form');
  form.style.display = 'none';
  form.id = 'downLoad';
  var input1 = document.createElement('input');
  input1.type = 'hidden';
  input1.name = 'id';
  input1.value = id;
  form.appendChild(input1);

  var input2 = document.createElement('input');
  input2.type = 'hidden';
  input2.name = 'parsingRules';
  input2.value = parsingRules;
  form.appendChild(input2);

  form.method = 'POST';
  form.action = mdmRoot + 'mailRules/download';
  if (document.querySelectorAll('#downLoad').length > 0) {
    document.body.removeChild(document.getElementById('downLoad'));
  }
  document.body.appendChild(form);
  form.submit();
  setTimeout(()=>{
    document.body.removeChild(document.getElementById('downLoad'));
  },10)
}

// 编辑
function editHandler(params){
  return post(mdmRoot + '/mailRules/update' ,objTransformFormDada(params));
}


// 
// function (params){
//   return get('' + getParamsSplicing(params));
// }
