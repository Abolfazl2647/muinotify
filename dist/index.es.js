import{createPortal as t}from"react-dom";import{createContext as e,memo as i,useState as r,useCallback as o,useRef as n,useEffect as s,useContext as a}from"react";import m from"@emotion/styled";import c from"@mui/material/Stack";import p from"@mui/material/Alert";import{Slide as u}from"@mui/material";function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},l.apply(this,arguments)}const d=e();d.Consumer,d.Provider;var f=i((t=>{const{message:e,options:i={},id:a,isEntered:m,notifyItemProps:c}=t,{defaultSeverity:u,TransitionComponent:d,TransitionProps:f,AlertProps:h,generalTimeOut:v,remove:y,customAlert:P}=c,{timeOut:E=v,isPersist:g}=i,[S,T]=r(!0),x=function(){const t=n(!1);return s((()=>(t.current=!0,()=>{t.current=!1})),[]),o((()=>t.current),[])}();let A=n(null);s((()=>(clearTimeout(A.current),A.current=setTimeout((()=>{x&&!g&&T(!1)}),E),()=>clearTimeout(A.current))),[E,g,x]),s((()=>{m||T(!1)}),[m,a]);return React.createElement(d,l({in:S,mountOnEnter:!0,unmountOnExit:!0,onExited:()=>{!S&&y&&y(a)}},f),P?React.createElement("div",{className:"Custom-Alert"},P(t)):React.createElement(p,l({id:a,severity:i&&i.variant||u},h),e+a))}));const h=m.div`
  position: fixed;
  z-index: 100000;
  height: auto;
  max-width: 50%;

  ${({position:t})=>t.split("-").map((t=>`${t}: 10px`))}
`,v=({notifyList:t,remove:e,...i})=>{const{position:r,defaultSeverity:o,generalTimeOut:n,TransitionComponent:s,TransitionProps:a,AlertProps:m,StackProps:p,customAlert:u}=i,d={defaultSeverity:o,TransitionComponent:s,TransitionProps:a,AlertProps:m,generalTimeOut:n,remove:e,customAlert:u};return React.createElement(h,{position:r},React.createElement(c,l({spacing:2},p),t.map((t=>React.createElement(f,l({key:t.id,notifyItemProps:d},t))))))};class y extends React.PureComponent{constructor(t){super(t);const{wrapperElement:e,wrapperName:i}=this.props,r=document.createElement(e||"div");r.className=i||"rezvani-notify-wrapper",document.body.appendChild(r),this.renderPortal=r,this.actionQueue=[],this.isStateBlocked=!1,this.state={notifyList:[]}}getList=()=>[...this.state.notifyList];commitState=(t,e)=>{this.isStateBlocked=e,this.setState({notifyList:t},(()=>{e||this.proccessQueue()}))};proccessQueue=()=>{const t=this.actionQueue.shift();t&&t()};notifier=(t,e)=>{const{maxNotif:i,preventDuplicate:r}=this.props,o=Math.random().toString(16).slice(2),n={message:t,options:e,isEntered:!0,id:o},s=this.getList();if(!(s.findIndex((e=>e.message===t))>=0&&r)){if(!this.isStateBlocked)return s.length>=i?(s[0].isEntered=!1,s.push(n),this.commitState(s,!0)):(s.push(n),this.commitState(s,!1)),o;this.actionQueue.push((()=>this.notifier(t,e)))}};removeNofityById=t=>{const e=[...this.state.notifyList].filter((e=>e.id!==t));this.commitState(e,!1)};removeNotifierAnimationById=t=>{const e=this.getList(),i=e.findIndex((e=>e.id===t));i>=0&&(e[i].isEntered=!1),this.commitState(e,!1)};render(){const{notifyList:e}=this.state,{children:i,...r}=this.props;return React.createElement(d.Provider,{value:{notifier:this.notifier,removeNotifier:this.removeNotifierAnimationById}},i,t(React.createElement(v,l({notifyList:e,remove:this.removeNofityById},r)),this.renderPortal))}}y.defaultProps={customAlert:null,preventDuplicate:!1,position:"bottom-left",wrapperElement:"div",wrapperName:"rezvani-notify-wrapper",maxNotif:3,defaultSeverity:"info",generalTimeOut:3e3,TransitionComponent:u,TransitionProps:{},AlertProps:{},StackProps:{spacing:1,direction:"column-reverse"}};const P=()=>a(d),E=t=>{class e extends React.PureComponent{render(){return React.createElement(d.Consumer,null,(e=>React.createElement(t,l({},this.props,e))))}}return e};export{y as MuiNotifyProvider,P as useNotifier,E as withNotifier};
