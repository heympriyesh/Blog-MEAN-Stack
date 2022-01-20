import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = environment.baseUrl;
  public isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Add Token to request
   */
  setHeader(): any {
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      let headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return { headers: headers };
    } else {
      let headers = new HttpHeaders({});
      return { headers: headers };
    }
  }

  private handleError = (error: HttpErrorResponse | any): any => {
    switch (error.status) {
      case 400:
        console.log(400);
        break;
      case 401:
        console.log(401);
        let temp = localStorage.getItem('token');
        if (temp) {
          localStorage.clear();
          this.router.navigate(['/creators']);
        }
        break;
      case 500:
        console.log(500);
        break;
      case 503:
        console.log(503);
        break;
      // case 429:
      //
      //   console.log(0);
      //   break;
      case 429:
    }
  };

  setLogIn() {
    this.isLoggedIn.next(true);
  }

  logOut() {
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
    this.router.navigateByUrl('/');
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: 'success',
      title: 'Logout successfully',
    });
  }

  checkLogin() {
    if (localStorage.getItem('token')) {
      this.isLoggedIn.next(true);
    } else {
      this.isLoggedIn.next(false);
    }
  }

  forgotPassword(email: any) {
    return this.http.post(
      `${this.baseUrl}/auth/forgotPassowrd`,
      email,
      this.setHeader()
    );
  }

  updatePassword(data: any) {
    return this.http.put(
      `${this.baseUrl}/auth/upate-password`,
      data,
      this.setHeader()
    );
  }

  resetPassword(data: any, id: any) {
    return this.http.put(
      `${this.baseUrl}/auth/resetpassword/${id}`,
      data,
      this.setHeader()
    );
  }

  /**
   * Get All Blogs
   */
  getBlogData() {
    return this.http
      .get(`${this.baseUrl}/blog`, this.setHeader())
      .pipe(catchError(this.handleError));
  }

  /*
  Get Single Blog
   */

  getSingleBlog(id: any) {
    return this.http.get(`${this.baseUrl}/blog/${id}`);
  }

  saveBlogData(data: any) {
    return this.http.post(`${this.baseUrl}/blog`, data, this.setHeader());
  }

  myBlog() {
    return this.http.get(`${this.baseUrl}/auth/myBlogs`, this.setHeader());
  }

  deleteBlog(id: any) {
    return this.http.delete(`${this.baseUrl}/blog/${id}`, this.setHeader());
  }

  updateBlog(data: any, id: any) {
    return this.http.put(`${this.baseUrl}/blog/${id}`, data, this.setHeader());
  }

  getMe() {
    return this.http.get(`${this.baseUrl}/auth/getMe`, this.setHeader());
  }

  updateUserDetail(data: any) {
    return this.http.put(
      `${this.baseUrl}/auth/update-details`,
      data,
      this.setHeader()
    );
  }

  /**
   * Draft Routes Starts Here
   *
   */

  saveAsDraft(data: any) {
    return this.http.post(
      `${this.baseUrl}/draft/save-draft`,
      data,
      this.setHeader()
    );
  }

  getDraftById(id: any) {
    return this.http.get(
      `${this.baseUrl}/draft/get-single-draft/${id}`,
      this.setHeader()
    );
  }

  getAllDraft() {
    return this.http.get(
      `${this.baseUrl}/draft/get-all-draft`,
      this.setHeader()
    );
  }

  updateDraft(data: any, id: any) {
    return this.http.put(
      `${this.baseUrl}/draft/update-draft/${id}`,
      data,
      this.setHeader()
    );
  }

  deleteDraft(id: string) {
    return this.http.delete(
      `${this.baseUrl}/draft/delete-draft/${id}`,
      this.setHeader()
    );
  }

  publishDraft(id: any, data?: any) {
    return this.http.post(
      `${this.baseUrl}/draft/publish-draft/${id}`,
      data,
      this.setHeader()
    );
  }

  //Drafts Routes Ends Here
}
