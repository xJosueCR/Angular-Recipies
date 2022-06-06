import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../models/ingredient.model";
import { Recipe } from "../models/recipe.model"

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    recipeSelected = new Subject<Recipe>();
    recipesObservable = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('French Pasta',
    //         'Delicous french pasta for launch',
    //         `https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&webp=true&resize=300,272`,
    //         [
    //             new Ingredient('Garlig', 5),
    //             new Ingredient('Lettuce', 1)
    //         ]),
    //     new Recipe('Soup',
    //         'Soup for everyone',
    //         `https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&webp=true&resize=300,272`,
    //         [
    //             new Ingredient('Chicken', 1),
    //             new Ingredient('Onions', 2)

    //         ])
    // ]
    private recipes: Recipe[] = []

    constructor() {

    }
    getRecipes() {
        return this.recipes.slice()
    }
    getOneRecipie(id: number): Recipe{
        return this.recipes[id];
    }
    addRecipe(recipe: Recipe): number{
        this.recipes.push(recipe)
        this.notifyObservers()
        return (this.recipes.length -1)
    }
    updateRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe
        this.notifyObservers()
    }
    deleteRecipe(index: number){
        this.recipes.splice(index, 1)
        this.notifyObservers()
    }
    updateRecipes(recipes: Recipe[]) {
        this.recipes = recipes
        this.notifyObservers()
    }
    private notifyObservers(){
        this.recipesObservable.next(this.getRecipes())
    }
}