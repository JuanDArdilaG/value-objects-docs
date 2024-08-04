"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[494],{7564:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(4848),t=a(8453);const r={},o="Password Value Object",i={id:"ValueObjects/PasswordValueObject",title:"Password Value Object",description:"This value object can be used to encapsulate the logic related with password creation and manipulation.",source:"@site/docs/ValueObjects/PasswordValueObject.md",sourceDirName:"ValueObjects",slug:"/ValueObjects/PasswordValueObject",permalink:"/value-objects-docs/docs/ValueObjects/PasswordValueObject",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ValueObjects/PasswordValueObject.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Value Objects",permalink:"/value-objects-docs/docs/category/value-objects"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"fromRaw(plain: string)",id:"fromrawplain-string",level:3},{value:"fromHashed(hashed: string)",id:"fromhashedhashed-string",level:3},{value:"Characteristics",id:"characteristics",level:2},{value:"Password hashing - using bcrypt.",id:"password-hashing---using-bcrypt",level:3},{value:"Password validation - using bcrypt.",id:"password-validation---using-bcrypt",level:3},{value:"Min and max length configuration.",id:"min-and-max-length-configuration",level:3}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"password-value-object",children:"Password Value Object"}),"\n",(0,n.jsx)(s.p,{children:"This value object can be used to encapsulate the logic related with password creation and manipulation."}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(s.p,{children:["Password VOs can only be created through the named constructors: ",(0,n.jsx)(s.strong,{children:"fromRaw"})," and ",(0,n.jsx)(s.strong,{children:"fromHashed"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"fromrawplain-string",children:"fromRaw(plain: string)"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note:"})," the method is asynchronous."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Allows us to create the VO from a plain password. For example, in the user creation."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:'const pass = await PasswordValueObject.fromRaw("12345");\n'})}),"\n",(0,n.jsx)(s.h3,{id:"fromhashedhashed-string",children:"fromHashed(hashed: string)"}),"\n",(0,n.jsx)(s.p,{children:"Allows us to create the VO from a hashed password. For example, in the user db retrieving."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:'const pass = PasswordValueObject.fromHashed("$...");\n'})}),"\n",(0,n.jsx)(s.h2,{id:"characteristics",children:"Characteristics"}),"\n",(0,n.jsxs)(s.h3,{id:"password-hashing---using-bcrypt",children:["Password hashing - using ",(0,n.jsx)(s.a,{href:"https://github.com/kelektiv/node.bcrypt.js",children:"bcrypt"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"By default, the passwords value objects only store the hashed representation of the password."}),"\n",(0,n.jsxs)(s.h3,{id:"password-validation---using-bcrypt",children:["Password validation - using ",(0,n.jsx)(s.a,{href:"https://github.com/kelektiv/node.bcrypt.js",children:"bcrypt"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Allow us to compare the hash with a plain password."}),"\n",(0,n.jsx)(s.h3,{id:"min-and-max-length-configuration",children:"Min and max length configuration."}),"\n",(0,n.jsxs)(s.p,{children:["By default, the password should have a length between 5 and 20 (inclusive). It can be modified changing a static properties (",(0,n.jsx)(s.strong,{children:"options.min"})," and ",(0,n.jsx)(s.strong,{children:"options.max"}),") in the class."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"PasswordValueObject.options.min = 10;\nPasswordValueObject.options.max = 50;\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>o,x:()=>i});var n=a(6540);const t={},r=n.createContext(t);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);