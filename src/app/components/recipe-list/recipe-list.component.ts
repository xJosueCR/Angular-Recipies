import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  constructor(private recipeService: RecipeService) {
      this.recipes = this.recipeService.getRecipes()
   }

  ngOnInit(): void {
  }
  onRecipeSelected(currentRecipie: Recipe){
    this.recipeWasSelected.emit(currentRecipie)
  }

}
