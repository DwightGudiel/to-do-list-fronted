(()=>{var e={};e.id=69,e.ids=[69],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},1246:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c});var s=r(482),a=r(9108),n=r(2563),i=r.n(n),o=r(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["usuarios",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6763)),"/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/app/usuarios/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,1965)),"/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],u=["/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/app/usuarios/page.jsx"],d="/usuarios/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/usuarios/page",pathname:"/usuarios",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1240:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},4563:(e,t,r)=>{Promise.resolve().then(r.bind(r,1208))},8298:(e,t,r)=>{Promise.resolve().then(r.bind(r,6571))},5366:function(e,t,r){"use strict";var s=this&&this.__assign||function(){return(s=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,r,s){void 0===s&&(s=r);var a=Object.getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,s,a)}:function(e,t,r,s){void 0===s&&(s=r),e[s]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},o=this&&this.__rest||function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)0>t.indexOf(s[a])&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(r[s[a]]=e[s[a]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var l=i(r(3729)),c=r(9663),u=(0,r(9946).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,r=e.color,a=void 0===r?"#000000":r,n=e.speedMultiplier,i=e.cssOverride,d=e.size,p=void 0===d?35:d,m=o(e,["loading","color","speedMultiplier","cssOverride","size"]),x=s({background:"transparent !important",width:(0,c.cssValue)(p),height:(0,c.cssValue)(p),borderRadius:"100%",border:"2px solid",borderTopColor:a,borderBottomColor:"transparent",borderLeftColor:a,borderRightColor:a,display:"inline-block",animation:"".concat(u," ").concat(.75/(void 0===n?1:n),"s 0s infinite linear"),animationFillMode:"both"},void 0===i?{}:i);return void 0===t||t?l.createElement("span",s({style:x},m)):null}},9946:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0,t.createAnimation=function(e,t,r){return"react-spinners-".concat(e,"-").concat(r)}},9663:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function s(e){if("number"==typeof e)return{value:e,unit:"px"};var t,s=(e.match(/^[0-9.]*/)||"").toString();t=s.includes(".")?parseFloat(s):parseInt(s,10);var a=(e.match(/[^0-9]*$/)||"").toString();return r[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=s,t.cssValue=function(e){var t=s(e);return"".concat(t.value).concat(t.unit)}},6885:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(2295),a=r(783),n=r.n(a),i=r(2254),o=r(1356),l=r(9450),c=r(7088),u=r(822),d=r(9578);let p=function(){let e=(0,i.useRouter)(),t=JSON.parse((0,o.getCookie)("usuario")),r=[{title:"Mis Tareas",src:l.Z,path:"/mis-tareas"},{title:"Usuarios",src:c.Z,path:"/usuarios"},{title:"Administrar",src:u.Z,path:"/admin"}];return s.jsx("aside",{className:"md:w-1/10 p-5 pt-8 relative duration-300 bg-blue-600 px-5 py-10 md:overflow-y-auto md:h-screen",children:(0,s.jsxs)("header",{className:"flex flex-col justify-between h-full",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-x-4 justify-center items-center py-3",children:[s.jsx("h1",{className:"text-white origin-left font-medium text-xl duration-200 ",children:"PWG"}),s.jsx("nav",{className:"flex flex-col justify-center py-3",children:r.map((e,r)=>s.jsx("div",{children:t?.role==="administrador"&&"Mis Tareas"!==e.title||t?.role==="colaborador"&&"Mis Tareas"===e.title?s.jsx(n(),{href:e.path,className:"w-full my-4 rounded-md p-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600 flex items-center text-white",children:s.jsx(e.src,{className:"h-6 w-6"})},r):null},r))})]}),s.jsx("button",{onClick:()=>{(0,o.deleteCookie)("_token"),(0,o.deleteCookie)("usuario"),e.push("/")},className:"flex text-sm gap-x-4 items-center justify-center cursor-pointer text-white p-2 rounded-sm transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600",children:s.jsx(d.Z,{className:"w-8 h-8"})})]})})};var m=r(3729);let x=function({children:e}){let[t,r]=(0,m.useState)(null),a=(0,i.useRouter)();return(0,m.useEffect)(()=>{let e=(0,o.getCookie)("_token");r(e),e||a.push("/")},[a]),s.jsx(s.Fragment,{children:t?(0,s.jsxs)("div",{className:"md:flex md:min-h-screen",children:[s.jsx(p,{}),s.jsx("main",{className:"md:w-full md:h-screen overflow-auto p-10",children:e})]}):s.jsx("main",{className:"flex justify-center items-center min-h-screen",children:(0,s.jsxs)("div",{className:"p-6",children:[s.jsx("h1",{className:"text-center text-4xl font-black text-gray-700",children:"Cargando P\xe1gina..."}),s.jsx("div",{className:"mt-4 flex justify-center",children:s.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"})})]})})})}},6571:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var s=r(2295),a=r(3729),n=r(6885),i=r(754);let o=a.forwardRef(function({title:e,titleId:t,...r},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z",clipRule:"evenodd"}))});var l=r(5366),c=r.n(l);let u=function({data:e,loading:t,headers:r,columns:a,handleDelete:n,handleUpdate:l}){let u=e=>{l&&l(e)},d=e=>{n&&n(e)};return 0===e.length?s.jsx(s.Fragment,{children:t?s.jsx("div",{className:"flex items-center justify-center h-20",children:s.jsx(c(),{loading:t})}):s.jsx("p",{className:"text-center font-black text-2xl text-gray-700",children:"No hay datos"})}):s.jsx(s.Fragment,{children:t?s.jsx("div",{className:"flex items-center justify-center h-20",children:s.jsx(c(),{loading:t})}):(0,s.jsxs)("table",{className:"w-full text-sm text-left",children:[s.jsx("thead",{className:"text-sm uppercase bg-blue-500 text-white",children:(0,s.jsxs)("tr",{children:[r.map(e=>s.jsx("th",{scope:"col",className:"px-6 py-3",children:e.label},e.key)),s.jsx("th",{scope:"col",className:"px-6 py-3",children:"Acciones"})]})}),s.jsx("tbody",{children:e.map(e=>(0,s.jsxs)("tr",{className:"hover:bg-gray-100 border ",children:[a.map(t=>s.jsx("td",{className:"px-6 py-4",children:t.render(e)},t.key)),(0,s.jsxs)("td",{className:"px-6 py-4 flex justify-start gap-x-4",children:[(0,s.jsxs)("button",{className:"font-medium text-blue-600 hover:underline",onClick:()=>u(e.id),children:[s.jsx(i.Z,{className:"h-6 w-6"})," "]}),(0,s.jsxs)("button",{className:"ml-2 font-medium text-blue-600",onClick:()=>d(e.id),children:[s.jsx(o,{className:"h-6 w-6"})," "]})]})]},e.id))})]})})};var d=r(3608);let p=function({children:e,onClick:t}){return s.jsx("button",{type:"button",className:"px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:t,children:e})};var m=r(7884),x=r(4162);let h=a.forwardRef(function({title:e,titleId:t,...r},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z",clipRule:"evenodd"}))});var f=r(1208),b=r(1356),g=r(2254);let v=function(){let[e,t]=(0,a.useState)(!1),[r,i]=(0,a.useState)([]),[o,l]=(0,a.useState)(!1),[c,v]=(0,a.useState)({}),[j,y]=(0,a.useState)(!1),w=(0,g.useRouter)(),N=(0,b.getCookie)("usuario"),_=[{name:"name",placeholder:"Nombre de usuario",type:"text",...j?{}:{required:"El nombre de usuario es requerido",pattern:{value:/^(?!\s+$).+/,message:"El nombre no puede contener solo espacios en blanco"}}},{name:"email",placeholder:"Correo electr\xf3nico",type:"email",...j?{}:{required:"El correo electr\xf3nico es requerido",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Ingresa un correo electr\xf3nico v\xe1lido"}}},{name:"password",placeholder:"Contrase\xf1a",type:"password",...j?{}:{required:"La contrase\xf1a es requerida",minLength:{value:8,message:"La contrase\xf1a debe tener al menos 8 caracteres"},pattern:{value:/^(?!\s+$).+/,message:"La contrase\xf1a no puede contener solo espacios en blanco"}}},{name:"role",type:"select",options:[{value:"",label:"Selecciona un rol"},{value:"administrador",label:"Administrador"},{value:"colaborador",label:"Colaborador"}],...j?{}:{required:"El rol es requerido"}}],P=async()=>{try{t(!0);let e=await (0,d.Z)("https://webdevgt.com/pwg/public/api/users");t(!1),i(e.data)}catch(e){console.log(e)}},k=async e=>{try{if(j){""===e.password&&delete e.password;let t=await d.Z.put(`https://webdevgt.com/pwg/public/api/usuario/${e.id}`,e);console.log(t),y(!1),l(!1),await P(),v({}),f.toast.success("El Usuario fue actualizado exitosamente");return}await d.Z.post("https://webdevgt.com/pwg/public/api/register",e),l(!1),await P(),f.toast.success("Usuario creado con exito")}catch(e){console.log(e)}},q=async e=>{try{window.confirm("\xbfEst\xe1s seguro de eliminar este usuario?")&&(await d.Z.delete(`https://webdevgt.com/pwg/public/api/usuario/${e}`),await P(),f.toast.warning("El usuario ha sido eliminado con exito"))}catch(e){console.log(e)}};(0,a.useEffect)(()=>{P()},[]);let O=JSON.parse(N??"{}");return(0,a.useEffect)(()=>{if(!N){w.push("/");return}},[]),s.jsx(n.default,{children:O?.role!=="colaborador"?(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"flex items-center justify-between gap-4 pb-4",children:(0,s.jsxs)(p,{onClick:()=>l(!0),children:[s.jsx(h,{className:"h-6 w-6 me-2"})," Crear Usuario"]})}),s.jsx(u,{headers:[{key:1,label:"Usuario"},{key:2,label:"Email"},{key:3,label:"Rol"}],columns:[{key:"name",render:e=>s.jsx("div",{children:s.jsx("p",{className:"font-bold",children:e?.name})})},{key:"email",render:e=>s.jsx("div",{children:s.jsx("p",{className:"font-bold",children:e?.email})})},{key:"role",render:e=>s.jsx("div",{children:s.jsx("p",{className:"font-bold",children:e?.role})})}],data:r,loading:e,handleDelete:q,handleUpdate:e=>{v(r.filter(t=>t.id===e)[0]||{}),y(!0),l(!0)}}),(0,s.jsxs)(m.Z,{isOpen:o,onClose:()=>{y(!1),v({}),l(!1)},children:[s.jsx("h2",{className:"text-lg font-medium mb-4",children:`${j?"Actualizar Usuario":"Crear Usuario"}`})," ",s.jsx(x.Z,{inputs:_,onSubmit:k,initialValues:c})]})]}):s.jsx("div",{children:s.jsx("h1",{className:"text-center font-black text-4xl my-10 text-gray-700",children:"Esta ruta esta protegida, \xa1No eres un administrador!"})})})}},4162:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(2295),a=r(3729),n=r(708);let i=function({onSubmit:e,inputs:t,initialValues:r}){let[i,o]=(0,a.useState)(!1),{register:l,handleSubmit:c,formState:{errors:u},reset:d}=(0,n.cI)(r),p=async t=>{o(!0),await e(t),o(!1)};return(0,a.useEffect)(()=>{d(r)},[r,d]),s.jsx("div",{className:"overflow-y-auto max-h-[80vh]",children:(0,s.jsxs)("form",{onSubmit:c(p),noValidate:!0,className:"space-y-4",children:[t.map(e=>(0,s.jsxs)("div",{children:[s.jsx("label",{className:"font-bold text-sm text-gray-600",children:e.label}),"select"===e.type?s.jsx("select",{...l(e.name,{required:e.required}),className:"block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500",defaultValue:e.defaultValue,children:e.options.map(e=>s.jsx("option",{value:e.value,className:"capitalize",children:e.label},e.value))}):s.jsx("input",{...l(e.name,{required:e.required,pattern:e.pattern,min:e.min,max:e.max}),className:"block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500",type:e.type,placeholder:e.placeholder}),u[e.name]&&s.jsx("div",{className:"p-4 mb-4 text-sm  rounded-lg bg-red-100 text-red-800 mt-2",role:"alert",children:s.jsx("span",{className:"font-medium",children:u[e.name].message})})]},e.name)),s.jsx("input",{type:"submit",value:i?"Enviando.........":"enviar",disabled:i,className:"w-full cursor-pointer bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg text-white py-2 px-4 text-sm font-medium"})]})})}},7884:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(2295),a=r(3254);let n=function({isOpen:e,onClose:t,children:r}){return s.jsx(s.Fragment,{children:e&&s.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-10",children:(0,s.jsxs)("div",{className:"bg-white p-5 rounded-lg w-full xl:w-96",children:[s.jsx("div",{className:"flex justify-end",children:s.jsx("button",{type:"button",onClick:t,className:"bg-red-500 p-1 rounded-lg hover:bg-red-400 focus:outline-none",children:s.jsx(a.Z,{className:"h-5 w-5 text-white"})})}),r,s.jsx("div",{className:"flex justify-end mt-4",children:s.jsx("button",{type:"button",onClick:t,className:"bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg text-gray-800 font-medium mr-2 transition-colors duration-300 ease-in-out",children:"Cancelar"})})]})})})}},1965:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,metadata:()=>o});var s=r(5036),a=r(1541),n=r.n(a);r(5023),r(7001);var i=r(3222);let o={title:"To Do List",description:"To Do List"};function l({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:n().className,children:[s.jsx(i.Ix,{}),e]})})}},6763:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>i});let s=(0,r(6843).createProxy)(String.raw`/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/app/usuarios/page.jsx`),{__esModule:a,$$typeof:n}=s,i=s.default},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[504,518,267,508],()=>r(1246));module.exports=s})();
