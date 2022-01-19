import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.isLoggedIn();
    // throw new Error('Method not implemented.');
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      Swal.fire({
        icon: 'error',
        title: 'Not Authorize To Access This Route',
        showConfirmButton: false,
        timer: 2000,
      });
      return false;
    }
  }
}
