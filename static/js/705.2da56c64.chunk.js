"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[705],{687:function(n,e,t){t.d(e,{Q:function(){return i}});var r=t(243);r.Z.defaults.baseURL="https://api.themoviedb.org/3",r.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDYzMDRkOWU2NGUwM2ViOGY1NGM5MWFmMDgyYTFmMyIsInN1YiI6IjY0NzhlNTE5Y2Y0YjhiMDE0MThkZWI5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rtCRi_Yj7uZNfshhCG6H9Eyo6JMNm4bccFC0_mOpATI";var i="https://image.tmdb.org/t/p/"},705:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r=t(861),i=t(439),a=t(757),o=t.n(a),c=t(791),s=t(87),u=t(243),l=t(687),d=t(184);function h(n){var e=n.action,t=(0,c.useState)(""),r=(0,i.Z)(t,2),a=r[0],o=r[1];return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==a.trim()&&e({query:a}),""===a.trim()&&alert("Your search request is empty"),o("")},children:[(0,d.jsx)("input",{type:"text",onChange:function(n){o(n.target.value)},value:a}),(0,d.jsx)("button",{type:"submit",children:"Search"})]})})}var f,p,x,m,v,Z,g,y=t(168),j=t(444),w=j.ZP.ul(f||(f=(0,y.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n"]))),b=j.ZP.li(p||(p=(0,y.Z)(["\n  width: 160px;\n  min-width: 110px;\n  font-size: 0.8rem;\n\n  border: 0.5px solid lightGray;\n  border-radius: 6px;\n  overflow: hidden;\n"]))),k=j.ZP.img(x||(x=(0,y.Z)(["\n  max-width: 100%;\n"]))),I=j.ZP.div(m||(m=(0,y.Z)(["\n  padding: 0 10px;\n  color: black;\n"]))),_=j.ZP.p(v||(v=(0,y.Z)(["\n  font-weight: bold;\n"]))),Y=j.ZP.p(Z||(Z=(0,y.Z)(["\n  color: gray;\n"]))),J=(0,j.ZP)(s.rU)(g||(g=(0,y.Z)(["\n  text-decoration: none;\n  font-weight: normal;\n\n  :hover,\n  :focus {\n    text-decoration: none;\n  }\n"])));function M(n){var e=n.data,t=n.query;return(0,d.jsxs)(d.Fragment,{children:[0===e.length&&(0,d.jsx)("div",{children:"Sorry, your query returned no matches"}),e&&(0,d.jsx)(w,{children:e.map((function(n){var e=n.id,r=n.title,i=n.poster_path,a=void 0===i?null:i,o=n.release_date,c=void 0===o?null:o,s=c?"(".concat(c.slice(0,4),")"):null;return(0,d.jsx)(b,{children:(0,d.jsx)(J,{to:"/movies/".concat(e),state:{from:"/movies?query=".concat(t)},children:(0,d.jsxs)("div",{children:[(0,d.jsx)(k,{src:a?"".concat(l.Q,"w185").concat(a):"https://fakeimg.pl/160x240?text=No+image&font=noto",alt:r}),(0,d.jsxs)(I,{children:[(0,d.jsx)(_,{children:r}),c&&(0,d.jsx)(Y,{children:s})]})]})})},e)}))})]})}function N(){var n,e=(0,c.useState)(null),t=(0,i.Z)(e,2),a=t[0],l=t[1],f=(0,c.useState)(null),p=(0,i.Z)(f,2),x=p[0],m=p[1],v=(0,c.useState)(!1),Z=(0,i.Z)(v,2),g=Z[0],y=Z[1],j=(0,s.lr)(),w=(0,i.Z)(j,2),b=w[0],k=w[1],I=null!==(n=b.get("query"))&&void 0!==n?n:"";return(0,c.useEffect)((function(){var n;if(""!==I)return function(){e.apply(this,arguments)}(),function(){return n()};function e(){return(e=(0,r.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(null),y(!0),e.next=5,u.Z.get("/search/movie?query=".concat(I),{cancelToken:new u.Z.CancelToken((function(e){return n=e}))});case 5:t=e.sent,l(t.data.results),console.log("response.data: ",t.data),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),"canceled"!==(r=e.t0.message)&&m(r);case 14:return e.prev=14,y(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,10,14,17]])})))).apply(this,arguments)}}),[I]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{action:k}),g&&(0,d.jsx)("div",{children:"Loading..."}),x&&(0,d.jsx)("div",{children:x}),a&&(0,d.jsx)(M,{data:a,query:I})]})}}}]);
//# sourceMappingURL=705.2da56c64.chunk.js.map