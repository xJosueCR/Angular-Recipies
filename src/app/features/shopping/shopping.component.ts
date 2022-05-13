import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5)
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
  onAddIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
  }
}
