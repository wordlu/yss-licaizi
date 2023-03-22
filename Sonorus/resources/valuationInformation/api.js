//组合树信息
function getTreeDataHandler(params) {
  return post(mdmRoot + 'value/getSSCMenus' ,params);
}

//获取估值信息列表
function getValueRecordsHandler(params){
  return post(mdmRoot + 'value/getValueRecords' ,params);
}

// 审核/反审核
function examineStateHandler(params){
  return post(mdmRoot + '/value/updateValueInfo' ,params);
}

// 获取treelist
function getTreeList(params){
  return post(mdmRoot + '/value/treeList' ,params);
}