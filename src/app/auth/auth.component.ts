import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ViewChild('form') authForm: NgForm
  isLoginMode: boolean = true
  isLoading: boolean = false
  error: string = null


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }
  
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode
  }
  onSubmit(){
    if(!this.authForm.valid){
      return
    }
    const email = this.authForm.value.email
    const password = this.authForm.value.password

    this.isLoading = true

    let authObservable: Observable<AuthResponseData>
    if(this.isLoginMode){
      authObservable = this.authService.login(email, password)
    } else {
     authObservable = this.authService.signup(email, password)
    }

    authObservable.subscribe(data => {
      console.log(data)
      this.isLoading = false
      this.router.navigate(['/recipes'])
    }, errorMessage => {
      console.log(errorMessage)
      this.error = errorMessage
      this.isLoading = false
      
    })
    this.authForm.reset()
  }

}
