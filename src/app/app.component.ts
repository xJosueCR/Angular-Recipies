import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title: string = environment.title

  constructor(private authService: AuthService){

  }
  ngOnInit(): void {
    this.authService.autoLogin()
  }

}
