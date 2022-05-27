import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[]
  recipesSubcription: Subscription

  constructor(private recipeService: RecipeService) {
      this.recipes = this.recipeService.getRecipes()
   }

  ngOnInit(): void {
    this.recipesSubcription = this.recipeService.recipesObservable.subscribe((recipes: Recipe[])=>{
      this.recipes = recipes
    })
  }
  ngOnDestroy(): void {
      this.recipesSubcription.unsubscribe()
  }

}
