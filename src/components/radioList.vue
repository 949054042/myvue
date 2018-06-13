<template>
    <div class="radioDetail">
        <div class="radioDetailTop">
            <div class="wrapper"></div>
            <img src="../assets/icon/back.png" alt="back" class="back" @click="back()"/>
            <span class='title'>电台</span>
            <img src="../assets/icon/share.png" alt="back" class="share"/>
            <img src="../assets/icon/sound.png" alt="back" class="sound"/>
        </div>
        <div class="radioDetailBottom" id="radioDetailBottom">
            <div class="wrapper">
                <div class="poster"  @click="say()">
                    <div class='motel'></div>
                    <img src="../assets/images/mohu_04.jpg" alt='网络错误' class='bg'/>
                    <div class='operation'>
                       <div class='msg'>
                           <h3>
                               张小二的小窝
                           </h3>
                           <p>23130人订阅</p>
                       </div> 
                        <div class='order'>
                            <img src='../assets/icon/fivestar.png' alt='网络错误'/>
                            <button type='button'>订阅</button>
                       </div> 
                    </div>
                </div>
                <div class="detail">
                    <ul class='selectHead clearfix'>
                        <li :class='{active:flag}' @click='flag=true;iscroll.refresh()'>
                            <span>详情</span>
                        </li>
                        <li :class="{active:!flag}" @click="flag=false;iscroll.refresh()">
                            <span>节目</span>
                        </li>
                    </ul>
                    <div class='sort' v-show='!flag'>
                        <div class='left'>
                            <h3>共5期</h3>
                        </div>
                        <div class='right'>
                            <div class='srotType_01'>
                                <img src='../assets/icon/raise.png' alt='增序'/><span>排序</span>
                            </div>
                            <div class='srotType_02' @click="showAll()">
                                <img src='../assets/icon/morecheck2.png' alt='更多选择'/><span>多选</span>
                            </div>
                        </div>
                    </div>
                    <ul class='selectBody clearfix'>
                        <li v-show='flag'>
                            <div class='firstFloor'>
                                <div class='wrapper'>
                                   <div class='title2'>
                                        主播
                                   </div>
                                </div>
                            </div>
                            <div class='secondFloor'>
                                <div class='wrapper'>
                                    <div class='icon'>
                                        <img src='../assets/images/radioposter.png' alt='网络错误'/>
                                    </div>
                                    <div class='introduce'>
                                        <h3>猫王音乐台</h3>
                                        <p>猫王音乐台，Radiooo Station,喜欢zzzzzzz</p>
                                    </div>
                                    <div class='appreciate'>
                                        <button type='button'>赞赏</button>
                                        <p>20次赞赏</p>
                                    </div>
                                </div>
                            </div>
                            <div  class='thirdFloor'>
                                <div class='wrapper'>
                                   <div class='title2'>
                                        电台内容简介
                                   </div>
                                   <div class='content'>
                                       <div class='top'>

                                       </div>
                                       <div class='bottom'>

                                       </div>
                                   </div>
                                </div>
                            </div>
                        </li>
                        <li v-show='!flag'>
                            <ul>
                                <li class='clearfix' v-for="(m,n) in listArr" v-bind:key="n">
                                    <div class='listNumber'>
                                        <h4 v-show='!m.flag'>{{m.listNumber}}</h4>
                                         <input type='radio' v-show='m.flag' :id='m.name'/>
                                         <label v-show='m.flag' :for='m.name' :class='{active:m.flag2}' @click='m.flag2=!m.flag2'>
                                             <div class='radio'>
                                                 <img src='../assets/icon/true_01.png' alt='选中'/>
                                             </div>
                                         </label>
                                    </div>
                                    <div class='ListDetail'>
                                        <div class='left'>
                                            <div class='top2'>
                                                <h3>{{m.radioName}}</h3>
                                            </div>
                                            <div class='bottom'>
                                                <div class='date'><span>{{m.addTime}}</span></div>
                                                <div class='totalPlay'><img src='../assets/icon/stopPlay.png' alt='暂停'/><span>{{m.totalPlay}}万</span></div>
                                                <div class='playFinish'><img src='../assets/icon/playtime.png' alt='暂停'/><span>{{m.totalTime}}</span></div>
                                                <div class='status'><span>{{m.status}}</span></div>
                                            </div>
                                        </div>
                                        <div class='right'>
                                            <img src='../assets/icon/shenglve.png' alt='更多'/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='selectBottom2' v-show='flag3'>
            <div class='downLoad'>
                <img src='../assets/icon/download2.png' alt='网络错误'/>
                <p>下载</p>
            </div>
            <div class='delDownLoad'>
                <img src='../assets/icon/remove.png' alt='网络错误'/>
                <p>删除下载</p>
            </div>
        </div>
    </div>
