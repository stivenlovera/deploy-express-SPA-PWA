(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{nnsM:function(t,i,o){"use strict";o.r(i),o.d(i,"AsistenciaPageModule",function(){return S});var e=o("ofXK"),n=o("3Pt+"),r=o("TEn/"),s=o("tyNb"),a=o("mrSG"),c=o("wd/R"),l=o("vxds"),b=o("fXoL"),d=o("Y6JD"),h=o("Wljr"),u=o("81q0");function g(t,i){if(1&t&&b.Mb(0,"ion-img",13),2&t){const t=b.ac();b.gc("src",t.photo.webviewPath)}}let p=(()=>{class t{constructor(t,i,o,e){this.modalController=t,this.asistenciaService=i,this.indexdbAsistencia=o,this.sicronizacionDb=e,this.image=!1,this.clock=""}ngOnInit(){this.clockHandle=setInterval(()=>{this.clock=c().format("HH:mm:ss")},1e3),console.log(this.registroDiario),this.nombre=this.registroDiario.nombre,this.indexdbAsistencia.getOnePersonal(this.registroDiario.empleado_id).subscribe(t=>{switch(Math.floor(3*Math.random())+1){case 1:this.pregunta=t.pregunta1,this.respuesta=t.respuesta1;break;case 2:this.pregunta=t.pregunta2,this.respuesta=t.respuesta2;break;case 3:this.pregunta=t.pregunta3,this.respuesta=t.respuesta3}})}newPhoto(){return Object(a.a)(this,void 0,void 0,function*(){this.image=!0;const t=yield this.asistenciaService.addNewGalery();this.photo=t,console.log(this.photo),yield this.saveCheck()})}close(){this.modalController.dismiss({dismissed:!0})}saveCheck(){return Object(a.a)(this,void 0,void 0,function*(){const t=c().format("HH:mm:ss"),i=c().format("YYYY-MM-DD");"Check In"===this.tipo?(this.registroDiario.foto_ingreso=this.photo.webviewPath,this.registroDiario.hora_ingreso=t,this.registroDiario.fecha_ingreso=i,this.registroDiario.pregunta_in=this.pregunta,this.registroDiario.clave_in=this.respuesta):(this.registroDiario.foto_salida=this.photo.webviewPath,this.registroDiario.hora_salida=t,this.registroDiario.fecha_salida=i,this.registroDiario.pregunta_out=this.pregunta,this.registroDiario.clave_out=this.respuesta),this.asistenciaService.saveCheckRegistroDiario(this.registroDiario).subscribe(t=>Object(a.a)(this,void 0,void 0,function*(){console.log(t)}),t=>Object(a.a)(this,void 0,void 0,function*(){yield this.indexdbAsistencia.saveCheckRegistroDiario(this.registroDiario,"local")})),this.modalController.dismiss({dismissed:!0,tipo:this.tipo,photo:this.photo.webviewPath,hora:t,fecha:i})})}}return t.\u0275fac=function(i){return new(i||t)(b.Lb(r.V),b.Lb(u.a),b.Lb(h.a),b.Lb(d.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-check"]],inputs:{registroDiario:"registroDiario",tipo:"tipo"},decls:47,vars:6,consts:[["slot","end","color","light",3,"click"],["slot","icon-only","name","close"],["padding",""],["size","12"],["position","stacked"],[3,"value"],["type","button",3,"click"],["name","camera-outline"],["size","12",1,"centrado"],[1,"img"],[3,"src",4,"ngIf"],["expand","full",3,"disabled","click"],["expand","full",3,"click"],[3,"src"]],template:function(t,i){1&t&&(b.Qb(0,"ion-header"),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-title"),b.wc(3),b.Pb(),b.Qb(4,"ion-button",0),b.Yb("click",function(){return i.close()}),b.Mb(5,"ion-icon",1),b.Pb(),b.Pb(),b.Pb(),b.Qb(6,"ion-content",2),b.Qb(7,"ion-grid"),b.Qb(8,"ion-row"),b.Qb(9,"ion-col",3),b.Qb(10,"ion-label"),b.Qb(11,"strong"),b.wc(12," Check In "),b.Pb(),b.Pb(),b.Pb(),b.Qb(13,"ion-col",3),b.Qb(14,"ion-card"),b.Qb(15,"ion-card-content"),b.Qb(16,"ion-grid"),b.Qb(17,"ion-row"),b.Qb(18,"ion-col",3),b.wc(19," Step1:/ "),b.Qb(20,"strong"),b.wc(21,"verify"),b.Pb(),b.wc(22," your name and press [register] bottom: "),b.Pb(),b.Qb(23,"ion-col",3),b.Qb(24,"ion-item"),b.Qb(25,"ion-label",4),b.wc(26),b.Pb(),b.Mb(27,"ion-input",5),b.Pb(),b.Qb(28,"ion-button",6),b.Yb("click",function(){return i.newPhoto()}),b.Mb(29,"ion-icon",7),b.wc(30," \xa0 Register in "),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(31,"ion-col",8),b.Qb(32,"ion-thumbnail",9),b.uc(33,g,1,1,"ion-img",10),b.Pb(),b.Pb(),b.Qb(34,"ion-col",8),b.Qb(35,"ion-label",4),b.wc(36,"Time:"),b.Pb(),b.wc(37),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(38,"ion-footer"),b.Qb(39,"ion-grid"),b.Qb(40,"ion-row"),b.Qb(41,"ion-col"),b.Qb(42,"ion-button",11),b.Yb("click",function(){return i.saveCheck()}),b.wc(43,"Save"),b.Pb(),b.Pb(),b.Qb(44,"ion-col"),b.Qb(45,"ion-button",12),b.Yb("click",function(){return i.close()}),b.wc(46,"Close"),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb()),2&t&&(b.zb(3),b.yc("",i.nombre," "),b.zb(23),b.xc(i.pregunta),b.zb(1),b.hc("value",i.respuesta),b.zb(6),b.gc("ngIf",i.photo),b.zb(4),b.yc(" ",i.clock," "),b.zb(5),b.gc("disabled",!i.photo))},directives:[r.t,r.Q,r.P,r.f,r.u,r.p,r.s,r.G,r.o,r.y,r.h,r.i,r.x,r.w,r.cb,r.O,e.k,r.r,r.v],styles:["ion-thumbnail[_ngcontent-%COMP%]{--size:270px}.centrado[_ngcontent-%COMP%]{text-align:center}.img[_ngcontent-%COMP%]{margin:auto;display:block}"]}),t})();function m(t,i){if(1&t){const t=b.Rb();b.Qb(0,"ion-button",11),b.Yb("click",function(){b.pc(t);const i=b.ac().index,o=b.ac();return o.check(i,o.getFormGroupAt(i))}),b.Mb(1,"ion-icon",12),b.Pb()}}function f(t,i){if(1&t&&(b.Qb(0,"ion-row",6),b.Ob(1,7),b.Qb(2,"ion-col",1),b.wc(3),b.Pb(),b.Qb(4,"ion-col",2),b.wc(5),b.Pb(),b.Qb(6,"ion-col",2),b.wc(7),b.Qb(8,"ion-thumbnail",8),b.Mb(9,"ion-img",9),b.Pb(),b.Pb(),b.Qb(10,"ion-col",2),b.wc(11),b.Qb(12,"ion-thumbnail",8),b.Mb(13,"ion-img",9),b.Pb(),b.Pb(),b.Qb(14,"ion-col",3),b.uc(15,m,2,0,"ion-button",10),b.Pb(),b.Nb(),b.Pb()),2&t){const t=i.index,o=b.ac();b.zb(1),b.gc("formGroup",o.getFormGroupAt(t)),b.zb(2),b.xc(t+1),b.zb(2),b.yc(" ",o.getFormGroupAt(t).get("nickname").value," "),b.zb(2),b.yc(" ","00:00:00"!==o.getFormGroupAt(t).get("hora_ingreso").value?o.getFormGroupAt(t).get("hora_ingreso").value:"No Check In"," "),b.zb(2),b.gc("src",""!==o.getFormGroupAt(t).get("foto_ingreso").value?o.getFormGroupAt(t).get("foto_ingreso").value:"assets/img/no-image.png"),b.zb(2),b.yc(" ","00:00:00"!==o.getFormGroupAt(t).get("hora_salida").value?o.getFormGroupAt(t).get("hora_salida").value:"No Check Out"," "),b.zb(2),b.gc("src",""!==o.getFormGroupAt(t).get("foto_salida").value?o.getFormGroupAt(t).get("foto_salida").value:"assets/img/no-image.png"),b.zb(2),b.gc("ngIf",o.validateCheck(t))}}let P=(()=>{class t{constructor(t,i,o,e,n){this.indexdbAsistencia=t,this.navCtrl=i,this.modalController=o,this.loadingCtrl=e,this.sicronizacionDb=n,this.onChange=t=>{},this.onTouch=()=>{},this.sicronizacionDb.postSyncronizacion()}ngOnInit(){}writeValue(t){this.personal=new n.a(t.map(t=>new n.f({id:new n.c(t.id),nickname:new n.c(t.nickname),nombre:new n.c(t.nombre),hora_salida:new n.c(t.hora_salida),hora_ingreso:new n.c(t.hora_ingreso),fecha:new n.c(t.fecha),registro_diario_id:new n.c(t.registro_diario_id),actividad_id:new n.c(t.actividad_id),empleado_id:new n.c(t.empleado_id),foto_ingreso:new n.c(t.foto_ingreso),foto_salida:new n.c(t.foto_salida),fecha_ingreso:new n.c(t.fecha_ingreso),fecha_salida:new n.c(t.fecha_salida)}))),this.personal.valueChanges.subscribe(t=>{this.onChange(t)})}validarCheck(t){}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}getFormGroupAt(t){return this.personal.at(t)}test(){this.getFormGroupAt(0).get("")}close(){this.indexdbAsistencia.destroyAuthUser(),this.navCtrl.navigateBack("/")}validateCheck(t){return"00:00:00"===this.getFormGroupAt(t).get("hora_ingreso").value||"00:00:00"===this.getFormGroupAt(t).get("hora_salida").value}check(t,i){return Object(a.a)(this,void 0,void 0,function*(){let o;"00:00:00"===this.getFormGroupAt(t).get("hora_ingreso").value?o="Check In":"00:00:00"===this.getFormGroupAt(t).get("hora_salida").value&&(o="Check Out");const e=yield this.modalController.create({component:p,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{tipo:o,registroDiario:i.value}});return e.onDidDismiss().then(i=>Object(a.a)(this,void 0,void 0,function*(){if(i.data.tipo)switch(i.data.tipo){case"Check In":this.getFormGroupAt(t).get("foto_ingreso").setValue(i.data.photo),this.getFormGroupAt(t).get("hora_ingreso").setValue(i.data.hora),this.getFormGroupAt(t).get("fecha_ingreso").setValue(i.data.fecha);break;case"Check Out":this.getFormGroupAt(t).get("foto_salida").setValue(i.data.photo),this.getFormGroupAt(t).get("hora_salida").setValue(i.data.hora),this.getFormGroupAt(t).get("fecha_salida").setValue(i.data.fecha)}})),yield e.present()})}}return t.\u0275fac=function(i){return new(i||t)(b.Lb(h.a),b.Lb(r.W),b.Lb(r.V),b.Lb(r.T),b.Lb(d.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-list-personas"]],features:[b.yb([{provide:n.j,multi:!0,useExisting:Object(b.U)(()=>t)}])],decls:13,vars:1,consts:[[1,"ion-margin"],["size","1"],["size","3"],["size","2"],["size","small","color","light","expand","full",3,"click"],["class","header-row",4,"ngFor","ngForOf"],[1,"header-row"],[3,"formGroup"],[1,"img"],[3,"src"],["color","light","size","small","expand","full",3,"click",4,"ngIf"],["color","light","size","small","expand","full",3,"click"],["name","create-outline"]],template:function(t,i){1&t&&(b.Qb(0,"ion-grid",0),b.Qb(1,"ion-row"),b.Mb(2,"ion-col",1),b.Qb(3,"ion-col",2),b.wc(4,"-Employee-"),b.Pb(),b.Qb(5,"ion-col",2),b.wc(6," Check In"),b.Pb(),b.Qb(7,"ion-col",2),b.wc(8," Check Out"),b.Pb(),b.Qb(9,"ion-col",3),b.Qb(10,"ion-button",4),b.Yb("click",function(){return i.close()}),b.wc(11,"Exit"),b.Pb(),b.Pb(),b.Pb(),b.uc(12,f,16,8,"ion-row",5),b.Pb()),2&t&&(b.zb(12),b.gc("ngForOf",i.personal.controls))},directives:[r.s,r.G,r.o,r.f,e.j,n.m,n.g,r.O,r.v,e.k,r.u],styles:[".header-row[_ngcontent-%COMP%]{background:#fff;font-size:12px}ion-col[_ngcontent-%COMP%]{border:1px solid #b3b5b6}.ion-margin[_ngcontent-%COMP%]{font-size:14px}"]}),t})();var v=o("hWYT");function w(t,i){if(1&t&&(b.Qb(0,"ion-select-option",20),b.wc(1),b.Pb()),2&t){const t=i.$implicit;b.hc("value",t.area_id),b.zb(1),b.xc(t.nombre)}}function Q(t,i){if(1&t&&(b.Qb(0,"ion-select-option",20),b.wc(1),b.Pb()),2&t){const t=i.$implicit;b.hc("value",t.task_id),b.zb(1),b.xc(t.nombre)}}function _(t,i){if(1&t){const t=b.Rb();b.Qb(0,"tr"),b.Ob(1,5),b.Qb(2,"th"),b.wc(3),b.Pb(),b.Qb(4,"th"),b.Qb(5,"ion-label"),b.wc(6),b.Pb(),b.Pb(),b.Qb(7,"th"),b.Mb(8,"ion-input",6),b.Mb(9,"br"),b.Mb(10,"ion-input",6),b.Pb(),b.Qb(11,"th"),b.Mb(12,"ion-input",7),b.Mb(13,"app-field-error",8),b.Pb(),b.Qb(14,"th"),b.Mb(15,"ion-input",7),b.Mb(16,"app-field-error",8),b.Pb(),b.Qb(17,"th"),b.Qb(18,"ion-item",9),b.Yb("click",function(){b.pc(t);const o=i.index;return b.ac().area_control(o)}),b.Qb(19,"ion-select",10),b.uc(20,w,2,2,"ion-select-option",11),b.Pb(),b.Pb(),b.Mb(21,"app-field-error",12),b.Pb(),b.Qb(22,"th"),b.Qb(23,"ion-item",9),b.Yb("click",function(){b.pc(t);const o=i.index;return b.ac().tasks(o)}),b.Qb(24,"ion-select",13),b.uc(25,Q,2,2,"ion-select-option",11),b.Pb(),b.Pb(),b.Mb(26,"app-field-error",12),b.Pb(),b.Qb(27,"th"),b.Mb(28,"ion-input",14),b.Mb(29,"app-field-error",8),b.Pb(),b.Mb(30,"th"),b.Qb(31,"th"),b.Mb(32,"ion-textarea",15),b.Pb(),b.Qb(33,"th"),b.Mb(34,"ion-checkbox",16),b.Pb(),b.Qb(35,"th"),b.Qb(36,"ion-button",17),b.Mb(37,"ion-icon",18),b.Pb(),b.Pb(),b.Qb(38,"th"),b.Qb(39,"ion-button",17),b.Mb(40,"ion-icon",19),b.Pb(),b.Pb(),b.Nb(),b.Pb()}if(2&t){const t=i.index,o=b.ac();b.zb(1),b.gc("formGroup",o.getFormGroupAt(t)),b.zb(2),b.xc(t+1),b.zb(3),b.xc(o.getFormGroupAt(t).get("nickname").value),b.zb(2),b.hc("value","00:00:00"!==o.getFormGroupAt(t).get("hora_ingreso").value?o.getFormGroupAt(t).get("hora_ingreso").value:"No Check In"),b.zb(2),b.hc("value","00:00:00"!==o.getFormGroupAt(t).get("hora_salida").value?o.getFormGroupAt(t).get("hora_salida").value:"No Check Out"),b.zb(3),b.gc("displayError",o.isFieldValid("floor",t)),b.zb(3),b.gc("displayError",o.isFieldValid("floor",t)),b.zb(4),b.gc("ngForOf",o.areasControl),b.zb(1),b.gc("displayError",o.isFieldValid("area_id",t)),b.zb(4),b.gc("ngForOf",o.task),b.zb(1),b.gc("displayError",o.isFieldValid("task_id",t)),b.zb(3),b.gc("displayError",o.isFieldValid("hora_worker",t))}}let k=(()=>{class t{constructor(t,i,o,e,n){this.indexdbAsistencia=t,this.asisteciaService=i,this.alertController=o,this.loadingCtrl=e,this.navCtrl=n}ngOnInit(){return Object(a.a)(this,void 0,void 0,function*(){this.actividadPersonal=new n.a(this.reportPersonal.map(t=>new n.f({proyecto_id:new n.c(t.proyecto_id),empleado_id:new n.c(t.empleado_id),actividad_id:new n.c(t.actividad_id),nickname:new n.c(t.nickname),hora_ingreso:new n.c(t.hora_ingreso),registro_diario_id:new n.c(t.registro_diario_id),fecha_ingreso:new n.c(t.fecha_ingreso),hora_salida:new n.c(t.hora_salida),fecha_salida:new n.c(t.fecha_salida),hora_worker:new n.c(t.hora_worker,[n.q.required,n.q.min(1),n.q.max(99)]),note:new n.c(t.note),verificar_foreman:new n.c(t.verificar_foreman),floor_id:new n.c(t.floor_id,[n.q.required]),floor:new n.c(t.floor),area_id:new n.c(t.task_id,[n.q.required]),task_id:new n.c(t.task_id,[n.q.required])})))})}getFormGroupAt(t){return this.actividadPersonal.at(t)}area_control(t){this.asisteciaService.getAreaControl(this.getFormGroupAt(t).get("actividad_id").value,this.getFormGroupAt(t).get("proyecto_id").value,this.getFormGroupAt(t).get("floor_id").value).subscribe(t=>{this.areasControl=t})}tasks(t){console.log(this.getFormGroupAt(t).get("area_id").value),this.asisteciaService.getAreaTask(this.getFormGroupAt(t).get("area_id").value,this.getFormGroupAt(t).get("proyecto_id").value,this.getFormGroupAt(t).get("floor_id").value).subscribe(t=>{this.task=t})}save(){return Object(a.a)(this,void 0,void 0,function*(){if(this.actividadPersonal.valid)yield this.loadingCtrl.create({cssClass:"my-custom-class",message:"Save"}),console.log(this.actividadPersonal.value),this.asisteciaService.saveActividadPersonal(this.actividadPersonal.value).subscribe(t=>Object(a.a)(this,void 0,void 0,function*(){yield this.presentAlert("Succesfull recorded -!=")}),t=>Object(a.a)(this,void 0,void 0,function*(){}));else{yield this.presentAlert("check fields");for(let t=0;t<this.actividadPersonal.length;t++)this.validateAllFormFields(this.actividadPersonal.at(t));console.log(this.actividadPersonal.value)}console.log(this.actividadPersonal.valid)})}close(){this.indexdbAsistencia.destroyAuthUser(),this.navCtrl.navigateBack("/")}isFieldValid(t,i){return!this.actividadPersonal.at(i).get(t).valid&&this.actividadPersonal.at(i).get(t).touched}validateAllFormFields(t){Object.keys(t.controls).forEach(i=>{const o=t.get(i);o instanceof n.c?o.markAsTouched({onlySelf:!0}):o instanceof n.f&&this.validateAllFormFields(o)})}presentAlert(t){return Object(a.a)(this,void 0,void 0,function*(){const i=yield this.alertController.create({cssClass:"my-custom-class",header:"Alert",subHeader:t,buttons:["OK"]});yield i.present(),yield i.onDidDismiss()})}}return t.\u0275fac=function(i){return new(i||t)(b.Lb(h.a),b.Lb(u.a),b.Lb(r.a),b.Lb(r.T),b.Lb(r.W))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-list-report"]],inputs:{reportPersonal:"reportPersonal"},decls:33,vars:1,consts:[[2,"overflow-x","auto"],[1,"ion-margin","forecast_container"],[2,"width","70px"],[4,"ngFor","ngForOf"],["size","small","color","light",3,"click"],[3,"formGroup"],["readonly","",3,"value"],["formControlName","floor","placeholder","write text"],["errorMsg","required",3,"displayError"],[3,"click"],["formControlName","area_id","value","Select one","interface","action-sheet"],[3,"value",4,"ngFor","ngForOf"],["errorMsg","select one",3,"displayError"],["formControlName","task_id","value","Select one","interface","action-sheet"],["placeholder","hours","formControlName","hora_worker","type","number"],["placeholder","notes","formControlName","note"],["formControlName","verificar_foreman"],["size","small","color","light","expand","full"],["name","documents-outline"],["name","trash-outline"],[3,"value"]],template:function(t,i){1&t&&(b.Qb(0,"div",0),b.Qb(1,"table",1),b.Qb(2,"thead"),b.Qb(3,"tr"),b.Mb(4,"th"),b.Qb(5,"th"),b.wc(6,"-Employee Nick Name"),b.Pb(),b.Qb(7,"th",2),b.wc(8,"Check\xa0In\xa0Check\xa0Out"),b.Pb(),b.Qb(9,"th"),b.wc(10,"Title\xa0level\xa00"),b.Pb(),b.Qb(11,"th"),b.wc(12,"Bulding\xa0"),b.Pb(),b.Qb(13,"th"),b.wc(14,"Floor"),b.Pb(),b.Qb(15,"th"),b.wc(16,"Area\xa0of\xa0task"),b.Pb(),b.Qb(17,"th"),b.wc(18,"Hours\xa0Worker"),b.Pb(),b.Qb(19,"th"),b.wc(20,"\xa0-\xa0-\xa0*\xa0"),b.Pb(),b.Qb(21,"th"),b.wc(22,"\xa0Notes\xa0"),b.Pb(),b.Qb(23,"th"),b.wc(24,"Check\xa0BY\xa0Foreman"),b.Pb(),b.Mb(25,"th"),b.Mb(26,"th"),b.Pb(),b.Pb(),b.Qb(27,"tbody"),b.uc(28,_,41,12,"tr",3),b.Qb(29,"ion-button",4),b.Yb("click",function(){return i.save()}),b.wc(30,"Save"),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(31,"ion-button",4),b.Yb("click",function(){return i.close()}),b.wc(32,"Cancel and exit"),b.Pb()),2&t&&(b.zb(28),b.gc("ngForOf",i.actividadPersonal.controls))},directives:[e.j,r.f,n.m,n.g,r.y,r.w,r.cb,n.l,n.e,v.a,r.x,r.I,r.bb,r.Y,r.N,r.m,r.b,r.u,r.J],styles:["table[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #ddd;text-align:center;font-size:14px}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:15px;width:100px;word-wrap:break-word}ion-select[_ngcontent-%COMP%]{font-size:12px}"]}),t})();function C(t,i){if(1&t){const t=b.Rb();b.Qb(0,"ion-card",8),b.Yb("click",function(){b.pc(t);const o=i.$implicit;return b.ac().showEmpleados(o.Actividad_ID)}),b.Qb(1,"ion-card-content"),b.wc(2),b.Mb(3,"br"),b.Qb(4,"strong"),b.wc(5,"contact:"),b.Pb(),b.Mb(6,"br"),b.Qb(7,"strong"),b.wc(8,"Foreman: "),b.Pb(),b.wc(9," hector "),b.Qb(10,"strong"),b.wc(11," Lead: "),b.Pb(),b.wc(12),b.Qb(13,"strong"),b.wc(14,"PWT Super: "),b.Pb(),b.wc(15),b.Pb(),b.Pb()}if(2&t){const t=i.$implicit;b.zb(2),b.Ac(" ",t.Fecha,":",t.empresa," ",t.Codigo," ",t.dirrecion," "),b.zb(10),b.yc(" ",t.Lead," "),b.zb(3),b.yc(" ",t.Pwtsuper," ")}}function y(t,i){if(1&t&&b.Mb(0,"app-list-personas",9),2&t){const t=b.ac();b.gc("formControl",t.personal)}}function z(t,i){if(1&t&&b.Mb(0,"app-list-report",10),2&t){const t=b.ac();b.gc("reportPersonal",t.reportPersonal)}}function A(t,i){1&t&&(b.Qb(0,"ion-thumbnail",12),b.Mb(1,"ion-img",13),b.Pb())}function M(t,i){if(1&t&&(b.Qb(0,"p"),b.wc(1),b.Pb()),2&t){const t=b.ac().$implicit;b.zb(1),b.xc(t.hora_ingreso)}}function F(t,i){if(1&t){const t=b.Rb();b.Qb(0,"ion-icon",14),b.Yb("click",function(){b.pc(t);const i=b.ac().$implicit;return b.ac().ModalCheck(i.empleado_id)}),b.Pb()}}function O(t,i){1&t&&(b.Qb(0,"ion-thumbnail",12),b.Mb(1,"ion-img",13),b.Pb())}function D(t,i){if(1&t&&(b.Qb(0,"p"),b.wc(1),b.Pb()),2&t){const t=b.ac().$implicit;b.zb(1),b.xc(t.hora_salida)}}function x(t,i){if(1&t){const t=b.Rb();b.Qb(0,"ion-icon",14),b.Yb("click",function(){b.pc(t);const i=b.ac().$implicit;return b.ac().ModalCheck(i.empleado_id)}),b.Pb()}}function G(t,i){if(1&t&&(b.Qb(0,"ion-col",5),b.Qb(1,"ion-card"),b.Qb(2,"ion-card-header"),b.Qb(3,"ion-card-subtitle"),b.wc(4),b.Pb(),b.Pb(),b.Qb(5,"ion-card-content"),b.Qb(6,"ion-grid"),b.Qb(7,"ion-row"),b.Qb(8,"ion-col",6),b.Qb(9,"ion-label"),b.wc(10," Check In "),b.Pb(),b.uc(11,A,2,0,"ion-thumbnail",7),b.uc(12,M,2,1,"p",8),b.uc(13,F,1,0,"ng-template",null,9,b.vc),b.Pb(),b.Qb(15,"ion-col",6),b.Qb(16,"ion-label"),b.wc(17," Check Out "),b.Pb(),b.uc(18,O,2,0,"ion-thumbnail",7),b.uc(19,D,2,1,"p",8),b.uc(20,x,1,0,"ng-template",null,10,b.vc),b.Pb(),b.Pb(),b.Pb(),b.Qb(22,"ion-button",11),b.wc(23,"Detail reports"),b.Pb(),b.Pb(),b.Pb(),b.Pb()),2&t){const t=i.$implicit,o=b.nc(14),e=b.nc(21);b.zb(4),b.xc(t.nombre),b.zb(7),b.gc("ngIf",t.foto_ingreso)("ngIfElse",o),b.zb(1),b.gc("ngIf",t.foto_ingreso),b.zb(6),b.gc("ngIf",t.foto_salida)("ngIfElse",e),b.zb(1),b.gc("ngIf",t.foto_salida)}}const I=[{path:"",redirectTo:"list-activities"},{path:"list-activities/:fecha",component:(()=>{class t{constructor(t,i,o,e,r,s,a,c){this.menuCrtl=t,this.sicronizacionDb=i,this.route=o,this.indexdbAsistencia=e,this.asisteciaService=r,this.loadingCtrl=s,this.navCtrl=a,this.modalController=c,this.record=!0,this.report=!0,this.view_report=!1,this.fecha=this.route.snapshot.paramMap.get("fecha"),this.user=this.route.snapshot.queryParams.user,this.sicronizacionDb.postSyncronizacion(),this.load(),this.personal=new n.c([])}ngOnInit(){}load(){return Object(a.a)(this,void 0,void 0,function*(){this.asisteciaService.getAllActivities(c(this.fecha).format("YYYY-MM-DD"),this.user).subscribe(t=>Object(a.a)(this,void 0,void 0,function*(){this.actividades=t}),t=>Object(a.a)(this,void 0,void 0,function*(){const t=yield this.indexdbAsistencia.getAllActividades(c(this.fecha).format("YYYY-MM-DD"),this.user);console.log(t),this.actividades=t}))})}ionViewWillEnter(){this.menuCrtl.enable(!1)}showEmpleados(t){return Object(a.a)(this,void 0,void 0,function*(){this.report=!1,this.view_report=!1;const i=yield this.loadingCtrl.create({cssClass:"my-custom-class",message:"Loading"});yield i.present(),this.asisteciaService.getAllPersonalRegistroDiario(t,c(this.fecha).format("YYYY-MM-DD")).subscribe(t=>Object(a.a)(this,void 0,void 0,function*(){console.log(t),this.personal.setValue(t),yield i.dismiss()}),o=>Object(a.a)(this,void 0,void 0,function*(){const o=yield this.indexdbAsistencia.getAllEmpleadoActividades(t).toPromise();this.personal.setValue(o),yield i.dismiss()})),this.sicronizacionDb.postSyncronizacion()})}loginReporte(t,i){return Object(a.a)(this,void 0,void 0,function*(){this.report=!0;const o=yield this.modalController.create({component:l.a,cssClass:"my-custom-class",swipeToClose:!0,componentProps:{nombre:t,tipo:i}});return o.onDidDismiss().then(t=>Object(a.a)(this,void 0,void 0,function*(){if(t.data.auth){const t=yield this.loadingCtrl.create({cssClass:"my-custom-class",message:"Starting"});this.reportPersonal=yield this.asisteciaService.getActividadPersonal(this.personal.value[0].actividad_id,this.personal.value[0].proyecto_id).toPromise(),console.log(this.reportPersonal),this.view_report=!0,yield t.dismiss()}else this.view_report=!1,this.report=!1})),yield o.present()})}}return t.\u0275fac=function(i){return new(i||t)(b.Lb(r.U),b.Lb(d.a),b.Lb(s.a),b.Lb(h.a),b.Lb(u.a),b.Lb(r.T),b.Lb(r.W),b.Lb(r.V))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-list-actividades"]],decls:22,vars:6,consts:[[3,"translucent"],["slot","start"],["slot","end"],[3,"click",4,"ngFor","ngForOf"],["size","small",3,"disabled"],["size","small",3,"disabled","click"],[3,"formControl",4,"ngIf"],[3,"reportPersonal",4,"ngIf"],[3,"click"],[3,"formControl"],[3,"reportPersonal"]],template:function(t,i){1&t&&(b.Qb(0,"ion-header",0),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-buttons",1),b.Mb(3,"ion-menu-button"),b.Pb(),b.Qb(4,"ion-title"),b.wc(5,"Attendance - activities list"),b.Pb(),b.Qb(6,"ion-buttons",2),b.Mb(7,"ion-back-button"),b.Pb(),b.Pb(),b.Pb(),b.Qb(8,"ion-content"),b.Qb(9,"ion-grid"),b.Qb(10,"ion-row"),b.Qb(11,"ion-col"),b.uc(12,C,16,6,"ion-card",3),b.Pb(),b.Pb(),b.Pb(),b.Qb(13,"ion-grid"),b.Qb(14,"ion-row"),b.Qb(15,"ion-col"),b.Qb(16,"ion-button",4),b.wc(17,"Records"),b.Pb(),b.Qb(18,"ion-button",5),b.Yb("click",function(){return i.loginReporte("Report Hours /Cost Codes","asistencia")}),b.wc(19,"Reports "),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.uc(20,y,1,1,"app-list-personas",6),b.uc(21,z,1,1,"app-list-report",7),b.Pb()),2&t&&(b.gc("translucent",!0),b.zb(12),b.gc("ngForOf",i.actividades),b.zb(4),b.gc("disabled",i.record),b.zb(2),b.gc("disabled",i.report),b.zb(2),b.gc("ngIf",!i.view_report),b.zb(1),b.gc("ngIf",i.view_report))},directives:[r.t,r.Q,r.g,r.C,r.P,r.d,r.e,r.p,r.s,r.G,r.o,e.j,r.f,e.k,r.h,r.i,P,n.l,n.d,k],styles:[""]}),t})()},{path:"list-employee/:actividadID",component:(()=>{class t{constructor(t,i,o,e,n){this.route=t,this.asistenciaService=i,this.indexDbService=o,this.modalController=e,this.sicronizacionDb=n,this.actividadID=parseInt(this.route.snapshot.paramMap.get("actividadID")),this.fecha=this.route.snapshot.queryParams.fecha,this.nombreProyecto=this.route.snapshot.queryParams.proyect,this.sicronizacionDb.postSyncronizacion()}ngOnInit(){this.listPersonalRegistroDiario()}listPersonalRegistroDiario(){const t=c(this.fecha,"dddd DD-MM-YYYY").format("YYYY-MM-DD");this.asistenciaService.getAllPersonalRegistroDiario(this.actividadID,t).subscribe(t=>{this.empleados=t})}ModalCheck(t){return Object(a.a)(this,void 0,void 0,function*(){console.log(t);const i=yield this.modalController.create({component:p,componentProps:{actividadId:this.actividadID,fecha:this.fecha},cssClass:"my-custom-class"});return yield i.present()})}}return t.\u0275fac=function(i){return new(i||t)(b.Lb(s.a),b.Lb(u.a),b.Lb(h.a),b.Lb(r.V),b.Lb(d.a))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-list-personal"]],decls:16,vars:4,consts:[[3,"translucent"],["slot","start"],["slot","end"],[1,"ion-no-border"],["size","12",4,"ngFor","ngForOf"],["size","12"],[1,"centrado"],["class","img",4,"ngIf","ngIfElse"],[4,"ngIf"],["noFotoEntrada",""],["noFotoSalida",""],["expand","full"],[1,"img"],["src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-Iur9bkdneD-LrHY7FxrR6LxjVc0ZL0MAg&usqp=CAU"],["name","create-outline",1,"img",3,"click"]],template:function(t,i){1&t&&(b.Qb(0,"ion-header",0),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-buttons",1),b.Mb(3,"ion-menu-button"),b.Pb(),b.Qb(4,"ion-title"),b.wc(5,"Attendance - employee list"),b.Pb(),b.Qb(6,"ion-buttons",2),b.Mb(7,"ion-back-button"),b.Pb(),b.Pb(),b.Pb(),b.Qb(8,"ion-content"),b.Qb(9,"ion-grid"),b.Qb(10,"ion-header",3),b.Qb(11,"ion-toolbar"),b.Qb(12,"ion-title"),b.wc(13),b.Pb(),b.Pb(),b.Pb(),b.Qb(14,"ion-row"),b.uc(15,G,24,7,"ion-col",4),b.Pb(),b.Pb(),b.Pb()),2&t&&(b.gc("translucent",!0),b.zb(13),b.zc("Proyect - ",i.nombreProyecto," || ",i.fecha,""),b.zb(2),b.gc("ngForOf",i.empleados))},directives:[r.t,r.Q,r.g,r.C,r.P,r.d,r.e,r.p,r.s,r.G,e.j,r.o,r.h,r.j,r.k,r.i,r.y,e.k,r.f,r.O,r.v,r.u],styles:["ion-thumbnail[_ngcontent-%COMP%]{--size:120px}.centrado[_ngcontent-%COMP%]{text-align:center}.img[_ngcontent-%COMP%]{margin:auto;display:block}ion-icon[_ngcontent-%COMP%]{font-size:120px}"]}),t})()}];let Y=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({imports:[[s.j.forChild(I)],s.j]}),t})();var L=o("lDzL"),j=o("tk/3");let S=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({imports:[[e.c,n.h,r.R,Y,L.g,j.b,n.o]]}),t})()}}]);