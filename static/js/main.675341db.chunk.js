(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),i=(n(13),n(14),n(2)),o=n.n(i),l=n(5),d=n(8),j=n(3),u=n(6),h=n(0);function b(e,t){return Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},t.name,t.value))}function p(){var e=Object(c.useReducer)(b,{X:0,Y:0,Z:0}),t=Object(d.a)(e,2),n=t[0],r=t[1];function a(){return s.apply(this,arguments)}function s(){return(s=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://mprojectsdb.gq/abet/sendposition.php",{method:"POST",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Request-Methods":"POST"},mode:"cors",body:JSON.stringify(n)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n),e.prev=2,e.next=5,a();case 5:if(c=e.sent,console.log(c),c.ok){e.next=9;break}throw new Error;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}function j(e){r({name:e.target.name,value:e.target.value})}return Object(h.jsxs)("div",{className:"form",children:[Object(h.jsx)("h2",{children:"Send position"}),Object(h.jsx)("p",{children:"Write position with the three cordinates axis"}),Object(h.jsxs)("form",{onSubmit:function(e){return i.apply(this,arguments)},children:[Object(h.jsxs)("label",{htmlFor:"x-coordinate",children:[Object(h.jsx)("p",{children:"X-Coordinate"}),Object(h.jsx)("input",{type:"number",id:"x-coordinate",name:"X",value:n.X,onChange:j})]}),Object(h.jsxs)("label",{htmlFor:"y-coordinate",children:[Object(h.jsx)("p",{children:"Y-Coordinate"}),Object(h.jsx)("input",{type:"number",id:"y-coordinate",name:"Y",value:n.Y,onChange:j})]}),Object(h.jsxs)("label",{htmlFor:"z-coordinate",children:[Object(h.jsx)("p",{children:"Z-Coordinate"}),Object(h.jsx)("input",{type:"number",id:"z-coordinate",name:"Z",value:n.Z,onChange:j})]}),Object(h.jsx)("button",{className:"blue-submit-button",type:"submit",children:"Send"})]})]})}var O=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"logo header",children:Object(h.jsx)("img",{src:"logo_uni.png"})}),Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("h2",{children:"Team"})}),Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("h2",{children:"Send data"})}),Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("h2",{children:"Extra"})}),Object(h.jsx)("main",{className:"content",children:Object(h.jsx)(p,{})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.675341db.chunk.js.map