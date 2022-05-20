import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => this.selectedRecipe = recipe)
  }

}
