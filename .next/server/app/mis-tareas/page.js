<<<<<<< HEAD
(()=>{var e={};e.id=489,e.ids=[489],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9062:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var s=t(482),l=t(9108),r=t(2563),n=t.n(r),i=t(8300),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);t.d(a,o);let c=["",{children:["mis-tareas",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,4492)),"/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/app/mis-tareas/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,1965)),"/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"]}],d=["/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/app/mis-tareas/page.jsx"],u="/mis-tareas/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/mis-tareas/page",pathname:"/mis-tareas",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1240:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,6840,23)),Promise.resolve().then(t.t.bind(t,8771,23)),Promise.resolve().then(t.t.bind(t,3225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,3982,23))},4563:(e,a,t)=>{Promise.resolve().then(t.bind(t,1208))},6791:(e,a,t)=>{Promise.resolve().then(t.bind(t,6885)),Promise.resolve().then(t.bind(t,9311))},6885:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>x});var s=t(2295),l=t(783),r=t.n(l),n=t(2254),i=t(1356),o=t(9450),c=t(7088),d=t(822),u=t(4306),m=t(9578);let p=function(){let e=(0,n.useRouter)(),a=JSON.parse((0,i.getCookie)("usuario")),t=[{title:"Mis Tareas",src:o.Z,path:"/mis-tareas"},{title:"Usuarios",src:c.Z,path:"/usuarios"},{title:"Administrar",src:d.Z,path:"/admin"},{title:"Reportes",src:u.Z,path:"/reportes"}];return s.jsx("aside",{className:"md:w-1/10 p-5 pt-8 relative duration-300 bg-blue-600 px-5 py-10 md:overflow-y-auto md:h-screen",children:(0,s.jsxs)("header",{className:"flex flex-col justify-between h-full",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-x-4 justify-center items-center py-3",children:[s.jsx("h1",{className:"text-white origin-left font-medium text-xl duration-200 ",children:"PWG"}),s.jsx("nav",{className:"flex flex-col justify-center py-3",children:t.map((e,t)=>s.jsx("div",{children:a?.role==="administrador"&&"Mis Tareas"!==e.title||a?.role==="colaborador"&&"Mis Tareas"===e.title?s.jsx(r(),{href:e.path,className:"w-full my-4 rounded-md p-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600 flex items-center text-white",children:s.jsx(e.src,{className:"h-6 w-6"})},t):null},t))})]}),s.jsx("button",{onClick:()=>{(0,i.deleteCookie)("_token"),(0,i.deleteCookie)("usuario"),e.push("/")},className:"flex text-sm gap-x-4 items-center justify-center cursor-pointer text-white p-2 rounded-sm transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600",children:s.jsx(m.Z,{className:"w-8 h-8"})})]})})};var h=t(3729);let x=function({children:e}){let[a,t]=(0,h.useState)(null),l=(0,n.useRouter)();return(0,h.useEffect)(()=>{let e=(0,i.getCookie)("_token");t(e),e||l.push("/")},[l]),s.jsx(s.Fragment,{children:a?(0,s.jsxs)("div",{className:"md:flex md:min-h-screen",children:[s.jsx(p,{}),s.jsx("main",{className:"md:w-full md:h-screen overflow-auto p-10",children:e})]}):s.jsx("main",{className:"flex justify-center items-center min-h-screen",children:(0,s.jsxs)("div",{className:"p-6",children:[s.jsx("h1",{className:"text-center text-4xl font-black text-gray-700",children:"Cargando P\xe1gina..."}),s.jsx("div",{className:"mt-4 flex justify-center",children:s.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"})})]})})})}},168:(e,a,t)=>{"use strict";t.d(a,{E:()=>l,i:()=>s});let s=e=>new Date(e+"T00:00:00Z").toLocaleDateString("es-GT",{day:"numeric",month:"numeric",year:"numeric",timeZone:"UTC"});function l(e){if(e<60)return`${e} min`;{let a=Math.floor(e/60),t=e%60;return 0===t?`${a} hrs`:`${a} hrs ${t} min`}}},9311:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>h});var s=t(2295),l=t(3729),r=t(1356),n=t(3608),i=t(168);let o=({tarea:e,handleCambiarEstadoTarea:a})=>{let[t,r]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{r("completada"===e.estado)},[e.estado]),s.jsx("li",{className:"border-b py-2 my-5",children:(0,s.jsxs)("div",{className:`grid grid-cols-12 justify-center items-center ${t|e?.estado==="completada"?"line-through":""}`,children:[s.jsx("div",{className:"col-span-1",children:s.jsx("input",{type:"checkbox",className:"form-checkbox h-4 w-4 text-blue-500",onChange:t=>{let s=t.target.checked;console.log(s),r(s),a(e.id,s)},checked:t})}),s.jsx("div",{className:"col-span-10",children:(0,s.jsxs)("p",{className:"ml-3 text-sm",children:[" ",s.jsx("span",{className:"font-bold capitalize",children:`${e?.plataforma} - ${(0,i.i)(e?.fecha_vencimiento)} - ${(0,i.E)(e?.hora)}:`})," ",e?.descripcion]})})]})})};var c=t(754);let d=({tarea:e,handleCompletarTarea:a,setShowModal:t,handleUpdate:l})=>{let r=e=>{a(e)},n=e=>{l&&(t(!0),l(e))};return s.jsx("li",{className:"border-b py-2 my-5",children:(0,s.jsxs)("div",{className:`grid grid-cols-12 justify-center items-center ${"completada"===e.estado?"line-through":""}`,children:[s.jsx("div",{className:"col-span-1",children:s.jsx("input",{type:"checkbox",className:"form-checkbox h-4 w-4 text-blue-500",onClick:()=>r(e.id),checked:"completada"===e.estado})}),s.jsx("div",{className:"col-span-10",children:(0,s.jsxs)("p",{className:"ml-3 text-sm",children:[" ",s.jsx("span",{className:"font-bold capitalize",children:`${e?.plataforma} - ${(0,i.i)(e?.fecha_vencimiento)} - ${(0,i.E)(e?.hora)}:`})," ",e?.descripcion]})}),s.jsx("div",{className:"col-span-1",children:s.jsx("button",{className:"text-blue-800",onClick:()=>n(e?.id),children:s.jsx(c.Z,{className:"h-5 w-5 text-blue-600 font-black cursor-pointer"})})})]})})};var u=t(1208),m=t(7884),p=t(4162);let h=function(){let e=new Date,a=6e4*e.getTimezoneOffset(),t=new Date(e-a).toISOString().split("T")[0],[i,c]=(0,l.useState)(t),[h,x]=(0,l.useState)(""),[b,v]=(0,l.useState)(""),[f,g]=(0,l.useState)(""),j=JSON.parse((0,r.getCookie)("usuario")),[y,w]=(0,l.useState)([]),[N,P]=(0,l.useState)([]),[S,C]=(0,l.useState)([]),[T,k]=(0,l.useState)(!1),[q,_]=(0,l.useState)({}),[G,A]=(0,l.useState)(!1),$=async()=>{try{let e=`https://webdevgt.com/pwg/public/api/tareas/${j?.id}`,a=await (0,n.Z)(e),t=a.data.filter(e=>e?.estado==="pendiente");console.log("uwu",t),w(t),D(a.data)}catch(e){console.log(e)}},Z=async()=>{try{let e=`https://webdevgt.com/pwg/public/api/tareas-atrasadas/${j?.id}`,a=(await (0,n.Z)(e)).data;C(a)}catch(e){console.log(e)}},D=e=>{P(e.filter(e=>e?.estado==="completada"))},z=async e=>{e.preventDefault();try{A(!0);let e={users_id:j.id,descripcion:h.trim(),plataforma:b.trim(),estado:"pendiente",fecha_vencimiento:i,hora:f};if(""===e.descripcion||""===e.plataforma||""===f){A(!1),u.toast.error("Todos los campos son obligatorios");return}let a=await n.Z.post("https://webdevgt.com/pwg/public/api/tareas/crear",e);await $(),x(""),v(""),g(""),A(!1),u.toast.success("La tarea fue creada exitosamente"),console.log(a)}catch(e){A(!1),console.log(e)}},E=async e=>{try{let a=`https://webdevgt.com/pwg/public/api/tarea/completar/${e}`,t=await n.Z.post(a,{estado:"completada"});console.log(t),await $(),await Z()}catch(e){console.log(e)}},M=async(e,a)=>{try{let t=`https://webdevgt.com/pwg/public/api/tarea/completar/${e}`,s=await n.Z.post(t,{estado:a?"completada":"pendiente"});console.log(s),await $(),await Z()}catch(e){console.log(e)}},F=async e=>{try{console.log(e),await n.Z.put(`https://webdevgt.com/pwg/public/api/tarea/${e.id}`,e),k(!1),await $(),await Z(),u.toast.success("Tarea actualizada con exito")}catch(e){console.log(e)}},L=e=>{let a=S.find(a=>a.id===e),t=y.find(a=>a.id===e);a?_(a):t?_(t):_({}),k(!0)};return(0,l.useEffect)(()=>{$(),Z()},[]),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[" ",s.jsx("h2",{className:"text-xl font-bold mb-4",children:"Mis Tareas"})," ",s.jsx("p",{className:"text-xl font-bold mb-4",children:j?.name})]}),(0,s.jsxs)("div",{className:" bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4",children:[(0,s.jsxs)("h2",{className:"text-lg font-bold mb-4 text-red-600",children:["Tareas Atrasadas: ",S.length]})," ",s.jsx("ul",{className:"md:overflow-y-auto",children:S.map((e,a)=>s.jsx(d,{tarea:e,handleCompletarTarea:E,setShowModal:k,handleUpdate:L},a))})]}),(0,s.jsxs)("div",{className:"w-full bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-10",children:[s.jsx("h2",{className:"text-lg font-bold mb-4 text-gray-700",children:"Nueva Tarea"})," ",(0,s.jsxs)("form",{onSubmit:z,children:[(0,s.jsxs)("div",{className:"flex gap-6 shadow appearance-none border rounded text-sm",children:[s.jsx("input",{className:"w-10/12 py-4 px-3 text-sm leading-tight focus:outline-none focus:shadow-outline",type:"text",id:"descripcion",name:"descripcion",placeholder:"A\xf1ade una nueva tarea",value:h,onChange:e=>x(e.target.value)}),(0,s.jsxs)("select",{className:"w-2/12 focus:outline-none text-sm ",id:"plataforma",name:"plataforma",value:b,onChange:e=>v(e.target.value),children:[s.jsx("option",{value:"",children:"Plataforma"}),s.jsx("option",{value:"atulado",children:"Atulado"}),s.jsx("option",{value:"caplin",children:"Caplin"}),s.jsx("option",{value:"lancasco",children:"Lancasco"}),s.jsx("option",{value:"gutis GT",children:"Gutis GT"}),s.jsx("option",{value:"gutis regional",children:"Gutis Regional"}),s.jsx("option",{value:"gutis CR",children:"Gutis CR"}),s.jsx("option",{value:"medpharma",children:"Medpharma"}),s.jsx("option",{value:"farmadina",children:"Farmadina"}),s.jsx("option",{value:"farmadina",children:"La Sante"}),s.jsx("option",{value:"global farma",children:"Global Farma"}),s.jsx("option",{value:"silanes",children:"Silanes"}),s.jsx("option",{value:"mi salud",children:"Mi Salud"}),s.jsx("option",{value:"plan esperanza",children:"Plan Esperanza"}),s.jsx("option",{value:"hadalabs",children:"Hadalabs"}),s.jsx("option",{value:"promefa",children:"Promefa"}),s.jsx("option",{value:"apac",children:"Apac"}),s.jsx("option",{value:"gruner",children:"Gruner"}),s.jsx("option",{value:"topfarma",children:"Top Farma"}),s.jsx("option",{value:"vizcaino",children:"Vizcaino"}),s.jsx("option",{value:"bienestar",children:"Bienestar"}),s.jsx("option",{value:"otros",children:"Otros"})]}),s.jsx("input",{className:"w-2/12 focus:outline-none text-sm",type:"date",id:"fecha_vencimiento",name:"fecha_vencimiento",value:i,onChange:e=>c(e.target.value)}),(0,s.jsxs)("select",{className:"w-2/12 focus:outline-none text-sm",id:"hora",name:"hora",value:f,onChange:e=>g(e.target.value),children:[s.jsx("option",{value:"",children:"Hora"}),s.jsx("option",{value:"5",children:"5 min"}),s.jsx("option",{value:"10",children:"10 min"}),s.jsx("option",{value:"15",children:"15 min"}),s.jsx("option",{value:"20",children:"20 min"}),s.jsx("option",{value:"25",children:"25 min"}),s.jsx("option",{value:"30",children:"30 min"}),s.jsx("option",{value:"40",children:"40 min"}),s.jsx("option",{value:"50",children:"50 min"}),s.jsx("option",{value:"60",children:"1 hr"}),s.jsx("option",{value:"120",children:"2 hrs"}),s.jsx("option",{value:"240",children:"4 hrs"}),s.jsx("option",{value:"360",children:"6 hrs"}),s.jsx("option",{value:"480",children:"8 hrs"})]})]}),s.jsx("input",{type:"submit",value:G?"Enviando.........":"A\xf1adir Tarea",disabled:G,className:"bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"})]})]}),(0,s.jsxs)("div",{className:" bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-10",children:[(0,s.jsxs)("h2",{className:"text-lg font-bold mb-4 text-blue-600",children:["Tareas Actuales: ",y.length]})," ",s.jsx("ul",{className:"md:overflow-y-auto",children:y.map((e,a)=>s.jsx(d,{tarea:e,handleCompletarTarea:E,setShowModal:k,handleUpdate:L},a))})]}),(0,s.jsxs)("div",{className:" bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-10",children:[(0,s.jsxs)("h2",{className:"text-lg font-bold mb-4 text-green-600",children:["Tareas Completadas: ",N.length]})," ",s.jsx("ul",{className:"md:overflow-y-auto",children:N.map(e=>s.jsx(o,{tarea:e,handleCambiarEstadoTarea:M},e?.id))})]}),(0,s.jsxs)(m.Z,{isOpen:T,onClose:()=>{k(!1)},children:[s.jsx("h2",{className:"text-lg font-medium mb-4",children:"Actualizar Tarea"}),s.jsx(p.Z,{inputs:[{name:"descripcion",placeholder:"A\xf1ade una nueva tarea",type:"text",pattern:{value:/^(?!\s+$).+/,message:"La descripcion no puede contener solo espacios en blanco"}},{name:"plataforma",type:"select",options:[{value:"",label:"Plataforma"},{value:"atulado",label:"Atulado"},{value:"caplin",label:"Caplin"},{value:"lancasco",label:"Lancasco"},{value:"gutis GT",label:"Gutis GT"},{value:"gutis regional",label:"Gutis Regional"},{value:"gutis CR",label:"Gutis CR"},{value:"medpharma",label:"Medpharma"},{value:"farmadina",label:"Farmadina"},{value:"La Sante",label:"La Sante"},{value:"global farma",label:"Global Farma"},{value:"silanes",label:"Silanes"},{value:"mi salud",label:"Mi Salud"},{value:"plan esperanza",label:"Plan Esperanza"},{value:"hadalabs",label:"Hadalabs"},{value:"promefa",label:"Promefa"},{value:"apac",label:"Apac"},{value:"gruner",label:"Gruner"},{value:"topfarma",label:"Top Farma"},{value:"vizcaino",label:"Vizcaino"},{value:"bienestar",label:"Bienestar"},{value:"otros",label:"Otros"}]},{name:"estado",type:"select",options:[{value:"pendiente",label:"Pendiente"},{value:"completada",label:"Completada"},{value:"atrasada",label:"Atrasada"}]},{name:"fecha_vencimiento",type:"date"},{name:"hora",type:"select",options:[{value:"",label:"Hora"},{value:"5",label:"5 min"},{value:"10",label:"10 min"},{value:"15",label:"15 min"},{value:"20",label:"20 min"},{value:"25",label:"25 min"},{value:"30",label:"30 min"},{value:"40",label:"40 min"},{value:"50",label:"50 min"},{value:"60",label:"1 hr"},{value:"120",label:"2 hrs"},{value:"240",label:"4 hrs"},{value:"360",label:"6 hrs"},{value:"480",label:"8 hrs"}]}],onSubmit:F,initialValues:q})]})]})}},4162:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});var s=t(2295),l=t(3729),r=t(708);let n=function({onSubmit:e,inputs:a,initialValues:t}){let[n,i]=(0,l.useState)(!1),{register:o,handleSubmit:c,formState:{errors:d},reset:u}=(0,r.cI)(t),m=async a=>{i(!0),await e(a),i(!1)};return(0,l.useEffect)(()=>{u(t)},[t,u]),s.jsx("div",{className:"overflow-y-auto max-h-[80vh]",children:(0,s.jsxs)("form",{onSubmit:c(m),noValidate:!0,className:"space-y-4",children:[a.map(e=>(0,s.jsxs)("div",{children:[s.jsx("label",{className:"font-bold text-sm text-gray-600",children:e.label}),"select"===e.type?s.jsx("select",{...o(e.name,{required:e.required}),className:"block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500",defaultValue:e.defaultValue,children:e.options.map(e=>s.jsx("option",{value:e.value,className:"capitalize",children:e.label},e.value))}):s.jsx("input",{...o(e.name,{required:e.required,pattern:e.pattern,min:e.min,max:e.max}),className:"block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500",type:e.type,placeholder:e.placeholder}),d[e.name]&&s.jsx("div",{className:"p-4 mb-4 text-sm  rounded-lg bg-red-100 text-red-800 mt-2",role:"alert",children:s.jsx("span",{className:"font-medium",children:d[e.name].message})})]},e.name)),s.jsx("input",{type:"submit",value:n?"Enviando.........":"enviar",disabled:n,className:"w-full cursor-pointer bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg text-white py-2 px-4 text-sm font-medium"})]})})}},7884:(e,a,t)=>{"use strict";t.d(a,{Z:()=>r});var s=t(2295),l=t(3254);let r=function({isOpen:e,onClose:a,children:t}){return s.jsx(s.Fragment,{children:e&&s.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-10",children:(0,s.jsxs)("div",{className:"bg-white p-5 rounded-lg w-full xl:w-96",children:[s.jsx("div",{className:"flex justify-end",children:s.jsx("button",{type:"button",onClick:a,className:"bg-red-500 p-1 rounded-lg hover:bg-red-400 focus:outline-none",children:s.jsx(l.Z,{className:"h-5 w-5 text-white"})})}),t,s.jsx("div",{className:"flex justify-end mt-4",children:s.jsx("button",{type:"button",onClick:a,className:"bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg text-gray-800 font-medium mr-2 transition-colors duration-300 ease-in-out",children:"Cancelar"})})]})})})}},8747:(e,a,t)=>{"use strict";t.r(a),t.d(a,{$$typeof:()=>r,__esModule:()=>l,default:()=>n});let s=(0,t(6843).createProxy)(String.raw`/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/app/dashboard/layout.jsx`),{__esModule:l,$$typeof:r}=s,n=s.default},1965:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>o,metadata:()=>i});var s=t(5036),l=t(1541),r=t.n(l);t(5023),t(7001);var n=t(3222);let i={title:"To Do List",description:"To Do List"};function o({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:r().className,children:[s.jsx(n.Ix,{}),e]})})}},4492:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var s=t(5036),l=t(8747);let r=(0,t(6843).createProxy)(String.raw`/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/components/contenedorTareas.jsx`),{__esModule:n,$$typeof:i}=r,o=r.default,c=function(){return s.jsx(l.default,{children:s.jsx(o,{})})}},5023:()=>{}};var a=require("../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),s=a.X(0,[504,890,608,508],()=>t(9062));module.exports=s})();
=======
(()=>{var e={};e.id=489,e.ids=[489],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9062:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var s=t(482),l=t(9108),r=t(2563),n=t.n(r),i=t(8300),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);t.d(a,o);let c=["",{children:["mis-tareas",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,4492)),"/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/app/mis-tareas/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,1965)),"/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"]}],d=["/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/app/mis-tareas/page.jsx"],u="/mis-tareas/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/mis-tareas/page",pathname:"/mis-tareas",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1240:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,6840,23)),Promise.resolve().then(t.t.bind(t,8771,23)),Promise.resolve().then(t.t.bind(t,3225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,3982,23))},4563:(e,a,t)=>{Promise.resolve().then(t.bind(t,1208))},6791:(e,a,t)=>{Promise.resolve().then(t.bind(t,6885)),Promise.resolve().then(t.bind(t,9311))},6885:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>h});var s=t(2295),l=t(783),r=t.n(l),n=t(2254),i=t(1356),o=t(9450),c=t(7088),d=t(822),u=t(9578);let m=function(){let e=(0,n.useRouter)(),a=JSON.parse((0,i.getCookie)("usuario")),t=[{title:"Mis Tareas",src:o.Z,path:"/mis-tareas"},{title:"Usuarios",src:c.Z,path:"/usuarios"},{title:"Administrar",src:d.Z,path:"/admin"}];return s.jsx("aside",{className:"md:w-1/10 p-5 pt-8 relative duration-300 bg-blue-600 px-5 py-10 md:overflow-y-auto md:h-screen",children:(0,s.jsxs)("header",{className:"flex flex-col justify-between h-full",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-x-4 justify-center items-center py-3",children:[s.jsx("h1",{className:"text-white origin-left font-medium text-xl duration-200 ",children:"PWG"}),s.jsx("nav",{className:"flex flex-col justify-center py-3",children:t.map((e,t)=>s.jsx("div",{children:a?.role==="administrador"&&"Mis Tareas"!==e.title||a?.role==="colaborador"&&"Mis Tareas"===e.title?s.jsx(r(),{href:e.path,className:"w-full my-4 rounded-md p-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600 flex items-center text-white",children:s.jsx(e.src,{className:"h-6 w-6"})},t):null},t))})]}),s.jsx("button",{onClick:()=>{(0,i.deleteCookie)("_token"),(0,i.deleteCookie)("usuario"),e.push("/")},className:"flex text-sm gap-x-4 items-center justify-center cursor-pointer text-white p-2 rounded-sm transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600",children:s.jsx(u.Z,{className:"w-8 h-8"})})]})})};var p=t(3729);let h=function({children:e}){let[a,t]=(0,p.useState)(null),l=(0,n.useRouter)();return(0,p.useEffect)(()=>{let e=(0,i.getCookie)("_token");t(e),e||l.push("/")},[l]),s.jsx(s.Fragment,{children:a?(0,s.jsxs)("div",{className:"md:flex md:min-h-screen",children:[s.jsx(m,{}),s.jsx("main",{className:"md:w-full md:h-screen overflow-auto p-10",children:e})]}):s.jsx("main",{className:"flex justify-center items-center min-h-screen",children:(0,s.jsxs)("div",{className:"p-6",children:[s.jsx("h1",{className:"text-center text-4xl font-black text-gray-700",children:"Cargando P\xe1gina..."}),s.jsx("div",{className:"mt-4 flex justify-center",children:s.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"})})]})})})}},168:(e,a,t)=>{"use strict";t.d(a,{E:()=>l,i:()=>s});let s=e=>new Date(e+"T00:00:00Z").toLocaleDateString("es-GT",{day:"numeric",month:"numeric",year:"numeric",timeZone:"UTC"});function l(e){if(e<60)return`${e} min`;{let a=Math.floor(e/60),t=e%60;return 0===t?`${a} hrs`:`${a} hrs ${t} min`}}},9311:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>h});var s=t(2295),l=t(3729),r=t(1356),n=t(3608),i=t(168);let o=({tarea:e,handleCambiarEstadoTarea:a})=>{let[t,r]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{r("completada"===e.estado)},[e.estado]),s.jsx("li",{className:"border-b py-2 my-5",children:(0,s.jsxs)("div",{className:`grid grid-cols-12 justify-center items-center ${t|e?.estado==="completada"?"line-through":""}`,children:[s.jsx("div",{className:"col-span-1",children:s.jsx("input",{type:"checkbox",className:"form-checkbox h-4 w-4 text-blue-500",onChange:t=>{let s=t.target.checked;console.log(s),r(s),a(e.id,s)},checked:t})}),s.jsx("div",{className:"col-span-10",children:(0,s.jsxs)("p",{className:"ml-3 text-sm",children:[" ",s.jsx("span",{className:"font-bold capitalize",children:`${e?.plataforma} - ${(0,i.i)(e?.fecha_vencimiento)} - ${(0,i.E)(e?.hora)}:`})," ",e?.descripcion]})})]})})};var c=t(754);let d=({tarea:e,handleCompletarTarea:a,setShowModal:t,handleUpdate:l})=>{let r=e=>{a(e)},n=e=>{l&&(t(!0),l(e))};return s.jsx("li",{className:"border-b py-2 my-5",children:(0,s.jsxs)("div",{className:`grid grid-cols-12 justify-center items-center ${"completada"===e.estado?"line-through":""}`,children:[s.jsx("div",{className:"col-span-1",children:s.jsx("input",{type:"checkbox",className:"form-checkbox h-4 w-4 text-blue-500",onClick:()=>r(e.id),checked:"completada"===e.estado})}),s.jsx("div",{className:"col-span-10",children:(0,s.jsxs)("p",{className:"ml-3 text-sm",children:[" ",s.jsx("span",{className:"font-bold capitalize",children:`${e?.plataforma} - ${(0,i.i)(e?.fecha_vencimiento)} - ${(0,i.E)(e?.hora)}:`})," ",e?.descripcion]})}),s.jsx("div",{className:"col-span-1",children:s.jsx("button",{className:"text-blue-800",onClick:()=>n(e?.id),children:s.jsx(c.Z,{className:"h-5 w-5 text-blue-600 font-black cursor-pointer"})})})]})})};var u=t(1208),m=t(7884),p=t(4162);let h=function(){let e=new Date,a=6e4*e.getTimezoneOffset(),t=new Date(e-a).toISOString().split("T")[0],[i,c]=(0,l.useState)(t),[h,x]=(0,l.useState)(""),[b,v]=(0,l.useState)(""),[f,g]=(0,l.useState)(""),j=JSON.parse((0,r.getCookie)("usuario")),[y,w]=(0,l.useState)([]),[N,P]=(0,l.useState)([]),[S,C]=(0,l.useState)([]),[T,k]=(0,l.useState)(!1),[q,_]=(0,l.useState)({}),[G,A]=(0,l.useState)(!1),$=async()=>{try{let e=`https://webdevgt.com/pwg/public/api/tareas/${j?.id}`,a=await (0,n.Z)(e),t=a.data.filter(e=>e?.estado==="pendiente");console.log("uwu",t),w(t),D(a.data)}catch(e){console.log(e)}},Z=async()=>{try{let e=`https://webdevgt.com/pwg/public/api/tareas-atrasadas/${j?.id}`,a=(await (0,n.Z)(e)).data;C(a)}catch(e){console.log(e)}},D=e=>{P(e.filter(e=>e?.estado==="completada"))},z=async e=>{e.preventDefault();try{A(!0);let e={users_id:j.id,descripcion:h.trim(),plataforma:b.trim(),estado:"pendiente",fecha_vencimiento:i,hora:f};if(""===e.descripcion||""===e.plataforma||""===f){A(!1),u.toast.error("Todos los campos son obligatorios");return}let a=await n.Z.post("https://webdevgt.com/pwg/public/api/tareas/crear",e);await $(),x(""),v(""),g(""),A(!1),u.toast.success("La tarea fue creada exitosamente"),console.log(a)}catch(e){A(!1),console.log(e)}},E=async e=>{try{let a=`https://webdevgt.com/pwg/public/api/tarea/completar/${e}`,t=await n.Z.post(a,{estado:"completada"});console.log(t),await $(),await Z()}catch(e){console.log(e)}},M=async(e,a)=>{try{let t=`https://webdevgt.com/pwg/public/api/tarea/completar/${e}`,s=await n.Z.post(t,{estado:a?"completada":"pendiente"});console.log(s),await $(),await Z()}catch(e){console.log(e)}},F=async e=>{try{console.log(e),await n.Z.put(`https://webdevgt.com/pwg/public/api/tarea/${e.id}`,e),k(!1),await $(),await Z(),u.toast.success("Tarea actualizada con exito")}catch(e){console.log(e)}},L=e=>{let a=S.find(a=>a.id===e),t=y.find(a=>a.id===e);a?_(a):t?_(t):_({}),k(!0)};return(0,l.useEffect)(()=>{$(),Z()},[]),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[" ",s.jsx("h2",{className:"text-xl font-bold mb-4",children:"Mis Tareas"})," ",s.jsx("p",{className:"text-xl font-bold mb-4",children:j?.name})]}),(0,s.jsxs)("div",{className:" bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4",children:[(0,s.jsxs)("h2",{className:"text-lg font-bold mb-4 text-red-600",children:["Tareas Atrasadas: ",S.length]})," ",s.jsx("ul",{className:"md:overflow-y-auto",children:S.map((e,a)=>s.jsx(d,{tarea:e,handleCompletarTarea:E,setShowModal:k,handleUpdate:L},a))})]}),(0,s.jsxs)("div",{className:"w-full bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-10",children:[s.jsx("h2",{className:"text-lg font-bold mb-4 text-gray-700",children:"Nueva Tarea"})," ",(0,s.jsxs)("form",{onSubmit:z,children:[(0,s.jsxs)("div",{className:"flex gap-6 shadow appearance-none border rounded text-sm",children:[s.jsx("input",{className:"w-10/12 py-4 px-3 text-sm leading-tight focus:outline-none focus:shadow-outline",type:"text",id:"descripcion",name:"descripcion",placeholder:"A\xf1ade una nueva tarea",value:h,onChange:e=>x(e.target.value)}),(0,s.jsxs)("select",{className:"w-2/12 focus:outline-none text-sm ",id:"plataforma",name:"plataforma",value:b,onChange:e=>v(e.target.value),children:[s.jsx("option",{value:"",children:"Plataforma"}),s.jsx("option",{value:"atulado",children:"Atulado"}),s.jsx("option",{value:"caplin",children:"Caplin"}),s.jsx("option",{value:"lancasco",children:"Lancasco"}),s.jsx("option",{value:"gutis GT",children:"Gutis GT"}),s.jsx("option",{value:"gutis regional",children:"Gutis Regional"}),s.jsx("option",{value:"gutis CR",children:"Gutis CR"}),s.jsx("option",{value:"medpharma",children:"Medpharma"}),s.jsx("option",{value:"farmadina",children:"Farmadina"}),s.jsx("option",{value:"farmadina",children:"La Sante"}),s.jsx("option",{value:"global farma",children:"Global Farma"}),s.jsx("option",{value:"silanes",children:"Silanes"}),s.jsx("option",{value:"mi salud",children:"Mi Salud"}),s.jsx("option",{value:"plan esperanza",children:"Plan Esperanza"}),s.jsx("option",{value:"hadalabs",children:"Hadalabs"}),s.jsx("option",{value:"promefa",children:"Promefa"}),s.jsx("option",{value:"apac",children:"Apac"}),s.jsx("option",{value:"gruner",children:"Gruner"}),s.jsx("option",{value:"topfarma",children:"Top Farma"}),s.jsx("option",{value:"vizcaino",children:"Vizcaino"}),s.jsx("option",{value:"bienestar",children:"Bienestar"}),s.jsx("option",{value:"otros",children:"Otros"})]}),s.jsx("input",{className:"w-2/12 focus:outline-none text-sm",type:"date",id:"fecha_vencimiento",name:"fecha_vencimiento",value:i,onChange:e=>c(e.target.value)}),(0,s.jsxs)("select",{className:"w-2/12 focus:outline-none text-sm",id:"hora",name:"hora",value:f,onChange:e=>g(e.target.value),children:[s.jsx("option",{value:"",children:"Hora"}),s.jsx("option",{value:"5",children:"5 min"}),s.jsx("option",{value:"10",children:"10 min"}),s.jsx("option",{value:"15",children:"15 min"}),s.jsx("option",{value:"20",children:"20 min"}),s.jsx("option",{value:"25",children:"25 min"}),s.jsx("option",{value:"30",children:"30 min"}),s.jsx("option",{value:"40",children:"40 min"}),s.jsx("option",{value:"50",children:"50 min"}),s.jsx("option",{value:"60",children:"1 hr"}),s.jsx("option",{value:"120",children:"2 hrs"}),s.jsx("option",{value:"240",children:"4 hrs"}),s.jsx("option",{value:"360",children:"6 hrs"}),s.jsx("option",{value:"480",children:"8 hrs"})]})]}),s.jsx("input",{type:"submit",value:G?"Enviando.........":"A\xf1adir Tarea",disabled:G,className:"bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"})]})]}),(0,s.jsxs)("div",{className:" bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-10",children:[(0,s.jsxs)("h2",{className:"text-lg font-bold mb-4 text-blue-600",children:["Tareas Actuales: ",y.length]})," ",s.jsx("ul",{className:"md:overflow-y-auto",children:y.map((e,a)=>s.jsx(d,{tarea:e,handleCompletarTarea:E,setShowModal:k,handleUpdate:L},a))})]}),(0,s.jsxs)("div",{className:" bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-10",children:[(0,s.jsxs)("h2",{className:"text-lg font-bold mb-4 text-green-600",children:["Tareas Completadas: ",N.length]})," ",s.jsx("ul",{className:"md:overflow-y-auto",children:N.map(e=>s.jsx(o,{tarea:e,handleCambiarEstadoTarea:M},e?.id))})]}),(0,s.jsxs)(m.Z,{isOpen:T,onClose:()=>{k(!1)},children:[s.jsx("h2",{className:"text-lg font-medium mb-4",children:"Actualizar Tarea"}),s.jsx(p.Z,{inputs:[{name:"descripcion",placeholder:"A\xf1ade una nueva tarea",type:"text",pattern:{value:/^(?!\s+$).+/,message:"La descripcion no puede contener solo espacios en blanco"}},{name:"plataforma",type:"select",options:[{value:"",label:"Plataforma"},{value:"atulado",label:"Atulado"},{value:"caplin",label:"Caplin"},{value:"lancasco",label:"Lancasco"},{value:"gutis GT",label:"Gutis GT"},{value:"gutis regional",label:"Gutis Regional"},{value:"gutis CR",label:"Gutis CR"},{value:"medpharma",label:"Medpharma"},{value:"farmadina",label:"Farmadina"},{value:"La Sante",label:"La Sante"},{value:"global farma",label:"Global Farma"},{value:"silanes",label:"Silanes"},{value:"mi salud",label:"Mi Salud"},{value:"plan esperanza",label:"Plan Esperanza"},{value:"hadalabs",label:"Hadalabs"},{value:"promefa",label:"Promefa"},{value:"apac",label:"Apac"},{value:"gruner",label:"Gruner"},{value:"topfarma",label:"Top Farma"},{value:"vizcaino",label:"Vizcaino"},{value:"bienestar",label:"Bienestar"},{value:"otros",label:"Otros"}]},{name:"estado",type:"select",options:[{value:"pendiente",label:"Pendiente"},{value:"completada",label:"Completada"},{value:"atrasada",label:"Atrasada"}]},{name:"fecha_vencimiento",type:"date"},{name:"hora",type:"select",options:[{value:"",label:"Hora"},{value:"5",label:"5 min"},{value:"10",label:"10 min"},{value:"15",label:"15 min"},{value:"20",label:"20 min"},{value:"25",label:"25 min"},{value:"30",label:"30 min"},{value:"40",label:"40 min"},{value:"50",label:"50 min"},{value:"60",label:"1 hr"},{value:"120",label:"2 hrs"},{value:"240",label:"4 hrs"},{value:"360",label:"6 hrs"},{value:"480",label:"8 hrs"}]}],onSubmit:F,initialValues:q})]})]})}},4162:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});var s=t(2295),l=t(3729),r=t(708);let n=function({onSubmit:e,inputs:a,initialValues:t}){let[n,i]=(0,l.useState)(!1),{register:o,handleSubmit:c,formState:{errors:d},reset:u}=(0,r.cI)(t),m=async a=>{i(!0),await e(a),i(!1)};return(0,l.useEffect)(()=>{u(t)},[t,u]),s.jsx("div",{className:"overflow-y-auto max-h-[80vh]",children:(0,s.jsxs)("form",{onSubmit:c(m),noValidate:!0,className:"space-y-4",children:[a.map(e=>(0,s.jsxs)("div",{children:[s.jsx("label",{className:"font-bold text-sm text-gray-600",children:e.label}),"select"===e.type?s.jsx("select",{...o(e.name,{required:e.required}),className:"block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500",defaultValue:e.defaultValue,children:e.options.map(e=>s.jsx("option",{value:e.value,className:"capitalize",children:e.label},e.value))}):s.jsx("input",{...o(e.name,{required:e.required,pattern:e.pattern,min:e.min,max:e.max}),className:"block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500",type:e.type,placeholder:e.placeholder}),d[e.name]&&s.jsx("div",{className:"p-4 mb-4 text-sm  rounded-lg bg-red-100 text-red-800 mt-2",role:"alert",children:s.jsx("span",{className:"font-medium",children:d[e.name].message})})]},e.name)),s.jsx("input",{type:"submit",value:n?"Enviando.........":"enviar",disabled:n,className:"w-full cursor-pointer bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg text-white py-2 px-4 text-sm font-medium"})]})})}},7884:(e,a,t)=>{"use strict";t.d(a,{Z:()=>r});var s=t(2295),l=t(3254);let r=function({isOpen:e,onClose:a,children:t}){return s.jsx(s.Fragment,{children:e&&s.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-10",children:(0,s.jsxs)("div",{className:"bg-white p-5 rounded-lg w-full xl:w-96",children:[s.jsx("div",{className:"flex justify-end",children:s.jsx("button",{type:"button",onClick:a,className:"bg-red-500 p-1 rounded-lg hover:bg-red-400 focus:outline-none",children:s.jsx(l.Z,{className:"h-5 w-5 text-white"})})}),t,s.jsx("div",{className:"flex justify-end mt-4",children:s.jsx("button",{type:"button",onClick:a,className:"bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg text-gray-800 font-medium mr-2 transition-colors duration-300 ease-in-out",children:"Cancelar"})})]})})})}},8747:(e,a,t)=>{"use strict";t.r(a),t.d(a,{$$typeof:()=>r,__esModule:()=>l,default:()=>n});let s=(0,t(6843).createProxy)(String.raw`/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/app/dashboard/layout.jsx`),{__esModule:l,$$typeof:r}=s,n=s.default},1965:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>o,metadata:()=>i});var s=t(5036),l=t(1541),r=t.n(l);t(5023),t(7001);var n=t(3222);let i={title:"To Do List",description:"To Do List"};function o({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:r().className,children:[s.jsx(n.Ix,{}),e]})})}},4492:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var s=t(5036),l=t(8747);let r=(0,t(6843).createProxy)(String.raw`/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/components/contenedorTareas.jsx`),{__esModule:n,$$typeof:i}=r,o=r.default,c=function(){return s.jsx(l.default,{children:s.jsx(o,{})})}},5023:()=>{}};var a=require("../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),s=a.X(0,[504,518,267,508],()=>t(9062));module.exports=s})();
>>>>>>> be8e1ec9625e03df8719db2529adb58b7107c6b7
