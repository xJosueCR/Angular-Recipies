import { Component, OnInit, Output,EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userSubcription: Subscription
  isAuthenticated: boolean = false
  constructor(private storageService: StorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSubcription = this.authService.user.subscribe(user =>{
      this.isAuthenticated = !!user
      console.log(!user)
      console.log(!!user)
    })
  }
  
  onSaveData(){
    this.storageService.storeRecipes()
  }
  onFetchData(){
    this.storageService.fetchRecipes().subscribe()
  }
  onLogout(){
    this.authService.logout()
  }
  ngOnDestroy(): void {
    this.userSubcription.unsubscribe()
  }
}
