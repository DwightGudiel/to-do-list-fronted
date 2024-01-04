(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{8156:function(e,t,r){Promise.resolve().then(r.bind(r,30))},3587:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var a=r(7437),n=r(1396),s=r.n(n),l=r(4033),i=r(7713),o=r(3288),c=r(7682),u=r(2697),d=r(3953),m=function(){let e=(0,l.useRouter)(),t=JSON.parse((0,i.getCookie)("usuario")),r=[{title:"Mis Tareas",src:o.Z,path:"/mis-tareas"},{title:"Usuarios",src:c.Z,path:"/usuarios"},{title:"Administrar",src:u.Z,path:"/admin"}];return(0,a.jsx)("aside",{className:"md:w-1/10 p-5 pt-8 relative duration-300 bg-blue-600 px-5 py-10 md:overflow-y-auto md:h-screen",children:(0,a.jsxs)("header",{className:"flex flex-col justify-between h-full",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-x-4 justify-center items-center py-3",children:[(0,a.jsx)("h1",{className:"text-white origin-left font-medium text-xl duration-200 ",children:"PWG"}),(0,a.jsx)("nav",{className:"flex flex-col justify-center py-3",children:r.map((e,r)=>(0,a.jsx)("div",{children:(null==t?void 0:t.role)==="administrador"&&"Mis Tareas"!==e.title||(null==t?void 0:t.role)==="colaborador"&&"Mis Tareas"===e.title?(0,a.jsx)(s(),{href:e.path,className:"w-full my-4 rounded-md p-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600 flex items-center text-white",children:(0,a.jsx)(e.src,{className:"h-6 w-6"})},r):null},r))})]}),(0,a.jsx)("button",{onClick:()=>{(0,i.deleteCookie)("_token"),(0,i.deleteCookie)("usuario"),e.push("/")},className:"flex text-sm gap-x-4 items-center justify-center cursor-pointer text-white p-2 rounded-sm transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600",children:(0,a.jsx)(d.Z,{className:"w-8 h-8"})})]})})},p=r(2265),f=function(e){let{children:t}=e,[r,n]=(0,p.useState)(null),s=(0,l.useRouter)();return(0,p.useEffect)(()=>{let e=(0,i.getCookie)("_token");n(e),e||s.push("/")},[s]),(0,a.jsx)(a.Fragment,{children:r?(0,a.jsxs)("div",{className:"md:flex md:min-h-screen",children:[(0,a.jsx)(m,{}),(0,a.jsx)("main",{className:"md:w-full   md:h-screen overflow-auto p-10",children:t})]}):(0,a.jsx)("main",{className:"flex justify-center items-center min-h-screen",children:(0,a.jsxs)("div",{className:"p-6",children:[(0,a.jsx)("h1",{className:"text-center text-4xl font-black text-gray-700",children:"Cargando P\xe1gina..."}),(0,a.jsx)("div",{className:"mt-4 flex justify-center",children:(0,a.jsx)("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"})})]})})})}},30:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var a=r(7437),n=r(2265),s=r(3587),l=r(9806);let i=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z",clipRule:"evenodd"}))});var o=r(7516),c=r.n(o),u=function(e){let{data:t,loading:r,headers:n,columns:s,handleDelete:o,handleUpdate:u}=e,d=e=>{u&&u(e)},m=e=>{o&&o(e)};return 0===t.length?(0,a.jsx)(a.Fragment,{children:r?(0,a.jsx)("div",{className:"flex items-center justify-center h-20",children:(0,a.jsx)(c(),{loading:r})}):(0,a.jsx)("p",{className:"text-center font-black text-2xl text-gray-700",children:"No hay datos"})}):(0,a.jsx)(a.Fragment,{children:r?(0,a.jsx)("div",{className:"flex items-center justify-center h-20",children:(0,a.jsx)(c(),{loading:r})}):(0,a.jsxs)("table",{className:"w-full text-sm text-left",children:[(0,a.jsx)("thead",{className:"text-sm uppercase bg-blue-500 text-white",children:(0,a.jsxs)("tr",{children:[n.map(e=>(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:e.label},e.key)),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Acciones"})]})}),(0,a.jsx)("tbody",{children:t.map(e=>(0,a.jsxs)("tr",{className:"hover:bg-gray-100 border ",children:[s.map(t=>(0,a.jsx)("td",{className:"px-6 py-4",children:t.render(e)},t.key)),(0,a.jsxs)("td",{className:"px-6 py-4 flex justify-start gap-x-4",children:[(0,a.jsxs)("button",{className:"font-medium text-blue-600 hover:underline",onClick:()=>d(e.id),children:[(0,a.jsx)(l.Z,{className:"h-6 w-6"})," "]}),(0,a.jsxs)("button",{className:"ml-2 font-medium text-blue-600",onClick:()=>m(e.id),children:[(0,a.jsx)(i,{className:"h-6 w-6"})," "]})]})]},e.id))})]})})},d=r(2173),m=function(e){let{children:t,onClick:r}=e;return(0,a.jsx)("button",{type:"button",className:"px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:r,children:t})},p=r(2906),f=r(7800);let h=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z",clipRule:"evenodd"}))});var x=r(171),b=r(7713),v=r(4033),g=function(){let[e,t]=(0,n.useState)(!1),[r,l]=(0,n.useState)([]),[i,o]=(0,n.useState)(!1),[c,g]=(0,n.useState)({}),[j,y]=(0,n.useState)(!1),w=(0,v.useRouter)(),N=(0,b.getCookie)("usuario"),k=[{name:"name",placeholder:"Nombre de usuario",type:"text",...j?{}:{required:"El nombre de usuario es requerido",pattern:{value:/^(?!\s+$).+/,message:"El nombre no puede contener solo espacios en blanco"}}},{name:"email",placeholder:"Correo electr\xf3nico",type:"email",...j?{}:{required:"El correo electr\xf3nico es requerido",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Ingresa un correo electr\xf3nico v\xe1lido"}}},{name:"password",placeholder:"Contrase\xf1a",type:"password",...j?{}:{required:"La contrase\xf1a es requerida",minLength:{value:8,message:"La contrase\xf1a debe tener al menos 8 caracteres"},pattern:{value:/^(?!\s+$).+/,message:"La contrase\xf1a no puede contener solo espacios en blanco"}}},{name:"role",type:"select",options:[{value:"",label:"Selecciona un rol"},{value:"administrador",label:"Administrador"},{value:"colaborador",label:"Colaborador"}],...j?{}:{required:"El rol es requerido"}}],O=async()=>{try{t(!0);let e=await (0,d.Z)("https://webdevgt.com/pwg/public/api/users");t(!1),l(e.data)}catch(e){console.log(e)}},C=async e=>{try{if(j){""===e.password&&delete e.password;let t=await d.Z.put("https://webdevgt.com/pwg/public/api/usuario/".concat(e.id),e);console.log(t),y(!1),o(!1),await O(),g({}),x.toast.success("El Usuario fue actualizado exitosamente");return}await d.Z.post("https://webdevgt.com/pwg/public/api/register",e),o(!1),await O(),x.toast.success("Usuario creado con exito")}catch(e){console.log(e)}},_=async e=>{try{window.confirm("\xbfEst\xe1s seguro de eliminar este usuario?")&&(await d.Z.delete("https://webdevgt.com/pwg/public/api/usuario/".concat(e)),await O(),x.toast.warning("El usuario ha sido eliminado con exito"))}catch(e){console.log(e)}};(0,n.useEffect)(()=>{O()},[]);let E=JSON.parse(null!=N?N:"{}");return(0,n.useEffect)(()=>{if(!N){w.push("/");return}},[]),(0,a.jsx)(s.default,{children:(null==E?void 0:E.role)!=="colaborador"?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex items-center justify-between gap-4 pb-4",children:(0,a.jsxs)(m,{onClick:()=>o(!0),children:[(0,a.jsx)(h,{className:"h-6 w-6 me-2"})," Crear Usuario"]})}),(0,a.jsx)(u,{headers:[{key:1,label:"Usuario"},{key:2,label:"Email"},{key:3,label:"Rol"}],columns:[{key:"name",render:e=>(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"font-bold",children:null==e?void 0:e.name})})},{key:"email",render:e=>(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"font-bold",children:null==e?void 0:e.email})})},{key:"role",render:e=>(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"font-bold",children:null==e?void 0:e.role})})}],data:r,loading:e,handleDelete:_,handleUpdate:e=>{g(r.filter(t=>t.id===e)[0]||{}),y(!0),o(!0)}}),(0,a.jsxs)(p.Z,{isOpen:i,onClose:()=>{y(!1),g({}),o(!1)},children:[(0,a.jsx)("h2",{className:"text-lg font-medium mb-4",children:"".concat(j?"Actualizar Usuario":"Crear Usuario")})," ",(0,a.jsx)(f.Z,{inputs:k,onSubmit:C,initialValues:c})]})]}):(0,a.jsx)("div",{children:(0,a.jsx)("h1",{className:"text-center font-black text-4xl my-10 text-gray-700",children:"Esta ruta esta protegida, \xa1No eres un administrador!"})})})}},7800:function(e,t,r){"use strict";var a=r(7437),n=r(2265),s=r(1865);t.Z=function(e){let{onSubmit:t,inputs:r,initialValues:l}=e,[i,o]=(0,n.useState)(!1),{register:c,handleSubmit:u,formState:{errors:d},reset:m}=(0,s.cI)(l),p=async e=>{o(!0),await t(e),o(!1)};return(0,n.useEffect)(()=>{m(l)},[l,m]),(0,a.jsx)("div",{className:"overflow-y-auto max-h-[80vh]",children:(0,a.jsxs)("form",{onSubmit:u(p),noValidate:!0,className:"space-y-4",children:[r.map(e=>(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"font-bold text-sm text-gray-600",children:e.label}),"select"===e.type?(0,a.jsx)("select",{...c(e.name,{required:e.required}),className:"block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500",defaultValue:e.defaultValue,children:e.options.map(e=>(0,a.jsx)("option",{value:e.value,className:"capitalize",children:e.label},e.value))}):(0,a.jsx)("input",{...c(e.name,{required:e.required,pattern:e.pattern,min:e.min,max:e.max}),className:"block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500",type:e.type,placeholder:e.placeholder}),d[e.name]&&(0,a.jsx)("div",{className:"p-4 mb-4 text-sm  rounded-lg bg-red-100 text-red-800 mt-2",role:"alert",children:(0,a.jsx)("span",{className:"font-medium",children:d[e.name].message})})]},e.name)),(0,a.jsx)("input",{type:"submit",value:i?"Enviando.........":"enviar",disabled:i,className:"w-full cursor-pointer bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg text-white py-2 px-4 text-sm font-medium"})]})})}},2906:function(e,t,r){"use strict";var a=r(7437),n=r(4027);t.Z=function(e){let{isOpen:t,onClose:r,children:s}=e;return(0,a.jsx)(a.Fragment,{children:t&&(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-10",children:(0,a.jsxs)("div",{className:"bg-white p-5 rounded-lg w-full xl:w-96",children:[(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("button",{type:"button",onClick:r,className:"bg-red-500 p-1 rounded-lg hover:bg-red-400 focus:outline-none",children:(0,a.jsx)(n.Z,{className:"h-5 w-5 text-white"})})}),s,(0,a.jsx)("div",{className:"flex justify-end mt-4",children:(0,a.jsx)("button",{type:"button",onClick:r,className:"bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg text-gray-800 font-medium mr-2 transition-colors duration-300 ease-in-out",children:"Cancelar"})})]})})})}},7516:function(e,t,r){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return s(t,e),t},i=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>t.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var o=l(r(2265)),c=r(581),u=(0,r(9981).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,r=e.color,n=void 0===r?"#000000":r,s=e.speedMultiplier,l=e.cssOverride,d=e.size,m=void 0===d?35:d,p=i(e,["loading","color","speedMultiplier","cssOverride","size"]),f=a({background:"transparent !important",width:(0,c.cssValue)(m),height:(0,c.cssValue)(m),borderRadius:"100%",border:"2px solid",borderTopColor:n,borderBottomColor:"transparent",borderLeftColor:n,borderRightColor:n,display:"inline-block",animation:"".concat(u," ").concat(.75/(void 0===s?1:s),"s 0s infinite linear"),animationFillMode:"both"},void 0===l?{}:l);return void 0===t||t?o.createElement("span",a({style:f},p)):null}},9981:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0,t.createAnimation=function(e,t,r){var a="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return a;var n=document.createElement("style");document.head.appendChild(n);var s=n.sheet,l="\n    @keyframes ".concat(a," {\n      ").concat(t,"\n    }\n  ");return s&&s.insertRule(l,0),a}},581:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(e){if("number"==typeof e)return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();t=a.includes(".")?parseFloat(a):parseInt(a,10);var n=(e.match(/[^0-9]*$/)||"").toString();return r[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=a,t.cssValue=function(e){var t=a(e);return"".concat(t.value).concat(t.unit)}}},function(e){e.O(0,[927,964,557,971,938,744],function(){return e(e.s=8156)}),_N_E=e.O()}]);