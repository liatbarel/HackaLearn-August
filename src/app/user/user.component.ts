import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  clientPrinciple$ = this.authService.clientPrinciple$;
  helloMessage$!: Observable<any>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getHello(name: string){
    this.helloMessage$ = this.authService.getHelloMessage(name);
  }
}
