//查询邮件
function mailSearchHandler(params) {
  return post(mdmRoot + 'mail/search' ,params);
}

// 收取邮件
function mailUpdateMailHandler (params){
  return post(mdmRoot + 'mail/updateMail' ,params);
}

// 查看
function mailViewHandler(params){
  return get(mdmRoot + 'mail/view' + getParamsSplicing(params));
}

//下载
function downLoadFile (id,fileName,fileDir){
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
  input2.name = 'fileName';
  input2.value = fileName;
  form.appendChild(input2);

  var input3 = document.createElement('input');
  input3.type = 'hidden';
  input3.name = 'fileDir';
  input3.value = fileDir;
  form.appendChild(input3);

  form.method = 'POST';
  form.action = mdmRoot + 'mail/download';
  if (document.querySelectorAll('#downLoad').length > 0) {
    document.body.removeChild(document.getElementById('downLoad'));
  }
  document.body.appendChild(form);
  form.submit();
  setTimeout(()=>{
    document.body.removeChild(document.getElementById('downLoad'));
  },10)
}

// 发送机构
function getSendingAgency(params){
  return get(mdmRoot + 'mail/orgList' + getParamsSplicing(params));
}

//邮件解析
function mailAnalysis(params){
  return post(mdmRoot+'mailRules/fileAnalysis', params);
}


// 
// function (params){
//   return get('' + getParamsSplicing(params));
// }
