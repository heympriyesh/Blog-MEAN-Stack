import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface IDeactivateGuard {
  canExit: () => boolean | Promise<boolean> | Observable<boolean>;
}

export class DeactivateServiceGuard implements CanDeactivate<IDeactivateGuard> {
  canDeactivate(
    component: IDeactivateGuard,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return component.canExit();
    // throw new Error('Method not implemented.');
  }
}
