import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService, private shoppingService: ShoppingService) { }

  ngOnInit(): void {

  }
  onToShopping() {
    this.shoppingService.addNewIngredients(this.recipe.ingredients)
  }

}
