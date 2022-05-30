import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
  }
  
  onSaveData(){
    this.storageService.storeRecipes()
  }
  onFetchData(){
    this.storageService.fetchRecipes().subscribe()
  }
}
