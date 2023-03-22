// 查询主列表
function getSSCRecordsHandler(params) {
  return post(mdmRoot + 'ssc/getSSCRecords', params);
}

// 新增录入
function newEntryHandler(params) {
  return post(mdmRoot + 'ssc/register', params);
}

// 编辑
function editHandler(params) {
  return post(mdmRoot + 'ssc/update', params);
}

// 名称列表
function getNameListHandler(params) {
  return post(mdmRoot + 'ssc/getSSCInfoList', params);
}

//
// function (params){
//   return get('' + getParamsSplicing(params));
// }
