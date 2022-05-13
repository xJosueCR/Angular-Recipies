import { Recipe } from "../models/recipe.model"

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test', 'Description', `https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&webp=true&resize=300,272`),
        new Recipe('Test2', 'Description', `https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&webp=true&resize=300,272`)
    ]

    constructor(){

    }
    getRecipes(){
        return this.recipes.slice()
    }
}