"use strict";(self.webpackChunkblogapp=self.webpackChunkblogapp||[]).push([[505],{9505:(E,h,s)=>{s.r(h),s.d(h,{AuthModule:()=>L});var p=s(8583),g=s(4655),i=s(3679),Z=s(2340),w=s(8259),m=s.n(w),t=s(7716),u=s(1841),C=s(954),_=s(7420),l=s(8295),c=s(9983),T=s(6627),f=s(1095);function v(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Email is required"),t.qZA())}function P(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please Enter Correct Email"),t.qZA())}function A(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Password is required"),t.qZA())}let q=(()=>{class n{constructor(e,o,a,d,R){this._fb=e,this.http=o,this.router=a,this.dataService=d,this.sharedService=R,this.hide=!0,this.baseUrl=Z.N.baseUrl,this.alertOpt={},this.loginForm=this._fb.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required]]})}ngOnInit(){}login(){this.loginForm.valid&&this.http.post(`${this.baseUrl}/auth/login`,this.loginForm.value).subscribe(e=>{m().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:"success",title:"Signed in successfully"}),e.token&&this.dataService.setLogIn(),this.sharedService.setProfileImage(e.imageUrl),localStorage.setItem("token",e.token),this.router.navigate(["/creators"])},({error:e})=>{m().fire({icon:"error",title:"Oops...",text:`${e.message} Please try again!!`})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(u.eN),t.Y36(g.F0),t.Y36(C.D),t.Y36(_.F))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:35,vars:7,consts:[[1,"row","first-div"],["id","login",1,"col-md-5","col-sm-12"],["id","login-form-wrapper"],[1,"login-form"],[1,"logo"],["routerLink","/"],["src","/assets/images/blog1.png","alt",""],[3,"formGroup"],[1,"inner-form"],["appearance","fill",1,"input"],["type","email","matInput","","formControlName","email"],[4,"ngIf"],["matInput","","formControlName","password",3,"type"],["matSuffix","",3,"click"],[1,"rember-forgot"],["routerLink","/auth/forgot"],["mat-raised-button","","color","primary",1,"login-button",3,"disabled","click"],[1,"register"],[1,"mr-2"],["routerLink","/auth/signup"],[1,"col-md-7","col-sm-12","d-none","d-md-bloc","d-lg-none","d-lg-block","d-xl-block","padding0"],[1,"login-bg"],["src","/assets/images/loginBg.png","alt","",1,"login-image"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"a",5),t._UZ(6,"img",6),t.qZA(),t.qZA(),t.TgZ(7,"form",7),t.TgZ(8,"div",8),t.TgZ(9,"mat-form-field",9),t.TgZ(10,"mat-label"),t._uU(11,"Email address*"),t.qZA(),t._UZ(12,"input",10),t.YNc(13,v,2,0,"mat-error",11),t.YNc(14,P,2,0,"mat-error",11),t.qZA(),t.TgZ(15,"mat-form-field",9),t.TgZ(16,"mat-label"),t._uU(17,"Password*"),t.qZA(),t._UZ(18,"input",12),t.TgZ(19,"mat-icon",13),t.NdJ("click",function(){return o.hide=!o.hide}),t._uU(20),t.qZA(),t.YNc(21,A,2,0,"mat-error",11),t.qZA(),t.qZA(),t.TgZ(22,"div",14),t.TgZ(23,"a",15),t._uU(24,"Forgot Password?"),t.qZA(),t.qZA(),t.TgZ(25,"button",16),t.NdJ("click",function(){return o.login()}),t._uU(26," Login "),t.qZA(),t.qZA(),t.TgZ(27,"div",17),t.TgZ(28,"p",18),t._uU(29,"Don't have an account?"),t.qZA(),t.TgZ(30,"a",19),t._uU(31,"Sign Up"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"div",20),t.TgZ(33,"div",21),t._UZ(34,"img",22),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(7),t.Q6J("formGroup",o.loginForm),t.xp6(6),t.Q6J("ngIf",null==o.loginForm.controls.email||null==o.loginForm.controls.email.errors?null:o.loginForm.controls.email.errors.required),t.xp6(1),t.Q6J("ngIf",null==o.loginForm.controls.email||null==o.loginForm.controls.email.errors?null:o.loginForm.controls.email.errors.email),t.xp6(4),t.Q6J("type",o.hide?"password":"text"),t.xp6(2),t.Oqu(o.hide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",null==o.loginForm.controls.password||null==o.loginForm.controls.password.errors?null:o.loginForm.controls.password.errors.required),t.xp6(4),t.Q6J("disabled",!o.loginForm.valid))},directives:[g.yS,i._Y,i.JL,i.sg,l.KE,l.hX,c.Nt,i.Fj,i.JJ,i.u,p.O5,T.Hw,l.R9,f.lW,l.TO],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0}.login-bg[_ngcontent-%COMP%]{margin:0 auto}.login-bg[_ngcontent-%COMP%]   .login-image[_ngcontent-%COMP%]{padding-top:50px;height:648px}.padding0[_ngcontent-%COMP%]{padding:0}.first-div[_ngcontent-%COMP%]{width:100%;min-width:100%;margin:0}#login[_ngcontent-%COMP%]{width:100%;background-size:cover}#login-form-wrapper[_ngcontent-%COMP%]{flex:1 0 auto;padding:32px}.login-form[_ngcontent-%COMP%]{width:450px;max-width:450px;padding:0 50px;margin:20px auto}form[_ngcontent-%COMP%]{width:100%;text-align:left}.logo[_ngcontent-%COMP%]{width:160px;margin:32px auto}.input[_ngcontent-%COMP%]{width:100%}.login-button[_ngcontent-%COMP%]{width:187px;display:block;height:58px!important;color:#fff;font-weight:400}img[_ngcontent-%COMP%]{width:100%;height:100%;transition-duration:.5s;transition-property:transform}.rember-forgot[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.register[_ngcontent-%COMP%]{display:flex;margin-top:20px}"]}),n})(),b=(()=>{class n{constructor(e){this.dataService=e}ngOnInit(){}reset(){let e={email:this.resetEmail};this.dataService.forgotPassword(e).subscribe(o=>{m().fire({icon:"success",title:"SUCCESS",text:`${o.data}`})},({error:o})=>{m().fire({icon:"error",title:"Something Went Wrong",text:`${o.message}`})}),console.log("resetEmail",e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-resetpassword"]],decls:25,vars:1,consts:[[1,"row","first-div"],["id","login",1,"col-md-5","col-xl-5","col-xs-12","col-sm-12"],["id","login-form-wrapper"],[1,"login-form"],[1,"logo"],["routerLink","/"],["src","/assets/images/blog1.png","alt",""],[1,"inner-form"],["appearance","fill",1,"input"],["type","email","matInput","","name","email",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary",1,"login-button",3,"click"],[1,"register"],[1,"mr-2"],["routerLink","/auth/signup"],[1,"col-md-7","col-sm-12","d-none","d-md-bloc","d-lg-none","d-lg-block","d-xl-block","padding0"],[1,"login-bg"],["src","/assets/images/loginBg.png","alt","",1,"login-image"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"a",5),t._UZ(6,"img",6),t.qZA(),t.qZA(),t.TgZ(7,"form"),t.TgZ(8,"div",7),t.TgZ(9,"mat-form-field",8),t.TgZ(10,"mat-label"),t._uU(11,"Email address*"),t.qZA(),t.TgZ(12,"input",9),t.NdJ("ngModelChange",function(d){return o.resetEmail=d}),t.qZA(),t.TgZ(13,"mat-error"),t._uU(14,"Error"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"button",10),t.NdJ("click",function(){return o.reset()}),t._uU(16," Reset Password "),t.qZA(),t.qZA(),t.TgZ(17,"div",11),t.TgZ(18,"p",12),t._uU(19,"Don't have an account?"),t.qZA(),t.TgZ(20,"a",13),t._uU(21,"Sign Up"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",14),t.TgZ(23,"div",15),t._UZ(24,"img",16),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(12),t.Q6J("ngModel",o.resetEmail))},directives:[g.yS,i._Y,i.JL,i.F,l.KE,l.hX,c.Nt,i.Fj,i.JJ,i.On,l.TO,f.lW],styles:["","*[_ngcontent-%COMP%]{margin:0;padding:0}.login-bg[_ngcontent-%COMP%]{margin:0 auto}.login-bg[_ngcontent-%COMP%]   .login-image[_ngcontent-%COMP%]{padding-top:50px;height:648px}.padding0[_ngcontent-%COMP%]{padding:0}.first-div[_ngcontent-%COMP%]{width:100%;min-width:100%;margin:0}#login[_ngcontent-%COMP%]{width:100%;background-size:cover}#login-form-wrapper[_ngcontent-%COMP%]{flex:1 0 auto;padding:32px}.login-form[_ngcontent-%COMP%]{width:450px;max-width:450px;padding:0 50px;margin:20px auto}form[_ngcontent-%COMP%]{width:100%;text-align:left}.logo[_ngcontent-%COMP%]{width:160px;margin:32px auto}.input[_ngcontent-%COMP%]{width:100%}.login-button[_ngcontent-%COMP%]{width:187px;display:block;height:58px!important;color:#fff;font-weight:400}img[_ngcontent-%COMP%]{width:100%;height:100%;transition-duration:.5s;transition-property:transform}.rember-forgot[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.register[_ngcontent-%COMP%]{display:flex;margin-top:20px}"]}),n})();function U(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Name is required"),t.qZA())}function O(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Email is required"),t.qZA())}function M(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please Enter Correct Email"),t.qZA())}function y(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"This is required Field"),t.qZA())}function x(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"This is required Field"),t.qZA())}let F=(()=>{class n{constructor(e,o,a){this._fb=e,this.http=o,this.router=a,this.baseUrl=Z.N.baseUrl,this.hidePassword=!0,this.hideConfirmPassword=!0,this.signUpForm=this._fb.group({name:["",i.kI.required],email:["",[i.kI.required,i.kI.email]],password:["",i.kI.required],confirmPassword:["",i.kI.required]})}ngOnInit(){}signup(){console.log("this.signUpForm",this.signUpForm.value),this.signUpForm.valid&&this.http.post(`${this.baseUrl}/auth/signup`,this.signUpForm.value).subscribe(e=>{this.router.navigate(["/auth/login"]),m().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:"success",title:"Sigup successfully"}),console.log("res...",e),localStorage.setItem("token",e.token)},({error:e})=>{m().fire({icon:"error",title:"Oops...",text:`${e.message} Please try again!!`}),console.log("err.message",e.message)})}get name(){return this.signUpForm.controls.name}get email(){return this.signUpForm.controls.email}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(u.eN),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-signup"]],decls:47,vars:10,consts:[[1,"row","first-div"],["id","login",1,"col-5"],["id","login-form-wrapper"],[1,"login-form"],[1,"logo"],["routerLink","/"],["src","/assets/images/blog1.png","alt",""],[3,"formGroup"],[1,"inner-form"],["appearance","fill",1,"input"],["type","text","matInput","","formControlName","name"],[4,"ngIf"],["type","email","matInput","","formControlName","email"],["matInput","","formControlName","password",3,"type"],["matSuffix","",3,"click"],["matInput","","formControlName","confirmPassword",3,"type"],[1,"rember-forgot"],["routerLink","/auth/resetPassword"],["mat-raised-button","","color","primary",1,"login-button",3,"click"],[1,"register"],[1,"mr-2"],["routerLink","/auth/login"],[1,"col-md-7","col-sm-12","d-none","d-md-bloc","d-lg-none","d-lg-block","d-xl-block","padding0"],[1,"login-bg"],["src","/assets/images/loginBg.png","alt","",1,"login-image"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"a",5),t._UZ(6,"img",6),t.qZA(),t.qZA(),t.TgZ(7,"form",7),t.TgZ(8,"div",8),t.TgZ(9,"mat-form-field",9),t.TgZ(10,"mat-label"),t._uU(11,"Name*"),t.qZA(),t._UZ(12,"input",10),t.YNc(13,U,2,0,"mat-error",11),t.qZA(),t.TgZ(14,"mat-form-field",9),t.TgZ(15,"mat-label"),t._uU(16,"Email address*"),t.qZA(),t._UZ(17,"input",12),t.YNc(18,O,2,0,"mat-error",11),t.YNc(19,M,2,0,"mat-error",11),t.qZA(),t.TgZ(20,"mat-form-field",9),t.TgZ(21,"mat-label"),t._uU(22,"Password*"),t.qZA(),t._UZ(23,"input",13),t.TgZ(24,"mat-icon",14),t.NdJ("click",function(){return o.hidePassword=!o.hidePassword}),t._uU(25),t.qZA(),t.YNc(26,y,2,0,"mat-error",11),t.qZA(),t.TgZ(27,"mat-form-field",9),t.TgZ(28,"mat-label"),t._uU(29,"Confirm Password*"),t.qZA(),t._UZ(30,"input",15),t.TgZ(31,"mat-icon",14),t.NdJ("click",function(){return o.hideConfirmPassword=!o.hideConfirmPassword}),t._uU(32),t.qZA(),t.YNc(33,x,2,0,"mat-error",11),t.qZA(),t.qZA(),t.TgZ(34,"div",16),t.TgZ(35,"a",17),t._uU(36,"Forgot Password?"),t.qZA(),t.qZA(),t.TgZ(37,"button",18),t.NdJ("click",function(){return o.signup()}),t._uU(38," Signup "),t.qZA(),t.qZA(),t.TgZ(39,"div",19),t.TgZ(40,"p",20),t._uU(41,"Already have a account?"),t.qZA(),t.TgZ(42,"a",21),t._uU(43,"Login"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"div",22),t.TgZ(45,"div",23),t._UZ(46,"img",24),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(7),t.Q6J("formGroup",o.signUpForm),t.xp6(6),t.Q6J("ngIf",null==o.name||null==o.name.errors?null:o.name.errors.required),t.xp6(5),t.Q6J("ngIf",null==o.email||null==o.email.errors?null:o.email.errors.required),t.xp6(1),t.Q6J("ngIf",null==o.email||null==o.email.errors?null:o.email.errors.email),t.xp6(4),t.Q6J("type",o.hidePassword?"password":"text"),t.xp6(2),t.Oqu(o.hidePassword?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",null==o.signUpForm.controls.password||null==o.signUpForm.controls.password.errors?null:o.signUpForm.controls.password.errors.required),t.xp6(4),t.Q6J("type",o.hideConfirmPassword?"password":"text"),t.xp6(2),t.Oqu(o.hideConfirmPassword?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",null==o.signUpForm.controls.confirmPassword||null==o.signUpForm.controls.confirmPassword.errors?null:o.signUpForm.controls.confirmPassword.errors.required))},directives:[g.yS,i._Y,i.JL,i.sg,l.KE,l.hX,c.Nt,i.Fj,i.JJ,i.u,p.O5,T.Hw,l.R9,f.lW,l.TO],styles:["","*[_ngcontent-%COMP%]{margin:0;padding:0}.login-bg[_ngcontent-%COMP%]{margin:0 auto}.login-bg[_ngcontent-%COMP%]   .login-image[_ngcontent-%COMP%]{padding-top:50px;height:648px}.padding0[_ngcontent-%COMP%]{padding:0}.first-div[_ngcontent-%COMP%]{width:100%;min-width:100%;margin:0}#login[_ngcontent-%COMP%]{width:100%;background-size:cover}#login-form-wrapper[_ngcontent-%COMP%]{flex:1 0 auto;padding:32px}.login-form[_ngcontent-%COMP%]{width:450px;max-width:450px;padding:0 50px;margin:20px auto}form[_ngcontent-%COMP%]{width:100%;text-align:left}.logo[_ngcontent-%COMP%]{width:160px;margin:32px auto}.input[_ngcontent-%COMP%]{width:100%}.login-button[_ngcontent-%COMP%]{width:187px;display:block;height:58px!important;color:#fff;font-weight:400}img[_ngcontent-%COMP%]{width:100%;height:100%;transition-duration:.5s;transition-property:transform}.rember-forgot[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.register[_ngcontent-%COMP%]{display:flex;margin-top:20px}"]}),n})();var k=s(381),S=s(2680);const J=[{path:"login",component:q},{path:"signup",component:F},{path:"forgot",component:b},{path:"resetPassword/:token",component:(()=>{class n{constructor(e,o,a,d){this._fb=e,this.dialog=o,this.activatedRouter=a,this.router=d,this.newPasswordHide=!0,this.confirmPasswordHide=!0}savePassword(){}ngOnInit(){this.token=this.activatedRouter.snapshot.paramMap.get("token"),this.activatedRouter.paramMap.subscribe(o=>{this.token=o.get("token")}),this.dialog.open(k.EO,{width:"50%",height:"auto",backdropClass:"bgClass",data:{token:this.token}}).afterClosed().subscribe(o=>{console.log("closed password dialog",o),this.router.navigate(o?["/auth/login"]:["/creators"])})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(S.uw),t.Y36(g.gz),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-password-reset"]],decls:0,vars:0,template:function(e,o){},styles:[""]}),n})()}];let I=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(J)],g.Bz]}),n})();var N=s(8531),Y=s(1679);let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez,I,i.UX,N.q,u.JF,Y.ii,i.u5]]}),n})()}}]);