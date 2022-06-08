import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { AlertComponent } from '../layout/alert/alert.component';

import { PlaceholderDirective } from '../directives/helpers/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  @ViewChild('form') authForm: NgForm
  isLoginMode: boolean = true
  isLoading: boolean = false
  error: string = null
  @ViewChild(PlaceholderDirective, {static: true}) alertHost : PlaceholderDirective
  closeSubscription: Subscription

  constructor(private authService: AuthService, private router: Router, private componentFactory: ComponentFactoryResolver) { }

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
      this.isLoading = false
      this.router.navigate(['/recipes'])
    }, errorMessage => {
     
      this.error = errorMessage
      this.showErrorAlert(errorMessage)
      this.isLoading = false
      
    })
    this.authForm.reset()
  }
  onHandleError(){
    this.error = null
  }

  private showErrorAlert(message: string){
    // const alertComponentFactory = this.componentFactory.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef
    hostViewContainerRef.clear()
    
    const componentRef = hostViewContainerRef.createComponent(AlertComponent)
    componentRef.instance.message = message
    this.closeSubscription = componentRef.instance.close.subscribe(() =>{
      this.closeSubscription.unsubscribe()
      hostViewContainerRef.clear()
    })
  }
  ngOnDestroy(): void {
    if(this.closeSubscription){
      this.closeSubscription.unsubscribe()
    }
  }
}
