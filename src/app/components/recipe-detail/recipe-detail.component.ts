import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number
  constructor(private recipeService: RecipeService, 
            private shoppingService: ShoppingService, 
            private route: ActivatedRoute,
            private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=> {
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
}
