(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{11:function(e,t,a){},26:function(e,t,a){e.exports=a(39)},31:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(24),m=a.n(l),r=(a(31),a(11),a(32),function(){return o.a.createElement("div",{className:"header-font"},o.a.createElement("nav",{className:"navbar navbar-dark bg-dark justify-content-center"},o.a.createElement("h1",{className:"navbar-brand header-font"},"Meme Generator")))}),c=a(12),s=a(13),i=a(15),u=a(14),h=a(8),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={topText:"",bottomText:"",allMemeImgs:[""]},e.handleSubmit=function(t){console.log("hiii"),t.preventDefault();var a=Math.floor(Math.random()*e.state.allMemeImgs.length),n=e.state.allMemeImgs[a].url;e.setState({randomImg:n})},e.handleTopChange=function(t){e.setState({topText:t.target.value})},e.handleBottomChange=function(t){e.setState({bottomText:t.target.value})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;e.setState({allMemeImgs:a})})),console.log(this.props.location.state)}},{key:"render",value:function(){return o.a.createElement("div",{className:"justify-content-center"},o.a.createElement(h.a,{className:"row container justify-content-center mb-sm-3 mb-md-6 mt-sm-3 mt-md-6"},o.a.createElement(h.a.Group,{controlId:"basicInputForm",className:"col-lg-6"},o.a.createElement(h.a.Label,null,"Top Text"),o.a.createElement(h.a.Control,{type:"text",placeholder:"Enter text",value:this.state.topText,onChange:this.handleTopChange}),o.a.createElement(h.a.Text,{className:"text-muted"},"This will be displayed on top side of the meme.")),o.a.createElement(h.a.Group,{controlId:"basicInputForm",className:"col-lg-6"},o.a.createElement(h.a.Label,null,"Bottom Text"),o.a.createElement(h.a.Control,{type:"text",placeholder:"Enter text",value:this.state.bottomText,onChange:this.handleBottomChange}),o.a.createElement(h.a.Text,{className:"text-muted"},"This will be displayed on bottom side of the meme."))),o.a.createElement("div",{className:"meme mb-sm-3 mb-md-6"},o.a.createElement("img",{src:this.props.location.state,alt:"",className:"img-fluid justify-content-center"}),o.a.createElement("h2",{className:"top col-sm-3 col-md-6"},this.state.topText),o.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),a}(n.Component),d=a(10),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={topText:"",bottomText:"",randomImg:"",allMemeImgs:[""],showMeme:!0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;e.setState({allMemeImgs:a})}))}},{key:"showGrid",value:function(){this.setState({showMeme:!0})}},{key:"render",value:function(){var e=this,t=this.state.allMemeImgs.map((function(t){return o.a.createElement(d.b,{className:" col-md-20 col-sm-3",to:{pathname:"/meme",state:t.url}},o.a.createElement("img",{src:t.url,className:"gallery__img",onClick:function(){e.setState({randomImg:t.url})}}))}));return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Select a meme template"),o.a.createElement("div",{className:"row gallery"},t))}}]),a}(n.Component),g=a(4);var v=function(){return o.a.createElement(d.a,null,o.a.createElement(r,null),o.a.createElement(g.c,null,o.a.createElement(g.a,{exact:!0,path:"/",component:f}),o.a.createElement(g.a,{exact:!0,path:"/meme",component:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(o.a.createElement(d.a,{basename:"/Meme-Generator_JS"},o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.380b56c9.chunk.js.map