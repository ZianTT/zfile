!function(){var e=document.createElement("style");e.innerHTML=".el-button[data-v-7666d571],.el-input[data-v-7666d571] input{height:35px}\n",document.head.appendChild(e),System.register(["./base-legacy.300d11a2.js","./loading-legacy.fc9141ee.js","./ZFormItem-legacy.f8fcd1d1.js","./input-legacy.1469b40d.js","./tooltip-legacy.f5af8fcd.js","./popper-legacy.0e5cbcae.js","./image-viewer-legacy.8e0ed638.js","./button-legacy.de6f77a5.js","./radio-legacy.389addc8.js","./switch-legacy.80ed9f31.js","./admin-setting-legacy.04cb307e.js","./index-legacy.5c2a5b9a.js","./vue3-clipboard.esm-bundler-legacy.fd707006.js","./request-legacy.d578b778.js","./index-legacy.33440654.js","./route-block-legacy.2d113b05.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./index-legacy.bff7f3c4.js","./directive-legacy.26090332.js","./index-legacy.61ab75a6.js","./focus-trap-legacy.6b3273d9.js","./event-legacy.0bfbd831.js","./index-legacy.4e6c4971.js","./debounce-legacy.63638c2f.js","./scroll-legacy.37269264.js","./event-legacy.39ad8904.js","./validator-legacy.82441049.js","./index-legacy.dcaeaefc.js"],(function(e){"use strict";var n,t,o,i,u,c,l,a,r,f,d,s,y,g,m,v,p,V,b,j,k,_,h,C,M,x,A,w,S,B,E,F,T,U,L;return{setters:[function(e){n=e.b2,t=e.r},function(){},function(e){o=e.Z,i=e.a},function(){},function(){},function(e){u=e.E},function(e){c=e.E},function(){},function(e){l=e.E},function(e){a=e.E},function(e){r=e.g,f=e.v,d=e.l,s=e.d},function(e){y=e.r,g=e.aA,m=e.w,v=e.u,p=e.Q,V=e.a,b=e.b,j=e.e,k=e.h,_=e.I,h=e.f,C=e.k,M=e.J,x=e.U,A=e.V,w=e.p},function(e){S=e.t},function(e){B=e.E},function(e){E=e.E},function(e){F=e.b},function(e){T=e._},function(e){U=e.E},function(e){L=e.v},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var I=y({});function D(){var e=g(d,{formatResult:function(e){return e.data}}),n=e.data,t=e.reload,o=g(s,{manual:!0,onSuccess:function(){B({message:"保存成功",type:"success"})}}),i=o.loading,u=o.run,c=function(){r().then((function(e){I.value=e.data}))};return{data:n,reload:t,saveData:function(){u(n.value)},saveLoading:i,load2FAInfo:c,twoFAData:I,copyTwoFASecret:function(){S(I.value.secret).then((function(){B.success("复制成功")}))},verifyCodeAndBind:function(){f(I.value).then((function(e){B.success("绑定成功"),t()}))},rebind:function(){n.value.loginVerifySecret="",c()},cancelBind:function(){E.confirm("是否确认取消绑定，确认后将自动恢复为图形验证码","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success",callback:function(e){"confirm"===e&&(n.value.loginVerifySecret="",n.value.loginVerifyMode="image")}})},validBind:function(){E.prompt("请输入双因素认证 APP 中的验证码","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputValidator:function(e){return!!e},inputErrorMessage:"验证码不能为空."}).then((function(e){var t=e.value,o={secret:n.value.loginVerifySecret,code:t};f(o).then((function(){B.success("验证成功")}))}))}}}var z=function(e){return x("data-v-7666d571"),e=e(),A(),e},q=M(" 安全设置 "),P=M(" 此处设置可保护您的站点安全 "),Z=M(" 启用后，会在门户显示后台登录入口，请根据自身情况选择是否启用 "),G=M("不启用登录验证"),H=M("启用图片验证码"),J=M("启用双因素认证"),Q=M(" 图片验证码也可能会被识别，不能完全抵挡暴力破解。 "),R=M(" 双因素认证可完美保护登录认证，可使用任意支持 2FA 认证的软件，如 "),K=z((function(){return w("b",null,"Google 身份验证器",-1)})),N=M("、"),O=z((function(){return w("b",null,"Microsoft Authenticator",-1)})),W=M(" 等软件. "),X=z((function(){return w("br",null,null,-1)})),Y={key:0,class:"w-full"},$=M("重新绑定"),ee=M("取消绑定"),ne=M("验证绑定"),te={key:1},oe=M(" 可扫描上方二维码或复制下方密钥到支持双因素认证的软件中添加。 "),ie=M("验证并绑定"),ue=M(" 请绑定双因素认证软件后，输入显示的验证码进行绑定 "),ce={__name:"index",setup:function(e){var r=D(),f=r.data,d=r.saveData,s=r.saveLoading,y=r.load2FAInfo,g=r.twoFAData,M=r.copyTwoFASecret,x=r.verifyCodeAndBind,A=r.rebind,w=r.cancelBind,S=r.validBind;return m((function(){var e;return null===(e=f.value)||void 0===e?void 0:e.loginVerifyMode}),(function(e,n){"off"!==e&&"image"!==e||!n||d(),"2fa"!==e||f.value.loginVerifySecret||y()})),m((function(){var e;return null===(e=f.value)||void 0===e?void 0:e.showLogin}),(function(e,n){e!==n&&void 0!==n&&d()})),function(e,r){var d=a,m=o,B=l,E=t,F=c,T=u,I=U,D=i,z=L;return v(f)?p((V(),b(D,{key:0,model:v(f)},{"form-title":j((function(){return[q]})),"form-sub-title":j((function(){return[P]})),default:j((function(){return[k(m,{label:"是否显示登录入口"},{tips:j((function(){return[Z]})),default:j((function(){return[k(d,{modelValue:v(f).showLogin,"onUpdate:modelValue":r[0]||(r[0]=function(e){return v(f).showLogin=e})},null,8,["modelValue"])]})),_:1}),k(m,{label:"登录验证方式"},_({default:j((function(){return[k(B,{modelValue:v(f).loginVerifyMode,"onUpdate:modelValue":r[1]||(r[1]=function(e){return v(f).loginVerifyMode=e}),label:"off"},{default:j((function(){return[G]})),_:1},8,["modelValue"]),k(B,{modelValue:v(f).loginVerifyMode,"onUpdate:modelValue":r[2]||(r[2]=function(e){return v(f).loginVerifyMode=e}),label:"image"},{default:j((function(){return[H]})),_:1},8,["modelValue"]),k(B,{modelValue:v(f).loginVerifyMode,"onUpdate:modelValue":r[3]||(r[3]=function(e){return v(f).loginVerifyMode=e}),label:"2fa"},{default:j((function(){return[J]})),_:1},8,["modelValue"])]})),_:2},["image"===v(f).loginVerifyMode?{name:"tips",fn:j((function(){return[Q]}))}:void 0,"2fa"===v(f).loginVerifyMode?{name:"tips",fn:j((function(){return[R,K,N,O,W,X]}))}:void 0]),1024),"2fa"===v(f).loginVerifyMode?(V(),b(m,{key:0,label:"双因素认证密钥"},_({default:j((function(){var e;return[v(f).loginVerifySecret?(V(),h("div",Y,[k(E,{size:"small",type:"primary",onClick:v(A)},{default:j((function(){return[$]})),_:1},8,["onClick"]),k(E,{size:"small",type:"primary",onClick:v(w)},{default:j((function(){return[ee]})),_:1},8,["onClick"]),k(E,{size:"small",type:"primary",onClick:v(S)},{default:j((function(){return[ne]})),_:1},8,["onClick"])])):(V(),h("div",te,[k(F,{onClick:v(y),src:null===(e=v(g))||void 0===e?void 0:e.qrcode},null,8,["onClick","src"]),k(I,{readonly:"",modelValue:v(g).secret,"onUpdate:modelValue":r[4]||(r[4]=function(e){return v(g).secret=e})},{append:j((function(){return[k(T,{class:"item",effect:"dark",content:"复制",placement:"bottom"},{default:j((function(){return[k(E,{onClick:v(M),icon:v(n)},null,8,["onClick","icon"])]})),_:1})]})),_:1},8,["modelValue"])]))]})),_:2},[v(f).loginVerifySecret?void 0:{name:"tips",fn:j((function(){return[oe]}))}]),1024)):C("",!0),"2fa"!==v(f).loginVerifyMode||v(f).loginVerifySecret?C("",!0):(V(),b(m,{key:1,label:"双因素认证验证码"},{tips:j((function(){return[ue]})),default:j((function(){return[k(I,{modelValue:v(g).code,"onUpdate:modelValue":r[5]||(r[5]=function(e){return v(g).code=e})},null,8,["modelValue"]),k(E,{onClick:v(x),type:"primary"},{default:j((function(){return[ie]})),_:1},8,["onClick"])]})),_:1}))]})),_:1},8,["model"])),[[z,v(s)]]):C("",!0)}}};"function"==typeof F&&F(ce);e("default",T(ce,[["__scopeId","data-v-7666d571"]]))}}}))}();