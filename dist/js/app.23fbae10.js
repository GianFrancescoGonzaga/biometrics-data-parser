(function(t){function e(e){for(var r,a,u=e[0],s=e[1],c=e[2],l=0,f=[];l<u.length;l++)a=u[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function u(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"270c4115"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"8d6bbfd2"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],l=c.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(t),c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[t]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"topnav"},[n("router-link",{attrs:{to:"/",tag:"a"}},[t._v("Home")]),n("router-link",{attrs:{to:"/recent",tag:"a"}},[t._v("Open Saved")])],1),n("br"),n("div",{staticClass:"container12"},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1),n("div",{class:{show:t.snackbar},attrs:{id:"snackbar"}},[t._v(t._s(t.text))])])},o=[],i={data:function(){return{snackbar:!1,text:""}},methods:{showSnackbar:function(){var t=this;this.snackbar=!0,setTimeout(function(){t.snackbar=!1},3e3)}},created:function(){var t=this;this.$on("Snackbar",function(e){t.text=e,t.showSnackbar()}),this.$root.$baseURL=location.hostname,console.log(this.$root.$baseURL)}},u=i,s=(n("034f"),n("2877")),c=Object(s["a"])(u,a,o,!1,null,null,null),l=c.exports,f=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("Select .dat file")]),n("br"),t.dat?t._e():n("label",{staticClass:"upload_label",attrs:{for:"upload"}},[t._v("Upload File")]),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:"upload",type:"file",accept:".dat"},on:{change:t.onFileChange}}),n("br"),n("button",{directives:[{name:"show",rawName:"v-show",value:t.dat,expression:"dat"}],staticClass:"success",on:{click:t.save}},[t._v("Save")]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.dat,expression:"dat"}],staticClass:"warning",on:{click:t.refresh}},[t._v("Upload File Again")]),n("br"),n("br"),n("textarea",{directives:[{name:"show",rawName:"v-show",value:t.dat,expression:"dat"},{name:"model",rawName:"v-model",value:t.dat,expression:"dat"}],attrs:{name:"",id:"",cols:"100",rows:"20"},domProps:{value:t.dat},on:{input:function(e){e.target.composing||(t.dat=e.target.value)}}})])},p=[],h=n("b6d0"),v=n.n(h),m=(n("28a5"),n("7514"),n("ac6a"),n("6b54"),n("bc3a")),b=n.n(m),g=(n("5118"),{data:function(){return{dat:""}},computed:{formattedStr:function(){return this.sortData(this.dat)},users:function(){var t=this,e=this.getUserIDs(this.formattedStr);return e.map(function(e){var n=t.generateDtr(e);return{userID:e,name:"",dtr:n}})}},methods:{refresh:function(){location.reload()},save:function(){var t=this,e=prompt("Enter the name of the file");e&&(b.a.post("http://localhost:3000/Users",{id:Math.random().toString(16).slice(2),saveName:e,data:this.users}).then(function(e){t.$parent.$emit("Snackbar","Saved '".concat(e.data.saveName,"'"))}).catch(function(t){throw t}),this.$router.push("/recent"))},removeArrayDuplicates:function(t){var e=t.filter(function(t,e,n){return e==n.indexOf(t)});return e},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.createFile(e[0])},createFile:function(t){var e=new FileReader,n=this;e.onload=function(t){n.dat=t.target.result},e.readAsText(t)},getUserIDs:function(t){if(0===t.length)return[];var e=t.map(function(t){return t[0]});return this.removeArrayDuplicates(e)},getUserDates:function(t){var e=[];return this.formattedStr.forEach(function(n){n[0]===t&&e.push(n[1])}),e},generateDtr:function(t){var e=this.getUserDates(t),n=[];this.formattedStr.forEach(function(e){e[0]===t&&n.push(e)});var r=[];return e.forEach(function(t){var e=n.filter(function(e){return t===e[1]}),a={date:e[0][1],morningIn:e.find(function(t){return"0"==t[4]}),morningOut:e.find(function(t){return"1"==t[4]}),noonIn:e.find(function(t){return"3"==t[4]}),noonOut:e.find(function(t){return"2"==t[4]})};a.morningIn&&(a.morningIn=a.morningIn[2]),a.morningOut&&(a.morningOut=a.morningOut[2]),a.noonIn&&(a.noonIn=a.noonIn[2]),a.noonOut&&(a.noonOut=a.noonOut[2]),r.push(a)}),this.removeDuplicatesBy(function(t){return t.date},r)},sortData:function(t){if(""===t)return[];var e=t.split("\n").map(function(t){return t.trim().split(" ")}),n=e.map(function(t){var e=t[0]+"\t"+t[1],n=e.split("\t");return n});return n},removeDuplicatesBy:function(t,e){var n=new v.a;return e.filter(function(e){var r=t(e),a=!n.has(r);return a&&n.add(r),a})}}}),w=g,y=(n("cccb"),Object(s["a"])(w,d,p,!1,null,null,null)),O=y.exports;r["a"].use(f["a"]);var S=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"2679"))}},{path:"/edit",name:"edit",component:function(){return n.e("about").then(n.bind(null,"1071"))}},{path:"/recent",name:"recent",component:function(){return n.e("about").then(n.bind(null,"7413"))}},{path:"/dtr",name:"dtr",component:function(){return n.e("about").then(n.bind(null,"5844"))}}]}),k=n("2f62");r["a"].use(k["a"]);var x=new k["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:S,store:x,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){},cccb:function(t,e,n){"use strict";var r=n("d563"),a=n.n(r);a.a},d563:function(t,e,n){}});
//# sourceMappingURL=app.23fbae10.js.map