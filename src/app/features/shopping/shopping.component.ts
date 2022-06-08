import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from 'src/app/logging.service';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]
  private ingredientSubscription: Subscription
  constructor(private shoppingService: ShoppingService, private loggingService: LoggingService) {

  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients()
    this.ingredientSubscription = this.shoppingService.ingredientAdded.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients
    })
    this.loggingService.printLog('Hello from ShoppingList component ngOnInit')
  }
  ngOnDestroy(): void {
      this.ingredientSubscription.unsubscribe()
  }
  onEditIngredient(id: number): void{
    this.shoppingService.onIngredientSelected(id)
  }
}