</template>
<script>
import { setTimeout } from 'timers';
import Scroll from "iscroll"
    export default{
        name:"Friend",
        props:[],
        watch:{

        },
        computed:{

        },
        data:function(){
            return {
                iscroll:null,
                flag:true,
                flag3:false,
                listArr:[
                    {
                        listNumber:1,
                        radioName:"后来要体面",
                        addTime:"05-13",
                        totalPlay:"314.6",
                        totalTime:"05:04",
                        status:"已播完",
                        flag:false,
                        flag2:false,
                        name:"name1"
                    },
                    {
                        listNumber:1,
                        radioName:"后来要体面",
                        addTime:"05-13",
                        totalPlay:"314.6",
                        totalTime:"05:04",
                        status:"已播完",
                        flag:false,
                        flag2:false,
                        name:"name2"
                    },
                    {
                        listNumber:1,
                        radioName:"后来要体面",
                        addTime:"05-13",
                        totalPlay:"314.6",
                        totalTime:"05:04",
                        status:"已播完",
                        flag:false,
                        flag2:false,
                        name:"name3"
                    },
                    {
                        listNumber:1,
                        radioName:"后来要体面",
                        addTime:"05-13",
                        totalPlay:"314.6",
                        totalTime:"05:04",
                        status:"已播完",
                        flag:false,
                        flag2:false,
                        name:"name4"
                    },
                    {
                        listNumber:1,
                        radioName:"后来要体面",
                        addTime:"05-13",
                        totalPlay:"314.6",
                        totalTime:"05:04",
                        status:"已播完",
                        flag:false,
                        flag2:false,
                        name:"name5"
                    },
                    {
                        listNumber:1,
                        radioName:"后来要体面",
                        addTime:"05-13",
                        totalPlay:"314.6",
                        totalTime:"05:04",
                        status:"已播完",
                        flag:false,
                        flag2:false,
                        name:"name6"
                    },
                    {
                        listNumber:1,
                        radioName:"后来要体面",
                        addTime:"05-13",
                        totalPlay:"314.6",
                        totalTime:"05:04",
                        status:"已播完",
                        flag:false,
                        flag2:false,
                        name:"name7"
                    },
                    {
                        listNumber:1,
                        radioName:"后来要体面",
                        addTime:"05-13",
                        totalPlay:"314.6",
                        totalTime:"05:04",
                        status:"已播完",
                        flag:false,
                        flag2:false,
                        name:"name8"
                    },
                    {
                        listNumber:1,
                        radioName:"后来要体面",
                        addTime:"05-13",
                        totalPlay:"314.6",
                        totalTime:"05:04",
                        status:"已播完",
                        flag:false,
                        flag2:false,
                        name:"name9"
                    },
                    {
                        listNumber:1,
                        radioName:"后来要体面",
                        addTime:"05-13",
                        totalPlay:"314.6",
                        totalTime:"05:04",
                        status:"已播完",
                        flag:false,
                        flag2:false,
                        name:"name10"
                    },
                    {
                        listNumber:1,
                        radioName:"后来要体面",
                        addTime:"05-13",
                        totalPlay:"314.6",
                        totalTime:"05:04",
                        status:"已播完",
                        flag:false,
                        flag2:false,
                        name:"name1"
                    },
                ]
            }
        },
        mounted:function(){
            this.iscroll=new Scroll("#radioDetailBottom",{
                mouseWheel: true,
                click:true
            });
        },
        methods:{
            back:function(){
                this.$router.back()
            },
            say:function(){
            },
            showAll:function(){
                var arr=this.listArr;
                this.flag3=!this.flag3;
                for(var i=0;i<arr.length;i++){
                    arr[i].flag=!arr[i].flag
                    arr[i].flag2=false
                }
            }
        }
    }
