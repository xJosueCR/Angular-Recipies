import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../models/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingService {
    ingredientAdded = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5)
    ]
    ingredientSelected = new Subject<number>()
    constructor() { }

    getIngredients(): Ingredient[] {
        return this.ingredients.slice() // just a copy of ingredients
    }
    onAddIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientAdded.next(this.ingredients.slice())
    }

    addNewIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientAdded.next(this.ingredients.slice())
    }

    onIngredientSelected(id: number){
        this.ingredientSelected.next(id)
    }

    getIngredientByIndex(index: number){
        return this.ingredients[index]
    }

    deleteItem(deleteIndex: number){
        this.ingredients.splice(deleteIndex, 1)
        this.ingredientAdded.next(this.ingredients.slice())
    }

    updateIngredient(index: number, ingredient: Ingredient){
        this.ingredients[index] = ingredient
        this.ingredientAdded.next(this.ingredients.slice())
    }
}