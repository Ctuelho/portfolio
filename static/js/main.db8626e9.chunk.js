(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,t,r){e.exports=r(40)},19:function(e,t,r){},20:function(e,t,r){},40:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),a=r(3),l=r.n(a);r(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=r(9),g=r(10),c=r(4),m=r(12),s=r(13),u=(r(20),function(e){Object(s.a)(r,e);var t=Object(m.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).state={currentImageIndex:0,frameUrl:e.frameUrl,imgUrls:e.imgUrls,leftArrowUrl:e.leftArrowUrl,rightArrowUrl:e.rightArrowUrl,timer:0},n.nextSlide=n.nextSlide.bind(Object(c.a)(n)),n.previousSlide=n.previousSlide.bind(Object(c.a)(n)),n}return Object(g.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.incrementTimer(1)}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"incrementTimer",value:function(e){var t=this.state.timer+e;t>=3?this.nextSlide():this.setState({timer:t})}},{key:"previousSlide",value:function(){var e=this.state.imgUrls.length-1,t=this.state.currentImageIndex,r=0===t?e:t-1;this.setState({currentImageIndex:r,timer:0})}},{key:"nextSlide",value:function(){var e=this.state.imgUrls.length-1,t=this.state.currentImageIndex,r=t===e?0:t+1;this.setState({currentImageIndex:r,timer:0})}},{key:"render",value:function(){return i.a.createElement("div",{className:"carousel"},i.a.createElement(h,{clickFunction:this.previousSlide,url:this.state.leftArrowUrl}),i.a.createElement(d,{url:this.state.imgUrls[this.state.currentImageIndex],frameUrl:this.state.frameUrl}),i.a.createElement(h,{clickFunction:this.nextSlide,url:this.state.rightArrowUrl}))}}]),r}(i.a.Component)),d=function(e){var t=e.url;return i.a.createElement("div",{className:"image-slide"},i.a.createElement("img",{src:t,alt:""}))},h=function(e){var t=e.clickFunction,r=e.url;return i.a.createElement("div",{className:"slide-arrow",onClick:t},i.a.createElement("img",{src:r,alt:""}))},p=u,w=r(11),f=r.n(w);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f.a,{url:"https://www.youtube.com/watch?v=cIEsTXt4zh0",playing:!0})),document.getElementById("pathlines")),l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,{imgUrls:["./img/arida1.png","./img/arida2.png","./img/arida3.png","./img/arida4.png","./img/arida5.png"],rightArrowUrl:"./img/rightArrow.png",leftArrowUrl:"./img/leftArrow.png"})),document.getElementById("arida")),l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,{imgUrls:["./img/sinergia1.png","./img/sinergia2.png","./img/sinergia3.png","./img/sinergia4.png"],rightArrowUrl:"./img/rightArrow.png",leftArrowUrl:"./img/leftArrow.png"})),document.getElementById("games-sinergia")),l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,{imgUrls:["./img/blankknight1.png","./img/blankknight2.png","./img/blankknight3.png","./img/blankknight4.png"],rightArrowUrl:"./img/rightArrow.png",leftArrowUrl:"./img/leftArrow.png"})),document.getElementById("blank-knight")),l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,{imgUrls:["./img/carrot1.png","./img/carrot2.png","./img/carrot3.png","./img/carrot4.png"],rightArrowUrl:"./img/rightArrow.png",leftArrowUrl:"./img/leftArrow.png"})),document.getElementById("carrot")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.db8626e9.chunk.js.map