webpackJsonp([2],{AVWw:function(t,e,i){"use strict";var s=i("vLgD");var a=i("TIfe"),n={data:function(){return{respondBox:"",listDom:"",tmsgBox:"",queryParams:{pageNum:1,pageSize:10,articleId:0},isRespond:!1,textarea:"",pBody:!0,commentList:[],aid:0,hasMore:!1,haslogin:!1,userId:"",type:0,leavePid:"",pid:"",rootId:-1,toCommentId:-1,toCommentUserId:-1,sendTip:"发送~",OwOlist:[{title:"微笑",url:"weixiao.gif"},{title:"嘻嘻",url:"xixi.gif"},{title:"哈哈",url:"haha.gif"},{title:"可爱",url:"keai.gif"},{title:"可怜",url:"kelian.gif"},{title:"挖鼻",url:"wabi.gif"},{title:"吃惊",url:"chijing.gif"},{title:"害羞",url:"haixiu.gif"},{title:"挤眼",url:"jiyan.gif"},{title:"闭嘴",url:"bizui.gif"},{title:"鄙视",url:"bishi.gif"},{title:"爱你",url:"aini.gif"},{title:"泪",url:"lei.gif"},{title:"偷笑",url:"touxiao.gif"},{title:"亲亲",url:"qinqin.gif"},{title:"生病",url:"shengbing.gif"},{title:"太开心",url:"taikaixin.gif"},{title:"白眼",url:"baiyan.gif"},{title:"右哼哼",url:"youhengheng.gif"},{title:"左哼哼",url:"zuohengheng.gif"},{title:"嘘",url:"xu.gif"},{title:"衰",url:"shuai.gif"},{title:"吐",url:"tu.gif"},{title:"哈欠",url:"haqian.gif"},{title:"抱抱",url:"baobao.gif"},{title:"怒",url:"nu.gif"},{title:"疑问",url:"yiwen.gif"},{title:"馋嘴",url:"chanzui.gif"},{title:"拜拜",url:"baibai.gif"},{title:"思考",url:"sikao.gif"},{title:"汗",url:"han.gif"},{title:"困",url:"kun.gif"},{title:"睡",url:"shui.gif"},{title:"钱",url:"qian.gif"},{title:"失望",url:"shiwang.gif"},{title:"酷",url:"ku.gif"},{title:"色",url:"se.gif"},{title:"哼",url:"heng.gif"},{title:"鼓掌",url:"guzhang.gif"},{title:"晕",url:"yun.gif"},{title:"悲伤",url:"beishang.gif"},{title:"抓狂",url:"zhuakuang.gif"},{title:"黑线",url:"heixian.gif"},{title:"阴险",url:"yinxian.gif"},{title:"怒骂",url:"numa.gif"},{title:"互粉",url:"hufen.gif"},{title:"书呆子",url:"shudaizi.gif"},{title:"愤怒",url:"fennu.gif"},{title:"感冒",url:"ganmao.gif"},{title:"心",url:"xin.gif"},{title:"伤心",url:"shangxin.gif"},{title:"猪",url:"zhu.gif"},{title:"熊猫",url:"xiongmao.gif"},{title:"兔子",url:"tuzi.gif"},{title:"喔克",url:"ok.gif"},{title:"耶",url:"ye.gif"},{title:"棒棒",url:"good.gif"},{title:"不",url:"no.gif"},{title:"赞",url:"zan.gif"},{title:"来",url:"lai.gif"},{title:"弱",url:"ruo.gif"},{title:"草泥马",url:"caonima.gif"},{title:"神马",url:"shenma.gif"},{title:"囧",url:"jiong.gif"},{title:"浮云",url:"fuyun.gif"},{title:"给力",url:"geili.gif"},{title:"围观",url:"weiguan.gif"},{title:"威武",url:"weiwu.gif"},{title:"话筒",url:"huatong.gif"},{title:"蜡烛",url:"lazhu.gif"},{title:"蛋糕",url:"dangao.gif"},{title:"发红包",url:"fahongbao.gif"}]}},methods:{setData:function(t,e){var i=e.rows;this.commentList=t?i:this.commentList.concat(i),this.hasMore=e.total>this.commentList.length},choseEmoji:function(t){this.textarea+="["+t+"]"},analyzeEmoji:function(t){var e=/\[[\u4e00-\u9fa5]+\]/,i=t.match(/\[[\u4e00-\u9fa5]+\]/g),s=t;if(i)for(var a=0;a<i.length;a++){for(var n=0;n<this.OwOlist.length;n++)if("["+this.OwOlist[n].title+"]"==i[a]){var r=this.OwOlist[n].url;break}s=s.replace(e,'<img src="static/img/emot/image/'+r+'"/>')}return s},sendMsg:function(){var t,e,i,a,n,r,o=this;if(o.textarea)o.sendTip="咻~~",(t=o.type,e=o.aid,i=o.rootId,a=o.toCommentId,n=o.toCommentUserId,r=o.textarea,Object(s.a)({url:"/comment",method:"post",data:{articleId:e,type:t,rootId:i,toCommentId:a,toCommentUserId:n,content:r}})).then(function(t){o.textarea="",o.rootId=-1,o.toCommentId=-1,o.toCommentUserId=-1,o.routeChange(),o.removeRespond();var e=setTimeout(function(){o.sendTip="发送~",clearTimeout(e)},1e3)});else{o.sendTip="内容不能为空~";var l=setTimeout(function(){o.sendTip="发送~",clearTimeout(l)},3e3)}},respondMsg:function(t,e,i){var s=this;if(localStorage.getItem("userInfo")){var a=event.currentTarget;a=a.parentNode,this.isRespond=!0,this.rootId=t,this.toCommentId=e,this.toCommentUserId=i,a.appendChild(this.$refs.respondBox)}else s.$confirm("登录后即可点赞和收藏，是否前往登录页面?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){localStorage.setItem("logUrl",s.$route.fullPath),s.$router.push({path:"/Login?login=1"})}).catch(function(){})},removeRespond:function(){this.isRespond=!1,this.rootId=-1,this.toCommentId=-1,this.toCommentUserId=-1,this.$refs.tmsgBox.insertBefore(this.$refs.respondBox,this.$refs.listDom)},showCommentList:function(t){var e=this;e.aid=void 0==e.$route.query.aid?1:parseInt(e.$route.query.aid),e.queryParams.articleId=e.aid;var i,n=Object(a.a)();e.haslogin=!!n,"DetailArticle"==e.$route.name?(e.type=0,(i=e.queryParams,Object(s.a)({url:"/comment/commentList",method:"get",headers:{isToken:!1},params:i})).then(function(i){e.setData(t,i)})):"FriendsLink"==e.$route.name&&(e.type=1,function(t){return Object(s.a)({url:"/comment/linkCommentList",method:"get",params:t})}(e.queryParams).then(function(i){e.setData(t,i)}))},addMoreFun:function(){this.queryParams.pageNum++,this.showCommentList(!1)},routeChange:function(){this.queryParams.pageNum=1,this.showCommentList(!0)}},components:{},watch:{},created:function(){this.routeChange()},mounted:function(){}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"tmsgBox",staticClass:"tmsgBox"},[i("div",{ref:"respondBox",staticClass:"tmsg-respond"},[i("h3",[t._v("发表评论 "),i("small",{directives:[{name:"show",rawName:"v-show",value:t.isRespond,expression:"isRespond"}],staticClass:"tcolorm",on:{click:t.removeRespond}},[t._v("取消回复")])]),t._v(" "),i("form",{},[i("el-input",{attrs:{type:"textarea",rows:2,placeholder:"说点什么呢``"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),t._v(" "),i("div",{class:t.pBody?"OwO":"OwO OwO-open"},[i("div",{staticClass:"OwO-logo",on:{click:function(e){t.pBody=!t.pBody}}},[i("span",[t._v("OwO表情")])]),t._v(" "),i("div",{staticClass:"OwO-body"},[i("ul",{staticClass:"OwO-items OwO-items-show"},t._l(t.OwOlist,function(e,s){return i("li",{key:"oitem"+s,staticClass:"OwO-item",on:{click:function(i){t.choseEmoji(e.title)}}},[i("img",{attrs:{src:"static/img/emot/image/"+e.url,alt:""}})])})),t._v(" "),t._m(0)])]),t._v(" "),i("el-row",{staticClass:"tmsg-r-info"},[i("el-col",{staticClass:"info-submit",attrs:{span:24}},[i("p",{staticClass:"tcolors-bg",on:{click:t.sendMsg}},[t._v(t._s(t.sendTip))])])],1)],1)]),t._v(" "),i("div",{ref:"listDom",staticClass:"tmsg-comments"},[i("a",{staticClass:"tmsg-comments-tip",attrs:{href:"#"}},[t._v("活捉 "+t._s(t.commentList?t.commentList.length:0)+" 条")]),t._v(" "),i("div",{staticClass:"tmsg-commentshow"},[i("ul",{staticClass:"tmsg-commentlist"},t._l(t.commentList,function(e,s){return i("li",{key:"common"+s,staticClass:"tmsg-c-item"},[i("article",{},[i("header",[i("img",{attrs:{src:t.$store.state.errorImg,onerror:t.$store.state.errorImg}}),t._v(" "),i("div",{staticClass:"i-name"},[t._v("\n                                "+t._s(e.username)+"\n                            ")]),t._v(" "),i("div",{staticClass:"i-time"},[i("time",[t._v(t._s(e.createTime))])])]),t._v(" "),i("section",[i("p",{domProps:{innerHTML:t._s(t.analyzeEmoji(e.content))}},[t._v(t._s(t.analyzeEmoji(e.content)))]),t._v(" "),t.haslogin?i("div",{staticClass:"tmsg-replay",on:{click:function(i){t.respondMsg(e.id,e.id,e.createBy)}}},[t._v("\n                                回复\n                            ")]):t._e()])]),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:e.children,expression:"item.children"}],staticClass:"tmsg-commentlist",staticStyle:{"padding-left":"60px"}},t._l(e.children,function(s,a){return i("li",{key:"citem"+a,staticClass:"tmsg-c-item"},[i("article",{},[i("header",[i("img",{attrs:{src:t.$store.state.errorImg,onerror:t.$store.state.errorImg}}),t._v(" "),i("div",{staticClass:"i-name"},[t._v("\n                                            "+t._s(s.username)+" "),i("span",[t._v("回复")]),t._v(" "+t._s(s.toCommentUserName)+"\n                                        ")]),t._v(" "),i("div",{staticClass:"i-time"},[i("time",[t._v(t._s(s.createTime))])])]),t._v(" "),i("section",[i("p",{domProps:{innerHTML:t._s(t.analyzeEmoji(s.content))}},[t._v(t._s(s.content))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.haslogin,expression:"haslogin"}],staticClass:"tmsg-replay",on:{click:function(i){t.respondMsg(e.id,s.id,s.createBy)}}},[t._v("\n                                        回复\n                                    ")])])])])}))])})),t._v(" "),i("h1",{directives:[{name:"show",rawName:"v-show",value:t.hasMore,expression:"hasMore"}],staticClass:"tcolors-bg",on:{click:t.addMoreFun}},[t._v("查看更多")]),t._v(" "),i("h1",{directives:[{name:"show",rawName:"v-show",value:!t.hasMore,expression:"!hasMore"}],staticClass:"tcolors-bg"},[t._v("没有更多")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"OwO-bar"},[e("ul",{staticClass:"OwO-packages"},[e("li",{staticClass:"OwO-package-active"},[this._v("Emoji")])])])}]};var o=i("VU/8")(n,r,!1,function(t){i("AVlQ")},null,null);e.a=o.exports},AVlQ:function(t,e){},BQtj:function(t,e){},"eDx+":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Cz8s"),a=i("MQwy"),n=i("1pQF"),r=i("viA7"),o=i("OS1Z"),l={data:function(){return{aid:"",pdonate:!0,detailObj:{},haslogin:!1,userId:""}},methods:{showInitDate:function(t,e){return Object(n.a)(t,e)},getArticleDetail:function(){var t=this;Object(r.b)(this.aid).then(function(e){t.detailObj=e;var i=o.mavonEditor.getMarkdownIt();t.detailObj.content=i.render(e.content)})},routeChange:function(){this.aid=void 0==this.$route.query.aid?1:parseInt(this.$route.query.aid),localStorage.getItem("userInfo")?(this.haslogin=!0,this.userInfo=JSON.parse(localStorage.getItem("userInfo")),this.userId=this.userInfo.userId):this.haslogin=!1,this.getArticleDetail(),Object(r.d)(this.aid)}},watch:{$route:"routeChange"},components:{},created:function(){this.routeChange()}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detailBox tcommonBox"},[i("span",{staticClass:"s-round-date"},[i("span",{staticClass:"month",domProps:{innerHTML:t._s(t.showInitDate(t.detailObj.createTime,"month")+"月")}}),t._v(" "),i("span",{staticClass:"day",domProps:{innerHTML:t._s(t.showInitDate(t.detailObj.createTime,"date"))}})]),t._v(" "),i("header",[i("h1",[i("a",{attrs:{href:"#/DetailShare?aid="+t.detailObj.id,target:"_blank"}},[t._v("\n                "+t._s(t.detailObj.title)+"\n            ")])]),t._v(" "),i("h2",[i("i",{staticClass:"fa fa-fw fa-user"}),t._v("发表于 "),i("span",[t._v(t._s(t.detailObj.createTime))]),t._v(" •\n            "),i("i",{staticClass:"fa fa-fw fa-eye"}),t._v(t._s(t.detailObj.viewCount)+" 次围观 •\n        ")]),t._v(" "),i("div",{staticClass:"ui label"},[i("a",{attrs:{href:"#/Share?classId="+t.detailObj.categoryId}},[t._v(t._s(t.detailObj.categoryName))])])]),t._v(" "),i("div",{staticClass:"article-content markdown-body",domProps:{innerHTML:t._s(t.detailObj.content)}}),t._v(" "),i("div",{staticClass:"donate"},[i("div",{staticClass:"donate-word"},[i("span",{on:{click:function(e){t.pdonate=!t.pdonate}}},[t._v("赞赏")])]),t._v(" "),i("el-row",{class:t.pdonate?"donate-body":"donate-body donate-body-show",attrs:{gutter:30}},[i("el-col",{staticClass:"donate-item",attrs:{span:12}},[i("div",{staticClass:"donate-tip"},[i("img",{attrs:{src:t.detailObj.wechat_image?t.detailObj.wechat_image:"static/img/wx_pay.png",onerror:t.$store.state.errorImg}}),t._v(" "),i("span",[t._v("微信扫一扫，向我赞赏")])])]),t._v(" "),i("el-col",{staticClass:"donate-item",attrs:{span:12}},[i("div",{staticClass:"donate-tip"},[i("img",{attrs:{src:t.detailObj.alipay_image?t.detailObj.alipay_image:"static/img/ali_pay.png",onerror:t.$store.state.errorImg}}),t._v(" "),i("span",[t._v("支付宝扫一扫，向我赞赏")])])])],1)],1)])},staticRenderFns:[]};var u=i("VU/8")(l,c,!1,function(t){i("fdWd")},null,null).exports,m=i("AVWw"),d={name:"DetailShare",data:function(){return{}},methods:{},components:{"sg-nav":s.a,"sg-articleDetail":u,"sg-message":m.a,"sg-rightlist":a.a},created:function(){},mounted:function(){var t=document.querySelector("#detail").offsetTop-60;document.body.scrollTop=t,document.documentElement.scrollTop=t,window.pageYOffset=t}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("sg-nav"),this._v(" "),e("div",{staticClass:"container",attrs:{id:"detail"}},[e("el-row",{attrs:{gutter:30}},[e("el-col",{staticStyle:{transition:"all .5s ease-out","margin-bottom":"30px"},attrs:{sm:24,md:16}},[e("sg-articleDetail"),this._v(" "),e("sg-message")],1),this._v(" "),e("el-col",{attrs:{sm:24,md:8}},[e("sg-rightlist")],1)],1)],1)],1)},staticRenderFns:[]};var f=i("VU/8")(d,g,!1,function(t){i("BQtj")},null,null);e.default=f.exports},fdWd:function(t,e){}});