</script>
<style>
    .radioDetail{
        height:100vh;
    }
   .radioDetail .radioDetailTop{
        box-sizing:border-box;
        padding-right:0.36rem;
        padding-left:0.48rem;
        height:0.8rem;
        box-sizing:border-box;
        position: fixed;
        top:0;
        left:0;
        width:100%;
        z-index:9999;
        background-color:#262b2f;
        opacity:0.5;
    }
    .radioDetail .radioDetailTop img{
         position:absolute;
     }
   .radioDetail .radioDetailTop .back{
        width:0.4rem;
        height:0.4rem;
        left:0.4rem;
        top:50%;
        transform:translateY(-50%);
        z-index:1000;
    }
    .radioDetail .radioDetailTop .share{
        width:0.65rem;
        height:0.65rem;
        right:1.6133rem;
        top:50%;
        transform:translateY(-50%);
        z-index:1000;
    }
    .radioDetail .radioDetailTop .title{
        display:inline-block;
        font-size:0.4533rem;
        color:#fff;
        font-family:inherit;
        line-height:0.8rem;
        z-index:1000;
    }
    .radioDetail .radioDetailTop .sound{
        width:0.75rem;
        height:0.5067rem;
        right:0.36rem;
        bottom:0rem;
        top:50%;
        transform:translateY(-50%);
        z-index:1000;
    }
    .radioDetail .radioDetailTop .wrapper{
        position:absolute;
        left:0;
        top:0;
        height:0.8rem;
        width:100%;
        z-index:100;
        background-color:#262b2f;
        opacity:0;
    }
    .radioDetail .radioDetailBottom{
        position:absolute;
        top:0.8rem;
        bottom:1.307rem;
        left:0;
        width:100%;
    }
   .radioDetailBottom .poster{
        width:100%;
        height:7.7733rem;
        position: relative;
    }
    .radioDetailBottom .motel{
        position: absolute;
        width:100%;
        height:7.7733rem;
        left:0;
        top:0;
        background:#333;
        opacity:0.3;
    }
    .radioDetailBottom .poster .bg{
        width:100%;
        height:7.7733rem; 
    }
    .radioDetailBottom .poster .operation{
        position:absolute;
        bottom:2.5467rem;
        left:0;
        width:100%;
        padding-left:0.2667rem;
        box-sizing:border-box;
        height:1.0933rem;
    }
    .radioDetailBottom .msg{
        float:left;
    }
    .radioDetailBottom .msg h3{
        font-size:0.4533rem;
        color:#fff;
        font-family:inherit;
        text-align:left;
        margin-bottom:0.32rem;
    }
    .radioDetailBottom .msg p{
        font-size:0.3733rem;
        color:#fff;
        font-family:inherit;
        text-align:left;
    }
    .radioDetailBottom .order{
        float:right;
        margin-right:0.2667rem;
        width:2.333rem;
        height:0.9067rem;
        position:relative;
    }
    .radioDetailBottom .order button{
        width:2.333rem;
        height:0.9067rem;
        border-radius:0.4538rem;
        background-color:#fa5446;
        border:none;
        outline:none;
        font-size:0.3733rem;
        line-height:0.9067rem;
        color:#fff;
        font-family:inherit;
        padding-left:1.04rem;
        box-sizing:border-box;
        text-align: left;
    }
    .radioDetailBottom .order img{
        position:absolute;
        width:0.3467rem;
        height:0.3467rem;
        left:0.5333rem;
        top:0.28rem;
    }
    .radioDetail .radioDetailBottom .detail{
        position:relative;
        width: 100%;
        margin-top:-1rem;
        box-shadow: 0px -2px 10px #333;
        border-radius:0.24rem 0.24rem 0px 0px;
        z-index:1000;
        background:#fff;
        z-index:2000;
     }
     .selectHead{
          height:1.333rem;
          border-bottom:1px solid #cdcbcc;
     }
     .selectHead li{
         float:left;
         height:1.333rem;
         width:50%;
         text-align:center;
         line-height:1.333rem;
     }
    .radioDetail .selectHead span{
        padding-bottom:0.1333rem;
    }
    .radioDetail .selectHead li.active span{
       border-bottom:0.08rem solid #d33a34;
        color:#d33a34;
    }
    .radioDetail .selectBody input[type=radio]{
         display:none;
      }
    .radioDetail .selectBody .radio{
          width:0.5867rem;
          height:0.5867rem;
          border-radius:50%;
          position: relative;
          border:1px solid #ddd;
      }
    .radioDetail .selectBody .radio img{
          position:absolute;
          width:0.4694rem;
          height:0.4694rem;
          left:50%;
          top:50%;
          margin-left:-0.2347rem;
          margin-top:-0.2347rem;
          display:none;
      }
    .radioDetail .selectBody .active .radio{
          background-color:red;
      }
    .radioDetail .selectBody .active img{
          display:block;
      }
    .radioDetail .selectBody .playList .listNumber{
        float:left;
        width:1.0933rem;
        height:1.4533rem;
        line-height:1.4533rem;
        font-size:0.3733rem;
        color:#9d9ea0;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .radioDetail .selectBody li .listNumber{
        float:left;
        width:1.1067rem;
        width:11.067%;
        text-align:center;
        height:1.76rem;
        line-height:1.76rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .radioDetail .selectBody li .ListDetail{
        float:left;
        width:88.933%;
        border-bottom:1px solid #333;
        height:1.76rem;
    }
    .radioDetail .selectBody .ListDetail .left{
        float:left;
        height:1.76rem;
        width:65.817%;
    }
    .radioDetail .selectBody .ListDetail .left .top2{
        font-size:0.3733rem;
        color:#333;
        margin-top:0.4267rem;
        margin-bottom:0.32rem;
        text-align:left;
    }
    .radioDetail .selectBody .ListDetail .left .bottom{
        display:flex;
        flex-wrap:nowrap;
        justify-content:space-between;
        align-items:center;
    }
    .radioDetail .selectBody .ListDetail .left .bottom span{
        display:inline-block;
        font-size:0.32rem;
        color:#9d9d9f;
    }
    .radioDetail .selectBody .ListDetail .left .bottom>div{
        margin-right:0.1rem;
    }
    .radioDetail .selectBody .ListDetail .left  .totalPlay img{
        width:0.2133rem;
        height:0.2533rem;
        margin-right:0.16rem;
    }
    .radioDetail .selectBody .ListDetail .left  .playFinish img{
        width:0.32rem;
        height:0.32rem;
        margin-right:0.16rem;
    }
    .radioDetail .selectBody .ListDetail .right{
        float:right;
        margin-right:0.3067rem;
        margin-top:0.7733rem;
    }
    .radioDetail .selectBody .ListDetail .right img{
        width:0.6rem;
        height:0.5rem;
    }
    .radioDetail .sort{
        height:0.8rem;
        border-top:0.0133rem solid #e1e2e4;
        background-color:#eeeff1;
    }
    .radioDetail .sort .left{
        float:left;
        margin-left:0.28rem;
    }
    .radioDetail .sort .left h3{
         font-size:0.32rem;
         color:#79797b;
         line-height:0.8rem;
     }
    .radioDetail .sort .right{
        float:right;
        margin-right:0.2133rem;
        width:2.933rem;
    }
    .radioDetail .srotType_01{
        width:1.0933rem;
        height:0.8rem;
        margin-right:0.6733rem;
        float:left;
        display:flex;
        align-items:center;
    }
    .radioDetail .srotType_01 img{
        width:0.2667rem;
        height:0.32rem;
    }
    .radioDetail .srotType_02{
        width:1.16rem;
        height:0.8rem;
        float:left;
        display:flex;
        align-items:center;
    }
    .radioDetail .srotType_02 img{
        width:0.36rem;
        height:0.32rem;
    }
    .radioDetail .selectBottom2{
        position:fixed;
        bottom:0;
        left:0;
        width:100%;
        height:1.4267rem;
        border-top:0.0133rem solid #cdcbcc;
        z-index:9999;
        background:#fff;
    }
    .radioDetail .selectBottom2>div{
        float:left;
        width:50%;
        text-align:center;
        box-sizing:border-box;
        padding-top:0.2533rem;
        font-size:0.2667rem;
        color:#858585;
    }
    .radioDetail .selectBottom2 img{
        width:0.5867rem;
        height:0.6rem;
        margin-bottom:0.1733rem;
    }
    .radioDetail .firstFloor{
        height:1.373rem;
        border-bottom:0.0133rem solid #e1e2e4;
        box-sizing:border-box;
    }
    .radioDetail .secondFloor{
        height:1.84rem;
        border-bottom:0.0133rem solid #e1e2e4;
        padding-left:0.2667rem;
        box-sizing:border-box;
    }
    .radioDetail .secondFloor .icon{
        float:left;
        width:1.44rem;
        height:1.373rem;
        margin-right:0.28rem;
        padding-top:0.2rem;
        box-sizing:border-box;
    }
    .radioDetail .secondFloor .icon img{
        width:1.44rem;
        height:1.373rem;   
     }
    .radioDetail .secondFloor .introduce{
        float:left;
        width:5.5067rem;
        height:1.373rem;
        margin-right:0.6133rem;
        padding-top:0.2rem;
        box-sizing:border-box;
    }
    .radioDetail .secondFloor h3{
        font-size:0.3733rem;
        color:#2f2f31;
        font-family:inherit;
        margin-bottom:0.2133rem;
        margin-top:0.24rem;
        text-align:left;
    }
    .radioDetail .secondFloor p{
        font-size:0.32rem;
        color:#969698;
        font-family:inherit;
        text-overflow:ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-align:left;
    }
    .radioDetail .secondFloor .appreciate{
        float:left;
        width:1.6533rem;
        height:1.373rem;
        padding-top:0.2rem;
        box-sizing:border-box;
    }
    .radioDetail .secondFloor button{
        width:1.6533rem;
        height:0.6933rem;
        border:1px solid#c63e2e;
        outline:none;
        border-radius:0.6815rem;
        margin-top:0.1733rem;
        margin-bottom:0.0933rem;
        color:#c63e2e;
        background-color:#fff;
        font-size:0.3333rem;
        line-height:0.6933rem;
    }
    .radioDetail .secondFloor .appreciate p{
        font-size:0.24rem;
        color:#979797;
        font-family:inherit;
        text-align:center;
    }
    .radioDetail .thirdFloor{
        padding-top:1.0667rem;
        padding-bottom:2.4933rem;
        box-sizing:border-box;
    }
    .radioDetail .thirdFloor .content{
        padding-left:0.2667rem;
        margin-top:0.4667rem;
        font-size:0.3333rem;
        color:#656668;
        font-family:inherit;
        line-height:0.6227rem;
    }
    .radioDetail .thirdFloor .content .top{
        margin-bottom:0.88rem;
    }
    .radioDetail .title2{
        height:0.4267rem;
        border-left:0.0533rem solid #d24637;
        padding-left:0.2267rem;
        box-sizing:border-box;
        text-align:left;
    }
    .radioDetail .firstFloor .title{
         margin-top:0.5467rem;
         line-height:0.4267rem;
         text-align:left;
     }
</style>