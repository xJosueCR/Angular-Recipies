import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  recipeSubscription: Subscription
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
   this.recipeSubscription = this.recipeService.recipeSelected.subscribe((recipe: Recipe) => this.selectedRecipe = recipe)
  }
  ngOnDestroy(): void {
      this.recipeSubscription.unsubscribe()
  }

}
