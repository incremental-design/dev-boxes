(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("api-spec-converter");var n=e.n(t);const r=require("@apidevtools/swagger-parser");var o=e.n(r);const a=require("tmp-promise"),i=require("fs");var c=e.n(i);!function(){var e,t,r,i;e=this,t=void 0,i=function(){var e,t,r,i,s,u,l,f,p,h;return function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(y){switch(y.label){case 0:return y.trys.push([0,4,,5]),[4,o().dereference("https://api-engineering.nyc3.digitaloceanspaces.com/spec-ci/DigitalOcean-public.v2.yaml")];case 1:return e=y.sent(),t=JSON.stringify(e),[4,(0,a.file)()];case 2:return r=y.sent(),i=r.path,s=r.cleanup,c().writeFileSync(i,t),u={from:"openapi_3",to:"swagger_2",source:i},[4,n().convert(u)];case 3:return l=y.sent(),s(),f=JSON.stringify(l),p=new Date,h=p.toISOString().split("T")[0],c().writeFile("digitalOceanAPI-"+h+".json",f,"utf8",(function(e){console.log(e)})),[3,5];case 4:throw y.sent();case 5:return[2]}}))},new((r=void 0)||(r=Promise))((function(n,o){function a(e){try{s(i.next(e))}catch(e){o(e)}}function c(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}s((i=i.apply(e,t||[])).next())}))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBpLXNwZWMtY29udmVydGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwaWRldnRvb2xzL3N3YWdnZXItcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG1wLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy8uL2luZGV4LnRzIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGUiLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJleHBvcnRzIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicmVxdWlyZSIsImRlcmVmZXJlbmNlZEFQSSIsImRlcmVmZXJlbmNlZEFQSUpTT04iLCJKU09OIiwic3RyaW5naWZ5IiwiZmlsZSIsInBhdGgiLCJjbGVhbnVwIiwiZGlnaXRhbE9jZWFuQVBJIiwiZnJvbSIsInRvIiwic291cmNlIiwiY29udmVydCIsImNvbnZlcnRlZEFQSSIsImNvbnZlcnRlZEFQSUpTT04iLCJkYXRlIiwiRGF0ZSIsInRvZGF5IiwidG9JU09TdHJpbmciLCJzcGxpdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdlbmVyYXRlQVBJIl0sIm1hcHBpbmdzIjoibUJBQ0EsSUFBSUEsRUFBc0IsQ0NBMUIsRUFBeUJDLElBQ3hCLElBQUlDLEVBQVNELEdBQVVBLEVBQU9FLFdBQzdCLElBQU1GLEVBQWdCLFFBQ3RCLElBQU1BLEVBRVAsT0FEQUQsRUFBb0JJLEVBQUVGLEVBQVEsQ0FBRUcsRUFBR0gsSUFDNUJBLEdDTFIsRUFBd0IsQ0FBQ0ksRUFBU0MsS0FDakMsSUFBSSxJQUFJQyxLQUFPRCxFQUNYUCxFQUFvQlMsRUFBRUYsRUFBWUMsS0FBU1IsRUFBb0JTLEVBQUVILEVBQVNFLElBQzVFRSxPQUFPQyxlQUFlTCxFQUFTRSxFQUFLLENBQUVJLFlBQVksRUFBTUMsSUFBS04sRUFBV0MsTUNKM0UsRUFBd0IsQ0FBQ00sRUFBS0MsSUFBU0wsT0FBT00sVUFBVUMsZUFBZUMsS0FBS0osRUFBS0MsSUNBakYsTUFBTSxFQUErQkksUUFBUSxzQixhQ0E3QyxNQUFNLEVBQStCQSxRQUFRLCtCLGFDQTdDLE1BQU0sRUFBK0JBLFFBQVEsZUNBdkMsRUFBK0JBLFFBQVEsTSxjQ1F6QixXLHNwQ0FFUSxPLHNCQUFBLEdBQU0sZ0JBSmhDLDRGLE9BTTRCLE9BRnBCQyxFQUFrQixTQUNsQkMsRUFBc0JDLEtBQUtDLFVBQVVILEdBQ2pCLElBQU0sSUFBQUksUyxPQU9ILE9BUHZCLEVBQW9CLFNBQWxCQyxFQUFJLE9BQUVDLEVBQU8sVUFDckIsa0JBQWlCRCxFQUFNSixHQUNqQk0sRUFBa0IsQ0FDdEJDLEtBQU0sWUFDTkMsR0FBSSxZQUNKQyxPQUFRTCxHQUVtQixHQUFNLElBQUFNLFFBQWtCSixJLGNBQS9DSyxFQUF1QixTQUM3Qk4sSUFDTU8sRUFBbUJYLEtBQUtDLFVBQVVTLEdBQ2xDRSxFQUFPLElBQUlDLEtBQ1hDLEVBQVFGLEVBQUtHLGNBQWNDLE1BQU0sS0FBSyxHQUM1QyxjQUNFLG1CQUFxQkYsRUFBUSxRQUM3QkgsRUFDQSxRQUNBLFNBQUNNLEdBQ0NDLFFBQVFDLElBQUlGLE0sYUFJaEIsTSxrVEFJSkcsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcImFwaS1zcGVjLWNvbnZlcnRlclwiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJAYXBpZGV2dG9vbHMvc3dhZ2dlci1wYXJzZXJcIik7OyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwidG1wLXByb21pc2VcIik7OyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwiZnNcIik7OyIsImltcG9ydCBjb252ZXJ0ZXIgZnJvbSBcImFwaS1zcGVjLWNvbnZlcnRlclwiO1xuaW1wb3J0IHN3YWdnZXJQYXJzZXIgZnJvbSBcIkBhcGlkZXZ0b29scy9zd2FnZ2VyLXBhcnNlclwiO1xuaW1wb3J0IHsgZmlsZSB9IGZyb20gXCJ0bXAtcHJvbWlzZVwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5jb25zdCBhcGlTb3VyY2UgPVxuICBcImh0dHBzOi8vYXBpLWVuZ2luZWVyaW5nLm55YzMuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9zcGVjLWNpL0RpZ2l0YWxPY2Vhbi1wdWJsaWMudjIueWFtbFwiO1xuXG5jb25zdCBnZW5lcmF0ZUFQSSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkZXJlZmVyZW5jZWRBUEkgPSBhd2FpdCBzd2FnZ2VyUGFyc2VyLmRlcmVmZXJlbmNlKGFwaVNvdXJjZSk7XG4gICAgY29uc3QgZGVyZWZlcmVuY2VkQVBJSlNPTiA9IEpTT04uc3RyaW5naWZ5KGRlcmVmZXJlbmNlZEFQSSk7XG4gICAgY29uc3QgeyBwYXRoLCBjbGVhbnVwIH0gPSBhd2FpdCBmaWxlKCk7XG4gICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLCBkZXJlZmVyZW5jZWRBUElKU09OKTsgLy9GSVhNRTogc3luY2hyb25vdXNseSB3cml0aW5nIGEgZmlsZSBzbG93cyBkb3duIHRoZSB3aG9sZSBwcm9ncmFtLlxuICAgIGNvbnN0IGRpZ2l0YWxPY2VhbkFQSSA9IHtcbiAgICAgIGZyb206IFwib3BlbmFwaV8zXCIsXG4gICAgICB0bzogXCJzd2FnZ2VyXzJcIixcbiAgICAgIHNvdXJjZTogcGF0aCxcbiAgICB9O1xuICAgIGNvbnN0IGNvbnZlcnRlZEFQSTogb2JqZWN0ID0gYXdhaXQgY29udmVydGVyLmNvbnZlcnQoZGlnaXRhbE9jZWFuQVBJKTtcbiAgICBjbGVhbnVwKCk7XG4gICAgY29uc3QgY29udmVydGVkQVBJSlNPTiA9IEpTT04uc3RyaW5naWZ5KGNvbnZlcnRlZEFQSSk7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kYXkgPSBkYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICAgIGZzLndyaXRlRmlsZShcbiAgICAgIFwiZGlnaXRhbE9jZWFuQVBJLVwiICsgdG9kYXkgKyBcIi5qc29uXCIsXG4gICAgICBjb252ZXJ0ZWRBUElKU09OLFxuICAgICAgXCJ1dGY4XCIsXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmdlbmVyYXRlQVBJKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9