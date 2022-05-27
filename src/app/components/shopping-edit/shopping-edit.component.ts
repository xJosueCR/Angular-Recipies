import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingForm', {static: false}) shoppingForm: NgForm
  selectedIngredient: Ingredient
  ingredientSubscription: Subscription
  editItemIndex: number
  editMode = false

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredientSubscription = this.shoppingService.ingredientSelected.subscribe((index: number)=> {
      this.editMode = true
      this.editItemIndex =index
      this.selectedIngredient = this.shoppingService.getIngredientByIndex(index)
      this.loadIngredientData()
    })
    
  }
  onSubmit() {
    const ingredient = new Ingredient(this.shoppingForm.value.name, this.shoppingForm.value.amount)
    this.editMode ? 
          this.shoppingService.updateIngredient(this.editItemIndex, ingredient) :
          this.shoppingService.onAddIngredient(ingredient)
    this.onClear()
  }
  onClear(): void{
    this.shoppingForm.reset()
    this.editMode = false
  }
  private loadIngredientData(){
    this.shoppingForm.setValue({...this.selectedIngredient})
  }

  onDeleteItem(){
    this.shoppingService.deleteItem(this.editItemIndex)
    this.selectedIngredient = null
    this.onClear()
  }
  ngOnDestroy(): void {
      this.ingredientSubscription.unsubscribe()
  }
}
