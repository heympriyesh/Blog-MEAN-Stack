"use strict";(self.webpackChunkblogapp=self.webpackChunkblogapp||[]).push([[381],{381:(T,w,a)=>{a.d(w,{au:()=>_,Qd:()=>D,EO:()=>H});var i=a(2680),t=a(7716),P=a(9075),p=a(1095);let _=(()=>{class r{constructor(o,e,l){this.dialogRef=o,this.data=e,this.sanitizer=l}ngOnInit(){}onNoClick(){this.dialogRef.close()}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(i.so),t.Y36(i.WI),t.Y36(P.H7))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-dialog"]],decls:9,vars:3,consts:[["mat-dialog-title","",1,"d-flex","justify-content-center"],["mat-dialog-content","",1,"mat-typography"],[1,"dialog-image"],["alt","",3,"src"],[3,"innerHTML"],["mat-dialog-actions","","align","end"],["mat-button","",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"h1",0),t._uU(1),t.qZA(),t.TgZ(2,"div",1),t._UZ(3,"div",2),t._UZ(4,"img",3),t._UZ(5,"div",4),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"button",6),t.NdJ("click",function(){return e.onNoClick()}),t._uU(8,"Close"),t.qZA(),t.qZA()),2&o&&(t.xp6(1),t.Oqu(e.data.title),t.xp6(3),t.Q6J("src",null==e.data?null:e.data.thumbnailImage,t.LSH),t.xp6(1),t.Q6J("innerHTML",e.sanitizer.bypassSecurityTrustHtml(null==e.data?null:e.data.content),t.oJD))},directives:[i.uh,i.xY,i.H8,p.lW],styles:["*{margin:0;padding:0;height:auto}#passwordChange{display:flex;justify-content:center;flex-direction:column;padding:2px}#passwordChangeAction{display:flex;justify-content:flex-end;align-items:center}.cancel{height:52px!important;padding:8px 30px;outline:blue;margin:10px 20px 10px 0;border-radius:2px;background-color:transparent;border:1px solid #4461d7;color:#4461d7!important}.save{border-radius:2px;background-color:#4461d7;color:#fff;font-size:15px;font-weight:600;margin-right:0!important;padding:5px 30px;width:107px;height:52px!important}.dialog-image{width:70%;height:auto}img{height:100%;width:100%}\n"],encapsulation:2}),r})();var n=a(3679),m=a(8259),h=a.n(m),f=a(954),u=a(8583),g=a(8295),s=a(9983),d=a(6627);function C(r,c){if(1&r&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&r){const o=t.oxw();t.xp6(1),t.Oqu(o.error)}}function Z(r,c){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"Required Field "),t.qZA())}function b(r,c){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"Required Field "),t.qZA())}function x(r,c){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"Not Same "),t.qZA())}function U(r,c){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"Required Field "),t.qZA())}let D=(()=>{class r{constructor(o,e,l,v){this.dialogRef=o,this.data=e,this._fb=l,this.dataService=v,this.currentPasswordHide=!0,this.newPasswordHide=!0,this.confirmPasswordHide=!0,this.error="",this.showError=!1,this.changePassword=this._fb.group({currentPassword:["",n.kI.required],newPassword:["",n.kI.required],confirmPassword:["",n.kI.required]})}savePassword(){console.log("valid",this.changePassword.value),this.changePassword.valid&&this.dataService.updatePassword(this.changePassword.value).subscribe(o=>{h().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:"success",title:"Password Update successfully"}),this.dialogRef.close(this.changePassword.value)},({error:o})=>{console.log("the value of err",o),h().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:"error",title:`${o.message}`}),this.dialogRef.close(this.changePassword.value)})}get newPassword(){return this.changePassword.value.newPassword}get confirmPassword(){return this.changePassword.value.confirmPassword}ngOnInit(){}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(i.so),t.Y36(i.WI),t.Y36(n.qu),t.Y36(f.D))},r.\u0275cmp=t.Xpm({type:r,selectors:[["password-change"]],decls:32,vars:13,consts:[["mat-dialog-title","",1,"d-flex","justify-content-center"],[4,"ngIf"],["id","passwordChange",3,"formGroup"],["appearance","outline",1,"input"],["matInput","","formControlName","currentPassword",3,"type"],["matSuffix","",3,"click"],["matInput","","formControlName","newPassword",3,"type"],["matInput","","formControlName","confirmPassword",3,"type"],["id","passwordChangeAction"],["mat-raised-button","",1,"save",3,"click"],["mat-raised-button","",1,"cancel",3,"mat-dialog-close"]],template:function(o,e){1&o&&(t.TgZ(0,"h1",0),t._uU(1,"Change Password"),t.qZA(),t.TgZ(2,"mat-dialog-content"),t.YNc(3,C,2,1,"mat-error",1),t.TgZ(4,"form",2),t.TgZ(5,"mat-form-field",3),t.TgZ(6,"mat-label"),t._uU(7,"Current Password*"),t.qZA(),t._UZ(8,"input",4),t.TgZ(9,"mat-icon",5),t.NdJ("click",function(){return e.currentPasswordHide=!e.currentPasswordHide}),t._uU(10),t.qZA(),t.YNc(11,Z,2,0,"mat-error",1),t.qZA(),t.TgZ(12,"mat-form-field",3),t.TgZ(13,"mat-label"),t._uU(14,"New Password*"),t.qZA(),t._UZ(15,"input",6),t.TgZ(16,"mat-icon",5),t.NdJ("click",function(){return e.newPasswordHide=!e.newPasswordHide}),t._uU(17),t.qZA(),t.YNc(18,b,2,0,"mat-error",1),t.YNc(19,x,2,0,"mat-error",1),t.qZA(),t.TgZ(20,"mat-form-field",3),t.TgZ(21,"mat-label"),t._uU(22,"Confirm Password*"),t.qZA(),t._UZ(23,"input",7),t.TgZ(24,"mat-icon",5),t.NdJ("click",function(){return e.confirmPasswordHide=!e.confirmPasswordHide}),t._uU(25),t.qZA(),t.YNc(26,U,2,0,"mat-error",1),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"mat-dialog-actions",8),t.TgZ(28,"button",9),t.NdJ("click",function(){return e.savePassword()}),t._uU(29,"Save"),t.qZA(),t.TgZ(30,"button",10),t._uU(31," Cancel "),t.qZA(),t.qZA()),2&o&&(t.xp6(3),t.Q6J("ngIf",e.showError),t.xp6(1),t.Q6J("formGroup",e.changePassword),t.xp6(4),t.Q6J("type",e.currentPasswordHide?"password":"text"),t.xp6(2),t.Oqu(e.currentPasswordHide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",(null==e.changePassword.controls.currentPassword||null==e.changePassword.controls.currentPassword.errors?null:e.changePassword.controls.currentPassword.errors.required)&&e.changePassword.controls.currentPassword.touched),t.xp6(4),t.Q6J("type",e.newPasswordHide?"password":"text"),t.xp6(2),t.Oqu(e.newPasswordHide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",(null==e.changePassword.controls.newPassword||null==e.changePassword.controls.newPassword.errors?null:e.changePassword.controls.newPassword.errors.required)&&e.changePassword.controls.newPassword.touched),t.xp6(1),t.Q6J("ngIf",e.confirmPassword!==e.newPassword),t.xp6(4),t.Q6J("type",e.confirmPasswordHide?"password":"text"),t.xp6(2),t.Oqu(e.confirmPasswordHide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",(null==e.changePassword.controls.confirmPassword||null==e.changePassword.controls.confirmPassword.errors?null:e.changePassword.controls.confirmPassword.errors.required)&&e.changePassword.controls.confirmPassword.touched),t.xp6(4),t.Q6J("mat-dialog-close",!0))},directives:[i.uh,i.xY,u.O5,n._Y,n.JL,n.sg,g.KE,g.hX,s.Nt,n.Fj,n.JJ,n.u,d.Hw,g.R9,i.H8,p.lW,i.ZT,g.TO],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;height:auto}#passwordChange[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;padding:2px}#passwordChangeAction[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.cancel[_ngcontent-%COMP%]{height:52px!important;padding:8px 30px;outline:blue;margin:10px 20px 10px 0;border-radius:2px;background-color:transparent;border:1px solid #4461d7;color:#4461d7!important}.save[_ngcontent-%COMP%]{border-radius:2px;background-color:#4461d7;color:#fff;font-size:15px;font-weight:600;margin-right:0!important;padding:5px 30px;width:107px;height:52px!important}.dialog-image[_ngcontent-%COMP%]{width:70%;height:auto}img[_ngcontent-%COMP%]{height:100%;width:100%}"]}),r})();var y=a(4655);let H=(()=>{class r{constructor(o,e,l,v,A){this.dialogRef=o,this.data=e,this._fb=l,this.dataService=v,this.router=A,this.currentPasswordHide=!0,this.newPasswordHide=!0,this.confirmPasswordHide=!0,o.disableClose=!0,this.changePassword=this._fb.group({newPassword:["",n.kI.required],confirmPassword:["",n.kI.required]})}ngOnInit(){console.log("the value of data",this.data)}savePassword(){this.changePassword.valid?this.dataService.resetPassword(this.changePassword.value,this.data.token).subscribe(o=>{h().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:"success",title:"Password Update successfully"}),this.dialogRef.close(!0)},({error:o})=>{h().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:"error",title:`${o.message}`})}):h().fire({icon:"error",title:"Oops...",text:"Invalid Form"})}closeModal(){this.dialogRef.close(!1),console.log("clicked")}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(i.so),t.Y36(i.WI),t.Y36(n.qu),t.Y36(f.D),t.Y36(y.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["reset-password"]],decls:21,vars:5,consts:[["mat-dialog-title","",1,"d-flex","justify-content-center"],["id","passwordChange",3,"formGroup"],["appearance","outline",1,"input"],["matInput","","formControlName","newPassword",3,"type"],["matSuffix","",3,"click"],["matInput","","formControlName","confirmPassword",3,"type"],["id","passwordChangeAction"],["mat-raised-button","",1,"save",3,"click"],["mat-raised-button","",1,"cancel",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"h1",0),t._uU(1,"Change Password"),t.qZA(),t.TgZ(2,"mat-dialog-content"),t.TgZ(3,"form",1),t.TgZ(4,"mat-form-field",2),t.TgZ(5,"mat-label"),t._uU(6,"New Password*"),t.qZA(),t._UZ(7,"input",3),t.TgZ(8,"mat-icon",4),t.NdJ("click",function(){return e.newPasswordHide=!e.newPasswordHide}),t._uU(9),t.qZA(),t.qZA(),t.TgZ(10,"mat-form-field",2),t.TgZ(11,"mat-label"),t._uU(12,"Confirm Password*"),t.qZA(),t._UZ(13,"input",5),t.TgZ(14,"mat-icon",4),t.NdJ("click",function(){return e.confirmPasswordHide=!e.confirmPasswordHide}),t._uU(15),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"mat-dialog-actions",6),t.TgZ(17,"button",7),t.NdJ("click",function(){return e.savePassword()}),t._uU(18,"Save"),t.qZA(),t.TgZ(19,"button",8),t.NdJ("click",function(){return e.closeModal()}),t._uU(20," Cancel "),t.qZA(),t.qZA()),2&o&&(t.xp6(3),t.Q6J("formGroup",e.changePassword),t.xp6(4),t.Q6J("type",e.newPasswordHide?"password":"text"),t.xp6(2),t.Oqu(e.newPasswordHide?"visibility_off":"visibility"),t.xp6(4),t.Q6J("type",e.confirmPasswordHide?"password":"text"),t.xp6(2),t.Oqu(e.confirmPasswordHide?"visibility_off":"visibility"))},directives:[i.uh,i.xY,n._Y,n.JL,n.sg,g.KE,g.hX,s.Nt,n.Fj,n.JJ,n.u,d.Hw,g.R9,i.H8,p.lW],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;height:auto}#passwordChange[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;padding:2px}#passwordChangeAction[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.cancel[_ngcontent-%COMP%]{height:52px!important;padding:8px 30px;outline:blue;margin:10px 20px 10px 0;border-radius:2px;background-color:transparent;border:1px solid #4461d7;color:#4461d7!important}.save[_ngcontent-%COMP%]{border-radius:2px;background-color:#4461d7;color:#fff;font-size:15px;font-weight:600;margin-right:0!important;padding:5px 30px;width:107px;height:52px!important}.dialog-image[_ngcontent-%COMP%]{width:70%;height:auto}img[_ngcontent-%COMP%]{height:100%;width:100%}"]}),r})()},954:(T,w,a)=>{a.d(w,{D:()=>f});var i=a(1841),t=a(6215),P=a(5304),p=a(2340),_=a(8259),n=a.n(_),m=a(7716),h=a(4655);let f=(()=>{class u{constructor(s,d){this.http=s,this.router=d,this.baseUrl=p.N.baseUrl,this.isLoggedIn=new t.X(!1),this.handleError=C=>{switch(C.status){case 400:console.log(400);break;case 401:console.log(401),localStorage.getItem("token")&&(localStorage.clear(),this.router.navigate(["/creators"]));break;case 500:console.log(500);break;case 503:console.log(503)}}}setHeader(){if(localStorage.getItem("token")){let s=localStorage.getItem("token");return{headers:new i.WM({Authorization:`Bearer ${s}`})}}return{headers:new i.WM({})}}setLogIn(){this.isLoggedIn.next(!0)}logOut(){localStorage.removeItem("token"),this.isLoggedIn.next(!1),this.router.navigateByUrl("/"),n().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:"success",title:"Logout successfully"})}checkLogin(){localStorage.getItem("token")?this.isLoggedIn.next(!0):this.isLoggedIn.next(!1)}forgotPassword(s){return this.http.post(`${this.baseUrl}/auth/forgotPassowrd`,s,this.setHeader())}updatePassword(s){return this.http.put(`${this.baseUrl}/auth/upate-password`,s,this.setHeader())}resetPassword(s,d){return this.http.put(`${this.baseUrl}/auth/resetpassword/${d}`,s,this.setHeader())}getBlogData(){return this.http.get(`${this.baseUrl}/blog`,this.setHeader()).pipe((0,P.K)(this.handleError))}getSingleBlog(s){return this.http.get(`${this.baseUrl}/blog/${s}`)}saveBlogData(s){return this.http.post(`${this.baseUrl}/blog`,s,this.setHeader())}myBlog(){return this.http.get(`${this.baseUrl}/auth/myBlogs`,this.setHeader())}deleteBlog(s){return this.http.delete(`${this.baseUrl}/blog/${s}`,this.setHeader())}updateBlog(s,d){return this.http.put(`${this.baseUrl}/blog/${d}`,s,this.setHeader())}getMe(){return this.http.get(`${this.baseUrl}/auth/getMe`,this.setHeader())}updateUserDetail(s){return this.http.put(`${this.baseUrl}/auth/update-details`,s,this.setHeader())}saveAsDraft(s){return this.http.post(`${this.baseUrl}/draft/save-draft`,s,this.setHeader())}getDraftById(s){return this.http.get(`${this.baseUrl}/draft/get-single-draft/${s}`,this.setHeader())}getAllDraft(){return this.http.get(`${this.baseUrl}/draft/get-all-draft`,this.setHeader())}updateDraft(s,d){return this.http.put(`${this.baseUrl}/draft/update-draft/${d}`,s,this.setHeader())}deleteDraft(s){return this.http.delete(`${this.baseUrl}/draft/delete-draft/${s}`,this.setHeader())}publishDraft(s,d){return this.http.post(`${this.baseUrl}/draft/publish-draft/${s}`,d,this.setHeader())}}return u.\u0275fac=function(s){return new(s||u)(m.LFG(i.eN),m.LFG(h.F0))},u.\u0275prov=m.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);