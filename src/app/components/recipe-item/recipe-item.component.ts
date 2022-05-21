import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  public recipe: Recipe
  @Input() index: number
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
  onSelectedRecipie(recipeName: string){
    this.recipeService.recipeSelected.emit(this.recipe)
  }
}
