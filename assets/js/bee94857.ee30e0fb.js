"use strict";(self.webpackChunklaravel_code_generator=self.webpackChunklaravel_code_generator||[]).push([[8982],{4875:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=t(4848),i=t(8453);const r={sidebar_position:5,title:"Configurations"},s=void 0,a={id:"configurations",title:"Configurations",description:"Configurations",source:"@site/versioned_docs/version-2.2.0/configurations.md",sourceDirName:".",slug:"/configurations",permalink:"/docs/2.2.0/configurations",draft:!1,unlisted:!1,editUrl:"https://github.com/CrestApps/laravel-code-generator/edit/master/docs/versioned_docs/version-2.2.0/configurations.md",tags:[],version:"2.2.0",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Configurations"},sidebar:"docsSidebar",previous:{title:"Resource File",permalink:"/docs/2.2.0/resource-file"},next:{title:"Upgrade Guide",permalink:"/docs/2.2.0/upgrade-guide"}},c={},d=[{value:"Configurations",id:"configurations",level:2}];function l(e){const o={code:"code",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"configurations",children:"Configurations"}),"\n",(0,n.jsx)(o.p,{children:"Laravel-Code-Generator ships with lots of configurable option to give you control of the generated code. It is strongly recommended that you read the comments block above each option in the config/codegenerator.php file to get familiar with all available options."}),"\n",(0,n.jsx)(o.p,{children:"Starting at version 2.2 it ships with a unique way to override/extend the default settings to prevent you from losing your setting when upgrading the package. The config/codegenerator_custom.php is a dedicated file to store your options. This file will always be controlled by you and will never be overridden by the package. To override any configuration found in config/codegenerator.php, simple add the same option in your custom file. The generator will look at the your configuration before falling back to the default config. Note, any array based option will be extended not overridden. For more info read the comment block in the config/codegenerator_custom.php"}),"\n",(0,n.jsxs)(o.p,{children:["The most important option in the configuration file is common_definitions. This option allows you to set the default properties of new field using the name of that field. Your goal should be to generate 100% ready resource-file using this config. It will save you lots of time since all your fields will get generated using the desired properties. In another words, when using ",(0,n.jsx)(o.code,{children:"resource-file:create"}),", ",(0,n.jsx)(o.code,{children:"resource-file:append"})," or ",(0,n.jsx)(o.code,{children:"resource-file:from-database"})," to create resource file, the generated JSON will be 100% ready for you without any manual modification."]})]})}function u(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>a});var n=t(6540);const i={},r=n.createContext(i);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);