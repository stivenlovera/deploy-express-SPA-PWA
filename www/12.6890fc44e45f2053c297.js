(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{nnsM:function(o,i,t){"use strict";t.r(i),t.d(i,"AsistenciaPageModule",function(){return F});var e=t("ofXK"),n=t("3Pt+"),s=t("TEn/"),c=t("tyNb"),a=t("mrSG"),r=t("wd/R"),l=t("vxds"),b=t("fXoL"),d=t("Y6JD"),h=t("Wljr"),g=t("81q0");function u(o,i){if(1&o&&b.Mb(0,"ion-img",11),2&o){const o=b.ac();b.gc("src",o.photo.webviewPath)}}let p=(()=>{class o{constructor(o,i,t,e){this.modalController=o,this.asistenciaService=i,this.indexdbAsistencia=t,this.sicronizacionDb=e,this.image=!1,this.clock=""}ngOnInit(){this.clockHandle=setInterval(()=>{this.clock=r().format("HH:mm:ss")},1e3),console.log(this.registroDiario)}newPhoto(){return Object(a.a)(this,void 0,void 0,function*(){this.image=!0;const o=yield this.asistenciaService.addNewGalery();this.photo=o,console.log(this.photo)})}close(){this.modalController.dismiss({dismissed:!0})}saveCheck(){const o=r().format("HH:mm:ss"),i=r().format("YYYY-MM-DD");"Check In"===this.tipo?(this.registroDiario.foto_ingreso=this.photo.webviewPath,this.registroDiario.hora_ingreso=o,this.registroDiario.fecha_ingreso=i):(this.registroDiario.foto_salida=this.photo.webviewPath,this.registroDiario.hora_salida=o,this.registroDiario.fecha_salida=i),this.asistenciaService.saveCheckRegistroDiario(this.registroDiario).subscribe(o=>Object(a.a)(this,void 0,void 0,function*(){console.log(o),this.sicronizacionDb.postSyncronizacion()}),o=>Object(a.a)(this,void 0,void 0,function*(){yield this.indexdbAsistencia.saveCheckRegistroDiario(this.registroDiario,"local")})),this.modalController.dismiss({dismissed:!0,tipo:this.tipo,photo:this.photo.webviewPath,hora:o,fecha:i})}}return o.\u0275fac=function(i){return new(i||o)(b.Lb(s.T),b.Lb(g.a),b.Lb(h.a),b.Lb(d.a))},o.\u0275cmp=b.Fb({type:o,selectors:[["app-check"]],inputs:{registroDiario:"registroDiario",tipo:"tipo"},decls:28,vars:4,consts:[["slot","end","color","light",3,"click"],["slot","icon-only","name","close"],["padding",""],["size","12",1,"centrado"],[1,"img"],[3,"src",4,"ngIf"],["type","button",3,"click"],["name","camera-outline"],["position","stacked"],["expand","full",3,"disabled","click"],["expand","full",3,"click"],[3,"src"]],template:function(o,i){1&o&&(b.Qb(0,"ion-header"),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-title"),b.vc(3),b.Pb(),b.Qb(4,"ion-button",0),b.Yb("click",function(){return i.close()}),b.Mb(5,"ion-icon",1),b.Pb(),b.Pb(),b.Pb(),b.Qb(6,"ion-content",2),b.Qb(7,"ion-grid"),b.Qb(8,"ion-row"),b.Qb(9,"ion-col",3),b.Qb(10,"ion-thumbnail",4),b.tc(11,u,1,1,"ion-img",5),b.Pb(),b.Qb(12,"ion-button",6),b.Yb("click",function(){return i.newPhoto()}),b.Mb(13,"ion-icon",7),b.vc(14," \xa0 Capture photo "),b.Pb(),b.Pb(),b.Qb(15,"ion-col",3),b.Qb(16,"ion-label",8),b.vc(17,"Time:"),b.Pb(),b.vc(18),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(19,"ion-footer"),b.Qb(20,"ion-grid"),b.Qb(21,"ion-row"),b.Qb(22,"ion-col"),b.Qb(23,"ion-button",9),b.Yb("click",function(){return i.saveCheck()}),b.vc(24,"Save"),b.Pb(),b.Pb(),b.Qb(25,"ion-col"),b.Qb(26,"ion-button",10),b.Yb("click",function(){return i.close()}),b.vc(27,"Close"),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb()),2&o&&(b.zb(3),b.xc("",i.tipo," "),b.zb(8),b.gc("ngIf",i.photo),b.zb(7),b.xc(" ",i.clock," "),b.zb(5),b.gc("disabled",!i.photo))},directives:[s.r,s.O,s.N,s.e,s.s,s.n,s.q,s.E,s.m,s.M,e.k,s.w,s.p,s.t],styles:["ion-thumbnail[_ngcontent-%COMP%]{--size:270px}.centrado[_ngcontent-%COMP%]{text-align:center}.img[_ngcontent-%COMP%]{margin:auto;display:block}"]}),o})();function m(o,i){if(1&o){const o=b.Rb();b.Qb(0,"ion-button",11),b.Yb("click",function(){b.oc(o);const i=b.ac().index,t=b.ac();return t.check(i,t.getFormGroupAt(i))}),b.Mb(1,"ion-icon",12),b.Pb()}}function f(o,i){if(1&o&&(b.Qb(0,"ion-row",6),b.Ob(1,7),b.Qb(2,"ion-col",1),b.vc(3),b.Pb(),b.Qb(4,"ion-col",2),b.vc(5),b.Pb(),b.Qb(6,"ion-col",2),b.vc(7),b.Qb(8,"ion-thumbnail",8),b.Mb(9,"ion-img",9),b.Pb(),b.Pb(),b.Qb(10,"ion-col",2),b.vc(11),b.Qb(12,"ion-thumbnail",8),b.Mb(13,"ion-img",9),b.Pb(),b.Pb(),b.Qb(14,"ion-col",3),b.tc(15,m,2,0,"ion-button",10),b.Pb(),b.Nb(),b.Pb()),2&o){const o=i.index,t=b.ac();b.zb(1),b.gc("formGroup",t.getFormGroupAt(o)),b.zb(2),b.wc(o+1),b.zb(2),b.xc(" ",t.getFormGroupAt(o).get("nickname").value," "),b.zb(2),b.xc(" ","00:00:00"!==t.getFormGroupAt(o).get("hora_ingreso").value?t.getFormGroupAt(o).get("hora_ingreso").value:"No Check In"," "),b.zb(2),b.gc("src",""!==t.getFormGroupAt(o).get("foto_ingreso").value?t.getFormGroupAt(o).get("foto_ingreso").value:"assets/img/no-image.png"),b.zb(2),b.xc(" ","00:00:00"!==t.getFormGroupAt(o).get("hora_salida").value?t.getFormGroupAt(o).get("hora_ingreso").value:"No Check Out"," "),b.zb(2),b.gc("src",""!==t.getFormGroupAt(o).get("foto_salida").value?t.getFormGroupAt(o).get("foto_salida").value:"assets/img/no-image.png"),b.zb(2),b.gc("ngIf",t.validateCheck(o))}}let v=(()=>{class o{constructor(o,i,t,e,n){this.indexdbAsistencia=o,this.navCtrl=i,this.modalController=t,this.loadingCtrl=e,this.sicronizacionDb=n,this.onChange=o=>{},this.onTouch=()=>{},this.sicronizacionDb.postSyncronizacion()}ngOnInit(){}writeValue(o){this.personal=new n.a(o.map(o=>new n.f({id:new n.c(o.id),nickname:new n.c(o.nickname),nombre:new n.c(o.nombre),hora_salida:new n.c(o.hora_salida),hora_ingreso:new n.c(o.hora_ingreso),fecha:new n.c(o.fecha),registro_diario_id:new n.c(o.registro_diario_id),actividad_id:new n.c(o.actividad_id),empleado_id:new n.c(o.empleado_id),foto_ingreso:new n.c(o.foto_ingreso),foto_salida:new n.c(o.foto_salida),fecha_ingreso:new n.c(o.fecha_ingreso),fecha_salida:new n.c(o.fecha_salida)}))),this.personal.valueChanges.subscribe(o=>{this.onChange(o)})}validarCheck(o){}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouch=o}getFormGroupAt(o){return this.personal.at(o)}test(){this.getFormGroupAt(0).get("")}close(){this.navCtrl.navigateBack("/")}validateCheck(o){return"00:00:00"===this.getFormGroupAt(o).get("hora_ingreso").value||"00:00:00"===this.getFormGroupAt(o).get("hora_salida").value}check(o,i){return Object(a.a)(this,void 0,void 0,function*(){let t;"00:00:00"===this.getFormGroupAt(o).get("hora_ingreso").value?t="Check In":"00:00:00"===this.getFormGroupAt(o).get("hora_salida").value&&(t="Check Out");const e=yield this.modalController.create({component:p,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{tipo:t,registroDiario:i.value}});return e.onDidDismiss().then(i=>Object(a.a)(this,void 0,void 0,function*(){if(i.data.tipo)switch(i.data.tipo){case"Check In":this.getFormGroupAt(o).get("foto_ingreso").setValue(i.data.photo),this.getFormGroupAt(o).get("hora_ingreso").setValue(i.data.hora),this.getFormGroupAt(o).get("fecha_ingreso").setValue(i.data.fecha);break;case"Check Out":this.getFormGroupAt(o).get("foto_salida").setValue(i.data.photo),this.getFormGroupAt(o).get("hora_salida").setValue(i.data.hora),this.getFormGroupAt(o).get("fecha_salida").setValue(i.data.fecha)}})),yield e.present()})}}return o.\u0275fac=function(i){return new(i||o)(b.Lb(h.a),b.Lb(s.U),b.Lb(s.T),b.Lb(s.R),b.Lb(d.a))},o.\u0275cmp=b.Fb({type:o,selectors:[["app-list-personas"]],features:[b.yb([{provide:n.j,multi:!0,useExisting:Object(b.U)(()=>o)}])],decls:13,vars:1,consts:[[1,"ion-margin"],["size","1"],["size","3"],["size","2"],["size","small","color","light","expand","full",3,"click"],["class","header-row",4,"ngFor","ngForOf"],[1,"header-row"],[3,"formGroup"],[1,"img"],[3,"src"],["color","light","size","small","expand","full",3,"click",4,"ngIf"],["color","light","size","small","expand","full",3,"click"],["name","create-outline"]],template:function(o,i){1&o&&(b.Qb(0,"ion-grid",0),b.Qb(1,"ion-row"),b.Mb(2,"ion-col",1),b.Qb(3,"ion-col",2),b.vc(4,"-Employee-"),b.Pb(),b.Qb(5,"ion-col",2),b.vc(6," Check In"),b.Pb(),b.Qb(7,"ion-col",2),b.vc(8," Check Out"),b.Pb(),b.Qb(9,"ion-col",3),b.Qb(10,"ion-button",4),b.Yb("click",function(){return i.close()}),b.vc(11,"Exit"),b.Pb(),b.Pb(),b.Pb(),b.tc(12,f,16,8,"ion-row",5),b.Pb()),2&o&&(b.zb(12),b.gc("ngForOf",i.personal.controls))},directives:[s.q,s.E,s.m,s.e,e.j,n.m,n.g,s.M,s.t,e.k,s.s],styles:[".header-row[_ngcontent-%COMP%]{background:#fff;font-size:12px}ion-col[_ngcontent-%COMP%]{border:1px solid #b3b5b6}.ion-margin[_ngcontent-%COMP%]{font-size:14px}"]}),o})();function P(o,i){if(1&o){const o=b.Rb();b.Qb(0,"ion-card",7),b.Yb("click",function(){b.oc(o);const t=i.$implicit;return b.ac().showEmpleados(t.Actividad_ID)}),b.Qb(1,"ion-card-content"),b.vc(2),b.Mb(3,"br"),b.Qb(4,"strong"),b.vc(5,"contact:"),b.Pb(),b.Mb(6,"br"),b.Qb(7,"strong"),b.vc(8,"Foreman: "),b.Pb(),b.vc(9," hector "),b.Qb(10,"strong"),b.vc(11," Lead: "),b.Pb(),b.vc(12),b.Qb(13,"strong"),b.vc(14,"PWT Super: "),b.Pb(),b.vc(15),b.Pb(),b.Pb()}if(2&o){const o=i.$implicit;b.zb(2),b.zc(" ",o.Fecha,":",o.empresa," ",o.Codigo," ",o.dirrecion," "),b.zb(10),b.xc(" ",o.Lead," "),b.zb(3),b.xc(" ",o.Pwtsuper," ")}}function Q(o,i){1&o&&(b.Qb(0,"ion-thumbnail",12),b.Mb(1,"ion-img",13),b.Pb())}function C(o,i){if(1&o&&(b.Qb(0,"p"),b.vc(1),b.Pb()),2&o){const o=b.ac().$implicit;b.zb(1),b.wc(o.hora_ingreso)}}function k(o,i){if(1&o){const o=b.Rb();b.Qb(0,"ion-icon",14),b.Yb("click",function(){b.oc(o);const i=b.ac().$implicit;return b.ac().ModalCheck(i.empleado_id)}),b.Pb()}}function w(o,i){1&o&&(b.Qb(0,"ion-thumbnail",12),b.Mb(1,"ion-img",13),b.Pb())}function _(o,i){if(1&o&&(b.Qb(0,"p"),b.vc(1),b.Pb()),2&o){const o=b.ac().$implicit;b.zb(1),b.wc(o.hora_salida)}}function z(o,i){if(1&o){const o=b.Rb();b.Qb(0,"ion-icon",14),b.Yb("click",function(){b.oc(o);const i=b.ac().$implicit;return b.ac().ModalCheck(i.empleado_id)}),b.Pb()}}function y(o,i){if(1&o&&(b.Qb(0,"ion-col",5),b.Qb(1,"ion-card"),b.Qb(2,"ion-card-header"),b.Qb(3,"ion-card-subtitle"),b.vc(4),b.Pb(),b.Pb(),b.Qb(5,"ion-card-content"),b.Qb(6,"ion-grid"),b.Qb(7,"ion-row"),b.Qb(8,"ion-col",6),b.Qb(9,"ion-label"),b.vc(10," Check In "),b.Pb(),b.tc(11,Q,2,0,"ion-thumbnail",7),b.tc(12,C,2,1,"p",8),b.tc(13,k,1,0,"ng-template",null,9,b.uc),b.Pb(),b.Qb(15,"ion-col",6),b.Qb(16,"ion-label"),b.vc(17," Check Out "),b.Pb(),b.tc(18,w,2,0,"ion-thumbnail",7),b.tc(19,_,2,1,"p",8),b.tc(20,z,1,0,"ng-template",null,10,b.uc),b.Pb(),b.Pb(),b.Pb(),b.Qb(22,"ion-button",11),b.vc(23,"Detail reports"),b.Pb(),b.Pb(),b.Pb(),b.Pb()),2&o){const o=i.$implicit,t=b.mc(14),e=b.mc(21);b.zb(4),b.wc(o.nombre),b.zb(7),b.gc("ngIf",o.foto_ingreso)("ngIfElse",t),b.zb(1),b.gc("ngIf",o.foto_ingreso),b.zb(6),b.gc("ngIf",o.foto_salida)("ngIfElse",e),b.zb(1),b.gc("ngIf",o.foto_salida)}}const D=[{path:"",redirectTo:"list-activities"},{path:"list-activities/:fecha",component:(()=>{class o{constructor(o,i,t,e,s,c,a,r){this.menuCrtl=o,this.sicronizacionDb=i,this.route=t,this.indexdbAsistencia=e,this.asisteciaService=s,this.loadingCtrl=c,this.navCtrl=a,this.modalController=r,this.record=!0,this.report=!0,this.fecha=this.route.snapshot.paramMap.get("fecha"),this.user=this.route.snapshot.queryParams.user,this.sicronizacionDb.verificarConection(),this.sicronizacionDb.postSyncronizacion(),this.load(),this.personal=new n.c([])}ngOnInit(){}load(){return Object(a.a)(this,void 0,void 0,function*(){const o=yield this.indexdbAsistencia.getAllActividades(r(this.fecha).format("YYYY-MM-DD"),this.user);console.log(o),this.actividades=o})}ionViewWillEnter(){this.menuCrtl.enable(!1)}showEmpleados(o){return Object(a.a)(this,void 0,void 0,function*(){this.report=!1,console.log(o);const i=yield this.loadingCtrl.create({cssClass:"my-custom-class",message:"Loading"});yield i.present(),this.asisteciaService.getAllPersonalRegistroDiario(o,r(this.fecha).format("YYYY-MM-DD")).subscribe(o=>Object(a.a)(this,void 0,void 0,function*(){console.log(o),this.personal.setValue(o),yield i.dismiss()}),t=>Object(a.a)(this,void 0,void 0,function*(){const t=yield this.indexdbAsistencia.getAllEmpleadoActividades(o).toPromise();this.personal.setValue(t),yield i.dismiss()}))})}loginReporte(o,i){return Object(a.a)(this,void 0,void 0,function*(){this.report=!0;const t=yield this.modalController.create({component:l.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{nombre:o,tipo:i}});return t.onDidDismiss().then(o=>Object(a.a)(this,void 0,void 0,function*(){if(console.log(o.data),o.data.auth){const i=yield this.loadingCtrl.create({cssClass:"my-custom-class",message:"Starting"});yield i.present(),console.log(o.data.fecha),yield i.dismiss()}this.report=!1})),yield t.present()})}}return o.\u0275fac=function(i){return new(i||o)(b.Lb(s.S),b.Lb(d.a),b.Lb(c.a),b.Lb(h.a),b.Lb(g.a),b.Lb(s.R),b.Lb(s.U),b.Lb(s.T))},o.\u0275cmp=b.Fb({type:o,selectors:[["app-list-actividades"]],decls:21,vars:5,consts:[[3,"translucent"],["slot","start"],["slot","end"],[3,"click",4,"ngFor","ngForOf"],["size","small",3,"disabled"],["size","small",3,"disabled","click"],[3,"formControl"],[3,"click"]],template:function(o,i){1&o&&(b.Qb(0,"ion-header",0),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-buttons",1),b.Mb(3,"ion-menu-button"),b.Pb(),b.Qb(4,"ion-title"),b.vc(5,"Attendance - activities list"),b.Pb(),b.Qb(6,"ion-buttons",2),b.Mb(7,"ion-back-button"),b.Pb(),b.Pb(),b.Pb(),b.Qb(8,"ion-content"),b.Qb(9,"ion-grid"),b.Qb(10,"ion-row"),b.Qb(11,"ion-col"),b.tc(12,P,16,6,"ion-card",3),b.Pb(),b.Pb(),b.Pb(),b.Qb(13,"ion-grid"),b.Qb(14,"ion-row"),b.Qb(15,"ion-col"),b.Qb(16,"ion-button",4),b.vc(17,"Records"),b.Pb(),b.Qb(18,"ion-button",5),b.Yb("click",function(){return i.loginReporte("Report Hours /Cost Codes","asistencia")}),b.vc(19,"Reports "),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Mb(20,"app-list-personas",6),b.Pb()),2&o&&(b.gc("translucent",!0),b.zb(12),b.gc("ngForOf",i.actividades),b.zb(4),b.gc("disabled",i.record),b.zb(2),b.gc("disabled",i.report),b.zb(2),b.gc("formControl",i.personal))},directives:[s.r,s.O,s.f,s.A,s.N,s.c,s.d,s.n,s.q,s.E,s.m,e.j,s.e,v,n.l,n.d,s.g,s.h],styles:[""]}),o})()},{path:"list-employee/:actividadID",component:(()=>{class o{constructor(o,i,t,e,n){this.route=o,this.asistenciaService=i,this.indexDbService=t,this.modalController=e,this.sicronizacionDb=n,this.actividadID=parseInt(this.route.snapshot.paramMap.get("actividadID")),this.fecha=this.route.snapshot.queryParams.fecha,this.nombreProyecto=this.route.snapshot.queryParams.proyect,this.sicronizacionDb.verificarConection(),this.sicronizacionDb.postSyncronizacion()}ngOnInit(){this.listPersonalRegistroDiario()}listPersonalRegistroDiario(){const o=r(this.fecha,"dddd DD-MM-YYYY").format("YYYY-MM-DD");this.asistenciaService.getAllPersonalRegistroDiario(this.actividadID,o).subscribe(o=>{this.empleados=o})}ModalCheck(o){return Object(a.a)(this,void 0,void 0,function*(){console.log(o);const i=yield this.modalController.create({component:p,componentProps:{actividadId:this.actividadID,fecha:this.fecha},cssClass:"my-custom-class"});return yield i.present()})}}return o.\u0275fac=function(i){return new(i||o)(b.Lb(c.a),b.Lb(g.a),b.Lb(h.a),b.Lb(s.T),b.Lb(d.a))},o.\u0275cmp=b.Fb({type:o,selectors:[["app-list-personal"]],decls:16,vars:4,consts:[[3,"translucent"],["slot","start"],["slot","end"],[1,"ion-no-border"],["size","12",4,"ngFor","ngForOf"],["size","12"],[1,"centrado"],["class","img",4,"ngIf","ngIfElse"],[4,"ngIf"],["noFotoEntrada",""],["noFotoSalida",""],["expand","full"],[1,"img"],["src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-Iur9bkdneD-LrHY7FxrR6LxjVc0ZL0MAg&usqp=CAU"],["name","create-outline",1,"img",3,"click"]],template:function(o,i){1&o&&(b.Qb(0,"ion-header",0),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-buttons",1),b.Mb(3,"ion-menu-button"),b.Pb(),b.Qb(4,"ion-title"),b.vc(5,"Attendance - employee list"),b.Pb(),b.Qb(6,"ion-buttons",2),b.Mb(7,"ion-back-button"),b.Pb(),b.Pb(),b.Pb(),b.Qb(8,"ion-content"),b.Qb(9,"ion-grid"),b.Qb(10,"ion-header",3),b.Qb(11,"ion-toolbar"),b.Qb(12,"ion-title"),b.vc(13),b.Pb(),b.Pb(),b.Pb(),b.Qb(14,"ion-row"),b.tc(15,y,24,7,"ion-col",4),b.Pb(),b.Pb(),b.Pb()),2&o&&(b.gc("translucent",!0),b.zb(13),b.yc("Proyect - ",i.nombreProyecto," || ",i.fecha,""),b.zb(2),b.gc("ngForOf",i.empleados))},directives:[s.r,s.O,s.f,s.A,s.N,s.c,s.d,s.n,s.q,s.E,e.j,s.m,s.g,s.i,s.j,s.h,s.w,e.k,s.e,s.M,s.t,s.s],styles:["ion-thumbnail[_ngcontent-%COMP%]{--size:120px}.centrado[_ngcontent-%COMP%]{text-align:center}.img[_ngcontent-%COMP%]{margin:auto;display:block}ion-icon[_ngcontent-%COMP%]{font-size:120px}"]}),o})()}];let M=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=b.Jb({type:o}),o.\u0275inj=b.Ib({imports:[[c.j.forChild(D)],c.j]}),o})();var A=t("lDzL"),O=t("tk/3");let F=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=b.Jb({type:o}),o.\u0275inj=b.Ib({imports:[[e.c,n.h,s.P,M,A.g,O.b,n.o]]}),o})()}}]);