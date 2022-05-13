import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef
  @Output() addedIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.addedIngredient.emit({
      name: this.nameInput.nativeElement.value,
      amount:this.amountInput.nativeElement.value
    })
  }
}
