(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{gcOT:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return u}),n.d(t,"f",function(){return v}),n.d(t,"e",function(){return l});var r,i=function(e){return e.Prompt="PROMPT",e.Camera="CAMERA",e.Photos="PHOTOS",e}({}),o=function(e){return e.Rear="REAR",e.Front="FRONT",e}({}),s=function(e){return e.Uri="uri",e.Base64="base64",e.DataUrl="dataUrl",e}({}),a=function(e){return e.Documents="DOCUMENTS",e.Data="DATA",e.Cache="CACHE",e.External="EXTERNAL",e.ExternalStorage="EXTERNAL_STORAGE",e}({}),c=function(e){return e.Camera="camera",e.Photos="photos",e.Geolocation="geolocation",e.Notifications="notifications",e.ClipboardRead="clipboard-read",e.ClipboardWrite="clipboard-write",e.Microphone="microphone",e}({}),u=((r="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).Capacitor=r.Capacitor||new(function(){function e(){var e=this;this.platform="web",this.isNative=!1,this.Plugins={},"undefined"!=typeof Proxy&&(this.Plugins=new Proxy(this.Plugins,{get:function(t,n){if(void 0===t[n]){var r=e;return new Proxy({},{get:function(e,t){return void 0===e[t]?r.pluginMethodNoop.bind(r,e,t,n):e[t]}})}return t[n]}}))}return e.prototype.pluginMethodNoop=function(e,t,n){return Promise.reject(n+" does not have web implementation.")},e.prototype.getPlatform=function(){return this.platform},e.prototype.isPluginAvailable=function(e){return this.Plugins.hasOwnProperty(e)},e.prototype.convertFileSrc=function(e){return e},e.prototype.handleError=function(e){console.error(e)},e}())).Plugins,d=new(function(){function e(){this.plugins={},this.loadedPlugins={}}return e.prototype.addPlugin=function(e){this.plugins[e.config.name]=e},e.prototype.getPlugin=function(e){return this.plugins[e]},e.prototype.loadPlugin=function(e){var t=this.getPlugin(e);t?t.load():console.error("Unable to load web plugin "+e+", no such plugin found.")},e.prototype.getPlugins=function(){var e=[];for(var t in this.plugins)e.push(this.plugins[t]);return e},e}()),l=function(){function e(e,t){this.config=e,this.loaded=!1,this.listeners={},this.windowListeners={},t?t.addPlugin(this):d.addPlugin(this)}return e.prototype.addWindowListener=function(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0},e.prototype.removeWindowListener=function(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)},e.prototype.addListener=function(e,t){var n=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);var r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),{remove:function(){n.removeListener(e,t)}}},e.prototype.removeListener=function(e,t){var n=this.listeners[e];if(n){var r=n.indexOf(t);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}},e.prototype.removeAllListeners=function(){for(var e in this.listeners={},this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}},e.prototype.notifyListeners=function(e,t){var n=this.listeners[e];n&&n.forEach(function(e){return e(t)})},e.prototype.hasListeners=function(e){return!!this.listeners[e].length},e.prototype.registerWindowListener=function(e,t){var n=this;this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:function(e){n.notifyListeners(t,e)}}},e.prototype.requestPermissions=function(){return Capacitor.isNative?Capacitor.nativePromise(this.config.name,"requestPermissions",{}):Promise.resolve({results:[]})},e.prototype.load=function(){this.loaded=!0},e}(),p=function(e,t){e.hasOwnProperty(t.config.name)&&!function(e){return e.config.platforms&&e.config.platforms.indexOf(Capacitor.platform)>=0}(t)||(e[t.config.name]=t)},h=n("O1h7"),f=(new(function(e){function t(){return e.call(this,{name:"Accessibility",platforms:["web"]})||this}return Object(h.c)(t,e),t.prototype.isScreenReaderEnabled=function(){throw new Error("Feature not available in the browser")},t.prototype.speak=function(e){if(!("speechSynthesis"in window))return Promise.reject("Browser does not support the Speech Synthesis API");var t=new SpeechSynthesisUtterance(e.value);return e.language&&(t.lang=e.language),window.speechSynthesis.speak(t),Promise.resolve()},t}(l)),new(function(e){function t(){var t=e.call(this,{name:"App",platforms:["web"]})||this;return"undefined"!=typeof document&&document.addEventListener("visibilitychange",t.handleVisibilityChange.bind(t),!1),t}return Object(h.c)(t,e),t.prototype.exitApp=function(){throw new Error("Method not implemented.")},t.prototype.canOpenUrl=function(e){return Promise.resolve({value:!0})},t.prototype.openUrl=function(e){return Promise.resolve({completed:!0})},t.prototype.getLaunchUrl=function(){return Promise.resolve({url:""})},t.prototype.getState=function(){return Promise.resolve({isActive:!0!==document.hidden})},t.prototype.handleVisibilityChange=function(){var e={isActive:!0!==document.hidden};this.notifyListeners("appStateChange",e)},t}(l)),new(function(e){function t(){return e.call(this,{name:"Browser",platforms:["web"]})||this}return Object(h.c)(t,e),t.prototype.open=function(e){return Object(h.a)(this,void 0,void 0,function(){return Object(h.d)(this,function(t){return this._lastWindow=window.open(e.url,e.windowName||"_blank"),[2,Promise.resolve()]})})},t.prototype.prefetch=function(e){return Object(h.a)(this,void 0,void 0,function(){return Object(h.d)(this,function(e){return[2,Promise.resolve()]})})},t.prototype.close=function(){return Object(h.a)(this,void 0,void 0,function(){return Object(h.d)(this,function(e){return this._lastWindow&&this._lastWindow.close(),[2,Promise.resolve()]})})},t}(l)),new(function(e){function t(){return e.call(this,{name:"Camera",platforms:["web"]})||this}return Object(h.c)(t,e),t.prototype.getPhoto=function(e){return Object(h.a)(this,void 0,void 0,function(){var t=this;return Object(h.d)(this,function(n){return[2,new Promise(function(n,r){return Object(h.a)(t,void 0,void 0,function(){var t,i=this;return Object(h.d)(this,function(o){switch(o.label){case 0:return e.webUseInput?(this.fileInputExperience(e,n),[3,7]):[3,1];case 1:if(!customElements.get("pwa-camera-modal"))return[3,6];t=document.createElement("pwa-camera-modal"),document.body.appendChild(t),o.label=2;case 2:return o.trys.push([2,4,,5]),[4,t.componentOnReady()];case 3:return o.sent(),t.addEventListener("onPhoto",function(o){return Object(h.a)(i,void 0,void 0,function(){var i,s;return Object(h.d)(this,function(a){switch(a.label){case 0:return null!==(i=o.detail)?[3,1]:(r("User cancelled photos app"),[3,4]);case 1:return i instanceof Error?(r(i.message),[3,4]):[3,2];case 2:return s=n,[4,this._getCameraPhoto(i,e)];case 3:s.apply(void 0,[a.sent()]),a.label=4;case 4:return t.dismiss(),document.body.removeChild(t),[2]}})})}),t.present(),[3,5];case 4:return o.sent(),this.fileInputExperience(e,n),[3,5];case 5:return[3,7];case 6:console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements."),this.fileInputExperience(e,n),o.label=7;case 7:return[2]}})})})]})})},t.prototype.fileInputExperience=function(e,t){var n=document.querySelector("#_capacitor-camera-input"),r=function(){n.parentNode&&n.parentNode.removeChild(n)};n||((n=document.createElement("input")).id="_capacitor-camera-input",n.type="file",document.body.appendChild(n)),n.accept="image/*",n.capture=!0,e.source===i.Photos||e.source===i.Prompt?n.removeAttribute("capture"):e.direction===o.Front?n.capture="user":e.direction===o.Rear&&(n.capture="environment"),n.addEventListener("change",function(i){var o=n.files[0],a="jpeg";if("image/png"===o.type?a="png":"image/gif"===o.type&&(a="gif"),e.resultType===s.DataUrl||e.resultType===s.Base64){var c=new FileReader;c.addEventListener("load",function(){if(e.resultType===s.DataUrl)t({dataUrl:c.result,format:a});else if(e.resultType===s.Base64){var n=c.result.split(",")[1];t({base64String:n,format:a})}r()}),c.readAsDataURL(o)}else t({webPath:URL.createObjectURL(o),format:a}),r()}),n.click()},t.prototype._getCameraPhoto=function(e,t){return new Promise(function(n,r){var i=new FileReader,o=e.type.split("/")[1];t.resultType===s.Uri?n({webPath:URL.createObjectURL(e),format:o}):(i.readAsDataURL(e),i.onloadend=function(){var e=i.result;n(t.resultType===s.DataUrl?{dataUrl:e,format:o}:{base64String:e.split(",")[1],format:o})},i.onerror=function(e){r(e)})})},t}(l)),new(function(e){function t(){return e.call(this,{name:"Clipboard",platforms:["web"]})||this}return Object(h.c)(t,e),t.prototype.write=function(e){return Object(h.a)(this,void 0,void 0,function(){var t,n,r;return Object(h.d)(this,function(i){switch(i.label){case 0:return navigator.clipboard?void 0!==e.string||e.url?navigator.clipboard.writeText?[4,navigator.clipboard.writeText(void 0!==e.string?e.string:e.url)]:[2,Promise.reject("Writting to clipboard not supported in this browser")]:[3,2]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return i.sent(),[3,10];case 2:if(!e.image)return[3,9];if(!navigator.clipboard.write)return[2,Promise.reject("Setting images not supported in this browser")];i.label=3;case 3:return i.trys.push([3,7,,8]),[4,fetch(e.image)];case 4:return[4,i.sent().blob()];case 5:return t=i.sent(),n=new ClipboardItem(((r={})[t.type]=t,r)),[4,navigator.clipboard.write([n])];case 6:return i.sent(),[3,8];case 7:return i.sent(),[2,Promise.reject("Failed to write image")];case 8:return[3,10];case 9:return[2,Promise.reject("Nothing to write")];case 10:return[2,Promise.resolve()]}})})},t.prototype.read=function(){return Object(h.a)(this,void 0,void 0,function(){var e,t,n,r;return Object(h.d)(this,function(i){switch(i.label){case 0:return navigator.clipboard?navigator.clipboard.read?[3,1]:navigator.clipboard.readText?[2,this.readText()]:[2,Promise.reject("Reading from clipboard not supported in this browser")]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return i.trys.push([1,5,,6]),[4,navigator.clipboard.read()];case 2:return[4,(e=i.sent())[0].getType(t=e[0].types[0])];case 3:return n=i.sent(),[4,this._getBlobData(n,t)];case 4:return r=i.sent(),[2,Promise.resolve({value:r,type:t})];case 5:return i.sent(),[2,this.readText()];case 6:return[2]}})})},t.prototype.readText=function(){return Object(h.a)(this,void 0,void 0,function(){var e;return Object(h.d)(this,function(t){switch(t.label){case 0:return[4,navigator.clipboard.readText()];case 1:return e=t.sent(),[2,Promise.resolve({value:e,type:"text/plain"})]}})})},t.prototype._getBlobData=function(e,t){return new Promise(function(n,r){var i=new FileReader;t.includes("image")?i.readAsDataURL(e):i.readAsText(e),i.onloadend=function(){n(i.result)},i.onerror=function(e){r(e)}})},t}(l)),new(function(e){function t(){var t=e.call(this,{name:"Filesystem",platforms:["web"]})||this;return t.DEFAULT_DIRECTORY=a.Data,t.DB_VERSION=1,t.DB_NAME="Disc",t._writeCmds=["add","put","delete"],t}return Object(h.c)(t,e),t.prototype.initDb=function(){return Object(h.a)(this,void 0,void 0,function(){var e=this;return Object(h.d)(this,function(n){if(void 0!==this._db)return[2,this._db];if(!("indexedDB"in window))throw new Error("This browser doesn't support IndexedDB");return[2,new Promise(function(n,r){var i=indexedDB.open(e.DB_NAME,e.DB_VERSION);i.onupgradeneeded=t.doUpgrade,i.onsuccess=function(){e._db=i.result,n(i.result)},i.onerror=function(){return r(i.error)},i.onblocked=function(){console.warn("db blocked")}})]})})},t.doUpgrade=function(e){var t=e.target.result;switch(e.oldVersion){case 0:case 1:default:t.objectStoreNames.contains("FileStorage")&&t.deleteObjectStore("FileStorage"),t.createObjectStore("FileStorage",{keyPath:"path"}).createIndex("by_folder","folder")}},t.prototype.dbRequest=function(e,t){return Object(h.a)(this,void 0,void 0,function(){var n;return Object(h.d)(this,function(r){return n=-1!==this._writeCmds.indexOf(e)?"readwrite":"readonly",[2,this.initDb().then(function(r){return new Promise(function(i,o){var s=r.transaction(["FileStorage"],n).objectStore("FileStorage"),a=s[e].apply(s,t);a.onsuccess=function(){return i(a.result)},a.onerror=function(){return o(a.error)}})})]})})},t.prototype.dbIndexRequest=function(e,t,n){return Object(h.a)(this,void 0,void 0,function(){var r;return Object(h.d)(this,function(i){return r=-1!==this._writeCmds.indexOf(t)?"readwrite":"readonly",[2,this.initDb().then(function(i){return new Promise(function(o,s){var a=i.transaction(["FileStorage"],r).objectStore("FileStorage").index(e),c=a[t].apply(a,n);c.onsuccess=function(){return o(c.result)},c.onerror=function(){return s(c.error)}})})]})})},t.prototype.getPath=function(e,t){e=e||this.DEFAULT_DIRECTORY;var n=void 0!==t?t.replace(/^[/]+|[/]+$/g,""):"",r="/"+e;return""!==t&&(r+="/"+n),r},t.prototype.clear=function(){return Object(h.a)(this,void 0,void 0,function(){return Object(h.d)(this,function(e){switch(e.label){case 0:return[4,this.initDb()];case 1:return e.sent().transaction(["FileStorage"],"readwrite").objectStore("FileStorage").clear(),[2,{}]}})})},t.prototype.readFile=function(e){return Object(h.a)(this,void 0,void 0,function(){var t,n;return Object(h.d)(this,function(r){switch(r.label){case 0:return t=this.getPath(e.directory,e.path),[4,this.dbRequest("get",[t])];case 1:if(void 0===(n=r.sent()))throw Error("File does not exist.");return[2,{data:n.content}]}})})},t.prototype.writeFile=function(e){return Object(h.a)(this,void 0,void 0,function(){var t,n,r,i,o,s,a,c,u,d;return Object(h.d)(this,function(l){switch(l.label){case 0:return t=this.getPath(e.directory,e.path),n=e.data,r=e.recursive,[4,this.dbRequest("get",[t])];case 1:if((i=l.sent())&&"directory"===i.type)throw"The supplied path is a directory.";return o=e.encoding,s=t.substr(0,t.lastIndexOf("/")),[4,this.dbRequest("get",[s])];case 2:return void 0!==l.sent()||-1===(a=s.indexOf("/",1))?[3,4]:(c=s.substr(a),[4,this.mkdir({path:c,directory:e.directory,recursive:r})]);case 3:l.sent(),l.label=4;case 4:return u=Date.now(),d={path:t,folder:s,type:"file",size:n.length,ctime:u,mtime:u,content:!o&&n.indexOf(",")>=0?n.split(",")[1]:n},[4,this.dbRequest("put",[d])];case 5:return l.sent(),[2,{uri:d.path}]}})})},t.prototype.appendFile=function(e){return Object(h.a)(this,void 0,void 0,function(){var t,n,r,i,o,s,a,c;return Object(h.d)(this,function(u){switch(u.label){case 0:return t=this.getPath(e.directory,e.path),n=e.data,r=t.substr(0,t.lastIndexOf("/")),i=Date.now(),o=i,[4,this.dbRequest("get",[t])];case 1:if((s=u.sent())&&"directory"===s.type)throw"The supplied path is a directory.";return[4,this.dbRequest("get",[r])];case 2:return void 0!==u.sent()||-1===(a=r.indexOf("/",1))?[3,4]:(c=r.substr(a),[4,this.mkdir({path:c,directory:e.directory,recursive:!0})]);case 3:u.sent(),u.label=4;case 4:return void 0!==s&&(n=s.content+n,o=s.ctime),[4,this.dbRequest("put",[{path:t,folder:r,type:"file",size:n.length,ctime:o,mtime:i,content:n}])];case 5:return u.sent(),[2,{}]}})})},t.prototype.deleteFile=function(e){return Object(h.a)(this,void 0,void 0,function(){var t;return Object(h.d)(this,function(n){switch(n.label){case 0:return t=this.getPath(e.directory,e.path),[4,this.dbRequest("get",[t])];case 1:if(void 0===n.sent())throw Error("File does not exist.");return[4,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(t)])];case 2:if(0!==n.sent().length)throw Error("Folder is not empty.");return[4,this.dbRequest("delete",[t])];case 3:return n.sent(),[2,{}]}})})},t.prototype.mkdir=function(e){return Object(h.a)(this,void 0,void 0,function(){var t,n,r,i,o,s,a,c;return Object(h.d)(this,function(u){switch(u.label){case 0:return t=this.getPath(e.directory,e.path),n=e.recursive,r=t.substr(0,t.lastIndexOf("/")),i=(t.match(/\//g)||[]).length,[4,this.dbRequest("get",[r])];case 1:return o=u.sent(),[4,this.dbRequest("get",[t])];case 2:if(s=u.sent(),1===i)throw Error("Cannot create Root directory");if(void 0!==s)throw Error("Current directory does already exist.");if(!n&&2!==i&&void 0===o)throw Error("Parent directory must exist");return n&&2!==i&&void 0===o?(a=r.substr(r.indexOf("/",1)),[4,this.mkdir({path:a,directory:e.directory,recursive:n})]):[3,4];case 3:u.sent(),u.label=4;case 4:return c=Date.now(),[4,this.dbRequest("put",[{path:t,folder:r,type:"directory",size:0,ctime:c,mtime:c}])];case 5:return u.sent(),[2,{}]}})})},t.prototype.rmdir=function(e){return Object(h.a)(this,void 0,void 0,function(){var t,n,r,i,o,s,a,c,u;return Object(h.d)(this,function(d){switch(d.label){case 0:return r=e.recursive,i=this.getPath(n=e.directory,t=e.path),[4,this.dbRequest("get",[i])];case 1:if(void 0===(o=d.sent()))throw Error("Folder does not exist.");if("directory"!==o.type)throw Error("Requested path is not a directory");return[4,this.readdir({path:t,directory:n})];case 2:if(0!==(s=d.sent()).files.length&&!r)throw Error("Folder is not empty");a=0,c=s.files,d.label=3;case 3:return a<c.length?[4,this.stat({path:u=t+"/"+c[a],directory:n})]:[3,9];case 4:return"file"!==d.sent().type?[3,6]:[4,this.deleteFile({path:u,directory:n})];case 5:return d.sent(),[3,8];case 6:return[4,this.rmdir({path:u,directory:n,recursive:r})];case 7:d.sent(),d.label=8;case 8:return a++,[3,3];case 9:return[4,this.dbRequest("delete",[i])];case 10:return d.sent(),[2,{}]}})})},t.prototype.readdir=function(e){return Object(h.a)(this,void 0,void 0,function(){var t,n;return Object(h.d)(this,function(r){switch(r.label){case 0:return t=this.getPath(e.directory,e.path),[4,this.dbRequest("get",[t])];case 1:if(n=r.sent(),""!==e.path&&void 0===n)throw Error("Folder does not exist.");return[4,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(t)])];case 2:return[2,{files:r.sent().map(function(e){return e.substring(t.length+1)})}]}})})},t.prototype.getUri=function(e){return Object(h.a)(this,void 0,void 0,function(){var t,n;return Object(h.d)(this,function(r){switch(r.label){case 0:return t=this.getPath(e.directory,e.path),[4,this.dbRequest("get",[t])];case 1:return void 0!==(n=r.sent())?[3,3]:[4,this.dbRequest("get",[t+"/"])];case 2:n=r.sent(),r.label=3;case 3:if(void 0===n)throw Error("Entry does not exist.");return[2,{uri:n.path}]}})})},t.prototype.stat=function(e){return Object(h.a)(this,void 0,void 0,function(){var t,n;return Object(h.d)(this,function(r){switch(r.label){case 0:return t=this.getPath(e.directory,e.path),[4,this.dbRequest("get",[t])];case 1:return void 0!==(n=r.sent())?[3,3]:[4,this.dbRequest("get",[t+"/"])];case 2:n=r.sent(),r.label=3;case 3:if(void 0===n)throw Error("Entry does not exist.");return[2,{type:n.type,size:n.size,ctime:n.ctime,mtime:n.mtime,uri:n.path}]}})})},t.prototype.rename=function(e){return Object(h.a)(this,void 0,void 0,function(){return Object(h.d)(this,function(t){return[2,this._copy(e,!0)]})})},t.prototype.copy=function(e){return Object(h.a)(this,void 0,void 0,function(){return Object(h.d)(this,function(t){return[2,this._copy(e,!1)]})})},t.prototype._copy=function(e,t){return void 0===t&&(t=!1),Object(h.a)(this,void 0,void 0,function(){var n,r,i,o,s,a,c,u,d,l,p,f,v,m,b,w,y=this;return Object(h.d)(this,function(g){switch(g.label){case 0:if(r=e.from,i=e.directory,o=e.toDirectory,!(n=e.to)||!r)throw Error("Both to and from must be provided");if(o||(o=i),s=this.getPath(i,r),a=this.getPath(o,n),s===a)return[2,{}];if(a.startsWith(s))throw Error("To path cannot contain the from path");g.label=1;case 1:return g.trys.push([1,3,,6]),[4,this.stat({path:n,directory:o})];case 2:return c=g.sent(),[3,6];case 3:return g.sent(),(u=n.split("/")).pop(),d=u.join("/"),u.length>0?[4,this.stat({path:d,directory:o})]:[3,5];case 4:if("directory"!==g.sent().type)throw new Error("Parent directory of the to path is a file");g.label=5;case 5:return[3,6];case 6:if(c&&"directory"===c.type)throw new Error("Cannot overwrite a directory with a file");return[4,this.stat({path:r,directory:i})];case 7:switch(l=g.sent(),p=function(e,t,n){return Object(h.a)(y,void 0,void 0,function(){var r,i;return Object(h.d)(this,function(s){switch(s.label){case 0:return r=this.getPath(o,e),[4,this.dbRequest("get",[r])];case 1:return(i=s.sent()).ctime=t,i.mtime=n,[4,this.dbRequest("put",[i])];case 2:return s.sent(),[2]}})})},l.type){case"file":return[3,8];case"directory":return[3,15]}return[3,28];case 8:return[4,this.readFile({path:r,directory:i})];case 9:return f=g.sent(),t?[4,this.deleteFile({path:r,directory:i})]:[3,11];case 10:g.sent(),g.label=11;case 11:return[4,this.writeFile({path:n,directory:o,data:f.data})];case 12:return g.sent(),t?[4,p(n,l.ctime,l.mtime)]:[3,14];case 13:g.sent(),g.label=14;case 14:return[2,{}];case 15:if(c)throw Error("Cannot move a directory over an existing object");g.label=16;case 16:return g.trys.push([16,20,,21]),[4,this.mkdir({path:n,directory:o,recursive:!1})];case 17:return g.sent(),t?[4,p(n,l.ctime,l.mtime)]:[3,19];case 18:g.sent(),g.label=19;case 19:return[3,21];case 20:return g.sent(),[3,21];case 21:return[4,this.readdir({path:r,directory:i})];case 22:v=g.sent().files,m=0,b=v,g.label=23;case 23:return m<b.length?[4,this._copy({from:r+"/"+(w=b[m]),to:n+"/"+w,directory:i,toDirectory:o},t)]:[3,26];case 24:g.sent(),g.label=25;case 25:return m++,[3,23];case 26:return t?[4,this.rmdir({path:r,directory:i})]:[3,28];case 27:g.sent(),g.label=28;case 28:return[2,{}]}})})},t._debug=!0,t}(l)),function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.forEach(function(t){if(t&&"object"==typeof t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}),e});new(function(e){function t(){return e.call(this,{name:"Geolocation",platforms:["web"]})||this}return Object(h.c)(t,e),t.prototype.getCurrentPosition=function(e){var t=this;return new Promise(function(n,r){return t.requestPermissions().then(function(t){window.navigator.geolocation.getCurrentPosition(function(e){n(e)},function(e){r(e)},f({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},e))})})},t.prototype.watchPosition=function(e,t){return""+window.navigator.geolocation.watchPosition(function(e){t(e)},function(e){t(null,e)},f({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},e))},t.prototype.clearWatch=function(e){return window.navigator.geolocation.clearWatch(parseInt(e.id,10)),Promise.resolve()},t}(l)),new(function(e){function t(){return e.call(this,{name:"Device",platforms:["web"]})||this}return Object(h.c)(t,e),t.prototype.getInfo=function(){return Object(h.a)(this,void 0,void 0,function(){var e,t;return Object(h.d)(this,function(n){return e=navigator.userAgent,t=this.parseUa(e),[2,Promise.resolve({model:t.model,platform:"web",appVersion:"",appBuild:"",appId:"",appName:"",operatingSystem:t.operatingSystem,osVersion:t.osVersion,manufacturer:navigator.vendor,isVirtual:!1,uuid:this.getUid()})]})})},t.prototype.getBatteryInfo=function(){return Object(h.a)(this,void 0,void 0,function(){var e;return Object(h.d)(this,function(t){switch(t.label){case 0:e={},t.label=1;case 1:return t.trys.push([1,3,,4]),[4,navigator.getBattery()];case 2:return e=t.sent(),[3,4];case 3:return t.sent(),[3,4];case 4:return[2,Promise.resolve({batteryLevel:e.level,isCharging:e.charging})]}})})},t.prototype.getLanguageCode=function(){return Object(h.a)(this,void 0,void 0,function(){return Object(h.d)(this,function(e){return[2,{value:navigator.language}]})})},t.prototype.parseUa=function(e){var t={},n=e.indexOf("(")+1,r=e.indexOf(") AppleWebKit");-1!==e.indexOf(") Gecko")&&(r=e.indexOf(") Gecko"));var i=e.substring(n,r);if(-1!==e.indexOf("Android"))t.model=i.replace("; wv","").split("; ").pop().split(" Build")[0],t.osVersion=i.split("; ")[1];else if(t.model=i.split("; ")[0],navigator.oscpu)t.osVersion=navigator.oscpu;else if(-1!==e.indexOf("Windows"))t.osVersion=i;else{var o=i.split("; ").pop().replace(" like Mac OS X","").split(" ");t.osVersion=o[o.length-1].replace(/_/g,".")}return t.operatingSystem=/android/i.test(e)?"android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"ios":/Win/.test(e)?"windows":/Mac/i.test(e)?"mac":"unknown",t},t.prototype.getUid=function(){var e=window.localStorage.getItem("_capuid");return e||(e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),window.localStorage.setItem("_capuid",e),e)},t}(l)),new(function(e){function t(){var t=e.call(this,{name:"LocalNotifications",platforms:["web"]})||this;return t.pending=[],t}return Object(h.c)(t,e),t.prototype.createChannel=function(e){throw new Error("Feature not available in the browser. "+e.id)},t.prototype.deleteChannel=function(e){throw new Error("Feature not available in the browser. "+e.id)},t.prototype.listChannels=function(){throw new Error("Feature not available in the browser")},t.prototype.sendPending=function(){var e=this,t=[],n=+new Date;this.pending.forEach(function(r){r.schedule&&r.schedule.at&&+r.schedule.at<=n&&(e.buildNotification(r),t.push(r))}),console.log("Sent pending, removing",t),this.pending=this.pending.filter(function(e){return!t.find(function(t){return t===e})})},t.prototype.sendNotification=function(e){var t=this,n=e;if(e.schedule&&e.schedule.at){var r=+e.schedule.at-+new Date;return this.pending.push(n),void setTimeout(function(){t.sendPending()},r)}this.buildNotification(e)},t.prototype.buildNotification=function(e){return new Notification(e.title,{body:e.body})},t.prototype.schedule=function(e){var t=this,n=[];return e.notifications.forEach(function(e){n.push(t.sendNotification(e))}),Promise.resolve({notifications:e.notifications.map(function(e){return{id:""+e.id}})})},t.prototype.getPending=function(){return Promise.resolve({notifications:this.pending.map(function(e){return{id:""+e.id}})})},t.prototype.registerActionTypes=function(e){throw new Error("Method not implemented.")},t.prototype.cancel=function(e){return console.log("Cancel these",e),this.pending=this.pending.filter(function(t){return!e.notifications.find(function(e){return e.id===""+t.id})}),Promise.resolve()},t.prototype.areEnabled=function(){return Promise.resolve({value:"granted"===Notification.permission})},t.prototype.requestPermission=function(){return new Promise(function(e){Notification.requestPermission(function(t){var n=!0;"denied"!==t&&"default"!==t||(n=!1),e({granted:n})})})},t.prototype.requestPermissions=function(){return new Promise(function(e,t){Notification.requestPermission(function(n){"denied"!==n&&"default"!==n?e({results:[n]}):t(n)})})},t}(l)),new(function(e){function t(){return e.call(this,{name:"Share",platforms:["web"]})||this}return Object(h.c)(t,e),t.prototype.share=function(e){return navigator.share?navigator.share({title:e.title,text:e.text,url:e.url}):Promise.reject("Web Share API not available")},t}(l)),new(function(e){function t(){return e.call(this,{name:"Modals",platforms:["web"]})||this}return Object(h.c)(t,e),t.prototype.alert=function(e){return Object(h.a)(this,void 0,void 0,function(){return Object(h.d)(this,function(t){return window.alert(e.message),[2,Promise.resolve()]})})},t.prototype.prompt=function(e){return Object(h.a)(this,void 0,void 0,function(){var t;return Object(h.d)(this,function(n){return t=window.prompt(e.message,e.inputText||""),[2,Promise.resolve({value:t,cancelled:null===t})]})})},t.prototype.confirm=function(e){return Object(h.a)(this,void 0,void 0,function(){var t;return Object(h.d)(this,function(n){return t=window.confirm(e.message),[2,Promise.resolve({value:t})]})})},t.prototype.showActions=function(e){return Object(h.a)(this,void 0,void 0,function(){var t=this;return Object(h.d)(this,function(n){return[2,new Promise(function(n,r){return Object(h.a)(t,void 0,void 0,function(){var t,r=this;return Object(h.d)(this,function(i){return(t=document.querySelector("pwa-action-sheet"))||(t=document.createElement("pwa-action-sheet"),document.body.appendChild(t)),t.header=e.title,t.cancelable=!1,t.options=e.options,t.addEventListener("onSelection",function(e){return Object(h.a)(r,void 0,void 0,function(){return Object(h.d)(this,function(t){return n({index:e.detail}),[2]})})}),[2]})})})]})})},t}(l)),new(function(e){function t(){var t=e.call(this,{name:"Motion"})||this;return t.registerWindowListener("devicemotion","accel"),t.registerWindowListener("deviceorientation","orientation"),t}return Object(h.c)(t,e),t}(l)),new(function(e){function t(){var t=e.call(this,{name:"Network",platforms:["web"]})||this;return t.listenerFunction=null,t}return Object(h.c)(t,e),t.prototype.getStatus=function(){return new Promise(function(e,t){if(window.navigator){var n=window.navigator.onLine,r=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection;e({connected:n,connectionType:n?r?r.type||r.effectiveType:"wifi":"none"})}else t("Network info not available")})},t.prototype.addListener=function(e,t){var n=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection,r=t.bind(this,{connected:!0,connectionType:n?n.type||n.effectiveType:"wifi"}),i=t.bind(this,{connected:!1,connectionType:"none"});if(0===e.localeCompare("networkStatusChange"))return window.addEventListener("online",r),window.addEventListener("offline",i),{remove:function(){window.removeEventListener("online",r),window.removeEventListener("offline",i)}}},t}(l)),new(function(e){function t(){return e.call(this,{name:"Permissions"})||this}return Object(h.c)(t,e),t.prototype.query=function(e){return Object(h.a)(this,void 0,void 0,function(){var t;return Object(h.d)(this,function(n){switch(n.label){case 0:return(t=window.navigator).permissions?[4,t.permissions.query({name:e.name===c.Photos?"camera":e.name})]:[2,Promise.reject("This browser does not support the Permissions API")];case 1:return[2,{state:n.sent().state}]}})})},t}(l)),new(function(e){function t(){return e.call(this,{name:"SplashScreen",platforms:["web"]})||this}return Object(h.c)(t,e),t.prototype.show=function(e,t){return Promise.resolve()},t.prototype.hide=function(e,t){return Promise.resolve()},t}(l)),new(function(e){function t(){var t=e.call(this,{name:"Storage",platforms:["web"]})||this;return t.KEY_PREFIX="_cap_",t}return Object(h.c)(t,e),t.prototype.get=function(e){var t=this;return new Promise(function(n,r){n({value:window.localStorage.getItem(t.makeKey(e.key))})})},t.prototype.set=function(e){var t=this;return new Promise(function(n,r){window.localStorage.setItem(t.makeKey(e.key),e.value),n()})},t.prototype.remove=function(e){var t=this;return new Promise(function(n,r){window.localStorage.removeItem(t.makeKey(e.key)),n()})},t.prototype.keys=function(){var e=this;return new Promise(function(t,n){t({keys:Object.keys(localStorage).filter(function(t){return e.isKey(t)}).map(function(t){return e.getKey(t)})})})},t.prototype.clear=function(){var e=this;return new Promise(function(t,n){Object.keys(localStorage).filter(function(t){return e.isKey(t)}).forEach(function(e){return window.localStorage.removeItem(e)}),t()})},t.prototype.makeKey=function(e){return this.KEY_PREFIX+e},t.prototype.isKey=function(e){return 0===e.indexOf(this.KEY_PREFIX)},t.prototype.getKey=function(e){return e.substr(this.KEY_PREFIX.length)},t}(l)),new(function(e){function t(){return e.call(this,{name:"Toast",platforms:["web"]})||this}return Object(h.c)(t,e),t.prototype.show=function(e){return Object(h.a)(this,void 0,void 0,function(){var t,n;return Object(h.d)(this,function(r){return t=2e3,e.duration&&(t="long"===e.duration?3500:2e3),(n=document.createElement("pwa-toast")).duration=t,n.message=e.text,document.body.appendChild(n),[2]})})},t}(l)),function(e){for(var t=0,n=d.getPlugins();t<n.length;t++)p(e,n[t])}(u);var v=function(e){p(u,e)}}}]);