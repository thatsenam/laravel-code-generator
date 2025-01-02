"use strict";(self.webpackChunklaravel_code_generator=self.webpackChunklaravel_code_generator||[]).push([[8961],{2315:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var r=o(4848),a=o(8453);const n={sidebar_position:2,title:"Getting Started"},s="Getting Started",i={id:"get-started",title:"Getting Started",description:"Installation",source:"@site/versioned_docs/version-2.1.0/get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/docs/2.1.0/get-started",draft:!1,unlisted:!1,editUrl:"https://github.com/CrestApps/laravel-code-generator/edit/master/docs/versioned_docs/version-2.1.0/get-started.md",tags:[],version:"2.1.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Getting Started"},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/2.1.0/intro"},next:{title:"Available Commands",permalink:"/docs/2.1.0/available-commands"}},l={},d=[{value:"Installation",id:"installation",level:3},{value:"Getting Started Videos",id:"getting-started-videos",level:3},{value:"How to use Laravel Code Generator to generate production ready code in seconds!",id:"how-to-use-laravel-code-generator-to-generate-production-ready-code-in-seconds",level:4},{value:"Create a CRUDs for all your database tables in seconds using Laravel and Laravel-Code-Generator",id:"create-a-cruds-for-all-your-database-tables-in-seconds-using-laravel-and-laravel-code-generator",level:4}];function c(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"To download this package into your Laravel project, use the command-line to execute the following command"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"composer require crestapps/laravel-code-generator --dev\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["(You may skip this step when using Laravel >= 5.5)** To bootstrap the packages into your project while using command-line only, open the app/Providers/AppServiceProvider.php file in your project. Then, add the following code to the ",(0,r.jsx)(t.code,{children:"register()"})," method."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"if ($this->app->runningInConsole()) {\n    $this->app->register('CrestApps\\CodeGenerator\\CodeGeneratorServiceProvider');\n}\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Execute the following command from the command-line to publish the package's config and the default template to start generating awesome code."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'php artisan vendor:publish --provider="CrestApps\\CodeGenerator\\CodeGeneratorServiceProvider" --tag=default\n'})}),"\n",(0,r.jsxs)(t.p,{children:["A layout is required for the default views! The code generator allows you to create a layout using the command-line. Of course you can use your own layout. You'll only need to include ",(0,r.jsx)(t.a,{href:"http://getbootstrap.com/",children:"CSS bootstrap framework"})," in your layout for the default templates to work properly. Additionally, you can chose to design your own templates using a different or no css framework. For more info on how to create a custom template ",(0,r.jsx)(t.a,{href:"https://crestapps.com/laravel-code-generator/docs/2.2#how-to-create-custom-template",children:"click here"}),"!"]}),"\n",(0,r.jsx)(t.h3,{id:"getting-started-videos",children:"Getting Started Videos"}),"\n",(0,r.jsx)(t.h4,{id:"how-to-use-laravel-code-generator-to-generate-production-ready-code-in-seconds",children:"How to use Laravel Code Generator to generate production ready code in seconds!"}),"\n",(0,r.jsx)("iframe",{class:"responsive-video",src:"https://www.youtube.com/embed/l21qNcsMAWg?si=RbBsmeN06mq-o_5n",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,r.jsx)(t.h4,{id:"create-a-cruds-for-all-your-database-tables-in-seconds-using-laravel-and-laravel-code-generator",children:"Create a CRUDs for all your database tables in seconds using Laravel and Laravel-Code-Generator"}),"\n",(0,r.jsx)("iframe",{class:"responsive-video",src:"https://www.youtube.com/embed/infoecfXOCw?si=DYGOJjS7zgeNsrjv",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var r=o(6540);const a={},n=r.createContext(a);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);