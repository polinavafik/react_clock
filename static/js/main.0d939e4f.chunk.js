(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),r=n(3),i=n(5),s=n(4),l=n(1),u=n.n(l),m=(n(12),n(0));function h(){return(new Date).toUTCString().slice(-12,-4)}var d=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).timerId=0,e.state={currentTime:h()},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({currentTime:h()}),console.info(e.state.currentTime)}),1e3)}},{key:"componentDidUpdate",value:function(e){e.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.currentTime,t=this.props.clockName;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:e})]})}}]),n}(u.a.Component);function k(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var v=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).timerId=0,e.state={clockName:"Clock-0",hasClock:!0},e.hideClock=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.showClock=function(){e.setState({hasClock:!0})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",this.hideClock),document.addEventListener("click",this.showClock),this.timerId=window.setInterval((function(){e.setState({clockName:k()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.hideClock),document.removeEventListener("click",this.showClock),clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),t&&Object(m.jsx)(d,{clockName:n})]})}}]),n}(u.a.Component);o.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0d939e4f.chunk.js.map