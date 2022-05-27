import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  id: number
  recipeSubscription: Subscription
  constructor(private recipeService: RecipeService, 
            private shoppingService: ShoppingService, 
            private route: ActivatedRoute,
            private router: Router) {

  }

  ngOnInit(): void {
    this.recipeSubscription = this.route.params.subscribe((params: Params)=> {
      this.id = params['id']
      this.recipe = this.recipeService.getOneRecipie(this.id)
    })

  }
  onToShopping() {
    this.shoppingService.addNewIngredients(this.recipe.ingredients)
  }
  onToEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['../'])
  }
  ngOnDestroy(): void {
      this.recipeSubscription.unsubscribe()
  }
}
