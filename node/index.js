const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 设置跨域
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', '3.2.1')
  res.header('Content-type', 'application/json;charset=utf-8')
  next()
})

//
app.post('/mail/search', (req, res) => {
  const data = {
    data: [
      {
        id: '08e112b9e60a4fbaa69ade96d539375a',
        state: '已解析',
        fileName: null,
        org: null,
        mailTitle: '【重要提醒】还差一步！开启移动办公之旅',
        mailContent: null,
        addresser: 'mail@service.netease.com',
        analysisErrorInfo: null,
        fileDir: null,
        sendDate: '2022-02-17 14:52:30'
      },
      {
        id: '366d2e04d1f049229eb3adc22356c969',
        state: '待解析',
        fileName: null,
        org: null,
        mailTitle: '测试测试01',
        mailContent: null,
        addresser: 'yuyuxin@ysstech.com',
        analysisErrorInfo: null,
        fileDir: null,
        sendDate: '2022-02-17 14:53:17'
      },
      {
        id: '87e01b66ad464291967056107b13c533',
        state: '未建专户',
        fileName: null,
        org: null,
        mailTitle: '欢迎使用网易邮箱大师',
        mailContent: null,
        addresser: 'developer.MailMaster@service.netease.com',
        analysisErrorInfo: null,
        fileDir: null,
        sendDate: '2022-02-17 20:11:19'
      }
    ],
    total: 10000,
    rowCount: 0,
    startRow: 0
  }
  res.send(data)
})

// 邮件收取
app.post('/mail/updateMail', (req, res) => {
  const data = true
  res.send(data)
})

// 查看
app.get('/mail/view', (req, res) => {
  const data = 'kjsdflkjdsjkflsjoiejfi记录卡决胜巅峰了康师傅'
  res.send(data)
})

// 查看
app.get('/mail/orgList', (req, res) => {
  const data = [{ keyName: '我的', keyId: '1' }]
  res.send(data)
})

// 策略专户

//获取策略专户列表信息
app.post('/ssc/getSSCRecords', (req, res) => {
  const data = {
    code: 200,
    data: {
      pageNo: 0,
      pageSize: 0,
      records: [
        {
          assetCode: '16',
          chgDate: '20220218',
          depositaryId: '19',
          endDate: '20220218',
          id: '282449888095150080',
          keyword: '13',
          mngrId: '17',
          name: '10',
          parseRuleTemplate: '15',
          source: '12',
          timeEffectInfo: '14',
          trustId: '110',
          trustMngrId: '18'
        },
        {
          assetCode: '我去饿',
          chgDate: '20220222',
          endDate: '20220214',
          id: '283611723007696896',
          name: '1'
        }
      ],
      totalCount: 2
    },
    message: '业务处理成功.'
  }
  res.send(data)
})

//编辑 用户列表
app.post('/ssc/register', (req, res) => {
  const data = true
  res.send(data)
})

//新增 用户列表
app.post('/ssc/update', (req, res) => {
  const data = true
  res.send(data)
})

//
app.post('/ssc/getSSCInfoList', (req, res) => {
  const data = [
    {
      id: '',
      state: '',
      mailTitle: '',
      mailContent: '',
      sendDate: '',
      addresser: '',
      fileDir: '',
      fileName: '123123',
      analysisErrorInfo: ''
    }
  ]
  res.send(data)
})

// 邮件规则
// 查询列表
app.post('/mailRules/getMailRulesList', (req, res) => {
  const data = {
    code: 200,
    data: {
      pageNo: 0,
      pageSize: 0,
      records: [
        {
          id: '282877231615877120',
          matchFile: '中保登2.xlsl',
          matchTitle: '中保登标题2',
          orgName: '中保登2',
          parsingRules: 'test.py',
          sender: '中保登机构2'
        },
        {
          id: '282877426898477056',
          matchFile: 'yss.xlsl',
          matchTitle: 'yss',
          orgName: 'yss',
          parsingRules: 'test.py',
          sender: '赢时胜'
        },
        {
          id: '282871126688964608',
          matchFile: '中保登1.xlsl',
          matchTitle: '中保登标题1',
          orgName: '中保登1',
          parsingRules: 'test1.py',
          sender: '中保登机构1'
        }
      ],
      totalCount: 3
    },
    message: '业务处理成功.'
  }
  res.send(data)
})

