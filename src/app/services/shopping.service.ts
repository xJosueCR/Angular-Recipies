import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingService {
    ingredientAdded = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5)
    ]
    constructor() { }

    getIngredients(): Ingredient[] {
        return this.ingredients.slice() // just a copy of ingredients
    }
    onAddIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientAdded.emit(this.ingredients.slice())
    }

    addNewIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientAdded.emit(this.ingredients.slice())
    }
}