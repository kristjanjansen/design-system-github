"use client";import e,{createContext as t,useState as r,useEffect as a}from"react";var i="tabs__Ee8mD__0-1-4";const c=t({activeTab:"",setActiveTab:e=>{}}),n=({children:t,onChange:n,defaultId:o})=>{const[s,l]=r(o||"");a((()=>{if(!o&&e.Children.count(t)>0){const r=e.Children.toArray(t)[0];l(r.props.id),n&&n(r.props.id)}}),[]);return e.createElement(c.Provider,{value:{activeTab:s,setActiveTab:e=>{l(e),n&&n(e)}}},e.createElement("div",{className:i,role:"tablist"},t))};export{n as Tabs};
//# sourceMappingURL=index.js.map
