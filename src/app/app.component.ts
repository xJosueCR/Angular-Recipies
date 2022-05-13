import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeLink: string = 'recipies';
  onButtonSelected(selectedButton: string){
    this.activeLink = selectedButton
  }
}
