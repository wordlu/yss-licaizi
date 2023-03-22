Vue.component("table-component", {
  data() {
    return {
      standardTableData: [],
      formTableDatas: {
        tableData: [],
      },
      deleteDialogVisible: false,
      currentDeleteData: {},
      selectionList: null,
    };
  },
  props: [
    "tableData",
    "currentPage",
    "pageSize",
    "loading",
    "formTableRules",
    "height",
    "tableHeight",
    "formTableData",
    "kmCls",
    "cChecked",
    "jdWay",
    "cury",
    "levelList",
    "maptypeList",
    "isvList",
    "isDatail",
    "filterDisabled",
    "excelTitle",
    "currentInfo",
    "total",
  ],
  watch: {
    tableData(newVal) {
      this.formTableDatas.tableData = newVal;
    },
  },
  methods: {
    // 审核
    handleAudit(index, row) {
      if (row.isUpdate || row.isAdd) {
        this.$message({
          showClose: true,
          message: "请先去保存,才能操作~",
          type: "warning",
        });
      } else {
        const params = {
          ...row,
          cChecked: row.cChecked ? 0 : 1,
        };
        subjectCheck(params).then(({ code, data }) => {
          if (code === 200) {
            this.$set(this.formTableDatas.tableData, index, data);
            const cCheckedText = row.cChecked ? "反审核" : "审核";
            this.$message({
              showClose: true,
              message: cCheckedText + "成功~",
              type: "success",
            });
          } else if (code === 202) {
            this.$message({
              showClose: true,
              message: "不能审核/反审核自己修改的记录~",
              type: "error",
            });
          } else {
            this.$message({
              showClose: true,
              message: "操作失败~",
              type: "error",
            });
          }
        }).catch(()=>{
          this.$message({
            showClose: true,
            message: "操作失败~",
            type: "error",
          });
        });
      }
      // this.$refs.standardFormTable.validate((valid) => {
      //   console.log(valid);
      //   if (valid) {
      //     const params = {
      //       ...row,
      //       cChecked: row.cChecked ? 0 : 1,
      //     };

      //     delete params.isUpdate;
      //     delete params.isAdd;
      //     subjectCheck(params).then(({ code, data }) => {
      //       if (code === 200) {
      //         this.$set(this.formTableDatas.tableData, index, data);
      //         this.$message({
      //           showClose: true,
      //           message: "审核成功~",
      //           type: "success",
      //         });
      //       } else if (code === 202) {
      //         this.$message({
      //           showClose: true,
      //           message: "不能审核/反审核自己修改的记录~",
      //           type: "error",
      //         });
      //       } else {
      //         this.$message({
      //           showClose: true,
      //           message: "操作失败~",
      //           type: "error",
      //         });
      //       }
      //     });
      //   } else {
      //     this.$message({
      //       showClose: true,
      //       message: "请输入或选择必填项才能进行审核~",
      //       type: "warning",
      //     });
      //   }
      // });
    },
    // 批量审核
    handleAuditList() {
      const data = this.formTableDatas.tableData.filter(
        (item) => item.isUpdate || item.isAdd
      );
      if (data.length) {
        this.$message({
          showClose: true,
          message: "请先去保存,才能操作~",
          type: "warning",
        });
      } else if (this.selectionList && this.selectionList.length) {
        checkSubjectList(this.selectionList).then(({ data }) => {
          if (data) {
            this.$message({
              showClose: true,
              message: "批量审核成功~",
              type: "success",
            });
            this.$emit("search-info");
          } else {
            this.$message({
              showClose: true,
              message: "不能审核/反审核自己修改的记录~",
              type: "error",
            });
          }
        }).catch(()=>{
          this.$message({
            showClose: true,
            message: "批量审核失败~",
            type: "error",
          });
        });
      } else {
        this.$message({
          showClose: true,
          message: "未选择审核项~",
          type: "warning",
        });
      }
      // this.$refs.standardFormTable.validate((valid) => {
      //   console.log(valid);
      //   if (valid) {
      //     const data = this.formTableDatas.tableData.filter(
      //       (item) => item.isUpdate || item.isAdd
      //     );
      //     if (data.length) {
      //       checkSubjectList(data).then(({ data }) => {
      //         if (data) {
      //           this.$message({
      //             showClose: true,
      //             message: "批量审核成功~",
      //             type: "success",
      //           });
      //           this.$emit("search-info");
      //         } else {
      //           this.$message({
      //             showClose: true,
      //             message: "批量审核失败~",
      //             type: "success",
      //           });
      //         }
      //       });
      //     } else {
      //       this.$message({
      //         showClose: true,
      //         message: "暂时没有修改的数据，不可批量审核~",
      //         type: "warning",
      //       });
      //     }
      //   }
      // });
    },
    // 点击删除
    handleDelete(index, row) {
      console.log(index, row);
      this.currentDeleteData = { index, row };
      this.deleteDialogVisible = true;
    },
    // 删除弹框
    deleteDialogCloseHandler(type) {
      if (type === "confirm") {
        const { row, index } = this.currentDeleteData;
        if (row.isAdd) {
          this.formTableDatas.tableData = this.formTableDatas.tableData.filter(
            (item, key) => key !== index
          );
          this.$message({
            showClose: true,
            message: "删除成功~",
            type: "success",
          });
          this.deleteDialogVisible = false;
        } else {
          const params = [{ id: row.id }];
          subjectDelete(params).then(({ code, data }) => {
            if (data) {
              this.formTableDatas.tableData =
                this.formTableDatas.tableData.filter(
                  (item) => item.id !== row.id
                );
              this.$message({
                showClose: true,
                message: "删除成功~",
                type: "success",
              });
              this.deleteDialogVisible = false;
            } else {
              this.$message({
                showClose: true,
                message: "删除失败~",
                type: "error",
              });
            }
          }).catch(()=>{
            this.$message({
              showClose: true,
              message: "删除失败~",
              type: "error",
            });
          });
        }
      } else {
        this.currentDeleteId = null;
        this.deleteDialogVisible = false;
      }
    },
    // 修改select
    handleSelect({ index, type, val, row }) {
      console.log(2222, index, type, val, row);
      // this.formTableDatas.tableData[index][type] = val;
      if (row.id && !this.formTableDatas.tableData[index].isUpdate) {
        // this.formTableDatas.tableData[index].isUpdate = true;
        this.$set(this.formTableDatas.tableData, index, {
          ...this.formTableDatas.tableData[index],
          isUpdate: true,
        });
      }
    },
    // 修改input
    handleChangeInput({ index, type, val, row }) {
      // console.log(11111, val, index, row);
      console.log(this.formTableDatas.tableData[index]);
      // this.formTableDatas.tableData[index][type] = val;
      if (row.id && !this.formTableDatas.tableData[index].isUpdate) {
        //   this.formTableDatas.tableData[index].isUpdate = true;
        this.$set(this.formTableDatas.tableData, index, {
          ...this.formTableDatas.tableData[index],
          isUpdate: true,
        });
      }
    },
    // 每页展示条数
    handleSizeChange(val) {
      this.$emit("change-size", val);
    },
    // 当前页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$emit("handle-current-change", val);
    },
    // 新增
    addDialogVisible() {
      if (this.currentInfo.orgInfo.keyId) {
        this.formTableDatas.tableData.push({
          isAdd: true,
          cChecked: 0,
          orgId: this.currentInfo.orgInfo.keyId,
          subjSystem: this.currentInfo.subjSystemInfo.keyId,
        });
      } else {
        this.$message({
          showClose: true,
          message: "请选择机构和体系，查询后才能添加哦~",
          type: "warning",
        });
      }
    },
    // excel处理
    operationExcel(status) {
      if (status === "export") {
        const data = this.formTableDatas.tableData;
        if (!data.length) {
          this.$message({
            showClose: true,
            message: "暂无数据,不可导出",
            type: "warning",
          });
        } else {
          const datas = data.filter((item) => item.isUpdate || item.isAdd);
          if (datas.length) {
            this.$message({
              showClose: true,
              message: "请先保存数据哦~",
              type: "warning",
            });
          } else {
            this.$emit("operation-excel", "export");
          }
        }

        return;
      }

      console.log("导入");
    },
    modeUpload(item) {
      console.log("---item---", item);
    },
    // 上传excel成功和失败触发
    handleChange(file, fileList) {
      console.log(file, fileList);
      // if (!file) {
      //   this.$message({
      //     showClose: true,
      //     message: "未选择文件",
      //     type: "error",
      //   });
      //   return;
      // }
      addHandler({ file }).then(({ data }) => {
        let type = data;
        if (type) {
          this.$message({
            showClose: true,
            message: "新增成功",
            type: "success",
          });
          this.addDialogVisible = false;
          this.$refs.fileInput.value = null;
          this.$emit("search-info");
        } else {
          this.$message({
            showClose: true,
            message: "新增失败",
            type: "error",
          });
        }
      });
    },
    // excel上传
    fileInputChangeHandler(e) {
      if (e.target.value) {
        console.log(1111, this.$refs.fileInput.files[0]);
        const file = this.$refs.fileInput.files[0];
        if (!file) {
          this.$message({
            showClose: true,
            message: "未选择文件",
            type: "warning",
          });
          return;
        }
        addHandler({ file }).then(({ data }) => {
          let type = data;
          if (type) {
            this.$message({
              showClose: true,
              message: "新增成功",
              type: "success",
            });
            this.addDialogVisible = false;
            this.$refs.fileInput.value = null;
            // this.searchHandler();
            this.$emit("search-info");
          } else {
            this.$message({
              showClose: true,
              message: "新增失败",
              type: "error",
            });
          }
        });
        // const fileNameArray = e.target.value.split('\\');
        // console.log('fileNameArray',e.target.value,fileNameArray,fileNameArray.slice(-1)[0])
        // this.newlyAdded.parsingRules = fileNameArray.slice(-1)[0]
      }
    },
    // 更新和新增row动态标注底色背景
    tableRowClassName({ row, rowIndex }) {
      if (row.isUpdate) {
        return "warning-row";
      } else if (row.isAdd) {
        return "success-row";
      }
      return "";
    },
    setCell() {
      return "cell-box";
    },
    // 保存-更新/增加
    submit() {
      const { tableData } = this.formTableDatas;
      const data = tableData.filter((item) => item.isUpdate || item.isAdd);
      if (!data.length) {
        this.$message({
          showClose: true,
          message: "暂无修改或新增，不能保存",
          type: "warning",
        });
        return;
      }
      this.$refs.standardFormTable.validate((valid) => {
        console.log(valid);
        if (valid) {
          // 更新数据 带上查询两个必传项
          // 新增数据 带上查询两个必传项
          subjectSave(data).then(({ code, data }) => {
            if (data) {
              this.$message({
                showClose: true,
                message: "保存成功~",
                type: "success",
              });
              this.$emit("search-info");
            } else {
              this.$message({
                showClose: true,
                message: "保存失败~",
                type: "error",
              });
            }
          }).catch(()=>{
            this.$message({
              showClose: true,
              message: "保存失败~",
              type: "error",
            });
          });
        }
      });
    },
    // 选项发生变化
    handleSelectionChange(selection) {
      console.log(selection);
      this.selectionList = selection;
    },
  },
  template: `
    <div class="standard-table-box" :style="{height:tableHeight}">
      <div class="el-row-btn-box btn-container">
        <div>
          <el-button  size="mini" @click="addDialogVisible">新增</el-button>
          <el-button type="primary" size="mini" @click="submit">保存</el-button>
          <el-button type="primary" size="mini" @click="handleAuditList">批量审核</el-button>
        </div>
      
          <el-button type="primary" size="mini" @click="operationExcel('export')">excel导出</el-button>
          
  
      </div>
      <div style="fontSize:13px;paddingLeft:20px;height:23px">
        <div v-show="currentInfo.orgInfo.keyName">
          <span>机构：</span>{{currentInfo.orgInfo.keyName}}
          <span style="marginLeft:10px">科目体系：</span>{{currentInfo.subjSystemInfo.keyName}}
        </div>
      </div>
      <div class="form-box">
        <el-form :model="formTableDatas" :rules="formTableRules" class="form-table-box" ref="standardFormTable" >
          <el-table
            ref="standard"
            class="table-box"
            :data="formTableDatas.tableData"
            border
            :height="height"
            style="width: 100%;"
            :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize:'12px'}"
            v-loading="loading"
            empty-text="暂无数据"
            :row-class-name="tableRowClassName"
            :row-style="{fontSize:'12px'}"
            :cell-class-name="setCell"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column type="index" label="序号" width="60" align="center"></el-table-column>
            <el-table-column label="操作" width="160" align="center">
              <template slot-scope="{row,$index}">
                <el-button
                  size="mini"
                  
                  @click="handleAudit($index, row)">{{!row.cChecked?'审核':'反审核'}}</el-button>
                <el-button
                  v-show="!row.cChecked?true:false"
                  size="mini"
                  type="danger"
                  @click="handleDelete($index, row)">删除</el-button>
              </template>
            </el-table-column>
            <el-table-column
              prop="cSubjCode"
              label="科目代码"
              width="100"
              align="center"
            >
              <template slot-scope="{row,$index}">
                <el-form-item :prop="'tableData.'+$index+'.cSubjCode'" :rules="formTableRules.input">
                  <el-input v-model="row.cSubjCode" size="mini" placeholder="科目代码" :disabled="!row.cChecked?false:true" @change="(val)=>handleChangeInput({index:$index,type:'cSubjCode',val,row})">
                  </el-input>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column
              prop="cSubjName"
              label="科目名称"
              width="100"
              align="center"  
            >
              <template slot-scope="{row,$index}">
                <el-form-item :prop="'tableData.'+$index+'.cSubjName'" :rules="formTableRules.input">
                  <el-input v-model="row.cSubjName" size="mini" placeholder="科目名称" :disabled="!row.cChecked?false:true" @change="(val)=>handleChangeInput({index:$index,type:'cSubjName',val,row})"></el-input>
                </el-form-item>
              </template>
            </el-table-column>
            
            <el-table-column
              prop="mapType"
              label="科目映射规则"
              width="100"
              align="center"    
            >
              <template slot-scope="{row,$index}">
                <el-form-item :prop="'tableData.'+$index+'.mapType'">
                  <el-select v-model="row.mapType" size="mini" placeholder="请选择科目映射规则" :disabled="!row.cChecked?false:true" @change="(val)=>handleSelect({index:$index,type:'mapType',val,row})">
                    <el-option
                      v-for="item in maptypeList"
                      :key="item.keyId"
                      :label="item.keyName"
                      :value="item.keyId"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </template>
            </el-table-column>
        
            <el-table-column
              prop="cSubjCls"
              label="科目类别"
              width="120"
              align="center"    
            >
              <template slot-scope="{row,$index}">
                <el-form-item :prop="'tableData.'+$index+'.cSubjCls'" >
                  <el-select v-model="row.cSubjCls" size="mini" placeholder="请选择科目类别" :disabled="!row.cChecked?false:true" @change="(val)=>handleSelect({index:$index,type:'cSubjCls',val,row})">
                    <el-option
                      v-for="item in kmCls"
                      :key="item.keyId"
                      :label="item.keyName"
                      :value="item.keyId"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column
              prop="nWay"
              label="余额方向"
              width="120"
              align="center"    
            >
              <template slot-scope="{row,$index}">
                <el-form-item :prop="'tableData.'+$index+'.nWay'" >
                  <el-select  v-model="row.nWay" size="mini" placeholder="请选择余额方向" :disabled="!row.cChecked?false:true" @change="(val)=>handleSelect({index:$index,type:'nWay',val,row})">
                    <el-option
                      v-for="item in jdWay"
                      :key="item.keyId"
                      :label="item.keyName"
                      :value="item.keyId"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </template>
            </el-table-column>
              <el-table-column
              prop="cCuryCode"
              label="币种"
              width="120"
              align="center"    
            >
              <template slot-scope="{row,$index}">
                <el-form-item :prop="'tableData.'+$index+'.cCuryCode'">
                  <el-select v-model="row.cCuryCode" size="mini" placeholder="请选择币种" :disabled="!row.cChecked?false:true" @change="(val)=>handleSelect({index:$index,type:'cCuryCode',val,row})">
                    <el-option
                      v-for="item in cury"
                      :key="item.keyId"
                      :label="item.keyName"
                      :value="item.keyId"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column
              prop="isDetail"
              label="明细科目"
              width="120"
              align="center"
            >
              <template slot-scope="{row,$index}">
                <el-form-item :prop="'tableData.'+$index+'.isDetail'" >
                  <el-select v-model="row.isDetail" size="mini" placeholder="请选择明细科目" :disabled="!row.cChecked?false:true" @change="(val)=>handleSelect({index:$index,type:'isDetail',val,row})">
                    <el-option
                      v-for="item in [{label:'是',value:'1'},{label:'否',value:'0'}]"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column
              prop="pSubjCode"
              label="父级科目"
              width="100"
              align="center"    
            >
              <template slot-scope="{row,$index}">
                <el-form-item :prop="'tableData.'+$index+'.pSubjCode'" :rules="formTableRules.input">
                  <el-input v-model="row.pSubjCode" size="mini" placeholder="父级科目" :disabled="!row.cChecked?false:true"  @change="(val)=>handleChangeInput({index:$index,type:'pSubjCode',val,row})"></el-input>
                </el-form-item>
              </template>
            </el-table-column>
            // 科目层级
            <el-table-column
              prop="nSubjLevel"
              label="科目层级"
              width="100"
              align="center"    
            >
              <template slot-scope="{row,$index}">
                <el-form-item :prop="'tableData.'+$index+'.nSubjLevel'">
                  <el-select v-model="row.nSubjLevel" size="mini" placeholder="请选择科目层级" :disabled="!row.cChecked?false:true" @change="(val)=>handleSelect({index:$index,type:'nSubjLevel',val,row})">
                    <el-option
                      v-for="item in levelList"
                      :key="item.keyId"
                      :label="item.keyName"
                      :value="item.keyId"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column
              prop="isV"
              label="是否虚拟科目"
              width="100"
              align="center"    
            >
              <template slot-scope="{row,$index}">
                <el-form-item :prop="'tableData.'+$index+'.isV'">
                  <el-select v-model="row.isV" size="mini" placeholder="请选择虚拟科目" :disabled="!row.cChecked?false:true" @change="(val)=>handleSelect({index:$index,type:'isV',val,row})">
                    <el-option
                      v-for="item in isvList"
                      :key="item.keyId"
                      :label="item.keyName"
                      :value="item.keyId"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </template>
            </el-table-column>    
            <el-table-column
              prop="createPrsn"
              label="创建人"
              width="100"
              align="center"    
            >
            </el-table-column>
            <el-table-column
              prop="checkName"
              label="审核人"
              width="100"
              align="center"    
            >
            </el-table-column>
            <el-table-column
              prop="createTime"
              label="创建时间"
              width="100"
              align="center"    
            >
            </el-table-column>
          </el-table>
        </el-form>
      </div>

      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100,300,500]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        :disabled="filterDisabled"
      >
      </el-pagination>
   
      <el-dialog
        title=""
        :visible.sync="deleteDialogVisible"
        width="300px"
        center
        :show-close="false"
        :close-on-click-modal="false"
      >
        <span>确定要删除吗</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="deleteDialogCloseHandler('cancel')">取 消</el-button>
          <el-button type="primary" @click="deleteDialogCloseHandler('confirm')">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  `,
});


{/* <el-row class="el-row-btn-box btn-container">
        <el-col :span=12 >
          <el-button  size="mini" @click="addDialogVisible">新增</el-button>
          <el-button type="primary" size="mini" @click="submit">保存</el-button>
          <el-button type="primary" size="mini" @click="handleAuditList">批量审核</el-button>
        </el-col>
        <div class="select-btn-box">
          <el-button type="primary" size="mini" @click="operationExcel('export')">excel导出</el-button>
          
        </div>
      </el-row> */}

{
  /* <el-upload
            action=""
            class="upload-demo"
            ref="upload"
            :multiple="false"
            :show-file-list="false"
            accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
            :on-change="handleChange"
            :limit="1"
            :auto-upload="false"
            :http-request="modeUpload"
            style="{margin-left:'10px'}"
          >
            <el-button slot="trigger" size="mini" type="primary">excel导入</el-button>
          </el-upload> */
}
