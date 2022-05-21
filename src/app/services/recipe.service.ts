import { EventEmitter } from "@angular/core"
import { Ingredient } from "../models/ingredient.model";
import { Recipe } from "../models/recipe.model"

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('French Pasta',
            'Delicous french pasta for launch',
            `https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&webp=true&resize=300,272`,
            [
                new Ingredient('Garlig', 5),
                new Ingredient('Lettuce', 1)
            ]),
        new Recipe('Soup',
            'Soup for everyone',
            `https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&webp=true&resize=300,272`,
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Onions', 2)

            ])
    ]

    constructor() {

    }
    getRecipes() {
        return this.recipes.slice()
    }
}