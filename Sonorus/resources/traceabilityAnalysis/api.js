function getMainDataHandler(params) {
  return post(mdmRoot + 'sourceAnalysis/search', params);
}

function getSecondaryDataHandler(params) {
  return post(mdmRoot + 'sourceAnalysis/detailInfo', params);
}

function getSecondary2DataHandler(params) {
  return post(mdmRoot + 'sourceAnalysis/processStatus', params);
}

// 查询 选择栏
function getSelectOpation(params) {
  return post(mdmRoot+'/dsmp-dcd/dic/90011/allByClassId',params)
}