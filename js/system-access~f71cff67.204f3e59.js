(window.webpackJsonp=window.webpackJsonp||[]).push([["system-access~f71cff67"],{"5f9a":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r=Object(a.createTextVNode)(" 添加 "),c=Object(a.createTextVNode)(" 删除 ");n("d3b7"),n("25f0");var o,l=n("5530"),u=(n("96cf"),n("1da1")),i=n("ed3b"),d=n("3c7f"),s=n("1016"),m=n("7996"),b=(n("a15b"),n("a526")),f=n("3bb8");function p(e){return b.a.request({url:o.adminAccess,method:f.b.GET,params:e})}function O(e){return b.a.request({url:[o.adminAccess,e].join("/"),method:f.b.DELETE},{successMessageText:"删除成功",errorMessageText:"删除失败"})}function j(e,t){return b.a.request({url:[o.adminAccess,e].join("/"),method:f.b.PATCH,params:t},{successMessageText:"修改成功",errorMessageText:"修改失败"})}function v(e){return b.a.request({url:o.adminAccess,method:f.b.POST,params:e},{successMessageText:"创建成功",errorMessageText:"创建失败"})}!function(e){e.adminAccess="/admin/access",e.adminAccessModule="/admin/access/module"}(o||(o={})),n("a9e3"),n("8ba4");var y=Object(a.withScopeId)("data-v-4b7e707c");Object(a.pushScopeId)("data-v-4b7e707c");var N=Object(a.createTextVNode)(" 模块 "),g=Object(a.createTextVNode)(" 菜单 ");Object(a.popScopeId)();var R,h=y((function(e,t,n,r,c,o){var l=Object(a.resolveComponent)("a-select-option"),u=Object(a.resolveComponent)("a-select"),i=Object(a.resolveComponent)("a-form-item"),d=Object(a.resolveComponent)("a-input"),s=Object(a.resolveComponent)("a-input-number"),m=Object(a.resolveComponent)("a-form"),b=Object(a.resolveComponent)("a-modal");return Object(a.openBlock)(),Object(a.createBlock)(b,{title:Number.isInteger(e.fields.id)?"编辑资源":"新增资源",visible:e.visible,"onUpdate:visible":t[8]||(t[8]=function(t){return e.visible=t}),"confirm-loading":e.confirmLoading,afterClose:e.remove,onOk:e.handleOk},{default:y((function(){return[Object(a.createVNode)(m,{ref:"formRef",model:e.modelRef,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:y((function(){return[Object(a.createVNode)(i,{label:"类别",rules:e.rules.type,name:"type"},{default:y((function(){return[Object(a.createVNode)(u,{value:e.modelRef.type,"onUpdate:value":t[1]||(t[1]=function(t){return e.modelRef.type=t}),disabled:Number.isInteger(e.fields.id),placeholder:"请选择类型"},{default:y((function(){return[Object(a.createVNode)(l,{value:1},{default:y((function(){return[N]})),_:1}),Object(a.createVNode)(l,{value:2},{default:y((function(){return[g]})),_:1})]})),_:1},8,["value","disabled"])]})),_:1},8,["rules"]),1==e.modelRef.type?(Object(a.openBlock)(),Object(a.createBlock)(i,{key:0,label:"模块名称",rules:e.rules.moduleName,name:"moduleName"},{default:y((function(){return[Object(a.createVNode)(d,{value:e.modelRef.moduleName,"onUpdate:value":t[2]||(t[2]=function(t){return e.modelRef.moduleName=t}),disabled:Number.isInteger(e.fields.id),placeholder:"请输入模块名称"},null,8,["value","disabled"])]})),_:1},8,["rules"])):Object(a.createCommentVNode)("",!0),2==e.modelRef.type?(Object(a.openBlock)(),Object(a.createBlock)(i,{key:1,label:"模块名称",rules:e.rules.moduleId,name:"moduleId"},{default:y((function(){return[Object(a.createVNode)(u,{value:e.modelRef.moduleId,"onUpdate:value":t[3]||(t[3]=function(t){return e.modelRef.moduleId=t}),disabled:Number.isInteger(e.fields.id),placeholder:"请选择模块"},{default:y((function(){return[(Object(a.openBlock)(!0),Object(a.createBlock)(a.Fragment,null,Object(a.renderList)(e.moduleList,(function(e){return Object(a.openBlock)(),Object(a.createBlock)(l,{key:e.id,value:e.id},{default:y((function(){return[Object(a.createTextVNode)(Object(a.toDisplayString)(e.moduleName),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["value","disabled"])]})),_:1},8,["rules"])):Object(a.createCommentVNode)("",!0),2==e.modelRef.type?(Object(a.openBlock)(),Object(a.createBlock)(i,{key:2,label:"菜单名称",rules:e.rules.actionName,name:"actionName"},{default:y((function(){return[Object(a.createVNode)(d,{value:e.modelRef.actionName,"onUpdate:value":t[4]||(t[4]=function(t){return e.modelRef.actionName=t}),placeholder:"请输入菜单名称"},null,8,["value"])]})),_:1},8,["rules"])):Object(a.createCommentVNode)("",!0),Object(a.createVNode)(i,{label:"路径",rules:e.rules.url,name:"url"},{default:y((function(){return[Object(a.createVNode)(d,{value:e.modelRef.url,"onUpdate:value":t[5]||(t[5]=function(t){return e.modelRef.url=t}),placeholder:"请输入路径"},null,8,["value"])]})),_:1},8,["rules"]),Object(a.createVNode)(i,{label:"小图标"},{default:y((function(){return[Object(a.createVNode)(d,{value:e.modelRef.icon,"onUpdate:value":t[6]||(t[6]=function(t){return e.modelRef.icon=t}),placeholder:"小图标"},null,8,["value"]),Object(a.createVNode)("a",{href:"".concat(e.prefix,"#/icons"),target:"_blank"},"可选图标",8,["href"])]})),_:1}),Object(a.createVNode)(i,{label:"排序"},{default:y((function(){return[Object(a.createVNode)(s,{value:e.modelRef.sort,"onUpdate:value":t[7]||(t[7]=function(t){return e.modelRef.sort=t}),min:1,placeholder:"排序"},null,8,["value"])]})),_:1})]})),_:1},8,["model","label-col","wrapper-col"])]})),_:1},8,["title","visible","confirm-loading","afterClose","onOk"])})),k=(n("4160"),n("b0c0"),n("b64b"),n("159b"),n("ade3")),w=n("3af3"),x=n("09d9"),C=n("b558"),I=n("9839"),V=Object(a.defineComponent)({name:"add-modal",components:(R={},Object(k.a)(R,i.a.name,i.a),Object(k.a)(R,w.a.name,w.a),Object(k.a)(R,w.a.Item.name,w.a.Item),Object(k.a)(R,x.a.name,x.a),Object(k.a)(R,C.a.name,C.a),Object(k.a)(R,I.b.name,I.b),Object(k.a)(R,"ASelectOption",I.b.Option),R),props:{remove:{type:Function},fields:{type:Object,default:function(){return{}}},callback:{type:Function}},setup:function(e){var t=Object(a.ref)(null),n=Object(a.reactive)({visible:!0,confirmLoading:!1,moduleList:[]}),r=Object(a.reactive)({moduleName:"",moduleId:void 0,actionName:"",type:void 0,url:"",icon:"",sort:1});return e.fields.moduleId&&(Object.keys(r).forEach((function(t){return r[t]=e.fields[t]})),r.type=-1==e.fields.moduleId?1:2),Object(a.onMounted)(Object(u.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,void 0,b.a.request({url:o.adminAccessModule,method:f.b.GET,params:void 0});case 2:n.moduleList=e.sent;case 3:case"end":return e.stop()}}),e)})))),Object(l.a)(Object(l.a)({},Object(a.toRefs)(n)),{},{formRef:t,rules:{moduleName:[{required:!0,message:"模块名称不能为空"}],moduleId:[{required:!0,message:"模块名称不能为空"}],actionName:[{required:!0,message:"请输入菜单名称"}],type:[{required:!0,message:"请选择类型"}],url:[{required:!0,message:"请输入url地址"}]},prefix:"/vue3-antd-admin/",labelCol:{span:6},wrapperCol:{span:18},modelRef:r,handleOk:function(c){c.preventDefault(),n.confirmLoading=!0,t.value.validate().then(Object(u.a)(regeneratorRuntime.mark((function t(){var c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.fields.id,o=Object(a.toRaw)(r),c&&delete o.type,t.next=5,(c?j(c,o):v(o)).finally((function(){return n.confirmLoading=!1}));case 5:n.visible=!1,e.callback&&e.callback();case 7:case"end":return t.stop()}}),t)})))).catch((function(e){n.confirmLoading=!1}))}})}});V.render=h,V.__scopeId="data-v-4b7e707c";var T,_=V,A=n("48b8"),B=[{title:"名称",dataIndex:"moduleName",slots:{customRender:"moduleName"}},{title:"url地址",dataIndex:"url"},{title:"icon图标",dataIndex:"icon"},{title:"排序",dataIndex:"sort"},{title:"创建时间",dataIndex:"createdAt",slots:{customRender:"createdAt"},slotsType:"format",slotsFunc:function(e){return Object(A.b)(e)}},{title:"最后更新时间",dataIndex:"updatedAt",slots:{customRender:"updatedAt"},slotsType:"format",slotsFunc:function(e){return Object(A.b)(e)}},{title:"操作",dataIndex:"action",width:200,slots:{customRender:"action"},actions:[{type:"popconfirm",key:"fileid",text:"删除",permission:{action:"delete",effect:"disabled"},props:{type:"danger"},func:(T=Object(u.a)(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.record,e.next=3,O(a.id);case 3:n();case 4:case"end":return e.stop()}}),e)}))),function(e,t){return T.apply(this,arguments)})},{type:"button",key:"fileid",text:"编辑",permission:{action:"update",effect:"disabled"},props:{type:"warning"},func:function(e,t){var n=e.record;return Object(m.b)(_,{fields:n,callback:t})}}]}],S=Object(a.defineComponent)({name:"system-access",components:{DynamicTable:s.a},setup:function(){var e=Object(a.ref)(null),t=Object(a.reactive)({data:[],uploading:!1,tableLoading:!1,rowSelection:{onChange:function(e,n){t.rowSelection.selectedRowKeys=e},selectedRowKeys:[]}}),n=Object(a.computed)((function(){return 0==t.rowSelection.selectedRowKeys.length})),r=function(){var e=Object(u.a)(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!n.children||Array.isArray(n.children)){e.next=7;break}return e.next=4,p({id:n.id,limit:100});case 4:a=e.sent,r=a.data,n.children=r;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(l.a)(Object(l.a)({},Object(a.toRefs)(t)),{},{columns:B,tableRef:e,expand:r,getAdminAccess:p,isDisabled:n,addItem:function(){Object(m.b)(_,{callback:function(){e.value.refreshTableData()}})},deleteItems:function(){var n;i.a.confirm({title:"提示",icon:Object(a.createVNode)(d.a),content:"您确定要删除所有选中吗？",onOk:(n=Object(u.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O(t.rowSelection.selectedRowKeys.toString());case 2:e.value.refreshTableData(),t.rowSelection.selectedRowKeys=[];case 4:case"end":return n.stop()}}),n)}))),function(){return n.apply(this,arguments)})})}})}});S.render=function(e,t,n,o,l,u){var i=Object(a.resolveComponent)("a-button"),d=Object(a.resolveComponent)("dynamic-table"),s=Object(a.resolveDirective)("permission");return Object(a.openBlock)(),Object(a.createBlock)(d,{ref:"tableRef",onExpand:e.expand,columns:e.columns,"get-list-func":e.getAdminAccess,rowKey:"id","row-selection":e.rowSelection},{title:Object(a.withCtx)((function(){return[Object(a.withDirectives)(Object(a.createVNode)(i,{onClick:e.addItem,type:"primary"},{default:Object(a.withCtx)((function(){return[r]})),_:1},8,["onClick"]),[[s,{action:"create",effect:"disabled"}]]),Object(a.withDirectives)(Object(a.createVNode)(i,{onClick:e.deleteItems,disabled:e.isDisabled,type:"primary"},{default:Object(a.withCtx)((function(){return[c]})),_:1},8,["onClick","disabled"]),[[s,{action:"delete"}]])]})),moduleName:Object(a.withCtx)((function(e){var t=e.record;return[Object(a.createTextVNode)(Object(a.toDisplayString)(t.moduleName||t.actionName),1)]})),_:1},8,["onExpand","columns","get-list-func","row-selection"])},t.default=S}}]);