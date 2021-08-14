import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  clientPrinciple$: Observable<any>;

  constructor(private httpClient: HttpClient ) { 
    this.clientPrinciple$ = this.httpClient.get('/.auth/me');
  }
}
