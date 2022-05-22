import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  constructor(private shoppingService: ShoppingService) {

  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients()
    this.ingredientSubscription = this.shoppingService.ingredientAdded.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients
    })
  }
  ngOnDestroy(): void {
      this.ingredientSubscription.unsubscribe()
  }
}
