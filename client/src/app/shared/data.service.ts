import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {}

  setLogIn() {}
}
