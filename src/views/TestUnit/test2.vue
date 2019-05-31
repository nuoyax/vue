





<template>
  <el-row :gutter="10" type="flex" >
    <el-col :span="4"><div class="grid-content bg-purple">
      <el-row><el-col :span="8"> 分公司</el-col> <el-col :span="14">
        <el-select v-model="branchSelect" clearable  class="input__inner" >

          <el-option   v-for="item in branchList" :key="item.value"  :value="item.value" :label="item.label"></el-option>



        </el-select></el-col></el-row></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
</template>

<script>

  export default {

    data(){

      return{
        branchSelect:'',
        branchList:[
          {value:'30',label:"江苏"},
          {value:'31',label:"江苏1"},
          {value:'32',label:"江苏2"}
        ]






      }}






  }



</script>


<style>
  .el-row {
    margin-bottom: 20px;

  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #f2f6fc;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 0px;
    min-height: 36px;
  }


</style>
<style scoped>
  .input__inner{-webkit-appearance:none;background-color:red}

</style>














<!--<template>-->

<!--        <treeselect-->
<!--                :multiple="true"-->
<!--                :options="options2"-->

<!--                v-model="value"></treeselect>-->



<!--</template>-->

<!--<script>-->

<!--    import axios from 'axios'-->
<!--    // import the component-->
<!--    import Treeselect from '@riophae/vue-treeselect'-->
<!--    // import the styles-->
<!--    import '@riophae/vue-treeselect/dist/vue-treeselect.css'-->
<!--    export default {-->
<!--        components:{treeselect:Treeselect},-->
<!--        data: () => ({-->

<!--            options: [ {-->
<!--                id: "1",-->
<!--                label: '总公司',-->
<!--                children: [ {-->
<!--                    id:"2",-->
<!--                    label: '分公司2',-->
<!--                    children: [ {-->
<!--                        id:"3_1_1",-->
<!--                        label: 'Person A 👱',-->
<!--                    }, {-->
<!--                        id: '3_1_2',-->
<!--                        label: 'Person B 🧔',-->
<!--                    } ],-->
<!--                }, {-->
<!--                    id:"2_1",-->
<!--                    label: '分公司2',-->
<!--                    children: [ {-->
<!--                        id:"3_2_1",-->
<!--                        label: 'Person A 👱',-->
<!--                    }, {-->
<!--                        id: '3_2_2',-->
<!--                        label: 'Person B 🧔',-->
<!--                    } ],-->
<!--                }-->


<!--                    , {-->
<!--                    id: 'person-e',-->
<!--                    label: 'Person E 👩',-->
<!--                } ],-->



<!--            },-->








<!--            ],-->
<!--            options2:[-->


<!--            ]-->
<!--                ,-->
<!--            optionstest:[],-->
<!--            childrenA:[-->



<!--            ]-->
<!--        }),-->
<!--        created(){-->
<!--             this.doPost()-->
<!--            // this.createList()-->
<!--        },-->
<!--        methods:{-->

<!--            createList()-->
<!--            {-->


<!--                let height=2-->
<!--                // let childrenA=[{-->
<!--                //     id:'',-->
<!--                //     label:'',-->
<!--                //-->
<!--                //     children:[]-->
<!--                // }]-->


<!--                // this.options2.id=  ""-->
<!--                // this.options2.label=""-->
<!--                // this.options2[0].children[0].id=""-->
<!--                // this.options2[0].children[0].label="-->
<!--                // this.options2[0].children[0].children[0].id=""-->
<!--                // this.options2[0].children[0].children[0].label=""-->

<!--                //      this.options2[0].id=  "1"-->
<!--                //      this.options2[0].label="1111"-->
<!--                //      this.options2[0].children[0].id="2"-->
<!--                // this.options2[0].children[0].label="2222"-->
<!--                // this.options2[0].children[0].children[0].id="3"-->
<!--                // this.options2[0].children[0].children[0].label="33333"-->





<!--                 let children=[{id:1,label:"集团总公司",level:'1',code:"00000"},-->
<!--                         {id:2,label:"江苏省分公司",level:'2',code:"01002"},{id:"2",label:"四川省分公司",level:'2',code:"00002"},-->
<!--                         {id:3,label:"南京分公司",level:'3',code:"01003"},{id:4,label:"苏州分公司",level:'3',code:"01103"},-->
<!--                         {id:5,label:"成都分公司",level:'3',code:"00005"}-->
<!--                 ]-->

<!--                    let count1=0;-->
<!--                    let count2=0;-->
<!--                    let count3=0;-->

<!--                    let rootArray=[]-->
<!--                    let secondArray=[]-->
<!--                    let thirdArray=[]-->








<!--                    console.info("count1="+count1)-->

<!--                    console.info("count2="+count2)-->
<!--                    console.info("count3="+count3)-->

<!--                    console.log(rootArray)-->
<!--                    console.log(secondArray)-->
<!--                    console.log(thirdArray)-->
<!--                //-->
<!--                // this.$set(this.options2,0,{id:"1",label:'1111',children:[]})-->


<!--                // for (let i=0;i<count1;i++){-->
<!--                //     this.$set(this.options2,i,{id:rootArray[i].id,label:rootArray[i].label,children:[]})-->
<!--                //-->
<!--                //         for(let j=0;j<count2;j++)-->
<!--                //         {-->
<!--                //                 this.$set(this.options2[i].children,j,{id:secondArray[j].id,label:secondArray[j].label,children:[]})-->
<!--                //                 for (let v=0;v<count3;v++){-->
<!--                //                  this.$set(this.options2[i].children[j].children,v,{id:thirdArray[v].id,label:thirdArray[v].label})-->
<!--                //-->
<!--                //-->
<!--                //                 }-->
<!--                //-->
<!--                //         }-->
<!--                //-->
<!--                // }-->




<!--console.info(this.options2)-->



<!--            },-->

<!--                setSelectData(children){-->
<!--                    console.info("JSON")-->
<!--                    console.info(children)-->
<!--                        for (let i=0;i<children.length;i++){-->
<!--                                switch (children[i].comCode) {-->
<!--                                        //省份代码判断-->
<!--                                        case "00000000":-->
<!--                                                this.$set(this.options2,0,{id:"00000000",label:"集团总公司",children:[]})-->
<!--                                                break-->
<!--                                        case "32000000":-->
<!--                                                this.$set(this.options2[0].children,0,{id:"32000000",label:"江苏省分公司",children:[]})-->


<!--                                                //市级代码判断-->
<!--                                                for (let i=0;i<children.length;i++) {-->
<!--                                                        switch (children[i].comCode) {-->
<!--                                                                case "32010000":-->
<!--                                                                        this.$set(this.options2[0].children[0].children, 0, {-->
<!--                                                                                id: "32010000",-->
<!--                                                                                label: "南京分公司"-->
<!--                                                                        })-->
<!--                                                                        break-->
<!--                                                                case "01103":-->
<!--                                                                        this.$set(this.options2[0].children[0].children, 1, {-->
<!--                                                                                id: "01103",-->
<!--                                                                                label: "苏州分公司"-->
<!--                                                                        })-->
<!--                                                                        break-->

<!--                                                        }-->
<!--                                                }-->


<!--                                                break;-->
<!--                                        case "51000000":-->
<!--                                                this.$set(this.options2[0].children,1,{id:"51000000",label:"四川省分公司",children:[]})-->
<!--                                                //市级代码判断-->
<!--                                                for (let i=0;i<children.length;i++) {-->
<!--                                                        switch (children[i].comCode) {-->
<!--                                                                case "00005":-->
<!--                                                                        this.$set(this.options2[0].children[1].children, 0, {-->
<!--                                                                                id: "00005",-->
<!--                                                                                label: "成都分公司"-->
<!--                                                                        })-->
<!--                                                                        break-->
<!--                                                                case "":-->
<!--                                                                        this.$set(this.options2[0].children[1].children, 1, {-->
<!--                                                                                id: "01103",-->
<!--                                                                                label: "绵阳分公司"-->
<!--                                                                        })-->
<!--                                                                        break-->

<!--                                                        }-->
<!--                                                }-->

<!--                                                break;-->

<!--                                        case "11000000":-->
<!--                                                this.$set(this.options2[0].children,1,{id:"51000000",label:"北京市分公司",children:[]})-->
<!--                                                for (let i=0;i<children.length;i++) {-->
<!--                                                        switch (children[i].code) {-->
<!--                                                                case "11010800":-->
<!--                                                                        this.$set(this.options2[0].children[1].children, 0, {-->
<!--                                                                                id: "11010800",-->
<!--                                                                                label: "北京海淀支公司"-->
<!--                                                                        })-->

<!--                                                                        break}}-->


<!--                                                break;-->

<!--                                }-->
<!--                        }-->
<!--                },-->
<!--            doPost(){-->


<!--                let vm = this;-->
<!--                axios.post("http://14.29.203.64:18000/api/misc/jwt/oauth2?username=jishencaller&password=sinosoft").then((response)=>{-->
<!--                    vm.Authorization="Arch6WithCloud "+response.data.data.token;-->


<!--                    axios.get("http://14.29.203.64:18000/api/svcprdr/api/serviceProvider/property/listOrganization",{headers:{"Authorization":vm.Authorization}}).then((response) => {-->
<!--                        console.log("第一次请求返回的response：")-->
<!--                        console.log(response);-->

<!--                      this.setSelectData(response.data.data)-->





<!--                        // this.option[0].id=response.data.data.comLevel;-->
<!--                        // this.option[0].children[0].id=response.data.data.comLevel==2?2:-->


<!--                    })-->



<!--                    })-->





<!--            }-->






<!--        }-->



<!--    }-->

<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
