import{r,u as P,$ as p,j as e,S as T,L as A}from"./index-DOnP4_aQ.js";import{u as B,S as k,a as w,b as E,P as O}from"./ShopTopbar-BVi9pE_X.js";import{B as $}from"./Breadcrumb-DCnWgaS7.js";const D=()=>{const[h,u]=r.useState("grid three-column"),[n,x]=r.useState(""),[o,S]=r.useState([]),[c,f]=r.useState([]),[s,b]=B([]),[j,y]=r.useState(0),[i,v]=r.useState(1),m=15;console.log(j);let{pathname:N}=P();const _=t=>{u(t)},C=t=>{const a=["item_name","like",`%${t}%`];b(t?a:[]),console.log("search",s)},F=(t,a)=>{const g=[t,"=",a];switch(t){case"brand":f(a?g:[]);break;case"item_group":S(a?g:[]);break}},L=(t,a)=>{x(a)},{data:d}=p("Item",{fields:["*"],filters:[["custom_category","=","Accessory"],...s.length?[s]:[],...o.length?[o]:[],...c.length?[c]:[]],orderBy:n?{field:"valuation_rate",order:n==="priceHighToLow"?"desc":"asc"}:void 0,limit:m,limit_start:m*(i-1)+(i-1)},["product_list",s,i,o,c,n]),{data:l}=p("Item",{fields:["name"],filters:[["custom_category","=","Accessory"],...s.length?[s]:[],...o.length?[o]:[],...c.length?[c]:[]]},["product_count",s,i,o,c,n]);return e.jsxs(r.Fragment,{children:[e.jsx(T,{titleTemplate:"Shop Page",description:"Shop page of ev hub minimalist eCommerce template."}),e.jsxs(A,{headerTop:"visible",children:[e.jsx($,{pages:[{label:"Home",path:"/"},{label:"Accessory",path:N}]}),e.jsx("div",{className:"shop-area pt-95 pb-100",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-3 order-2 order-lg-1",children:e.jsx(k,{getSortParams:F,sideSpaceClass:"mr-30",getSearch:C})}),e.jsxs("div",{className:"col-lg-9 order-1 order-lg-2",children:[e.jsx(w,{getLayout:_,getFilterSortParams:L,productCount:(l==null?void 0:l.length)||0,sortedProductCount:(d==null?void 0:d.length)||0}),e.jsx(E,{layout:h,products:d||[]}),e.jsx("div",{className:"pro-pagination-style text-center mt-30",children:e.jsx(O,{totalRecords:(l==null?void 0:l.length)||0,pageLimit:m,pageNeighbours:2,setOffset:y,currentPage:i,setCurrentPage:v,pageContainerClass:"mb-0 mt-0",pagePrevText:"«",pageNextText:"»"})})]})]})})})]})]})};export{D as default};
