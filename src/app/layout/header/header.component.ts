import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('buttonClicked') buttonClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onButtonClicked(button: string){
    this.buttonClicked.emit(button)
  }
}
