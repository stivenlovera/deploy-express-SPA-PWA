(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"V8/D":function(e,i,t){"use strict";t.r(i),t.d(i,"PendientePageModule",function(){return p});var n=t("ofXK"),s=t("3Pt+"),c=t("TEn/"),o=t("tyNb"),r=t("mrSG"),b=t("fXoL"),l=t("IDvd"),d=t("JwAU"),a=t("Y6JD");function u(e,i){if(1&e){const e=b.Rb();b.Qb(0,"ion-row"),b.Qb(1,"ion-col"),b.Qb(2,"ion-card"),b.Qb(3,"ion-item"),b.Mb(4,"ion-icon",5),b.Qb(5,"ion-label"),b.wc(6,"Ticket "),b.Pb(),b.Qb(7,"ion-button",6),b.wc(8,"View"),b.Pb(),b.Pb(),b.Qb(9,"ion-card-header"),b.Qb(10,"ion-card-subtitle"),b.wc(11),b.Pb(),b.wc(12),b.Mb(13,"br"),b.wc(14),b.Mb(15,"br"),b.wc(16),b.Pb(),b.Qb(17,"ion-card-content"),b.Qb(18,"ion-button",7),b.Yb("click",function(){b.pc(e);const t=i.$implicit,n=i.index;return b.ac().sendTicket(t.id,n)}),b.wc(19,"Send"),b.Pb(),b.Qb(20,"ion-button",7),b.Yb("click",function(){b.pc(e);const t=i.$implicit,n=i.index;return b.ac().deleteTicket(t.id,n)}),b.wc(21,"Delete"),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb()}if(2&e){const e=i.$implicit;b.zb(11),b.xc(e.general_contractor),b.zb(1),b.yc(" ",e.proyect_nombre," "),b.zb(2),b.yc(" ",e.assignTicket," "),b.zb(2),b.yc(" ",e.proyect," ")}}const P=[{path:"",component:(()=>{class e{constructor(e,i,t,n,s){this.dbPwaService=e,this.serviceTicket=i,this.alertCtrl=t,this.loadingCtrl=n,this.sicronizacionDb=s,this.sicronizacionDb.ticketPendiente(),this.sicronizacionDb.postSyncronizacion()}ngOnInit(){this.dbPwaService.getAllTicketPendiente().subscribe(e=>{this.pendientes=e,console.log(e)})}sendTicket(e,i){return Object(r.a)(this,void 0,void 0,function*(){const t=yield this.loadingCtrl.create({cssClass:"my-custom-class",message:"Loading"});yield t.present(),this.dbPwaService.getOneTicketPendiente(e).subscribe(n=>Object(r.a)(this,void 0,void 0,function*(){const s=yield this.dbPwaService.getAllTicketPendienteMateriales(n.id).toPromise();n=Object.assign(n,{materiales:s});const c=yield this.dbPwaService.getAllTicketPendienteClassWorker(n.id).toPromise();n=Object.assign(n,{workers:c});const o=yield this.dbPwaService.getAllTicketPendienteImagesInicio(n.id).toPromise();n=Object.assign(n,{imagesInicio:o});const b=yield this.dbPwaService.getAllTicketPendienteImagesFinal(n.id).toPromise();n=Object.assign(n,{imagesFinal:b}),console.log(n),this.serviceTicket.postSaveTicket(n,n.idActividad).subscribe(n=>Object(r.a)(this,void 0,void 0,function*(){yield t.dismiss(),this.alert("Send"),this.dbPwaService.deleteTicketPendiente(e).subscribe(e=>{e&&this.pendientes.splice(i,1)},e=>{console.log(e)})}),e=>Object(r.a)(this,void 0,void 0,function*(){yield t.dismiss(),this.alert("There is no Internet conection")}))}))})}deleteTicket(e,i){console.log(e),this.dbPwaService.deleteTicketPendiente(e).subscribe(e=>{e&&(this.pendientes.splice(i,1),this.alert("Duccessfully removed"))})}alert(e){return Object(r.a)(this,void 0,void 0,function*(){const i=yield this.alertCtrl.create({cssClass:"my-custom-class",header:"Alert",subHeader:e,message:"",buttons:["OK"]});yield i.present(),yield i.onDidDismiss()})}}return e.\u0275fac=function(i){return new(i||e)(b.Lb(l.a),b.Lb(d.a),b.Lb(c.a),b.Lb(c.T),b.Lb(a.a))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-pendiente"]],decls:11,vars:3,consts:[[3,"translucent"],["slot","start"],["slot","end"],[3,"fullscreen"],[4,"ngFor","ngForOf"],["name","pin","slot","start"],["fill","outline","slot","end"],["size","small","fill","outline",3,"click"]],template:function(e,i){1&e&&(b.Qb(0,"ion-header",0),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-buttons",1),b.Mb(3,"ion-menu-button"),b.Pb(),b.Qb(4,"ion-title"),b.wc(5,"Pendientes"),b.Pb(),b.Qb(6,"ion-buttons",2),b.Mb(7,"ion-back-button"),b.Pb(),b.Pb(),b.Pb(),b.Qb(8,"ion-content",3),b.Qb(9,"ion-grid"),b.uc(10,u,22,4,"ion-row",4),b.Pb(),b.Pb()),2&e&&(b.gc("translucent",!0),b.zb(8),b.gc("fullscreen",!0),b.zb(2),b.gc("ngForOf",i.pendientes))},directives:[c.t,c.Q,c.g,c.C,c.P,c.d,c.e,c.p,c.s,n.j,c.G,c.o,c.h,c.x,c.u,c.y,c.f,c.j,c.k,c.i],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({imports:[[o.j.forChild(P)],o.j]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({imports:[[n.c,s.h,c.R,h]]}),e})()}}]);