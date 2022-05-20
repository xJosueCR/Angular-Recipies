import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[]

  constructor(private shoppingService: ShoppingService) {

  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients()
    this.shoppingService.ingredientAdded.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients
    })
  }
}