//新增
app.post('/mailRules/register', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

//删除
app.post('/mailRules/delete', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

// 编辑
app.post('/mailRules/update', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

//溯源分析
app.post('/sourceAnalysis/search', (req, res) => {
  const data = {
    total: 15,
    data: [
      {
        pfName: '组合111',
        pfId: '111',
        20220205: '0',
        20220204: '0',
        20220203: '0',
        20220202: '0',
        20220201: '1'
      },
      {
        pfName: '组合222',
        pfId: '222',
        20220205: '0',
        20220204: '2',
        20220203: '0',
        20220202: '0',
        20220201: '0'
      },
      {
        pfName: '组合333',
        pfId: '333',
        20220205: '0',
        20220204: '0',
        20220203: '0',
        20220202: '0',
        20220201: '0'
      }
    ],
    day: ['20220201', '20220202', '20220203', '20220204', '20220205', 'pfId', 'pfName']
  }
  setTimeout(() => {
    res.send(data)
  }, 2000)
})

//.详细信息
app.post('/sourceAnalysis/detailInfo', (req, res) => {
  const data = [
    {
      state: '正常',
      bizDate: '20220203',
      remarks: '2555',
      timeMark: '2022-02-21 14:21:48',
      detailId: null,
      checkName: '成交记录'
    },
    {
      state: '异常',
      bizDate: '20220203',
      remarks: '2444',
      timeMark: '2022-02-18 15:58:57',
      detailId: null,
      checkName: '持仓数量'
    },
    {
      state: '异常',
      bizDate: '20220203',
      remarks: '2111',
      timeMark: '2022-02-18 15:20:12',
      detailId: null,
      checkName: '单位净值'
    },
    {
      state: '正常',
      bizDate: '20220203',
      remarks: '2222',
      timeMark: '2022-02-18 15:58:57',
      detailId: null,
      checkName: '累计净值'
    },
    {
      state: '正常',
      bizDate: '20220203',
      remarks: '2333',
      timeMark: '2022-02-21 14:21:48',
      detailId: null,
      checkName: '模拟净值'
    },
    {
      state: '',
      bizDate: '20220203',
      remarks:
        '组合111组合,20220203日期文件,来自于邮箱 yuyuxin@ysstech.com数据文件 项目部署登记-20200818-于雨欣.xlsx',
      timeMark: null,
      detailId: null,
      checkName: '邮件来源'
    }
  ]
  setTimeout(() => {
    res.send(data)
  }, 1500)
})

//.详细信息
app.post('/sourceAnalysis/processStatus', (req, res) => {
  const data = [
    {
      state: '正常',
      bizDate: '20220203',
      remarks: '2555',
      timeMark: '2022-02-21 14:21:48',
      detailId: null,
      checkName: '成交记录'
    },
    {
      state: '异常',
      bizDate: '20220203',
      remarks: '2444',
      timeMark: '2022-02-18 15:58:57',
      detailId: null,
      checkName: '持仓数量'
    },
    {
      state: '异常',
      bizDate: '20220203',
      remarks: '2111',
      timeMark: '2022-02-18 15:20:12',
      detailId: null,
      checkName: '单位净值'
    },
    {
      state: '正常',
      bizDate: '20220203',
      remarks: '2222',
      timeMark: '2022-02-18 15:58:57',
      detailId: null,
      checkName: '累计净值'
    },
    {
      state: '正常',
      bizDate: '20220203',
      remarks: '2333',
      timeMark: '2022-02-21 14:21:48',
      detailId: null,
      checkName: '模拟净值'
    },
    {
      state: '',
      bizDate: '20220203',
      remarks:
        '组合111组合,20220203日期文件,来自于邮箱 yuyuxin@ysstech.com数据文件 项目部署登记-20200818-于雨欣.xlsx',
      timeMark: null,
      detailId: null,
      checkName: '邮件来源'
    }
  ]
  setTimeout(() => {
    res.send(data)
  }, 3000)
})

//组合树信息
app.post('/value/getSSCMenus', (req, res) => {
  const data = {
    code: 200,
    data: {
      assetCode: '-1',
      children: [
        {
          assetCode: '16',
          children: [
            {
              assetCode: '我去饿',
              id: '283611723007696896',
              name: '1'
            },
            {
              assetCode: '33',
              id: '283632689574223872',
              name: '10'
            }
          ],
          id: 'sdfasdf',
          name: '10'
        }
      ],
      id: '-1',
      name: '组合树'
    },
    message: '业务处理成功.'
  }
  res.send(data)
})

//获取估值信息列表
app.post('/value/getValueRecords', (req, res) => {
  const data = {
    code: 200,
    data: {
      pageNo: 0,
      pageSize: 0,
      records: [
        {
          cChecked: 1,
          checkId: '1',
          checkTime: 1645694991000,
          createPrsn: '1',
          createTime: 1645694991000,
          etlTime: 1645694991000,
          fcbJzBl: 1,
          fcurcode: '1',
          fdate: '20220224',
          fdwcb: 1,
          fgzZz: 1,
          fhqbz: '1',
          fhqjg: 1,
          fjsfy: 1,
          fkmbm: '1',
          fkmmc: '1',
          fqyxx: '1',
          fsetcode: 1,
          fszJzBl: 1,
          ftpxx: '1',
          fybal: 1,
          fyear: 1,
          fyqyj: 1,
          fyslx: 1,
          fzqcb: 1,
          fzqsl: 1,
          fzqsz: 1,
          id: 1,
          pfId: '1',
          sourceid: '1',
          sourcetype: '1'
        }
      ],
      totalCount: 1
    },
    message: '业务处理成功.'
  }
  res.send(data)
})

//审核/反审核估值信息
app.post('/value/updateValueInfo', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

//treelist
app.post('/value/treeList', (req, res) => {
  const data = [
    { code: '111', name: 'fssdfasdf' },
    { code: '1222', name: 'sdfasdf' },
    { code: '1211', name: 'f45656fasdf' }
  ]
  res.send(data)
})

//
app.post('/dsmp-dcd/dic/90011/allByClassId', (req, res) => {
  const data = [
    {
      id: '2189',
      classId: '7000',
      dicClassName: '币种',
      classEname: null,
      createPrsn: null,
      createTime: null,
      mdfyPrsn: null,
      mdfyTime: null,
      keyName: '原币',
      keyEname: null,
      valid: true,
      memo: null,
      timeMark: '2013-08-02 13:50:25',
      keyId: 'OC',
      state: true,
      stateName: '启用',
      keySeq: 1,
      checkerId: null,
      checkerName: null,
      checked: null,
      checkTime: null,
      otherCheckerIds: null,
      otherCheckerNames: null,
      otherCheckStates: null,
      otherCheckTimes: null
    },
    {
      id: '2188',
      classId: '7000',
      dicClassName: '币种',
      classEname: null,
      createPrsn: null,
      createTime: null,
      mdfyPrsn: null,
      mdfyTime: null,
      keyName: '本位币',
      keyEname: null,
      valid: true,
      memo: null,
      timeMark: '2013-08-02 13:50:25',
      keyId: 'SC',
      state: true,
      stateName: '启用',
      keySeq: 2,
      checkerId: null,
      checkerName: null,
      checked: null,
      checkTime: null,
      otherCheckerIds: null,
      otherCheckerNames: null,
      otherCheckStates: null,
      otherCheckTimes: null
    },
    {
      id: '2190',
      classId: '7000',
      dicClassName: '币种',
      classEname: null,
      createPrsn: null,
      createTime: null,
      mdfyPrsn: null,
      mdfyTime: null,
      keyName: '记账本位币',
      keyEname: null,
      valid: true,
      memo: null,
      timeMark: '2013-08-02 13:50:25',
      keyId: 'AC',
      state: true,
      stateName: '启用',
      keySeq: 3,
      checkerId: null,
      checkerName: null,
      checked: null,
      checkTime: null,
      otherCheckerIds: null,
      otherCheckerNames: null,
      otherCheckStates: null,
      otherCheckTimes: null
    }
  ]
  res.send(data)
})

// 资产科目映射-机构下拉框
// app.post("/mdm/assets/orgList", (req, res) => {
//   const data = [
//     {
//       keyName: "机构",
//       keyId: "01",
//     },
//     {
//       keyName: "机构222222",
//       keyId: "02",
//     },
//   ];
//   res.send(data);
// });

// 资产科目映射-科目体系下拉框
app.post('/mdm/dic/KM_TX/allByClassId', (req, res) => {
  const data = [
    {
      id: '90011021',
      classId: 'KM_TX',
      dicClassName: '科目体系',
      classEname: '',
      keyId: '0',
      keyName: '默认科目体系',
      keyEname: '',
      state: true,
      valid: true,
      memo: '',
      timeMark: '2022-04-24 10:41:50',
      keySeq: 1,
      createPrsn: '12345678901234567890',
      createTime: '2022-04-24 10:41:50',
      mdfyPrsn: '12345678901234567890',
      mdfyTime: '2022-04-24 10:41:50',
      checkerId: null,
      checkerName: null,
      checked: null,
      checkTime: null,
      stateName: '启用',
      otherCheckStates: null,
      otherCheckerIds: null,
      otherCheckTimes: null,
      otherCheckerNames: null
    },
    {
      id: '90011022',
      classId: 'KM_TX',
      dicClassName: '科目体系',
      classEname: '',
      keyId: '1',
      keyName: 'I9科目体系',
      keyEname: '',
      state: true,
      valid: true,
      memo: '',
      timeMark: '2022-04-24 10:42:11',
      keySeq: 2,
      createPrsn: '12345678901234567890',
      createTime: '2022-04-24 10:42:11',
      mdfyPrsn: '12345678901234567890',
      mdfyTime: '2022-04-24 10:42:11',
      checkerId: null,
      checkerName: null,
      checked: null,
      checkTime: null,
      stateName: '启用',
      otherCheckStates: null,
      otherCheckerIds: null,
      otherCheckTimes: null,
      otherCheckerNames: null
    }
  ]
  res.send(data)
})

// 资产科目映射-审核状态下拉
app.post('/mdm/dic/is_check/allByClassId', (req, res) => {
  const data = [
    {
      id: '96',
      classId: 'is_check',
      dicClassName: '是否审核',
      classEname: null,
      keyId: '0',
      keyName: '未审核',
      keyEname: null,
      state: true,
      valid: true,
      memo: null,
      timeMark: '2022-06-22 04:58:03',
      keySeq: 1,
      createPrsn: '22040217042473000388',
      createTime: '2022-06-22 04:58:42',
      mdfyPrsn: '22040217042473000388',
      mdfyTime: '2022-06-22 04:58:54',
      checkerId: null,
      checkerName: null,
      checked: null,
      checkTime: null,
      stateName: '启用',
      otherCheckerNames: null,
      otherCheckerIds: null,
      otherCheckStates: null,
      otherCheckTimes: null
    },
    {
      id: '97',
      classId: 'is_check',
      dicClassName: '是否审核',
      classEname: null,
      keyId: '1',
      keyName: '已审核',
      keyEname: null,
      state: true,
      valid: true,
      memo: null,
      timeMark: '2022-06-22 04:58:06',
      keySeq: 2,
      createPrsn: '22040217042473000388',
      createTime: '2022-06-22 04:58:44',
      mdfyPrsn: '22040217042473000388',
      mdfyTime: '2022-06-22 04:58:55',
      checkerId: null,
      checkerName: null,
      checked: null,
      checkTime: null,
      stateName: '启用',
      otherCheckerNames: null,
      otherCheckerIds: null,
      otherCheckStates: null,
      otherCheckTimes: null
    }
  ]
  res.send(data)
})

// 资产科目映射-列表查询
app.post('/mdm/assets/search', (req, res) => {
  const data = {
    startRow: 0,
    rowCount: 0,
    total: 2,
    data: [
      {
        startDate: null,
        endDate: null,
        pfId: null,
        pfIdList: null,
        pfName: null,
        planLicId: null,
        planLicIdList: null,
        planName: null,
        startPage: null,
        pageSize: null,
        id: 1,
        orgId: '1002',
        subjSystem: '0',
        cSubjCode: '1002',
        cSubjName: '存款',
        // cSubjCodeBz: "1002",
        // cSubjNameBz: "存款",
        subjSystemBz: '0',
        cChecked: 1,
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createPrsnName: null,
        createTime: null,
        mdfyPrsn: null,
        mdfyTime: null,
        isValid: null
      },
      {
        startDate: null,
        endDate: null,
        pfId: null,
        pfIdList: null,
        pfName: null,
        planLicId: null,
        planLicIdList: null,
        planName: null,
        startPage: null,
        pageSize: null,
        id: 2,
        orgId: '1002',
        subjSystem: '0',
        cSubjCode: '1002.01',
        cSubjName: '活期存款',
        cSubjCodeBz: '1002.01',
        cSubjNameBz: '存款',
        subjSystemBz: '0',
        cChecked: null,
        checkId: 1,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createPrsnName: null,
        createTime: null,
        mdfyPrsn: null,
        mdfyTime: null,
        isValid: null
      },
      {
        startDate: null,
        endDate: null,
        pfId: null,
        pfIdList: null,
        pfName: null,
        planLicId: null,
        planLicIdList: null,
        planName: null,
        startPage: null,
        pageSize: null,
        id: 3,
        orgId: '1003',
        subjSystem: '0',
        cSubjCode: '1003.01',
        cSubjName: '活期存款',
        cSubjCodeBz: '1003.01',
        cSubjNameBz: '存款',
        subjSystemBz: '0',
        cChecked: 1,
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createPrsnName: null,
        createTime: null,
        mdfyPrsn: null,
        mdfyTime: null,
        isValid: null
      },
      {
        startDate: null,
        endDate: null,
        pfId: null,
        pfIdList: null,
        pfName: null,
        planLicId: null,
        planLicIdList: null,
        planName: null,
        startPage: null,
        pageSize: null,
        id: 4,
        orgId: '1004',
        subjSystem: '0',
        cSubjCode: '1002',
        cSubjName: '存款',
        cSubjCodeBz: '1002',
        cSubjNameBz: '存款',
        subjSystemBz: '0',
        cChecked: 0,
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createPrsnName: null,
        createTime: null,
        mdfyPrsn: null,
        mdfyTime: null,
        isValid: null
      },
      {
        startDate: null,
        endDate: null,
        pfId: null,
        pfIdList: null,
        pfName: null,
        planLicId: null,
        planLicIdList: null,
        planName: null,
        startPage: null,
        pageSize: null,
        id: 5,
        orgId: '1005',
        subjSystem: '0',
        cSubjCode: '1002.01',
        cSubjName: '活期存款',
        cSubjCodeBz: '1002.01',
        cSubjNameBz: '存款',
        subjSystemBz: '0',
        cChecked: null,
        checkId: 1,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createPrsnName: null,
        createTime: null,
        mdfyPrsn: null,
        mdfyTime: null,
        isValid: null
      },
      {
        startDate: null,
        endDate: null,
        pfId: null,
        pfIdList: null,
        pfName: null,
        planLicId: null,
        planLicIdList: null,
        planName: null,
        startPage: null,
        pageSize: null,
        id: 6,
        orgId: '1006',
        subjSystem: '0',
        cSubjCode: '1003.01',
        cSubjName: '活期存款',
        cSubjCodeBz: '1003.01',
        cSubjNameBz: '存款',
        subjSystemBz: '0',
        cChecked: 1,
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createPrsnName: null,
        createTime: null,
        mdfyPrsn: null,
        mdfyTime: null,
        isValid: null
      },
      {
        startDate: null,
        endDate: null,
        pfId: null,
        pfIdList: null,
        pfName: null,
        planLicId: null,
        planLicIdList: null,
        planName: null,
        startPage: null,
        pageSize: null,
        id: 7,
        orgId: '1007',
        subjSystem: '0',
        cSubjCode: '1002',
        cSubjName: '存款',
        cSubjCodeBz: '1002',
        cSubjNameBz: '存款',
        subjSystemBz: '0',
        cChecked: 0,
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createPrsnName: null,
        createTime: null,
        mdfyPrsn: null,
        mdfyTime: null,
        isValid: null
      },
      {
        startDate: null,
        endDate: null,
        pfId: null,
        pfIdList: null,
        pfName: null,
        planLicId: null,
        planLicIdList: null,
        planName: null,
        startPage: null,
        pageSize: null,
        id: 8,
        orgId: '1008',
        subjSystem: '0',
        cSubjCode: '1002.01',
        cSubjName: '活期存款',
        cSubjCodeBz: '1002.01',
        cSubjNameBz: '存款',
        subjSystemBz: '0',
        cChecked: null,
        checkId: 1,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createPrsnName: null,
        createTime: null,
        mdfyPrsn: null,
        mdfyTime: null,
        isValid: null
      },
      {
        startDate: null,
        endDate: null,
        pfId: null,
        pfIdList: null,
        pfName: null,
        planLicId: null,
        planLicIdList: null,
        planName: null,
        startPage: null,
        pageSize: null,
        id: 9,
        orgId: '1009',
        subjSystem: '0',
        cSubjCode: '1003.01',
        cSubjName: '活期存款',
        cSubjCodeBz: '1003.01',
        cSubjNameBz: '存款',
        subjSystemBz: '0',
        cChecked: 1,
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createPrsnName: null,
        createTime: null,
        mdfyPrsn: null,
        mdfyTime: null,
        isValid: null
      },
      {
        startDate: null,
        endDate: null,
        pfId: null,
        pfIdList: null,
        pfName: null,
        planLicId: null,
        planLicIdList: null,
        planName: null,
        startPage: null,
        pageSize: null,
        id: 10,
        orgId: '1010',
        subjSystem: '0',
        cSubjCode: '1002',
        cSubjName: '存款',
        cSubjCodeBz: '1002',
        cSubjNameBz: '存款',
        subjSystemBz: '0',
        cChecked: 0,
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createPrsnName: null,
        createTime: null,
        mdfyPrsn: null,
        mdfyTime: null,
        isValid: null
      },
      {
        startDate: null,
        endDate: null,
        pfId: null,
        pfIdList: null,
        pfName: null,
        planLicId: null,
        planLicIdList: null,
        planName: null,
        startPage: null,
        pageSize: null,
        id: 11,
        orgId: '1011',
        subjSystem: '0',
        cSubjCode: '1002.01',
        cSubjName: '活期存款',
        cSubjCodeBz: '1002.01',
        cSubjNameBz: '存款',
        subjSystemBz: '0',
        cChecked: null,
        checkId: 1,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createPrsnName: null,
        createTime: null,
        mdfyPrsn: null,
        mdfyTime: null,
        isValid: null
      },
      {
        startDate: null,
        endDate: null,
        pfId: null,
        pfIdList: null,
        pfName: null,
        planLicId: null,
        planLicIdList: null,
        planName: null,
        startPage: null,
        pageSize: null,
        id: 12,
        orgId: '1012',
        subjSystem: '0',
        cSubjCode: '1003.01',
        cSubjName: '活期存款',
        cSubjCodeBz: '1003.01',
        cSubjNameBz: '存款',
        subjSystemBz: '0',
        cChecked: 1,
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createPrsnName: null,
        createTime: null,
        mdfyPrsn: null,
        mdfyTime: null,
        isValid: null
      }
    ]
  }
  setTimeout(() => {
    res.send(data)
  }, 1000)
})

// 资产科目映射-保存
app.post('/mdm/assets/save', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

// 资产科目映射-审核
app.post('/mdm/assets/audit', (req, res) => {
  // const data = true;
  // res.send(data);
  const data = {
    code: 200,
    data: {
      startDate: null,
      endDate: null,
      pfId: null,
      pfIdList: null,
      pfName: null,
      planLicId: null,
      planLicIdList: null,
      planName: null,
      startPage: null,
      pageSize: null,
      id: 1,
      orgId: '1002',
      subjSystem: '0',
      cSubjCode: '1002',
      cSubjName: '存款',
      cSubjCodeBz: '1002',
      cSubjNameBz: '存款',
      subjSystemBz: '0',
      cChecked: 0,
      checkId: null,
      checkName: null,
      checkTime: null,
      createPrsn: null,
      createPrsnName: null,
      createTime: null,
      mdfyPrsn: null,
      mdfyTime: null,
      isValid: null
    }
  }
  res.send(data)
})

// 资产科目映射-单条删除
app.post('/mdm/assets/delete', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

// 资产科目映射-忽略
app.post('/mdm/assets/ignore', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

// 资产科目映射-无效
app.post('/mdm/assets/valid', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

// 资产科目映射-批量审核
app.post('/mdm/assets/batchAudit', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

// 资产科目映射-科目层级
app.post('/mdm/dic/KM_LEVEL/allByClassId', (req, res) => {
  const data = [
    {
      id: '72',
      classId: 'KM_LEVEL',
      dicClassName: '科目层级',
      classEname: null,
      keyId: '1',
      keyName: '一级',
      keyEname: null,
      state: true,
      valid: true,
      memo: null,
      timeMark: '2022-05-17 14:49:12',
      keySeq: 1,
      createPrsn: '12345678901234567890',
      createTime: '2022-05-17 14:49:12',
      mdfyPrsn: '12345678901234567890',
      mdfyTime: '2022-05-17 14:49:12',
      checkerId: null,
      checkerName: null,
      checked: null,
      checkTime: null,
      stateName: '启用',
      otherCheckStates: null,
      otherCheckerNames: null,
      otherCheckTimes: null,
      otherCheckerIds: null
    },
    {
      id: '73',
      classId: 'KM_LEVEL',
      dicClassName: '科目层级',
      classEname: '',
      keyId: '2',
      keyName: '二级',
      keyEname: '',
      state: true,
      valid: true,
      memo: '',
      timeMark: '2022-05-17 14:48:29',
      keySeq: 2,
      createPrsn: '12345678901234567890',
      createTime: '2022-05-17 14:48:29',
      mdfyPrsn: '12345678901234567890',
      mdfyTime: '2022-05-17 14:48:29',
      checkerId: null,
      checkerName: null,
      checked: null,
      checkTime: null,
      stateName: '启用',
      otherCheckStates: null,
      otherCheckerNames: null,
      otherCheckTimes: null,
      otherCheckerIds: null
    },
    {
      id: '74',
      classId: 'KM_LEVEL',
      dicClassName: '科目层级',
      classEname: '',
      keyId: '3',
      keyName: '三级',
      keyEname: '',
      state: true,
      valid: true,
      memo: '',
      timeMark: '2022-05-17 14:49:04',
      keySeq: 3,
      createPrsn: '12345678901234567890',
      createTime: '2022-05-17 14:49:04',
      mdfyPrsn: '12345678901234567890',
      mdfyTime: '2022-05-17 14:49:04',
      checkerId: null,
      checkerName: null,
      checked: null,
      checkTime: null,
      stateName: '启用',
      otherCheckStates: null,
      otherCheckerNames: null,
      otherCheckTimes: null,
      otherCheckerIds: null
    }
  ]
  res.send(data)
})

// 资产科目映射-tree
app.post('/mdm/assets/searchTree2', (req, res) => {
  const data = [
    {
      cSubjCode: '1',
      cSubjName: 'I9标准科目',
      children: [
        {
          cSubjCls: 'KC_ZC',
          cSubjCode: '1001',
          cSubjName: '测试资产',
          children: [
            {
              cSubjCls: 'KC_ZC',
              cSubjCode: '1001000002',
              cSubjName: '测试资产科目名称2',
              id: 10,
              leaf: true,
              level: 3,
              menuHead: '1001000002 测试资产科目名称2',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: '0',
              children: [
                {
                  cSubjCls: 'KC_ZC',
                  cSubjCode: '1001000002',
                  cSubjName: '测试资产科目名称4',
                  id: 20,
                  leaf: true,
                  level: 4,
                  menuHead:
                    '1001000002 测试资产科目名称4测试资产科目名称4测试资产科目名称4测试资产科目名称4测试资产科目名称4测试资产科目名称4',
                  orgId: '',
                  pSubjCode: '1001',
                  subjSystem: '0'
                }
              ]
            },
            {
              cSubjCls: 'KC_ZC',
              cSubjCode: '1001000001',
              cSubjName: '测试资产科目名称1',
              id: 11,
              leaf: true,
              level: 3,
              menuHead: '1001000001 测试资产科目名称1',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: '0'
            },
            {
              cSubjCls: 'KC_BW',
              cSubjCode: '1122',
              cSubjName: '测试科目名称2233',
              id: 18,
              leaf: true,
              level: 3,
              menuHead: '1122 测试科目名称2233',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: ''
            },
            {
              cSubjCls: 'KC_BW',
              cSubjCode: '112233',
              cSubjName: '测试科目名称112233',
              id: 19,
              leaf: true,
              level: 3,
              menuHead: '112233 测试科目名称112233',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: ''
            },
            {
              cSubjCls: 'KC_BW',
              cSubjCode: '12345',
              cSubjName: '更新测试科目名称',
              id: 20,
              leaf: true,
              level: 3,
              menuHead: '12345 更新测试科目名称',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: ''
            }
          ],
          id: 9,
          level: 2,
          menuHead: '测试资产',
          orgId: '',
          pSubjCode: '1',
          subjSystem: '0'
        },
        {
          cSubjCls: 'KC_GT',
          cSubjCode: '3003',
          cSubjName: '测试共同类',
          children: [
            {
              cSubjCls: 'KC_GT',
              cSubjCode: '3003000002',
              cSubjName: '测试共同类科目名称2',
              id: 13,
              leaf: true,
              level: 3,
              menuHead: '3003000002 测试共同类科目名称2',
              orgId: '',
              pSubjCode: '3003',
              subjSystem: '0'
            },
            {
              cSubjCls: 'KC_GT',
              cSubjCode: '3003000001',
              cSubjName: '测试共同类科目名称1',
              id: 14,
              leaf: true,
              level: 3,
              menuHead: '3003000001 测试共同类科目名称1',
              orgId: '',
              pSubjCode: '3003',
              subjSystem: '0'
            }
          ],
          id: 12,
          level: 2,
          menuHead: '测试共同类',
          orgId: '',
          pSubjCode: '1',
          subjSystem: '0'
        },
        {
          cSubjCls: 'KC_FZ',
          cSubjCode: '4004',
          cSubjName: '测试负债类',
          children: [
            {
              cSubjCls: 'KC_FZ',
              cSubjCode: '4004000002',
              cSubjName: '测试负债类科目名称2',
              id: 16,
              leaf: true,
              level: 3,
              menuHead: '4004000002 测试负债类科目名称2',
              orgId: '',
              pSubjCode: '4004',
              subjSystem: '0'
            },
            {
              cSubjCls: 'KC_FZ',
              cSubjCode: '4004000001',
              cSubjName: '测试负债类科目名称1',
              id: 17,
              leaf: true,
              level: 3,
              menuHead: '4004000001 测试负债类科目名称1',
              orgId: '',
              pSubjCode: '4004',
              subjSystem: '0'
            }
          ],
          id: 15,
          level: 2,
          menuHead: '测试负债类',
          orgId: '',
          pSubjCode: '1',
          subjSystem: '0'
        }
      ],
      id: 7,
      level: 1,
      menuHead: 'I9标准科目'
    },
    {
      cSubjCode: '1',
      cSubjName: 'I10标准科目',
      children: [
        {
          cSubjCls: 'KC_ZC',
          cSubjCode: '1001',
          cSubjName: '测试资产',
          children: [
            {
              cSubjCls: 'KC_ZC',
              cSubjCode: '1001000002',
              cSubjName: '测试资产科目名称2',
              id: 10,
              leaf: true,
              level: 3,
              menuHead: '1001000002 测试资产科目名称2',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: '0'
            },
            {
              cSubjCls: 'KC_ZC',
              cSubjCode: '1001000001',
              cSubjName: '测试资产科目名称1',
              id: 11,
              leaf: true,
              level: 3,
              menuHead: '1001000001 测试资产科目名称1',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: '0'
            },
            {
              cSubjCls: 'KC_BW',
              cSubjCode: '1122',
              cSubjName: '测试科目名称2233',
              id: 18,
              leaf: true,
              level: 3,
              menuHead: '1122 测试科目名称2233',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: ''
            },
            {
              cSubjCls: 'KC_BW',
              cSubjCode: '112233',
              cSubjName: '测试科目名称112233',
              id: 19,
              leaf: true,
              level: 3,
              menuHead: '112233 测试科目名称112233',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: ''
            },
            {
              cSubjCls: 'KC_BW',
              cSubjCode: '12345',
              cSubjName: '更新测试科目名称',
              id: 20,
              leaf: true,
              level: 3,
              menuHead: '12345 更新测试科目名称',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: ''
            }
          ],
          id: 9,
          level: 2,
          menuHead: '测试资产',
          orgId: '',
          pSubjCode: '1',
          subjSystem: '0'
        },
        {
          cSubjCls: 'KC_GT',
          cSubjCode: '3003',
          cSubjName: '测试共同类',
          children: [
            {
              cSubjCls: 'KC_GT',
              cSubjCode: '3003000002',
              cSubjName: '测试共同类科目名称2',
              id: 13,
              leaf: true,
              level: 3,
              menuHead: '3003000002 测试共同类科目名称2',
              orgId: '',
              pSubjCode: '3003',
              subjSystem: '0'
            },
            {
              cSubjCls: 'KC_GT',
              cSubjCode: '3003000001',
              cSubjName: '测试共同类科目名称1',
              id: 14,
              leaf: true,
              level: 3,
              menuHead: '3003000001 测试共同类科目名称1',
              orgId: '',
              pSubjCode: '3003',
              subjSystem: '0'
            }
          ],
          id: 12,
          level: 2,
          menuHead: '测试共同类',
          orgId: '',
          pSubjCode: '1',
          subjSystem: '0'
        },
        {
          cSubjCls: 'KC_FZ',
          cSubjCode: '4004',
          cSubjName: '测试负债类',
          children: [
            {
              cSubjCls: 'KC_FZ',
              cSubjCode: '4004000002',
              cSubjName: '测试负债类科目名称2',
              id: 16,
              leaf: true,
              level: 3,
              menuHead: '4004000002 测试负债类科目名称2',
              orgId: '',
              pSubjCode: '4004',
              subjSystem: '0'
            },
            {
              cSubjCls: 'KC_FZ',
              cSubjCode: '4004000001',
              cSubjName: '测试负债类科目名称1',
              id: 17,
              leaf: true,
              level: 3,
              menuHead: '4004000001 测试负债类科目名称1',
              orgId: '',
              pSubjCode: '4004',
              subjSystem: '0'
            }
          ],
          id: 15,
          level: 2,
          menuHead: '测试负债类',
          orgId: '',
          pSubjCode: '1',
          subjSystem: '0'
        }
      ],
      id: 7,
      level: 1,
      menuHead: 'I10标准科目'
    }
  ]

  res.send(data)
})

// 资产科目映射-同步树
app.post('/mdm/assets/synchroKM', (req, res) => {
  const data = [
    {
      cSubjCode: '1',
      cSubjName: 'I9标准科目',
      children: [
        {
          cSubjCls: 'KC_ZC',
          cSubjCode: '1001',
          cSubjName: '测试资产',
          children: [
            {
              cSubjCls: 'KC_ZC',
              cSubjCode: '1001000002',
              cSubjName: '测试资产科目名称2',
              id: 10,
              leaf: true,
              level: 3,
              menuHead: '1001000002 测试资产科目名称2',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: '0',
              children: [
                {
                  cSubjCls: 'KC_ZC',
                  cSubjCode: '1001000002',
                  cSubjName: '测试资产科目名称4',
                  id: 20,
                  leaf: true,
                  level: 4,
                  menuHead: '1001000002 测试资产科目名称4',
                  orgId: '',
                  pSubjCode: '1001',
                  subjSystem: '0'
                }
              ]
            },
            {
              cSubjCls: 'KC_ZC',
              cSubjCode: '1001000001',
              cSubjName: '测试资产科目名称1',
              id: 11,
              leaf: true,
              level: 3,
              menuHead: '1001000001 测试资产科目名称1',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: '0'
            },
            {
              cSubjCls: 'KC_BW',
              cSubjCode: '1122',
              cSubjName: '测试科目名称2233',
              id: 18,
              leaf: true,
              level: 3,
              menuHead: '1122 测试科目名称2233',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: ''
            },
            {
              cSubjCls: 'KC_BW',
              cSubjCode: '112233',
              cSubjName: '测试科目名称112233',
              id: 19,
              leaf: true,
              level: 3,
              menuHead: '112233 测试科目名称112233',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: ''
            },
            {
              cSubjCls: 'KC_BW',
              cSubjCode: '12345',
              cSubjName: '更新测试科目名称',
              id: 20,
              leaf: true,
              level: 3,
              menuHead: '12345 更新测试科目名称',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: ''
            }
          ],
          id: 9,
          level: 2,
          menuHead: '测试资产',
          orgId: '',
          pSubjCode: '1',
          subjSystem: '0'
        },
        {
          cSubjCls: 'KC_GT',
          cSubjCode: '3003',
          cSubjName: '测试共同类',
          children: [
            {
              cSubjCls: 'KC_GT',
              cSubjCode: '3003000002',
              cSubjName: '测试共同类科目名称2',
              id: 13,
              leaf: true,
              level: 3,
              menuHead: '3003000002 测试共同类科目名称2',
              orgId: '',
              pSubjCode: '3003',
              subjSystem: '0'
            },
            {
              cSubjCls: 'KC_GT',
              cSubjCode: '3003000001',
              cSubjName: '测试共同类科目名称1',
              id: 14,
              leaf: true,
              level: 3,
              menuHead: '3003000001 测试共同类科目名称1',
              orgId: '',
              pSubjCode: '3003',
              subjSystem: '0'
            }
          ],
          id: 12,
          level: 2,
          menuHead: '测试共同类',
          orgId: '',
          pSubjCode: '1',
          subjSystem: '0'
        },
        {
          cSubjCls: 'KC_FZ',
          cSubjCode: '4004',
          cSubjName: '测试负债类',
          children: [
            {
              cSubjCls: 'KC_FZ',
              cSubjCode: '4004000002',
              cSubjName: '测试负债类科目名称2',
              id: 16,
              leaf: true,
              level: 3,
              menuHead: '4004000002 测试负债类科目名称2',
              orgId: '',
              pSubjCode: '4004',
              subjSystem: '0'
            },
            {
              cSubjCls: 'KC_FZ',
              cSubjCode: '4004000001',
              cSubjName: '测试负债类科目名称1',
              id: 17,
              leaf: true,
              level: 3,
              menuHead: '4004000001 测试负债类科目名称1',
              orgId: '',
              pSubjCode: '4004',
              subjSystem: '0'
            }
          ],
          id: 15,
          level: 2,
          menuHead: '测试负债类',
          orgId: '',
          pSubjCode: '1',
          subjSystem: '0'
        }
      ],
      id: 7,
      level: 1,
      menuHead: 'I9标准科目-同步'
    },
    {
      cSubjCode: '1',
      cSubjName: 'I10标准科目',
      children: [
        {
          cSubjCls: 'KC_ZC',
          cSubjCode: '1001',
          cSubjName: '测试资产',
          children: [
            {
              cSubjCls: 'KC_ZC',
              cSubjCode: '1001000002',
              cSubjName: '测试资产科目名称2',
              id: 10,
              leaf: true,
              level: 3,
              menuHead: '1001000002 测试资产科目名称2',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: '0'
            },
            {
              cSubjCls: 'KC_ZC',
              cSubjCode: '1001000001',
              cSubjName: '测试资产科目名称1',
              id: 11,
              leaf: true,
              level: 3,
              menuHead: '1001000001 测试资产科目名称1',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: '0'
            },
            {
              cSubjCls: 'KC_BW',
              cSubjCode: '1122',
              cSubjName: '测试科目名称2233',
              id: 18,
              leaf: true,
              level: 3,
              menuHead: '1122 测试科目名称2233',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: ''
            },
            {
              cSubjCls: 'KC_BW',
              cSubjCode: '112233',
              cSubjName: '测试科目名称112233',
              id: 19,
              leaf: true,
              level: 3,
              menuHead: '112233 测试科目名称112233',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: ''
            },
            {
              cSubjCls: 'KC_BW',
              cSubjCode: '12345',
              cSubjName: '更新测试科目名称',
              id: 20,
              leaf: true,
              level: 3,
              menuHead: '12345 更新测试科目名称',
              orgId: '',
              pSubjCode: '1001',
              subjSystem: ''
            }
          ],
          id: 9,
          level: 2,
          menuHead: '测试资产',
          orgId: '',
          pSubjCode: '1',
          subjSystem: '0'
        },
        {
          cSubjCls: 'KC_GT',
          cSubjCode: '3003',
          cSubjName: '测试共同类',
          children: [
            {
              cSubjCls: 'KC_GT',
              cSubjCode: '3003000002',
              cSubjName: '测试共同类科目名称2',
              id: 13,
              leaf: true,
              level: 3,
              menuHead: '3003000002 测试共同类科目名称2',
              orgId: '',
              pSubjCode: '3003',
              subjSystem: '0'
            },
            {
              cSubjCls: 'KC_GT',
              cSubjCode: '3003000001',
              cSubjName: '测试共同类科目名称1',
              id: 14,
              leaf: true,
              level: 3,
              menuHead: '3003000001 测试共同类科目名称1',
              orgId: '',
              pSubjCode: '3003',
              subjSystem: '0'
            }
          ],
          id: 12,
          level: 2,
          menuHead: '测试共同类',
          orgId: '',
          pSubjCode: '1',
          subjSystem: '0'
        },
        {
          cSubjCls: 'KC_FZ',
          cSubjCode: '4004',
          cSubjName: '测试负债类',
          children: [
            {
              cSubjCls: 'KC_FZ',
              cSubjCode: '4004000002',
              cSubjName: '测试负债类科目名称2',
              id: 16,
              leaf: true,
              level: 3,
              menuHead: '4004000002 测试负债类科目名称2',
              orgId: '',
              pSubjCode: '4004',
              subjSystem: '0'
            },
            {
              cSubjCls: 'KC_FZ',
              cSubjCode: '4004000001',
              cSubjName: '测试负债类科目名称1',
              id: 17,
              leaf: true,
              level: 3,
              menuHead: '4004000001 测试负债类科目名称1',
              orgId: '',
              pSubjCode: '4004',
              subjSystem: '0'
            }
          ],
          id: 15,
          level: 2,
          menuHead: '测试负债类',
          orgId: '',
          pSubjCode: '1',
          subjSystem: '0'
        }
      ],
      id: 7,
      level: 1,
      menuHead: 'I10标准科目'
    }
  ]

  setTimeout(() => {
    res.send(data)
  }, 5000)
})

// 标准科目体系维护-科目类别下拉框
app.post('/mdm/dic/KM_CLS/allByClassId', (req, res) => {
  const data = [
    {
      id: '90011004',
      classId: 'KM_CLS',
      dicClassName: '科目类别',
      classEname: '',
      keyId: 'KC_BW',
      keyName: '表外类'
    },
    {
      id: '90011008',
      classId: 'KM_CLS',
      dicClassName: '科目类别',
      classEname: '',
      keyId: 'KC_SY',
      keyName: '损益类'
    },
    {
      id: '90011009',
      classId: 'KM_CLS',
      dicClassName: '科目类别',
      classEname: '',
      keyId: 'KC_ZC',
      keyName: '资产类'
    }
  ]
  res.send(data)
})

// 标准科目体系维护-余额方向(借贷方向)下拉框
app.post('/mdm/dic/JD_WAY/allByClassId', (req, res) => {
  const data = [
    {
      id: '90011004',
      classId: 'KM_CLS',
      dicClassName: '科目类别',
      classEname: '',
      keyId: 'KC_BW',
      keyName: '借'
    },
    {
      id: '90011008',
      classId: 'KM_CLS',
      dicClassName: '科目类别',
      classEname: '',
      keyId: 'KC_SY',
      keyName: '贷'
    }
  ]
  res.send(data)
})

// 标准科目体系维护-币种下拉框
app.post('/mdm/dic/CURY/allByClassId', (req, res) => {
  const data = [
    {
      id: '90011004',
      classId: 'KM_CLS',
      dicClassName: '科目类别',
      classEname: '',
      keyId: 'KC_BW',
      keyName: '人民币'
    },
    {
      id: '90011008',
      classId: 'KM_CLS',
      dicClassName: '科目类别',
      classEname: '',
      keyId: 'KC_SY',
      keyName: '美元'
    }
  ]
  res.send(data)
})

// 标准科目体系维护-明细科目下拉框
app.post('/mdm/dic/IS_DATAIL/allByClassId', (req, res) => {
  const data = [
    {
      id: '90011004',
      classId: 'KM_CLS',
      dicClassName: '科目类别',
      classEname: '',
      keyId: 'KC_BW',
      keyName: '明细'
    },
    {
      id: '90011008',
      classId: 'KM_CLS',
      dicClassName: '科目类别',
      classEname: '',
      keyId: 'KC_SY',
      keyName: '明细'
    }
  ]
  res.send(data)
})

// 标准科目体系维护-查询
app.post('/mdm/subject/getSubjectList', (req, res) => {
  const data = {
    code: 200,
    data: {
      pageNo: 0,
      pageSize: 0,
      records: [
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系',
          nSubjLevel: '2'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 1,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '共同类',
          cSubjCode: '3003000001',
          cSubjName: '测试共同类科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '14',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '3003',
          subjSystem: '默认科目体系'
        },
        {
          cChecked: 0,
          cCuryCode: '人民币',
          cPaCode: '122',
          cSubjCls: '资产类',
          cSubjCode: '1001000001',
          cSubjName: '测试资产科目名称1',
          checkId: '12345678901234567890',
          checkName: '管理员',
          createPrsn: '管理员',
          createTime: '20220425 16:00:32',
          id: '11',
          isDetail: '明细',
          isValid: 1,
          mdfyPrsn: '',
          nWay: '借',
          orgId: '中金公司测试机构',
          pSubjCode: '1001',
          subjSystem: '默认科目体系'
        }
      ],
      totalCount: 5
    },
    message: '业务处理成功.'
  }
  res.send(data)
})

// 标准科目体系维护-审核反审核
app.post('/mdm/subject/subjectCheck', (req, res) => {
  const data = {
    code: 200,
    data: {
      cChecked: 0,
      cCuryCode: '人民币',
      cPaCode: '122',
      cSubjCls: '表外类',
      cSubjCode: '12345',
      cSubjName: '更新测试科目名称1',
      checkId: '12345678901234567890',
      checkName: '管理员',
      createPrsn: '管理员',
      createTime: '20220425 16:54:07',
      id: '16',
      isDetail: '非明细',
      isValid: 1,
      mdfyPrsn: '12345678901234567890',
      nWay: '贷',
      pSubjCode: '1001',
      subjSystem: 'I9科目体系'
    },
    message: '业务处理成功.'
  }

  res.send(data)
})

// 标准科目体系维护-删除
app.post('/mdm/subject/subjectDelete', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

// 标准科目体系维护-批量审核
app.post('/mdm/subject/checkSubjectList', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

// 标准科目体系维护-保存
app.post('/mdm/subject/subjectSave', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

// 标准科目体系维护-导出excel
app.post('/mdm/subject/subjectExport', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

// 文件管理-下拉框
app.post('/mdm/dic/WJ_GL/allByClassId', (req, res) => {
  const data = [
    {
      id: '90011033',
      classId: 'WJ_GL',
      dicClassName: '文件管理',
      classEname: 'fileManager',
      keyId: '0',
      keyName: '邮件附件',
      keyEname: 'mailFile',
      state: true,
      valid: true,
      memo: '',
      timeMark: '2022-05-06 15:50:17',
      keySeq: 1,
      createPrsn: '12345678901234567890',
      createTime: '2022-05-06 15:50:17',
      mdfyPrsn: '12345678901234567890',
      mdfyTime: '2022-05-06 15:50:17',
      checkerId: null,
      checkerName: null,
      checked: null,
      checkTime: null,
      stateName: '启用',
      otherCheckerIds: null,
      otherCheckerNames: null,
      otherCheckTimes: null,
      otherCheckStates: null
    },
    {
      id: '90011034',
      classId: 'WJ_GL',
      dicClassName: '文件管理',
      classEname: 'fileManager',
      keyId: '1',
      keyName: '深圳通',
      keyEname: '',
      state: true,
      valid: true,
      memo: '',
      timeMark: '2022-05-06 15:51:34',
      keySeq: 2,
      createPrsn: '12345678901234567890',
      createTime: '2022-05-06 15:51:34',
      mdfyPrsn: '12345678901234567890',
      mdfyTime: '2022-05-06 15:51:34',
      checkerId: null,
      checkerName: null,
      checked: null,
      checkTime: null,
      stateName: '启用',
      otherCheckerIds: null,
      otherCheckerNames: null,
      otherCheckTimes: null,
      otherCheckStates: null
    }
  ]
  res.send(data)
})

// 文件管理-tree前两级
app.post('/mdm/files/getFileList', (req, res) => {
  // const data = {
  //   code: 200,
  //   data: {
  //     id: 1,
  //     children: [
  //       {
  //         children: [
  //           {
  //             id: 4,
  //             dir: false,
  //             fileName:
  //               "921220中金公司-双赢增利3号集合资产管理计划委托资产资产估值表20220311.xls",
  //             filePath:
  //               "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220321\\921220中金公司-双赢增利3号集合资产管理计划委托资产资产估值表20220311.xls",
  //             parentPath: "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220321",
  //           },
  //           {
  //             id: 5,
  //             dir: false,
  //             fileName:
  //               "921220中金公司-双赢增利3号集合资产管理计划委托资产资产估值表20220312.xls",
  //             filePath:
  //               "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220321\\921220中金公司-双赢增利3号集合资产管理计划委托资产资产估值表20220312.xls",
  //             parentPath: "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220321",
  //           },
  //           {
  //             id: 6,
  //             dir: false,
  //             fileName:
  //               "921220中金公司-双赢增利3号集合资产管理计划委托资产资产估值表新20220311.xls",
  //             filePath:
  //               "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220321\\921220中金公司-双赢增利3号集合资产管理计划委托资产资产估值表新20220311.xls",
  //             parentPath: "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220321",
  //           },
  //           {
  //             id: 7,
  //             dir: false,
  //             fileName:
  //               "921221中金公司-双赢增利4号集合资产管理计划委托资产资产估值表新20220311.xls",
  //             filePath:
  //               "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220321\\921221中金公司-双赢增利4号集合资产管理计划委托资产资产估值表新20220311.xls",
  //             parentPath: "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220321",
  //           },
  //           {
  //             id: 8,
  //             dir: false,
  //             fileName:
  //               "921225中金公司-双赢增利5号集合资产管理计划委托资产资产估值表20220312.xls",
  //             filePath:
  //               "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220321\\921225中金公司-双赢增利5号集合资产管理计划委托资产资产估值表20220312.xls",
  //             parentPath: "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220321",
  //           },
  //         ],
  //         id: 2,
  //         dir: true,
  //         fileName: "20220321",
  //         filePath: "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220321",
  //         parentPath: "E:\\YSS\\gdlcz\\sofa_home\\mail",
  //       },
  //       {
  //         children: [
  //           {
  //             id: 9,
  //             dir: false,
  //             fileName: "gz.txt",
  //             filePath: "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419\\gz.txt",
  //             parentPath: "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419",
  //           },
  //           {
  //             id: 10,
  //             dir: false,
  //             fileName: "记录.txt",
  //             filePath: "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419\\记录.txt",
  //             parentPath: "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419",
  //           },
  //         ],
  //         id: 3,
  //         dir: true,
  //         fileName: "20220419",
  //         filePath: "E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419",
  //         parentPath: "E:\\YSS\\gdlcz\\sofa_home\\mail",
  //       },
  //     ],
  //     dir: false,
  //     fileName: "文件目录",
  //     filePath: "E:\\YSS\\gdlcz\\sofa_home\\mail",
  //   },
  //   message: "业务处理成功.",
  // };

  const data = {
    code: 200,
    data: {
      children: [
        {
          dir: true,
          isLeaf: false,
          fileName: '20220321',
          filePath: 'E:\\YSS\\gdlcz\\sofa_home\\mail\\20220321',
          id: 'E:\\YSS\\gdlcz\\sofa_home\\mail\\20220321',
          parentPath: 'E:\\YSS\\gdlcz\\sofa_home\\mail'
        },
        {
          dir: true,
          isLeaf: false,
          fileName: '20220419',
          filePath: 'E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419',
          id: 'E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419',
          parentPath: 'E:\\YSS\\gdlcz\\sofa_home\\mail'
        }
      ],
      dir: true,
      isLeaf: false,
      fileName: '邮件附件',
      filePath: 'E:\\YSS\\gdlcz\\sofa_home\\mail',
      id: 'E:\\YSS\\gdlcz\\sofa_home\\mail'
    },
    message: '业务处理成功.'
  }
  res.send(data)
})

// 文件管理-tree查找子节点
app.post('/mdm/files/getFileListById', (req, res) => {
  const data = {
    code: 200,
    data: {
      children: [
        {
          dir: false,
          fileName: 'gz.txt',
          filePath: 'E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419\\gz.txt',
          id: 'E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419\\gz.txt',
          isLeaf: true,
          parentPath: 'E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419'
        },
        {
          dir: false,
          fileName: '上传测试231213213.xls',
          filePath: 'E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419\\上传测试231213213.xls',
          id: 'E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419\\上传测试231213213.xls',
          isLeaf: true,
          parentPath: 'E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419'
        },
        {
          dir: false,
          fileName: '记录.txt',
          filePath: 'E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419\\记录.txt',
          id: 'E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419\\记录.txt',
          isLeaf: false,
          parentPath: 'E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419'
        }
      ],
      dir: false,
      fileName: '20220419',
      filePath: 'E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419',
      id: 'E:\\YSS\\gdlcz\\sofa_home\\mail\\20220419'
    },
    message: '业务处理成功.'
  }

  res.send(data)
})

// 文件管理-上传
app.post('/mdm/files/uploadFile', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

// 文件管理-删除
app.post('/mdm/files/deleteFile', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

// 策略专户-下拉框数据
app.post('/mdm/specialStrategy/allByClassId', (req, res) => {
  const data = {
    // 投顾机构
    TG_ORG: [
      {
        keyId: 'REC_GZ',
        keyName: '接收估值'
      },
      {
        keyId: 'REC_VALUE',
        keyName: '接收虚拟净值'
      }
    ],
    // 资管是主动投资/被动投资
    ZG_WAY: [
      {
        keyId: 'KC_SY',
        keyName: '损益类'
      },
      {
        keyId: 'KC_ZC',
        keyName: '资产类'
      }
    ],
    // 估值日
    GZ_DAY: [
      {
        keyId: 'JD_D',
        keyName: '贷'
      },
      {
        keyId: 'JD_J',
        keyName: '借'
      },
      {
        keyId: 'JD_P',
        keyName: '平'
      }
    ],
    // 委托人
    WT_PERSON: [
      {
        keyId: 'wt_1',
        keyName: '委托1'
      },
      {
        keyId: 'wt_2',
        keyName: '委托2'
      }
    ],
    // 组合扩展属性
    PF_EXT: [
      {
        keyId: 'kz_1',
        keyName: '扩展1'
      },
      {
        keyId: 'kz_2',
        keyName: '扩展2'
      }
    ],
    // 投资资产
    Asset_Type: [
      {
        keyId: 'REC_GZ',
        keyName: '接收估值'
      },
      {
        keyId: 'REC_VALUE',
        keyName: '接收虚拟净值'
      }
    ]
  }
  res.send(data)
})

// 策略专户-投资管理人
app.post('/mdm/assets/orgList', (req, res) => {
  const data = [
    {
      keyName: '上海光大证券资产管理有限公司',
      keyId: '913100005904194418'
    },
    {
      keyName: '国泰君安期货有限公司',
      keyId: '91310000100020711J'
    },
    {
      keyName: '招商财富资产管理有限公司',
      keyId: '91440300062724274L'
    }
  ]
  res.send(data)
})

// 策略专户-托管人
app.post('/mdm/specialStrategy/trustmngrList', (req, res) => {
  const data = [
    {
      keyName: '上海光大证券资产管理有限公司',
      keyId: '913100005904194418'
    },
    {
      keyName: '国泰君安期货有限公司',
      keyId: '91310000100020711J'
    },
    {
      keyName: '招商财富资产管理有限公司',
      keyId: '91440300062724274L'
    }
  ]
  res.send(data)
})

// 策略专户-新增保存
app.post('/mdm/specialStrategy/specialStrategySave', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

// 策略专户-更新
app.post('/mdm/specialStrategy/specialUpdate', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

// 策略专户-审核/反审核
app.post('/mdm/specialStrategy/specialCheck', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }
  res.send(data)
})

// 策略专户-查询
app.post('/mdm/specialStrategy/getSpecialList', (req, res) => {
  const data = {
    code: 200,
    data: {
      pageNo: 0,
      pageSize: 0,
      records: [
        {
          cChecked: 0,
          checkName: '12345678901234567890',
          chgDate: '20010101',
          createPrsn: '12345678901234567890',
          endDate: '20990101',
          id: 2,
          isValid: 1,
          mngrId: '913100005904194418',
          assetType: '接收估值',
          pfId: '861435',
          pfName: '光证资管诚享30号集合资产管理计划',
          trustId: '914403000627432486',
          trustmngrId: '91110000100011743X',
          valueDate: '1',
          marketCode: '123'
        },
        {
          cChecked: 0,
          checkName: '12345678901234567890',
          chgDate: '20010101',
          createPrsn: '12345678901234567890',
          endDate: '20990101',
          id: 3,
          isValid: 1,
          mngrId: '913100005904194418',
          assetType: '接收估值',
          pfId: '861436',
          pfName: '光证资管诚享31号集合资产管理计划',
          trustId: '914403000627432486',
          trustmngrId: '91110000100011743X',
          valueDate: '1',
          marketCode: '123'
        },
        {
          cChecked: 1,
          checkName: '12345678901234567890',
          chgDate: '20010101',
          createPrsn: '12345678901234567890',
          endDate: '20990101',
          id: 5,
          isValid: 1,
          mngrId: '913100005904194418',
          assetType: '接收估值',
          pfId: '861476',
          pfName: '光证资管诚享43号集合资产管理计划',
          trustId: '914403000627432486',
          trustmngrId: '91110000100011743X',
          valueDate: '1',
          marketCode: '123'
        }
      ],
      totalCount: 3
    },
    message: '业务处理成功.'
  }
  res.send(data)
})

// 策略专户-查看编辑
app.post('/mdm/specialStrategy/specialInfo', (req, res) => {
  const data = {
    code: 200,
    data: {
      cChecked: 0,
      chgDate: '20210501',
      createPrsn: '12345678901234567890',
      createTime: 1652247980000,
      depId: 'depId',
      endDate: '20210502',
      id: 12,
      infoExts: [
        {
          extField: '扩展属性1',
          extFieldNote: '扩展属性值描述1',
          extFieldValue: '扩展属性值1',
          id: 11,
          pfId: '1008611'
        },
        {
          extField: '扩展属性2',
          extFieldNote: '扩展属性值描述2',
          extFieldValue: '扩展属性值2',
          id: 12,
          pfId: '1008611'
        }
      ],
      investWay: 'investWay',
      isValid: 1,
      mngrId: '111',
      orgId: 'orgId',
      pfId: '1008611',
      pfName: '组合名称10086',
      trustId: '111',
      trustmngrId: '111',
      valueDate: 'T+1',
      marketCode: '2123',
      investMgr: '191001',
      investDep: '投资机构2'
    },
    message: '业务处理成功.'
  }
  res.send(data)
})

// 策略专户-投资经理下拉框
app.post('/mdm/specialStrategy/investMgrList', (req, res) => {
  const data = [
    {
      keyName: '投资管理人1',
      keyId: '191001',
      eName: null,
      depId: '1002',
      depName: '投资机构2'
    },
    {
      keyName: '投资管理人2',
      keyId: '191002',
      eName: null,
      depId: '1003',
      depName: '投资机构3'
    },
    {
      keyName: '投资管理人3',
      keyId: '191003',
      eName: null,
      depId: '1002',
      depName: '投资机构2'
    },
    {
      keyName: '投资管理人4',
      keyId: '191004',
      eName: null,
      depId: '1003',
      depName: '投资机构3'
    }
  ]

  res.send(data)
})

// 虚拟净值-下拉
app.post('/mdm/netWorth/treeList', (req, res) => {
  const data = [
    { name: '管理人树', code: '1', tag: 'MNGR_ID' },
    { name: '自定义树', code: '2', tag: null }
  ]

  res.send(data)
})

// 虚拟净值-树
app.post('/mdm/netWorth/productTree', (req, res) => {
  const data = {
    code: 200,
    data: [
      {
        children: [
          {
            children: [
              {
                children: [],
                createTime: 1652079684000,
                creatorId: '22042517225145000211',
                iconCls: 'silk-real',
                id: '4',
                isValid: '1',
                leaf: true,
                mdfyTime: 1652079684000,
                name: '光证资管诚享30号集合资产管理计划长长长长长长长长长长长长长长长',
                nodeLevel: '3',
                nodeSeq: '0',
                orLeafnode: true,
                pfChildId: '4',
                pfChildName: '光证资管诚享30号集合资产管理计划',
                pfId: '861435',
                pfParentId: '3',
                timeMark: 1652079684000,
                treeId: '2',
                treeType: 'COMMON'
              },
              {
                children: [],
                createTime: 1652079698000,
                creatorId: '22042517225145000211',
                id: '5',
                isValid: '1',
                leaf: false,
                mdfyTime: 1652079698000,
                name: '二级节点',
                nodeLevel: '3',
                nodeSeq: '1',
                orLeafnode: false,
                pfChildId: '5',
                pfChildName: '二级节点',
                pfParentId: '3',
                timeMark: 1652079698000,
                treeId: '2',
                treeType: 'COMMON'
              },
              {
                children: [],
                createTime: 1652079701000,
                creatorId: '22042517225145000211',
                iconCls: 'silk-real',
                id: '6',
                isValid: '1',
                leaf: true,
                mdfyTime: 1652079701000,
                name: '光证资管诚享43号集合资产管理计划',
                nodeLevel: '3',
                nodeSeq: '0',
                orLeafnode: true,
                pfChildId: '6',
                pfChildName: '光证资管诚享43号集合资产管理计划',
                pfId: '861476',
                pfParentId: '5',
                timeMark: 1652079701000,
                treeId: '2',
                treeType: 'COMMON'
              },
              {
                children: [],
                createTime: 1652079729000,
                creatorId: '22042517225145000211',
                iconCls: 'silk-real',
                id: '7',
                isValid: '1',
                leaf: true,
                mdfyTime: 1652079729000,
                name: '光证资管诚享31号集合资产管理计划',
                nodeLevel: '3',
                nodeSeq: '1',
                orLeafnode: true,
                pfChildId: '7',
                pfChildName: '光证资管诚享31号集合资产管理计划',
                pfId: '861436',
                pfParentId: '5',
                timeMark: 1652079729000,
                treeId: '2',
                treeType: 'COMMON'
              },
              {
                children: [],
                createTime: 1652079732000,
                creatorId: '22042517225145000211',
                iconCls: 'silk-real',
                id: '8',
                isValid: '1',
                leaf: true,
                mdfyTime: 1652079732000,
                name: '光证资管诚享42号集合资产管理计划',
                nodeLevel: '3',
                nodeSeq: '2',
                orLeafnode: true,
                pfChildId: '8',
                pfChildName: '光证资管诚享42号集合资产管理计划',
                pfId: '861475',
                pfParentId: '5',
                timeMark: 1652079732000,
                treeId: '2',
                treeType: 'COMMON'
              },
              {
                children: [],
                createTime: 1652079701000,
                creatorId: '22042517225145000211',
                iconCls: 'silk-real',
                id: '9',
                isValid: '1',
                leaf: true,
                mdfyTime: 1652079701000,
                name: '9光证资管诚享43号集合资产管理计划',
                nodeLevel: '3',
                nodeSeq: '0',
                orLeafnode: true,
                pfChildId: '6',
                pfChildName: '光证资管诚享43号集合资产管理计划',
                pfId: '861476',
                pfParentId: '5',
                timeMark: 1652079701000,
                treeId: '2',
                treeType: 'COMMON'
              },
              {
                children: [],
                createTime: 1652079729000,
                creatorId: '22042517225145000211',
                iconCls: 'silk-real',
                id: '10',
                isValid: '1',
                leaf: true,
                mdfyTime: 1652079729000,
                name: '10光证资管诚享31号集合资产管理计划',
                nodeLevel: '3',
                nodeSeq: '1',
                orLeafnode: true,
                pfChildId: '7',
                pfChildName: '光证资管诚享31号集合资产管理计划',
                pfId: '861436',
                pfParentId: '5',
                timeMark: 1652079729000,
                treeId: '2',
                treeType: 'COMMON'
              },
              {
                children: [],
                createTime: 1652079732000,
                creatorId: '22042517225145000211',
                iconCls: 'silk-real',
                id: '11',
                isValid: '1',
                leaf: true,
                mdfyTime: 1652079732000,
                name: '11光证资管诚享42号集合资产管理计划',
                nodeLevel: '3',
                nodeSeq: '2',
                orLeafnode: true,
                pfChildId: '8',
                pfChildName: '光证资管诚享42号集合资产管理计划',
                pfId: '861475',
                pfParentId: '5',
                timeMark: 1652079732000,
                treeId: '2',
                treeType: 'COMMON'
              },
              {
                children: [],
                createTime: 1652079701000,
                creatorId: '22042517225145000211',
                iconCls: 'silk-real',
                id: '12',
                isValid: '1',
                leaf: true,
                mdfyTime: 1652079701000,
                name: '12光证资管诚享43号集合资产管理计划',
                nodeLevel: '3',
                nodeSeq: '0',
                orLeafnode: true,
                pfChildId: '6',
                pfChildName: '光证资管诚享43号集合资产管理计划',
                pfId: '861476',
                pfParentId: '5',
                timeMark: 1652079701000,
                treeId: '2',
                treeType: 'COMMON'
              },
              {
                children: [],
                createTime: 1652079729000,
                creatorId: '22042517225145000211',
                iconCls: 'silk-real',
                id: '13',
                isValid: '1',
                leaf: true,
                mdfyTime: 1652079729000,
                name: '13光证资管诚享31号集合资产管理计划',
                nodeLevel: '3',
                nodeSeq: '1',
                orLeafnode: true,
                pfChildId: '7',
                pfChildName: '光证资管诚享31号集合资产管理计划',
                pfId: '861436',
                pfParentId: '5',
                timeMark: 1652079729000,
                treeId: '2',
                treeType: 'COMMON'
              },
              {
                children: [],
                createTime: 1652079732000,
                creatorId: '22042517225145000211',
                iconCls: 'silk-real',
                id: '14',
                isValid: '1',
                leaf: true,
                mdfyTime: 1652079732000,
                name: '14光证资管诚享42号集合资产管理计划',
                nodeLevel: '3',
                nodeSeq: '2',
                orLeafnode: true,
                pfChildId: '8',
                pfChildName: '光证资管诚享42号集合资产管理计划',
                pfId: '861475',
                pfParentId: '5',
                timeMark: 1652079732000,
                treeId: '2',
                treeType: 'COMMON'
              },
              {
                children: [],
                createTime: 1652079701000,
                creatorId: '22042517225145000211',
                iconCls: 'silk-real',
                id: '15',
                isValid: '1',
                leaf: true,
                mdfyTime: 1652079701000,
                name: '15光证资管诚享43号集合资产管理计划',
                nodeLevel: '3',
                nodeSeq: '0',
                orLeafnode: true,
                pfChildId: '6',
                pfChildName: '光证资管诚享43号集合资产管理计划',
                pfId: '861476',
                pfParentId: '5',
                timeMark: 1652079701000,
                treeId: '2',
                treeType: 'COMMON'
              },
              {
                children: [],
                createTime: 1652079729000,
                creatorId: '22042517225145000211',
                iconCls: 'silk-real',
                id: '16',
                isValid: '1',
                leaf: true,
                mdfyTime: 1652079729000,
                name: '16光证资管诚享31号集合资产管理计划',
                nodeLevel: '3',
                nodeSeq: '1',
                orLeafnode: true,
                pfChildId: '7',
                pfChildName: '光证资管诚享31号集合资产管理计划',
                pfId: '861436',
                pfParentId: '5',
                timeMark: 1652079729000,
                treeId: '2',
                treeType: 'COMMON'
              },
              {
                children: [],
                createTime: 1652079732000,
                creatorId: '22042517225145000211',
                iconCls: 'silk-real',
                id: '17',
                isValid: '1',
                leaf: true,
                mdfyTime: 1652079732000,
                name: '17光证资管诚享42号集合资产管理计划',
                nodeLevel: '3',
                nodeSeq: '2',
                orLeafnode: true,
                pfChildId: '8',
                pfChildName: '光证资管诚享42号集合资产管理计划',
                pfId: '861475',
                pfParentId: '5',
                timeMark: 1652079732000,
                treeId: '2',
                treeType: 'COMMON'
              }
            ],
            createTime: 1652079677000,
            creatorId: '22042517225145000211',
            id: '3',
            isValid: '1',
            leaf: false,
            mdfyTime: 1652079677000,
            name: '一级节点长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长',
            nodeLevel: '2',
            nodeSeq: '0',
            orLeafnode: false,
            pfChildId: '3',
            pfChildName: '一级节点',
            pfParentId: '2',
            timeMark: 1652079677000,
            treeId: '2',
            treeType: 'COMMON'
          }
        ],
        createTime: 1652079663000,
        creatorId: '22042517225145000211',
        id: '2',
        isValid: '1',
        leaf: false,
        mdfyTime: 1652079663000,
        name: '自定义树长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长',
        nodeLevel: '1',
        nodeSeq: '1',
        orLeafnode: false,
        pfChildId: '2',
        pfChildName: '自定义树',
        pfParentId: '-1',
        timeMark: 1652079663000,
        treeId: '2',
        treeType: 'COMMON'
      }
      // {
      //   children: [
      //     {
      //       children: [
      //         {
      //           children: [],
      //           createTime: 1652079684000,
      //           creatorId: "22042517225145000211",
      //           iconCls: "silk-real",
      //           id: "4",
      //           isValid: "1",
      //           leaf: true,
      //           mdfyTime: 1652079684000,
      //           name: "光证资管诚享30号集合资产管理计划长长长长长长长长长长长长长长长",
      //           nodeLevel: "3",
      //           nodeSeq: "0",
      //           orLeafnode: true,
      //           pfChildId: "4",
      //           pfChildName: "光证资管诚享30号集合资产管理计划",
      //           pfId: "861435",
      //           pfParentId: "3",
      //           timeMark: 1652079684000,
      //           treeId: "2",
      //           treeType: "COMMON",
      //         },
      //         {
      //           children: [],
      //           createTime: 1652079698000,
      //           creatorId: "22042517225145000211",
      //           id: "5",
      //           isValid: "1",
      //           leaf: false,
      //           mdfyTime: 1652079698000,
      //           name: "二级节点",
      //           nodeLevel: "3",
      //           nodeSeq: "1",
      //           orLeafnode: false,
      //           pfChildId: "5",
      //           pfChildName: "二级节点",
      //           pfParentId: "3",
      //           timeMark: 1652079698000,
      //           treeId: "2",
      //           treeType: "COMMON",
      //         },
      //         {
      //           children: [],
      //           createTime: 1652079701000,
      //           creatorId: "22042517225145000211",
      //           iconCls: "silk-real",
      //           id: "6",
      //           isValid: "1",
      //           leaf: true,
      //           mdfyTime: 1652079701000,
      //           name: "光证资管诚享43号集合资产管理计划",
      //           nodeLevel: "3",
      //           nodeSeq: "0",
      //           orLeafnode: true,
      //           pfChildId: "6",
      //           pfChildName: "光证资管诚享43号集合资产管理计划",
      //           pfId: "861476",
      //           pfParentId: "5",
      //           timeMark: 1652079701000,
      //           treeId: "2",
      //           treeType: "COMMON",
      //         },
      //         {
      //           children: [],
      //           createTime: 1652079729000,
      //           creatorId: "22042517225145000211",
      //           iconCls: "silk-real",
      //           id: "7",
      //           isValid: "1",
      //           leaf: true,
      //           mdfyTime: 1652079729000,
      //           name: "光证资管诚享31号集合资产管理计划",
      //           nodeLevel: "3",
      //           nodeSeq: "1",
      //           orLeafnode: true,
      //           pfChildId: "7",
      //           pfChildName: "光证资管诚享31号集合资产管理计划",
      //           pfId: "861436",
      //           pfParentId: "5",
      //           timeMark: 1652079729000,
      //           treeId: "2",
      //           treeType: "COMMON",
      //         },
      //         {
      //           children: [],
      //           createTime: 1652079732000,
      //           creatorId: "22042517225145000211",
      //           iconCls: "silk-real",
      //           id: "8",
      //           isValid: "1",
      //           leaf: true,
      //           mdfyTime: 1652079732000,
      //           name: "光证资管诚享42号集合资产管理计划",
      //           nodeLevel: "3",
      //           nodeSeq: "2",
      //           orLeafnode: true,
      //           pfChildId: "8",
      //           pfChildName: "光证资管诚享42号集合资产管理计划",
      //           pfId: "861475",
      //           pfParentId: "5",
      //           timeMark: 1652079732000,
      //           treeId: "2",
      //           treeType: "COMMON",
      //         },
      //         {
      //           children: [],
      //           createTime: 1652079701000,
      //           creatorId: "22042517225145000211",
      //           iconCls: "silk-real",
      //           id: "9",
      //           isValid: "1",
      //           leaf: true,
      //           mdfyTime: 1652079701000,
      //           name: "9光证资管诚享43号集合资产管理计划",
      //           nodeLevel: "3",
      //           nodeSeq: "0",
      //           orLeafnode: true,
      //           pfChildId: "6",
      //           pfChildName: "光证资管诚享43号集合资产管理计划",
      //           pfId: "861476",
      //           pfParentId: "5",
      //           timeMark: 1652079701000,
      //           treeId: "2",
      //           treeType: "COMMON",
      //         },
      //         {
      //           children: [],
      //           createTime: 1652079729000,
      //           creatorId: "22042517225145000211",
      //           iconCls: "silk-real",
      //           id: "10",
      //           isValid: "1",
      //           leaf: true,
      //           mdfyTime: 1652079729000,
      //           name: "10光证资管诚享31号集合资产管理计划",
      //           nodeLevel: "3",
      //           nodeSeq: "1",
      //           orLeafnode: true,
      //           pfChildId: "7",
      //           pfChildName: "光证资管诚享31号集合资产管理计划",
      //           pfId: "861436",
      //           pfParentId: "5",
      //           timeMark: 1652079729000,
      //           treeId: "2",
      //           treeType: "COMMON",
      //         },
      //         {
      //           children: [],
      //           createTime: 1652079732000,
      //           creatorId: "22042517225145000211",
      //           iconCls: "silk-real",
      //           id: "11",
      //           isValid: "1",
      //           leaf: true,
      //           mdfyTime: 1652079732000,
      //           name: "11光证资管诚享42号集合资产管理计划",
      //           nodeLevel: "3",
      //           nodeSeq: "2",
      //           orLeafnode: true,
      //           pfChildId: "8",
      //           pfChildName: "光证资管诚享42号集合资产管理计划",
      //           pfId: "861475",
      //           pfParentId: "5",
      //           timeMark: 1652079732000,
      //           treeId: "2",
      //           treeType: "COMMON",
      //         },
      //         {
      //           children: [],
      //           createTime: 1652079701000,
      //           creatorId: "22042517225145000211",
      //           iconCls: "silk-real",
      //           id: "12",
      //           isValid: "1",
      //           leaf: true,
      //           mdfyTime: 1652079701000,
      //           name: "12光证资管诚享43号集合资产管理计划",
      //           nodeLevel: "3",
      //           nodeSeq: "0",
      //           orLeafnode: true,
      //           pfChildId: "6",
      //           pfChildName: "光证资管诚享43号集合资产管理计划",
      //           pfId: "861476",
      //           pfParentId: "5",
      //           timeMark: 1652079701000,
      //           treeId: "2",
      //           treeType: "COMMON",
      //         },
      //         {
      //           children: [],
      //           createTime: 1652079729000,
      //           creatorId: "22042517225145000211",
      //           iconCls: "silk-real",
      //           id: "13",
      //           isValid: "1",
      //           leaf: true,
      //           mdfyTime: 1652079729000,
      //           name: "13光证资管诚享31号集合资产管理计划",
      //           nodeLevel: "3",
      //           nodeSeq: "1",
      //           orLeafnode: true,
      //           pfChildId: "7",
      //           pfChildName: "光证资管诚享31号集合资产管理计划",
      //           pfId: "861436",
      //           pfParentId: "5",
      //           timeMark: 1652079729000,
      //           treeId: "2",
      //           treeType: "COMMON",
      //         },
      //         {
      //           children: [],
      //           createTime: 1652079732000,
      //           creatorId: "22042517225145000211",
      //           iconCls: "silk-real",
      //           id: "14",
      //           isValid: "1",
      //           leaf: true,
      //           mdfyTime: 1652079732000,
      //           name: "14光证资管诚享42号集合资产管理计划",
      //           nodeLevel: "3",
      //           nodeSeq: "2",
      //           orLeafnode: true,
      //           pfChildId: "8",
      //           pfChildName: "光证资管诚享42号集合资产管理计划",
      //           pfId: "861475",
      //           pfParentId: "5",
      //           timeMark: 1652079732000,
      //           treeId: "2",
      //           treeType: "COMMON",
      //         },
      //         {
      //           children: [],
      //           createTime: 1652079701000,
      //           creatorId: "22042517225145000211",
      //           iconCls: "silk-real",
      //           id: "15",
      //           isValid: "1",
      //           leaf: true,
      //           mdfyTime: 1652079701000,
      //           name: "15光证资管诚享43号集合资产管理计划",
      //           nodeLevel: "3",
      //           nodeSeq: "0",
      //           orLeafnode: true,
      //           pfChildId: "6",
      //           pfChildName: "光证资管诚享43号集合资产管理计划",
      //           pfId: "861476",
      //           pfParentId: "5",
      //           timeMark: 1652079701000,
      //           treeId: "2",
      //           treeType: "COMMON",
      //         },
      //         {
      //           children: [],
      //           createTime: 1652079729000,
      //           creatorId: "22042517225145000211",
      //           iconCls: "silk-real",
      //           id: "16",
      //           isValid: "1",
      //           leaf: true,
      //           mdfyTime: 1652079729000,
      //           name: "16光证资管诚享31号集合资产管理计划",
      //           nodeLevel: "3",
      //           nodeSeq: "1",
      //           orLeafnode: true,
      //           pfChildId: "7",
      //           pfChildName: "光证资管诚享31号集合资产管理计划",
      //           pfId: "861436",
      //           pfParentId: "5",
      //           timeMark: 1652079729000,
      //           treeId: "2",
      //           treeType: "COMMON",
      //         },
      //         {
      //           children: [],
      //           createTime: 1652079732000,
      //           creatorId: "22042517225145000211",
      //           iconCls: "silk-real",
      //           id: "17",
      //           isValid: "1",
      //           leaf: true,
      //           mdfyTime: 1652079732000,
      //           name: "17光证资管诚享42号集合资产管理计划",
      //           nodeLevel: "3",
      //           nodeSeq: "2",
      //           orLeafnode: true,
      //           pfChildId: "8",
      //           pfChildName: "光证资管诚享42号集合资产管理计划",
      //           pfId: "861475",
      //           pfParentId: "5",
      //           timeMark: 1652079732000,
      //           treeId: "2",
      //           treeType: "COMMON",
      //         },
      //       ],
      //       createTime: 1652079677000,
      //       creatorId: "22042517225145000211",
      //       id: "3",
      //       isValid: "1",
      //       leaf: false,
      //       mdfyTime: 1652079677000,
      //       name: "一级节点",
      //       nodeLevel: "2",
      //       nodeSeq: "0",
      //       orLeafnode: false,
      //       pfChildId: "3",
      //       pfChildName: "一级节点",
      //       pfParentId: "2",
      //       timeMark: 1652079677000,
      //       treeId: "2",
      //       treeType: "COMMON",
      //     },
      //   ],
      //   createTime: 1652079663000,
      //   creatorId: "22042517225145000211",
      //   id: "2",
      //   isValid: "1",
      //   leaf: false,
      //   mdfyTime: 1652079663000,
      //   name: "自定义树",
      //   nodeLevel: "1",
      //   nodeSeq: "1",
      //   orLeafnode: false,
      //   pfChildId: "2",
      //   pfChildName: "自定义树",
      //   pfParentId: "-1",
      //   timeMark: 1652079663000,
      //   treeId: "2",
      //   treeType: "COMMON",
      // },
    ],
    message: '成功'
  }

  setTimeout(() => {
    res.send(data)
  }, 3000)
})

// 虚拟净值-右侧列表查询
app.post('/mdm/netWorth/getList', (req, res) => {
  const data = {
    startRow: 0,
    rowCount: 0,
    total: 2,
    data: [
      {
        id: 1,
        orgId: '0',
        customerCode: '1',
        customerName: '客户代码',
        pfId: '0',
        pfName: '测试',
        bizDate: '20220527',
        netValue: '1.200000',
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createTime: null,
        mdfyPrsn: null,
        isValid: null,
        leaf: null,
        children: null,
        cchecked: null
      },
      {
        id: 2,
        orgId: '0',
        customerCode: '1',
        customerName: '客户代码2',
        pfId: '0',
        pfName: '测试2',
        bizDate: '20220527',
        netValue: '1.300000',
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createTime: null,
        mdfyPrsn: null,
        isValid: null,
        leaf: null,
        children: null,
        cchecked: null
      },
      {
        id: 2,
        orgId: '0',
        customerCode: '1',
        customerName: '客户代码2',
        pfId: '0',
        pfName: '测试2',
        bizDate: '20220527',
        netValue: '1.300000',
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createTime: null,
        mdfyPrsn: null,
        isValid: null,
        leaf: null,
        children: null,
        cchecked: null
      },
      {
        id: 2,
        orgId: '0',
        customerCode: '1',
        customerName: '客户代码2',
        pfId: '0',
        pfName: '测试2',
        bizDate: '20220527',
        netValue: '1.300000',
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createTime: null,
        mdfyPrsn: null,
        isValid: null,
        leaf: null,
        children: null,
        cchecked: null
      },
      {
        id: 2,
        orgId: '0',
        customerCode: '1',
        customerName: '客户代码2',
        pfId: '0',
        pfName: '测试2',
        bizDate: '20220527',
        netValue: '1.300000',
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createTime: null,
        mdfyPrsn: null,
        isValid: null,
        leaf: null,
        children: null,
        cchecked: null
      },
      {
        id: 2,
        orgId: '0',
        customerCode: '1',
        customerName: '客户代码2',
        pfId: '0',
        pfName: '测试2',
        bizDate: '20220527',
        netValue: '1.300000',
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createTime: null,
        mdfyPrsn: null,
        isValid: null,
        leaf: null,
        children: null,
        cchecked: null
      },
      {
        id: 2,
        orgId: '0',
        customerCode: '1',
        customerName: '客户代码2',
        pfId: '0',
        pfName: '测试2',
        bizDate: '20220527',
        netValue: '1.300000',
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createTime: null,
        mdfyPrsn: null,
        isValid: null,
        leaf: null,
        children: null,
        cchecked: null
      },
      {
        id: 2,
        orgId: '0',
        customerCode: '1',
        customerName: '客户代码2',
        pfId: '0',
        pfName: '测试2',
        bizDate: '20220527',
        netValue: '1.300000',
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createTime: null,
        mdfyPrsn: null,
        isValid: null,
        leaf: null,
        children: null,
        cchecked: null
      },
      {
        id: 2,
        orgId: '0',
        customerCode: '1',
        customerName: '客户代码2',
        pfId: '0',
        pfName: '测试2',
        bizDate: '20220527',
        netValue: '1.300000',
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createTime: null,
        mdfyPrsn: null,
        isValid: null,
        leaf: null,
        children: null,
        cchecked: null
      },
      {
        id: 2,
        orgId: '0',
        customerCode: '1',
        customerName: '客户代码2',
        pfId: '0',
        pfName: '测试2',
        bizDate: '20220527',
        netValue: '1.300000',
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createTime: null,
        mdfyPrsn: null,
        isValid: null,
        leaf: null,
        children: null,
        cchecked: null
      },
      {
        id: 2,
        orgId: '0',
        customerCode: '1',
        customerName: '客户代码2',
        pfId: '0',
        pfName: '测试2',
        bizDate: '20220527',
        netValue: '1.300000',
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createTime: null,
        mdfyPrsn: null,
        isValid: null,
        leaf: null,
        children: null,
        cchecked: null
      },
      {
        id: 2,
        orgId: '0',
        customerCode: '1',
        customerName: '客户代码2',
        pfId: '0',
        pfName: '测试2',
        bizDate: '20220527',
        netValue: '1.300000',
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createTime: null,
        mdfyPrsn: null,
        isValid: null,
        leaf: null,
        children: null,
        cchecked: null
      },
      {
        id: 2,
        orgId: '0',
        customerCode: '1',
        customerName: '客户代码2',
        pfId: '0',
        pfName: '测试2',
        bizDate: '20220527',
        netValue: '1.300000',
        checkId: null,
        checkName: null,
        checkTime: null,
        createPrsn: null,
        createTime: null,
        mdfyPrsn: null,
        isValid: null,
        leaf: null,
        children: null,
        cchecked: null
      }
    ]
  }

  res.send(data)
})

// 接口数据导出-接口类型下拉
app.post('/mdm/dic/ex_dataType/allByClassId', (req, res) => {
  const data = [
    {
      id: '94',
      classId: 'ex_dataType',
      dicClassName: '接口类型',
      classEname: 'DATATYPE',
      keyId: 'valuation',
      keyName: '估值列表',
      keyEname: 'valuation',
      state: true,
      valid: true,
      memo: '接口导出数据- 接口类型下载',
      timeMark: '2022-06-21 14:28:47',
      keySeq: 1,
      createPrsn: '22040217042473000388',
      createTime: '2022-06-21 14:28:47',
      mdfyPrsn: '22040217042473000388',
      mdfyTime: '2022-06-21 14:28:47',
      checkerId: null,
      checkerName: null,
      checked: null,
      checkTime: null,
      stateName: '启用',
      otherCheckStates: null,
      otherCheckTimes: null,
      otherCheckerNames: null,
      otherCheckerIds: null
    },
    {
      id: '95',
      classId: 'ex_dataType',
      dicClassName: '接口类型',
      classEname: 'DATATYPE',
      keyId: 'netWorth',
      keyName: '净值列表',
      keyEname: '',
      state: true,
      valid: true,
      memo: '接口导出数据 - 接口类型',
      timeMark: '2022-06-21 14:32:42',
      keySeq: 2,
      createPrsn: '22040217042473000388',
      createTime: '2022-06-21 14:32:42',
      mdfyPrsn: '22040217042473000388',
      mdfyTime: '2022-06-21 14:32:42',
      checkerId: null,
      checkerName: null,
      checked: null,
      checkTime: null,
      stateName: '启用',
      otherCheckStates: null,
      otherCheckTimes: null,
      otherCheckerNames: null,
      otherCheckerIds: null
    }
  ]
  res.send(data)
})

// 报告模板-查询
app.post('/mdm/reportTemplate/query', (req, res) => {
  // const data = {
  //   columns: ["1", "2", "3", "4"],
  //   columnSize: "3",
  //   list: [
  //     {
  //       column1: "10",
  //       column2: "10021",
  //       column3: "1",
  //       id: 37,
  //       size: "3",
  //     },
  //     {
  //       column1: "10",
  //       column2: "10021",
  //       column3: "1",
  //       id: 38,
  //       size: "3",
  //     },
  //   ],
  // };

  const data = {
    columns: ['1', '2', '3'],
    columnSize: '3',
    list: [
      { column1: '1', column2: '1', column3: '1', id: 52, size: '3' },
      { column1: '2', column2: '', column3: '', id: 53, size: '3' },
      { column1: '2', column2: '', column3: '', id: 54, size: '3' }
    ]
  }

  res.send(data)
})

// 报告模板-新增
app.post('/mdm/reportTemplate/add', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }

  res.send(data)
})

// 报告模板-批量删除
app.post('/mdm/reportTemplate/delete', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }

  res.send(data)
})

// 报告模板树查询
app.post('/mdm/reportTemplate/reportTmpQuey', (req, res) => {
  const data = {
    code: 200,
    data: [
      {
        children: [
          {
            children: [
              {
                children: [],
                id: 5,
                isLeaf: '1',
                level: '3',
                name: 'xxx宝盖',
                parentId: '3'
              }
            ],
            id: 3,
            level: '2',
            name: 'xxx模板',
            parentId: '1'
          },
          {
            children: [
              {
                children: [],
                id: 6,
                isLeaf: '1',
                level: '3',
                name: 'xxx报告1',
                parentId: '4'
              }
            ],
            id: 4,
            level: '2',
            name: 'xxx模板1',
            parentId: '1'
          }
        ],
        id: 1,
        isLeaf: '',
        level: '1',
        name: '报告模板',
        parentId: '-1'
      }
    ],
    message: '业务处理成功.'
  }
  res.send(data)
})

// 报告模板-指标树查询
app.post('/mdm/reportTemplate/reportIndexQuey', (req, res) => {
  const data = {
    code: 200,
    data: [
      {
        children: [
          {
            children: [
              {
                children: [],
                id: 4,
                isLeaf: '1',
                level: '3',
                name: '平均值',
                parentId: '2'
              }
            ],
            id: 2,
            level: '2',
            name: '估值数据',
            parentId: '1'
          },
          {
            children: [
              {
                children: [],
                id: 5,
                isLeaf: '1',
                level: '3',
                name: '算数平均值',
                parentId: '3'
              }
            ],
            id: 3,
            level: '2',
            name: '净值数据',
            parentId: '1'
          }
        ],
        id: 1,
        level: '1',
        name: '指标树',
        parentId: '-1'
      }
    ],
    message: '业务处理成功.'
  }

  res.send(data)
})

// 报告模板-新增节点
app.post('/mdm/reportTemplate/reportTmpAdd', (req, res) => {
  const data = {
    code: 200,
    data: true,
    message: '业务处理成功.'
  }

  res.send(data)
})

// 首页内容-文件接收异常表
app.post('/mdm/index/getFileException', (req, res) => {
  const data = {
    echarts: [
      {
        code: '未收取估值文件',
        value: '338'
      }
    ],
    list: [
      {
        des: '收到0份文件',
        pfName: '国泰君安3266单一资产管理计划',
        orgName: '机构1'
      },
      {
        des: '收到0份文件',
        pfName: '国泰君安3267单一资产管理计划',
        orgName: '机构2'
      }
    ]
  }

  setTimeout(() => {
    res.send(data)
  }, 3000)
})

// 首页内容-邮件接收异常
app.post('/mdm/index/getMailException', (req, res) => {
  const data = {
    echarts: [
      {
        code: '未收取估值文件',
        value: '338'
      }
    ],
    list: [
      {
        des: '收到0份文件',
        pfName: '国泰君安3266单一资产管理计划',
        orgName: '机构1'
      },
      {
        des: '收到0份文件',
        pfName: '国泰君安3267单一资产管理计划',
        orgName: '机构2'
      },
      {
        des: '收到0份文件',
        pfName: '国泰君安3266单一资产管理计划',
        orgName: '机构1'
      },
      {
        des: '收到0份文件',
        pfName: '国泰君安3267单一资产管理计划',
        orgName: '机构2'
      },
      {
        des: '收到0份文件',
        pfName: '国泰君安3266单一资产管理计划',
        orgName: '机构1'
      },
      {
        des: '收到0份文件',
        pfName: '国泰君安3267单一资产管理计划',
        orgName: '机构2'
      },
      {
        des: '收到0份文件',
        pfName: '国泰君安3266单一资产管理计划',
        orgName: '机构1'
      },
      {
        des: '收到0份文件',
        pfName: '国泰君安3267单一资产管理计划',
        orgName: '机构2'
      },
      {
        des: '收到0份文件',
        pfName: '国泰君安3266单一资产管理计划',
        orgName: '机构1'
      },
      {
        des: '收到0份文件',
        pfName: '国泰君安3267单一资产管理计划',
        orgName: '机构2'
      },
      {
        des: '收到0份文件',
        pfName: '国泰君安3266单一资产管理计划',
        orgName: '机构1'
      },
      {
        des: '收到0份文件',
        pfName: '国泰君安3267单一资产管理计划',
        orgName: '机构2'
      }
    ]
  }

  setTimeout(() => {
    res.send(data)
  }, 4000)
})

// 首页内容-数据处理异常
app.post('/mdm/index/getDataException', (req, res) => {
  const data = {
    echarts: [
      {
        code: '未处理',
        value: '1'
      },
      {
        code: '处理中',
        value: '142'
      },
      {
        code: '处理异常',
        value: '195'
      }
    ],
    list: [
      {
        des: '3-科目校验',
        pfName: '117402 OTC-国泰君安3266单一资产管理计划',
        orgName: '机构1'
      },
      {
        des: '3-科目校验',
        pfName: '117457 OTC-国泰君安3267单一资产管理计划',
        orgName: '机构2'
      },
      {
        des: '3-科目校验',
        pfName: '861351 OTC-光证资管阳光红精选2号资产管理计划',
        orgName: '机构3'
      }
    ]
  }

  setTimeout(() => {
    res.send(data)
  }, 3000)
})

//
// app.post('/', (req, res) => {
//   const data = [ ];
//   res.send(data);
// });

app.listen('8089', () => {
  console.log('开启服务')
})
