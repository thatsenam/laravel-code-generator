"use strict";(self.webpackChunklaravel_code_generator=self.webpackChunklaravel_code_generator||[]).push([[891],{3926:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var t=s(4848),r=s(8453);const n={sidebar_position:4,title:"Resource File"},l=void 0,o={id:"resource-file",title:"Resource File",description:"Resource Files",source:"@site/versioned_docs/version-2.1.0/resource-file.md",sourceDirName:".",slug:"/resource-file",permalink:"/docs/2.1.0/resource-file",draft:!1,unlisted:!1,editUrl:"https://github.com/CrestApps/laravel-code-generator/edit/master/docs/versioned_docs/version-2.1.0/resource-file.md",tags:[],version:"2.1.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Resource File"},sidebar:"docsSidebar",previous:{title:"Available Commands",permalink:"/docs/2.1.0/available-commands"},next:{title:"Configurations",permalink:"/docs/2.1.0/configurations"}},a={},d=[{value:"Resource Files",id:"resource-files",level:2},{value:"Available Commands to Manage Resource Files",id:"available-commands-to-manage-resource-files",level:2},{value:"How to create resource-file?",id:"how-to-create-resource-file",level:3},{value:"How to add resources to existing resource-file?",id:"how-to-add-resources-to-existing-resource-file",level:3},{value:"How to remove resources to existing resource-file?",id:"how-to-remove-resources-to-existing-resource-file",level:3},{value:"How to delete existing resource-file?",id:"how-to-delete-existing-resource-file",level:3},{value:"How to create a resource&#39;s file from existing database?",id:"how-to-create-a-resources-file-from-existing-database",level:3},{value:"Fields",id:"fields",level:3},{value:"HTML Properties",id:"html-properties",level:4},{value:"Database Properties",id:"database-properties",level:4},{value:"Managing fields using JSON file",id:"managing-fields-using-json-file",level:3},{value:"Resources mapping file",id:"resources-mapping-file",level:3},{value:"Generating clean and complete fields out of the box!",id:"generating-clean-and-complete-fields-out-of-the-box",level:3},{value:"Foreign Relations",id:"foreign-relations",level:3},{value:"Composite Indexes",id:"composite-indexes",level:3}];function c(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"resource-files",children:"Resource Files"}),"\n",(0,t.jsx)(i.p,{children:"A JSON based file that allows you to define how you like your resource generated. You can define your fields, indexes, and model relations."}),"\n",(0,t.jsx)(i.h2,{id:"available-commands-to-manage-resource-files",children:"Available Commands to Manage Resource Files"}),"\n",(0,t.jsxs)(i.p,{children:["The option in between the square brackets ",(0,t.jsx)(i.code,{children:"[]"})," must be replaced with a variable of your choice."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["php artisan resource-file",":create"," [model-name]"]}),"\n",(0,t.jsxs)(i.li,{children:["php artisan resource-file",":append"," [model-name]"]}),"\n",(0,t.jsxs)(i.li,{children:["php artisan resource-file",":reduce"," [model-name]"]}),"\n",(0,t.jsxs)(i.li,{children:["php artisan resource-file",":delete"," [model-name]"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"how-to-create-resource-file",children:"How to create resource-file?"}),"\n",(0,t.jsxs)(i.admonition,{title:"Create a new resource file.",type:"note",children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"php artisan resource-file:create [model-name]\n"})}),(0,t.jsxs)(i.p,{children:["The argument ",(0,t.jsx)(i.code,{children:"[model-name]"})," should be replaced with the name of the model you are creating. For example:"]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"php artisan resource-file:create Post\n"})}),(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Option"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:[(0,t.jsx)("a",{name:"resource-filename"}),"--resource-filename"]}),(0,t.jsxs)(i.td,{children:["The name of the file to be created. When this option is left out, the file will be the plural-form of the model name. If the model name is ",(0,t.jsx)(i.code,{children:"AssetCategory"}),", the file name will be ",(0,t.jsx)(i.code,{children:"asset_categories.json"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:[(0,t.jsx)("a",{name:"fields"}),"--fields"]}),(0,t.jsxs)(i.td,{children:["A list of the field names to be created. The names should be separated by a comma. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," You may also pass a complex string using the following schema ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," ",(0,t.jsx)(i.code,{children:'--fields="name:colors;html-type:select;options:blue|yellow|green|red|white,name:second_field_name"'})," ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," Complex string are allowed and will be handy is some cases. However, in most cases all you need to pass is the field names as the common_definitions key in the configuration file will define most options for you out of the box using the name of the field.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," Each field in the complex string must be seperated by a ",(0,t.jsx)(i.code,{children:","}),". Also each property in the field must be seperated by ",(0,t.jsx)(i.code,{children:";"})," while each option of a property is seperated by ",(0,t.jsx)(i.code,{children:"|"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:[(0,t.jsx)("a",{name:"relations"}),"--relations"]}),(0,t.jsxs)(i.td,{children:["A list of the relations to be created. The string should follow the schema below ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," ",(0,t.jsx)(i.code,{children:'--relations="name:comments;type:hasMany;field:title;params:App\\Models\\Comment|post_id|id"'}),"  ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," Each relation in the string must be seperated by a ",(0,t.jsx)(i.code,{children:","}),". Also each property in the relation must be seperated by ",(0,t.jsx)(i.code,{children:";"})," while each parameter of the params property seperated by ",(0,t.jsx)(i.code,{children:"|"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:[(0,t.jsx)("a",{name:"indexes"}),"--indexes"]}),(0,t.jsxs)(i.td,{children:["A list of the indexes to be created. The string should follow the schema below",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"  ",(0,t.jsx)(i.code,{children:'--indexes="name:first_last_name_index;columns:first_name|last_name"'}),". ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," Each index in the string must be seperated by a ",(0,t.jsx)(i.code,{children:","}),". Also each property in the index must be seperated by ",(0,t.jsx)(i.code,{children:";"})," while each field name in the columns property seperated ",(0,t.jsx)(i.code,{children:"|"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--translation-for"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#translation-for",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--force"}),(0,t.jsx)(i.td,{children:"This option will override any file that already exist."})]})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"how-to-add-resources-to-existing-resource-file",children:"How to add resources to existing resource-file?"}),"\n",(0,t.jsxs)(i.admonition,{title:"Appends a new fields, indexes, or relations to an existing resource-file. If the resource-file does not exists one will be created",type:"note",children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"php artisan resource-file:append Post --fields=notes,created_by\n"})}),(0,t.jsxs)(i.p,{children:["The argument ",(0,t.jsx)(i.code,{children:"[model-name]"})," should be replaced with the name of the model you are creating. For example:"]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"php artisan create:form-request Post\n"})}),(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Option"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--fields"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#fields",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--relations"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#relations",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--indexes"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#indexes",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--resource-filename"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#resource-filename",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--translation-for"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#translation-for",children:"Described above"})})]})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"how-to-remove-resources-to-existing-resource-file",children:"How to remove resources to existing resource-file?"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["If the resource-file becomes empty, it will automatically get deleted by calling the ",(0,t.jsx)(i.code,{children:"resource-file:delete"})," command."]}),"\n"]}),"\n",(0,t.jsxs)(i.admonition,{title:"Removes fields, indexes, or relations to an existing resource-file.",type:"note",children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"php artisan resource-file:reduce [model-name]\n"})}),(0,t.jsxs)(i.p,{children:["The argument ",(0,t.jsx)(i.code,{children:"[model-name]"})," should be replaced with the name of the model you are creating. For example:"]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"php artisan resource-file:reduce Post --fields=notes,created_by\n"})}),(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Option"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--fields"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#fields",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--relations"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#relations",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--indexes"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#indexes",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--resource-filename"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#resource-filename",children:"Described above"})})]})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"how-to-delete-existing-resource-file",children:"How to delete existing resource-file?"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"It is recommended to use this command to delete file instead of manually deleting it. This command will also delete the mapped relation in the resource_map file."}),"\n"]}),"\n",(0,t.jsxs)(i.admonition,{title:"Delete existing resource-file.",type:"note",children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"php artisan resource-file:delete [model-name]\n"})}),(0,t.jsxs)(i.p,{children:["The argument ",(0,t.jsx)(i.code,{children:"[model-name]"})," should be replaced with the name of the model you are creating. For example:"]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"php artisan resource-file:delete Post\n"})}),(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Option"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--fields"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#fields",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--relations"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#relations",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--indexes"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#indexes",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--resource-filename"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#resource-filename",children:"Described above"})})]})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"how-to-create-a-resources-file-from-existing-database",children:"How to create a resource's file from existing database?"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"Are you looking to convert existing application to Laravel framework? Or, looking to use database-first instead of code-first approach? No problem! This package allows you to create a resource's file from existing database."}),"\n",(0,t.jsxs)(i.p,{children:["You can easily take advantage of this feature by passing ",(0,t.jsx)(i.code,{children:"--table-exists"})," option to the ",(0,t.jsx)(i.code,{children:"create:resources"})," command to automatically generate all the resources from existing database's table."]}),"\n"]}),"\n",(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsxs)(i.mdxAdmonitionTitle,{children:["Convert your existing database into resource file, then the create",":resources"," command is used to generate the resources"]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"php artisan resource-file:from-database [model-name]\n"})}),(0,t.jsxs)(i.p,{children:["The argument ",(0,t.jsx)(i.code,{children:"[model-name]"})," should be replaced with the name of the model you are creating. For example:"]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"php artisan resource-file:from-database Post\n"})}),(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Option"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--table-name"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#table-name",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--database-name"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#database-name",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--resource-file"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#resource-file",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--resource-filename"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#resource-filename",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--translation-for"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#translation-for",children:"Described above"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"--force"}),(0,t.jsx)(i.td,{children:"This option will override any file that already exist."})]})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"The minimum requirement for creating a field is a unique name. However, the code-generator is very flexible and allows you to have full control on the fields. Below all the available properties for defining a field"}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"html-properties",children:"HTML Properties"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Property name"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"name"}),(0,t.jsx)(i.td,{children:"A unique name for the field. This is a required field."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"label"}),(0,t.jsx)(i.td,{children:"A user-friendly title to describe the field. If this option is left out, the field's name is used to generate a title."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"validation"}),(0,t.jsxs)(i.td,{children:["You can pass any valid Laravel validation rule. The rules should be separated by bar ",(0,t.jsx)(i.code,{children:"|"}),". ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," For example: ",(0,t.jsx)(i.code,{children:"required|string|min:2|max:255"})," ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Start with Laravel 5.5, you can define custom validation rules and pass them as well. For example, to use a custom validation rule called Uppercase in addition to the required rule, you can pass this string required"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"html-type"}),(0,t.jsxs)(i.td,{children:["Default value: ",(0,t.jsx)(i.code,{children:"text"}),". A valid property will be one of the following options ",(0,t.jsx)("br",{})," ",(0,t.jsx)(i.code,{children:"text"}),", ",(0,t.jsx)(i.code,{children:"textarea"}),", ",(0,t.jsx)(i.code,{children:"password"}),",",(0,t.jsx)(i.code,{children:"email"}),",",(0,t.jsx)(i.code,{children:"checkbox"}),",",(0,t.jsx)(i.code,{children:"radio"}),",",(0,t.jsx)(i.code,{children:"number"}),",",(0,t.jsx)(i.code,{children:"select"}),",",(0,t.jsx)(i.code,{children:"hidden"}),",",(0,t.jsx)(i.code,{children:"file"}),",",(0,t.jsx)(i.code,{children:"selectRange"}),",",(0,t.jsx)(i.code,{children:"selectMonth"}),", or ",(0,t.jsx)(i.code,{children:"multipleSelect"}),". ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Note: when using file type, after the file is uploaded to the designated path, the filename is stored in the database by default. For everything to work properly, the data-type must be of some sort of a string type. Or modify the behavior of moveFile method to handle the new file.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," By default this process stores the uploaded file in the path defined in config file. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Note: when using checkbox, or multipleSelect, the items are stored in the database as JSON string. Additionally, the items in the index or form views are displayed separated by the value provided in the delimiter property."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"delimiter"}),(0,t.jsxs)(i.td,{children:['Default value: "; ". When generating a form with checkbox or a select menu that accepts multiple answers, we need either store the results in a foreign model or store the records in a string field. By default, the code generator will convert the multiple options that a user selected into a JSON string before the results are stored using a Eloquent-mutator method. ',(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"When the data is presented on the show and/or index views, the options are displayed separated by the value of the delimiter. Of course, you can always change this behavior to fit your needs by removing the accessor and mutator methods in the model and modifying the views accordingly."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"css-class"}),(0,t.jsxs)(i.td,{children:["You can add custom css class(es) to the html input. Any value is placed in this option will be appended to the field's ",(0,t.jsx)(i.code,{children:'class="..."'})," property. Classes that are already set in the views will not be replaced."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"date-format"}),(0,t.jsxs)(i.td,{children:['Default value: "m/d/Y H',":i",' A". Any field with the type date, time or datetime can be formatted different when it is displayed. You can change the display format using this option.']})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"html-value"}),(0,t.jsxs)(i.td,{children:["A default value to set the field to. When using multiple options based html-type like checkbox, multipleSelect you can set this property to array of values to set multiple values by default. Ex, ",(0,t.jsx)(i.code,{children:'["Red","Green"]'})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"options"}),(0,t.jsxs)(i.td,{children:["If you used select, checkbox, or radio for the html-type property, this is where you provide the options. Here are some example of the schema. ",(0,t.jsx)("br",{})," ",(0,t.jsx)("br",{})," A simple array: In this option, the value will be the numeric index value of the item in the array.  ",(0,t.jsx)("br",{})," ",(0,t.jsx)(i.code,{children:'"options": ["Prefer not to say","Male","Female"]'}),".",(0,t.jsx)("br",{})," Using explicit values ",(0,t.jsx)("br",{})," ",(0,t.jsx)(i.code,{children:'"options": { "": Prefer not to say", "male": "Male","female": "Female"}'}),". ",(0,t.jsx)("br",{})," Using multiple language phrases for each option ",(0,t.jsx)("br",{})," ",(0,t.jsx)(i.code,{children:'"options": {"en":{"":"Prefer not to say","male":"Male","female":"Female"},"ar":{"":"Prefer not to say in Arabic","male":"Male in Arabic","female":"Female in Arabic"},"fr":{"":"Prefer not to say in French","male":"Male in French","female":"Female in French"}}'})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"is-inline-options"}),(0,t.jsx)(i.td,{children:"Default value: false. If the html-type is set to radio or checkbox, setting this option to true will put the items next to each other instead of a vertical list."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"placeholder or place-holder"}),(0,t.jsx)(i.td,{children:"You can set a placeholder value when html-type is set to text, number, email, textarea or select."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"is-on-index"}),(0,t.jsxs)(i.td,{children:["Default value: ",(0,t.jsx)(i.code,{children:"true"}),".  Setting the value to ",(0,t.jsx)(i.code,{children:"false"})," will prevent from adding this field to the index view."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"is-on-form"}),(0,t.jsxs)(i.td,{children:["Default value: ",(0,t.jsx)(i.code,{children:"true"}),".  Setting the value to ",(0,t.jsx)(i.code,{children:"false"})," will prevent from adding this field to the form view."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"is-on-show"}),(0,t.jsxs)(i.td,{children:["Default value: ",(0,t.jsx)(i.code,{children:"true"}),".  Setting the value to ",(0,t.jsx)(i.code,{children:"false"})," will prevent from adding this field to the show view."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"is-on-views"}),(0,t.jsxs)(i.td,{children:["Default value: ",(0,t.jsx)(i.code,{children:"true"}),". Setting the value to ",(0,t.jsx)(i.code,{children:"false"})," will prevent from adding this field to the index, form or show view. This is just a short way to change the visibility for all views."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"is-header"}),(0,t.jsxs)(i.td,{children:["Default value: false. Only one field can be set to a header. The header field will be use as the page header in the show view. The key ",(0,t.jsx)(i.code,{children:"common_header_patterns"})," in the configuration file, allow you to list the common field name to automatically set them as header."]})]})]})]}),"\n",(0,t.jsx)(i.h4,{id:"database-properties",children:"Database Properties"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Property name"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"data-type"}),(0,t.jsxs)(i.td,{children:["Default is ",(0,t.jsx)(i.code,{children:"varchar"}),". The database column type. The following are valid types: ",(0,t.jsx)("br",{})," ",(0,t.jsx)(i.code,{children:"'char', 'date', 'datetime', 'datetimetz', 'biginteger', 'bigint', 'blob', 'binary', 'bool', 'boolean', 'decimal', 'double', 'enum', 'list', 'float', 'int', 'integer', 'ipaddress', 'json', 'jsonb', 'longtext', 'macaddress', 'mediuminteger', 'mediumint', 'mediumtext', 'morphs', 'string', 'varchar', 'nvarchar', 'text', 'time', 'timetz', 'tinyinteger', 'tinyint', 'timestamp', 'timestamptz', 'unsignedbiginteger', 'unsignedbigint', 'unsignedInteger', 'unsignedint', 'unsignedmediuminteger', 'unsignedmediumint', 'unsignedsmallinteger', 'unsignedsmallint', 'unsignedtinyinteger', 'uuid', 'uuid'"})," ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," Note: you can add short cuts if needed to in the ",(0,t.jsx)(i.code,{children:"laravel-code-generator.php"})," config file.You can add new mapping to the eloquent_type_to_method array."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"data-type-params"}),(0,t.jsxs)(i.td,{children:["This option allows you to specify parameters for the data type. Please ensure you provide valid parameters otherwise unexpected behavior will occur. For example, varchar and char will only need a maximum of one integer parameter where double, decimal and float require two integer parameters. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," Command line example with specifying a decimal precision and scale: ",(0,t.jsx)(i.code,{children:"data-type-params=5,2"}),". JSON file example ",(0,t.jsx)(i.code,{children:'"data-type-params": [5,2]'}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"If this option left out while some sort of a string data-type was used along with a max validation rule, the max value is used to limit the length of the sting in the database when a migration is generated"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"data-value"}),(0,t.jsx)(i.td,{children:"Default value is null.  The default value for the database column."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"is-auto-increment"}),(0,t.jsx)(i.td,{children:"Default value is false.  Setting this value to true will make this column a primary with auto increment identity."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"is-primary"}),(0,t.jsxs)(i.td,{children:["Default value is false. You can set this field as the primary for retrieving records from the database. You can only set one column as the primary. If you set multiple fields are primary, the first one will be selected and the rest will be ignored. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Note: if you set the is-auto-increment field, this option will automatically get set. Ths only time this can be used is to create a primary field you don't wish for the database to auto assign it."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"is-index"}),(0,t.jsx)(i.td,{children:"Default value is false. Setting this value to true will add index to this column."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"is-unique"}),(0,t.jsx)(i.td,{children:"Default value is false.  Setting this value to true will add a unique index to this column."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"is-nullable"}),(0,t.jsxs)(i.td,{children:["Default value is false. Setting this value to true will make this column nullable. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Note: when setting this option to true, the default value will be set to NULL unless you pass a different value to data-value. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),' When the validation rule contains "nullable", "required_if", "required_unless", "required_with", "required_with_all", "required_without", "required_without_all" or does NOT contains "required" rule, this flag will automatically gets set.']})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"is-unsigned"}),(0,t.jsx)(i.td,{children:"Default value is false.  Setting this value to true will make this column unsigned. This option should only be used with numeric types only."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"comment"}),(0,t.jsx)(i.td,{children:"This option will allow you to add meta description of the field in the database."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"is-data"}),(0,t.jsx)(i.td,{children:"This option will allow you to casts a data filed to a Carbon object."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"cast-as"}),(0,t.jsx)(i.td,{children:"This option will allow you to cast a field to php's native type."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"foreign-relation"}),(0,t.jsxs)(i.td,{children:["This option will allow you to create a foreign relation between the models. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," ",(0,t.jsx)(i.code,{children:'json {"name":"creator","type":"belongsTo","params":["App\\\\User","created_by"],"field":"name"}'})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"foreign-constraint"}),(0,t.jsxs)(i.td,{children:["This option will allow you to create a foreign relation between the models.  ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," ",(0,t.jsx)(i.code,{children:'json {"field":"user_id","references":"id","on":"users","on-delete":"cascade","on-update":"cascade","references-model":"App\\\\Models\\\\User"} '})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"on-store"}),(0,t.jsxs)(i.td,{children:["This option allows you to set a fixed value on the store action. For example, Illuminate\\Support\\Facades\\Auth::Id(); will set the value to the current user id when the model is first created. Assuming you're using ",(0,t.jsx)(i.a,{href:"https://laravel.com/docs/master/authentication",children:"Laravel Authentication"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"on-update"}),(0,t.jsx)(i.td,{children:"Similar to on-storeThis option allows you to set a fixed value on the update action."})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"managing-fields-using-json-file",children:"Managing fields using JSON file"}),"\n",(0,t.jsx)(i.p,{children:"Storing the field's specification in a JSON file enables you to easily reuse the field with multiple commands. It also allows you to recreate the resources in the future if you decided to add/remove fields after the views have been crafted. The JSON files are typically stored in /resources/laravel-generator. If you don\u2019t like where these files are kept, you can change that path from the config/laravelgenerator.php file."}),"\n",(0,t.jsx)(i.p,{children:"The following command should be used to manage the resource-file to make this process easier."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["php artisan resource-file",":from-database"," [model-name]"]}),"\n",(0,t.jsxs)(i.li,{children:["php artisan resource-file",":create"," [model-name]"]}),"\n",(0,t.jsxs)(i.li,{children:["php artisan resource-file",":append"," [model-name]"]}),"\n",(0,t.jsxs)(i.li,{children:["php artisan resource-file",":reduce"," [model-name]"]}),"\n",(0,t.jsxs)(i.li,{children:["php artisan resource-file",":delete"," [model-name]"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"resources-mapping-file",children:"Resources mapping file"}),"\n",(0,t.jsx)(i.p,{children:"The resources-map file, is a JSON file that is used to keep track of the fields-file and the model classes to allow you to create the resources all at once."}),"\n",(0,t.jsxs)(i.p,{children:["The default file name is ",(0,t.jsx)(i.code,{children:"resources_map.json"})," and can be changed from the configuration file."]}),"\n",(0,t.jsxs)(i.p,{children:["When using ",(0,t.jsx)(i.code,{children:"resource-file:create"}),", ",(0,t.jsx)(i.code,{children:"resource-file:from-database"})," or ",(0,t.jsx)(i.code,{children:"resource-file:delete"})," commands, a file called resources_map.json is automatically updated."]}),"\n",(0,t.jsx)(i.p,{children:"The following is the structure of the file."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:' {\n    {\n        "model-name": "Brand",\n        "resource-file": "brands.json"\n    },\n    {\n        "model-name": "Customer",\n        "resource-file": "customers.json",\n        "table-name": "customers_table"\n    }\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["All option that are available to the ",(0,t.jsx)(i.code,{children:"create:resources"})," can be used in the mapping file to make creating resources for all models customizable. Here is an example"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:' {\n   {\n       "model-name": "Customer",\n       "resource-file": "customers.json",\n       "table-name": "customers_table",\n       "routes-prefix" "customers_prefix"\n   }\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"To generate all the resources mapped in the resources_map.json file, use the following command"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"php artisan create:mapped-resources [model-name]\n"})}),"\n",(0,t.jsx)(i.h3,{id:"generating-clean-and-complete-fields-out-of-the-box",children:"Generating clean and complete fields out of the box!"}),"\n",(0,t.jsx)(i.p,{children:"When using the commands that generate fields, our goal is to generate fields configured and ready for use without having to make any change to the generated fields."}),"\n",(0,t.jsx)(i.p,{children:"While it is not possible to cover 100% of the use cases, Laravel-code-generator is shipped with a powerful configuration option to allow you to add conditions to handle your own use case."}),"\n",(0,t.jsxs)(i.p,{children:["The key ",(0,t.jsx)(i.code,{children:"common_definitions"})," in the ",(0,t.jsx)(i.code,{children:"config/laravel-code-generator.php"})," file allows you match field name using pattern then set the properties accordingly."]}),"\n",(0,t.jsxs)(i.p,{children:["For example, you may want to add a global date, time, or datetime picker using javascript for any field where its name ends with ",(0,t.jsx)(i.code,{children:"_at"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"You can do that by adding the following entry"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:"[\n    'match' => ['*_at'],\n    'set'   => [\n        'class'   => 'datetime-picker',\n    ]\n]\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The same thing can be done for any field that ends with ",(0,t.jsx)(i.code,{children:"_date"})," or starts with `date_of``"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:"[\n    'match' => ['*_date','date_of_*'],\n    'set'   => [\n        'class'   => 'date-picker',\n    ]\n]\n"})}),"\n",(0,t.jsx)(i.p,{children:"Of course, you can set any of the field's option like html-type, data-type, data-type-params or foreign relation. You can set the configuration as fits your environment, then you'll be able to create fields-file ready to generate resources with minimal work!"}),"\n",(0,t.jsx)(i.p,{children:"The conditions are applied to each field top to bottom, the configuration at the bottom of the array will take presence over the once on the top in case multiple conditions were matched."}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"It is strongly recommended to read the comments above each option in the configuration file to help you understand and customize the generator to fit your needs!"})}),"\n",(0,t.jsx)(i.h3,{id:"foreign-relations",children:"Foreign Relations"}),"\n",(0,t.jsx)(i.p,{children:"If you're using a code-first-approach and like to define relations between your models, you can easily define that in the relations keyword entry of the resource-file. Each relation can be defined using the following schema"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n    "name": "posts",            // the name of the relation\n    "type": "hasMany",          // the type of the relation\n    "params": [                 // the parameters for the used relation.\n        "App\\\\Models\\\\Comment",\n        "post_id",\n        "id"\n    ],\n    "field": "name"             // the name of the field on the foreign model to use as display value\n}\n'})}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:["When creating ",(0,t.jsx)(i.code,{children:"hasOne()"})," or ",(0,t.jsx)(i.code,{children:"belongsTo()"})," relations, it be best to define them at the field level using the foreign-relation option.\nComposite Indexes"]})}),"\n",(0,t.jsx)(i.h3,{id:"composite-indexes",children:"Composite Indexes"}),"\n",(0,t.jsx)(i.p,{children:"If you're using a code-first-approach and like to define indexes with multiple columns, you can easily do that by adding these indexed to the Indexes keyword entry in the resource-file file. Each composite index can be defined using the following schema"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n    "name": "owner",  // The name of the index to use, if no name is set a one will be generated.\n    "type": "unique", // Valid index type is one of the following \'index\',\'unique\' or \'primary\'. If the type is not provided, \'index\' is used.\n    "columns": [      // List of the columns\' names to be included in the index left to right.\n        "first_name",\n        "last_name"\n    ]\n}\n'})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>o});var t=s(6540);const r={},n=t.createContext(r);function l(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);