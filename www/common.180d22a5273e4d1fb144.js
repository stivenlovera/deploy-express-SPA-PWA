(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"74mu":function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return a}),i.d(t,"c",function(){return n}),i.d(t,"d",function(){return s});const n=(e,t)=>null!==t.closest(e),r=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,a=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},c=/^[a-z][a-z0-9+\-.]*:/,s=async(e,t,i,n)=>{if(null!=e&&"#"!==e[0]&&!c.test(e)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(e,i,n)}return!1}},IDvd:function(e,t,i){"use strict";i.d(t,"a",function(){return a});var n=i("fXoL"),r=i("BvB/");let a=(()=>{class e{constructor(e){this.dbService=e}deleteTicketPendiente(e){return this.dbService.deleteByKey("pendiente_ticket",e)}getOneTicketPendiente(e){return this.dbService.getByKey("pendiente_ticket",e)}getAllTicketPendiente(){return this.dbService.getAll("pendiente_ticket")}getAllTicketPendienteMateriales(e){return this.dbService.getAllByIndex("pendiente_ticket_materiales","id_ticket",IDBKeyRange.only(e))}getAllTicketPendienteClassWorker(e){return this.dbService.getAllByIndex("pendiente_ticket_workers","id_ticket",IDBKeyRange.only(e))}getAllTicketPendienteImagesInicio(e){return this.dbService.getAllByIndex("pendiente_ticket_img_inicio","id_ticket",IDBKeyRange.only(e))}getAllTicketPendienteImagesFinal(e){return this.dbService.getAllByIndex("pendiente_ticket_img_final","id_ticket",IDBKeyRange.only(e))}getallActividades(e){return this.dbService.getAllByIndex("actividades","Fecha",IDBKeyRange.only(e))}getallpersonal(){return this.dbService.getAll("personal")}getallTicketById(e){return this.dbService.getAllByIndex("tickets","actividad_id",IDBKeyRange.only(e))}getallWhat(){return this.dbService.getAll("what")}getallWhere(){return this.dbService.getAll("where")}getallWhy(){return this.dbService.getAll("why")}getallMateriales(){return this.dbService.getAll("materiales")}getallClassWorker(){return this.dbService.getAll("tipo_trabajo")}deleteStoreListActivities(){return this.dbService.clear("actividades")}deleteStoreListTickets(){return this.dbService.clear("actividades")}countRegister(){return this.dbService.count("actividades")}getOneTicket(e){return this.dbService.getByIndex("tickets","ticket_id",parseInt(e))}getAllTicketMaterial(e){return this.dbService.getAllByIndex("ticket_materiales","ticket_id",IDBKeyRange.only(parseInt(e)))}getAllTicketWorkers(e){return this.dbService.getAllByIndex("ticket_trabajadores","ticket_id",IDBKeyRange.only(parseInt(e)))}getAllTicketImages(e){return this.dbService.getAllByIndex("imagen_ticket","ticket_id",IDBKeyRange.only(parseInt(e)))}getAllMailProyect(e){return this.dbService.getAllByIndex("mail_proyect","Pro_ID",IDBKeyRange.only(parseInt(e)))}getAllMailContact(e){return this.dbService.getAllByIndex("mail_contac","Pro_ID",IDBKeyRange.only(parseInt(e)))}addNewTicketPendiente(e,t){return console.log(e),this.dbService.add("pendiente_ticket",{tipo:"nuevo",assignTicket:e.assignTicket,empleado_id:e.empleado_id,general_contractor:e.general_contractor,proyect:e.proyect,proyect_nombre:e.proyect_nombre,proyect_address:e.proyect_address,date_work:e.date_work,foreman_name:e.foreman_name,pco:e.pco,horario:e.horario,descripcion:e.descripcion,id_proyecto:e.id_proyecto,superintendente_name:e.superintendente_name,finish_date:e.finish_date,signarute_foreman:e.signarute_foreman,signature_superintendente:e.signature_superintendente,actividad_id:t})}addNewTicketMateriales(e,t){return this.dbService.addItem("pendiente_ticket_materiales",{id_material:e.id_material,descripcion:e.descripcion,unidad_medida:e.unidad_medida,cantidad:e.cantidad,id_ticket:t})}addNewTicketClassWorker(e,t){return this.dbService.addItem("pendiente_ticket_workers",{n_worker:e.n_worker,n_class_worker:e.n_class_worker,id_class_worker:e.id_class_worker,reg_hours:e.reg_hours,total_reg_hours:e.total_reg_hours,premium_hours:e.premium_hours,total_premium_hours:e.total_premium_hours,out_hours:e.out_hours,total_out_hours:e.total_out_hours,prepaid_hours:e.prepaid_hours,total_prepaid_hours:e.total_prepaid_hours,id_ticket:t})}addNewTicketImageFinal(e,t){return this.dbService.addItem("pendiente_ticket_img_final",{filepath:e.filepath,webviewPath:e.webviewPath,id_ticket:t})}addNewTicketImageInicio(e,t){return this.dbService.addItem("pendiente_ticket_img_inicio",{filepath:e.filepath,webviewPath:e.webviewPath,id_ticket:t})}}return e.\u0275fac=function(t){return new(t||e)(n.Ub(r.b))},e.\u0275prov=n.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},JbSX:function(e,t,i){"use strict";i.d(t,"a",function(){return c});var n=i("wEJo"),r=i("qULd"),a=i("iWo5");const c=(e,t)=>{let i,c;const s=(e,n,r)=>{if("undefined"==typeof document)return;const a=document.elementFromPoint(e,n);a&&t(a)?a!==i&&(l(),o(a,r)):l()},o=(e,t)=>{i=e,c||(c=i);const r=i;Object(n.f)(()=>r.classList.add("ion-activated")),t()},l=(e=!1)=>{if(!i)return;const t=i;Object(n.f)(()=>t.classList.remove("ion-activated")),e&&c!==i&&i.click(),i=void 0};return Object(a.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>s(e.currentX,e.currentY,r.a),onMove:e=>s(e.currentX,e.currentY,r.b),onEnd:()=>{l(!0),Object(r.e)(),c=void 0}})}},acej:function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return a});var n=i("1vRN");const r=async(e,t,i,r,a)=>{if(e)return e.attachViewToDom(t,i,a,r);if("string"!=typeof i&&!(i instanceof HTMLElement))throw new Error("framework delegate is missing");const c="string"==typeof i?t.ownerDocument&&t.ownerDocument.createElement(i):i;return r&&r.forEach(e=>c.classList.add(e)),a&&Object.assign(c,a),t.appendChild(c),await new Promise(e=>Object(n.c)(c,e)),c},a=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},h3R7:function(e,t,i){"use strict";i.d(t,"a",function(){return n});const n={bubbles:{dur:1e3,circles:9,fn:(e,t,i)=>{const n=e*t/i-e+"ms",r=2*Math.PI*t/i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(e,t,i)=>{const n=t/i,r=e*n-e+"ms",a=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/i-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/i-e+"ms"}})}}},qULd:function(e,t,i){"use strict";i.d(t,"a",function(){return a}),i.d(t,"b",function(){return c}),i.d(t,"c",function(){return r}),i.d(t,"d",function(){return o}),i.d(t,"e",function(){return s});const n={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const i=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:i})},notification(e){const t=this.getEngine();if(!t)return;const i=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},r=()=>{n.selection()},a=()=>{n.selectionStart()},c=()=>{n.selectionChanged()},s=()=>{n.selectionEnd()},o=e=>{n.impact(e)}}}]);