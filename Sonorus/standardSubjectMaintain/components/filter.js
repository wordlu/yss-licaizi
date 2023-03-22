Vue.component("filter-component", {
  props: ["filterData", "orgList", "kmTx", "kmCls", "cChecked"],
  data() {
    return {
      filterInfo: {},
    };
  },
  mounted() {
    this.filterInfo = { ...this.filterData };
  },

  watch: {
    filterData(newVal) {
      console.log(1111, newVal);
      this.filterInfo = { ...newVal };
    },
  },
  methods: {
    searchFilter() {
      console.log(this.filterData);
      this.$refs["standard-filter"].validate((vaild) => {
        if (vaild) {
          this.$emit("search-filter", this.filterInfo);
        }
      });
    },
    resetHandler() {
      // this.$emit("reset-filter");
      this.filterInfo = {};
    },
  },

  template: `
  <el-form :model="filterInfo" class="select-header" ref="standard-filter">
    <el-row style="height: 60px" :gutter="20">
      <el-col :span="4" class="el-col-zidingyi">
        <el-form-item prop="cSubjCode" label="科目代码 :" >
          <el-input v-model="filterInfo.cSubjCode" size="mini" placeholder="科目代码" style="width: 100%"></el-input>
        </el-form-item>
      </el-col>
 
      <el-col :span="4" class="el-col-zidingyi">
        <el-form-item prop="cSubjName" label="科目名称 :" >
          <el-input v-model="filterInfo.cSubjName" size="mini" placeholder="科目名称"  style="width: 100%"></el-input>
        </el-form-item>
      </el-col>


      <el-col :span="4" class="el-col-zidingyi">
        <el-form-item label="科目类别 :" prop="cSubjCls" >
          <el-select v-model="filterInfo.cSubjCls" size="mini" placeholder="科目类别" clearable style="width: 100%">
            <el-option
              v-for="(item,index) in kmCls"
              :key="item.keyId"
              :label="item.keyName"
              :value="item.keyId"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="4" class="el-col-zidingyi">
        <el-form-item label="机构 :" prop="orgId"  :rules="[{ required: true, message: '请选择机构'}]">
          <el-select filterable v-model="filterInfo.orgId" size="mini" placeholder="机构" clearable style="width: 100%">
            <el-option
              v-for="(item,index) in orgList"
              :key="item.keyId"
              :label="item.keyName"
              :value="item.keyId"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :span="4" class="el-col-zidingyi">
        <el-form-item label="科目体系:" prop="subjSystem"  :rules="[{ required: true, message: '请选择科目体系'}]">
          <el-select v-model="filterInfo.subjSystem" size="mini" placeholder="科目体系" clearable style="width: 100%">
            <el-option
              v-for="(item,index) in kmTx"
              :key="item.keyId"
              :label="item.keyName"
              :value="item.keyId"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      
      <el-col :span="4" class="el-col-zidingyi">
        <el-form-item label="审核状态 :" prop="cChecked" label-width="auto">
          <el-select v-model="filterInfo.cChecked" size="mini" placeholder="审核状态" clearable style="width: 100%">
            <el-option
              v-for="(item,index) in cChecked"
              :key="item.keyId"
              :label="item.keyName"
              :value="item.keyId"
                            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>

      

    </el-row>
    <div class="select-btn-box filter-btn">
          <el-button type="primary" size="mini" @click="searchFilter">查询</el-button>
          <el-button type="info" size="mini" @click="resetHandler">重置</el-button>
     
      </div>
  </el-form>
  `,
});


{/* <el-col :span="3" class="select-btn-box el-col-zidingyi">
        <el-form-item>
          <el-button type="primary" size="mini" @click="searchFilter">查询</el-button>
          <el-button type="info" size="mini" @click="resetHandler">重置</el-button>
        </el-form-item>
      </el-col> */}
